"use client";

import { Amplify } from "aws-amplify";
import config from "../amplify_outputs.json";

Amplify.configure(config);

import "./App.css";
import { generateClient } from "aws-amplify/api";
import { getUrl } from "aws-amplify/storage";
import { useState } from "react";

import { type Schema } from "@/amplify/data/resource";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/data";
import outputs from "@/amplify_outputs.json";
import { cookies } from "next/headers";
import { cookieBasedClient } from "@/utils/amplifyServerUtils";

const fetchTodos = async () => {
  const { data: todos, errors } = await cookieBasedClient.models.Todo.list();

  if (!errors) {
    return todos;
  }
};
function App() {
  return (
    <div className="flex flex-col">
      {/* <button
        onClick={async () => {
          const { data, errors } = await client.mutations.convertTextToSpeech({
            text: "Hello World!",
          });

          if (!errors && data) {
            setFile(data);
          } else {
            console.log(errors);
          }
        }}
      >
        Synth
      </button>
      <button
        onClick={async () => {
          const res = await getUrl({
            path: "public/" + file,
          });

          setSrc(res.url.toString());
        }}
      >
        Fetch audio
      </button> */}
      {/* <a href={src}>Get audio file</a> */}
    </div>
  );
}

export default App;
