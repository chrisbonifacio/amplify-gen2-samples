import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { Schema } from "../data/resource";
import { env } from "$amplify/env/data-access"; // replace with your function name
import { createTodo } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_AUTH_USERPOOL_ID as string, // replace with your defineData name
        region: env.AWS_REGION as string,
        defaultAuthMode: "identityPool",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID as string,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY as string,
            sessionToken: env.AWS_SESSION_TOKEN as string,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const client = generateClient<Schema>();

export const handler = async (event: any) => {
  await client.graphql({
    query: createTodo,
    variables: {
      input: {
        name: "My first todo",
        description: "This is my first todo",
      },
    },
  });

  const todos = await client.graphql({
    query: listTodos,
  });

  return todos;
};
