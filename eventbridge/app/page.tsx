"use client";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import {
  WithAuthenticatorProps,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect } from "react";

const client = generateClient<Schema>();

function Home({ signOut }: WithAuthenticatorProps) {
  const publishToEventBridge = async () => {
    await client.mutations.publishOrderToEventBridge({
      orderId: "123",
      status: "SHIPPED",
      message: "Order has been shipped",
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
