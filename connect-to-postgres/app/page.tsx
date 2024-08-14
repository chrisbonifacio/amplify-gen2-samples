"use client";

import { useEffect, useState } from "react";

import "aws-amplify/auth/enable-oauth-listener";
import {
  AuthUser,
  fetchAuthSession,
  fetchUserAttributes,
  getCurrentUser,
  signInWithRedirect,
} from "aws-amplify/auth";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { Hub } from "aws-amplify/utils";

const client = generateClient<Schema>({ authMode: "userPool" });

// type Notification = Schema["notifications"]["type"];

function Home() {
  const [user, setUser] = useState<AuthUser>();
  const [notification, setNotification] = useState();

  const createNotification = async () => {
    const { data, errors } = await client.models.Run.create({
      trigger: "test",
    });

    console.log(data);
  };

  const authenticate = async () => {
    try {
      await fetchAuthSession();
      const user = await getCurrentUser();

      setUser(user);
    } catch (error) {
      signInWithRedirect({
        provider: {
          custom: "Auth0SAML",
        },
      });
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  useEffect(() => {
    const subToNotifications = client.subscriptions
      .subscribeToNotificationsByUserId({
        userId: user?.userId ?? "",
      })
      .subscribe({
        next: (data) => {
          setNotification(data);
        },
        error: (error) => console.error(error),
      });

    return () => subToNotifications.unsubscribe();
  }, [user]);

  useEffect(() => {
    const hubsub = Hub.listen("auth", async ({ payload }) => {
      switch (payload.event) {
        case "signInWithRedirect":
          const user = await getCurrentUser();
          const userAttributes = await fetchUserAttributes();
          console.log({ user, userAttributes });
          setUser(user);
          break;
        case "signInWithRedirect_failure":
          // handle sign in failure
          console.log(payload.event);
          break;
        case "customOAuthState":
          const state = payload.data; // this will be customState provided on signInWithRedirect function
          console.log(state);
          break;
      }
    });

    return () => hubsub();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {user ? (
        <>
          Welcome, {user?.username}
          <button onClick={createNotification}>Create Notification</button>
          <div>{notification?.message}</div>
        </>
      ) : null}
    </main>
  );
}

export default Home;
