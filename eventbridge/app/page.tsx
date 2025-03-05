"use client";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import {
  WithAuthenticatorProps,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect } from "react";
import { fetchAuthSession } from "aws-amplify/auth";

const client = generateClient<Schema>();

function Home({ signOut }: WithAuthenticatorProps) {
  const publishToEventBridge = async () => {
    const userId = (await fetchAuthSession()).userSub;

    if (!userId) {
      throw new Error("User ID not found");
    }

    await client.mutations.publishOrderToEventBridge({
      status: "SHIPPED",
      message: "Order has been shipped",
      customerId: userId,
    });
  };

  useEffect(() => {
    const sub = client.subscriptions.onOrderFromEventBridge().subscribe({
      next: (data) => {
        console.log(data);
      },
    });

    return () => sub.unsubscribe();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={signOut}>Sign Out</button>
      <button onClick={publishToEventBridge}>Publish to EventBridge</button>
    </main>
  );
}

export default withAuthenticator(Home);
