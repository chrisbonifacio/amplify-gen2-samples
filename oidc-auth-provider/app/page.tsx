"use client";

// import { getSession } from "@auth0/nextjs-auth0";

import { Amplify } from "aws-amplify";
import amplify_outputs from "@/amplify_outputs.json";

import type { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";

import { TokenProvider, decodeJWT } from "aws-amplify/auth";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

function ProfileClient() {
  const [client, setClient] = useState<any>(null);
  const { getAccessTokenSilently, getIdTokenClaims } = useAuth0();
  const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);

  const listTodos = async () => {
    const { data, errors } = await client?.models?.Todo.list();
    setTodos(data);
  };

  useEffect(() => {
    const myTokenProvider: TokenProvider = {
      async getTokens({ forceRefresh } = {}) {
        if (forceRefresh) {
          // try to obtain new tokens if possible
        }

        const accessToken = await getAccessTokenSilently();
        const idToken = await getIdTokenClaims();

        if (accessToken && idToken) {
          return {
            accessToken: decodeJWT(accessToken),
            idToken: decodeJWT(idToken?.__raw),
          };
        } else {
          throw new Error("No valid session found");
        }
      },
    };

    Amplify.configure(amplify_outputs, {
      Auth: {
        tokenProvider: myTokenProvider,
      },
    });

    if (!client) {
      setClient(generateClient<Schema>());
    }
  }, []);

  return (
    <div>
      <a id="login" className="mr-4" href="/api/auth/login">
        Login
      </a>
      <a id="logout" href="/api/auth/logout">
        Logout
      </a>
      <button onClick={listTodos}>List Todos</button>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <p>{todo.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileClient;
