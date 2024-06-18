"use client";

import { Amplify } from "aws-amplify";
import config from "../amplify_outputs.json";

Amplify.configure(config);

import "./App.css";
import { generateClient } from "aws-amplify/api";
import type { Schema } from "../amplify/data/resource";
import { getUrl } from "aws-amplify/storage";
import { useState } from "react";

const client = generateClient<Schema>();

type PollyReturnType = Schema["convertTextToSpeech"]["returnType"];

function App() {
  const [src, setSrc] = useState("");
  const [file, setFile] = useState<PollyReturnType>("");
  return (
    <div className="flex flex-col">
      <button
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
      </button>
      <a href={src}>Get audio file</a>
    </div>
  );
}

export default App;
