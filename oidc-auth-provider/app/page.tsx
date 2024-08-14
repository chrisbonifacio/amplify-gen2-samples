"use client";

// import { getSession } from "@auth0/nextjs-auth0";

import { Amplify } from "aws-amplify";
import amplify_outputs from "@/amplify_outputs.json";

import type { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";

import { TokenProvider, decodeJWT } from "aws-amplify/auth";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const client = generateClient<Schema>();

function ProfileClient() {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    logout,
    loginWithRedirect,
    getAccessTokenSilently,
    getIdTokenClaims,
  } = useAuth0();
  const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);

  const listTodos = async () => {
    const { data, errors } = await client.models.Todo.list();

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
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div className="flex flex-col">
        <div>Hello {user?.name} </div>
        <div>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log out
          </button>
        </div>
        <div>
          <button onClick={listTodos}>Get Todos</button>
        </div>
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>{todo.content}</div>
          ))}
        </div>
      </div>
    );
  } else {
    return <button onClick={() => loginWithRedirect()}>Log in</button>;
  }
}

export default ProfileClient;
