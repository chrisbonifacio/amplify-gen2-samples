"use client";

import { Amplify } from "aws-amplify";
import config from "../amplify_outputs.json";

Amplify.configure(config);

import { type ChangeEvent, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { uploadData } from "aws-amplify/storage";
import { Schema } from "@/amplify/data/resource";
import "./App.css";

// Generating the client
const client = generateClient<Schema>();

type IdentifyTextReturnType = Schema["identifyText"]["returnType"];

function App() {
  // State to hold the recognized text
  const [path, setPath] = useState<string>("");
  const [textData, setTextData] = useState<IdentifyTextReturnType>();

  // Function to handle file upload to S3 bucket
  const handleTranslate = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];

      const s3Path = "public/" + file.name;

      try {
        uploadData({
          path: s3Path,
          data: file,
        });

        setPath(s3Path);
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Function to recognize text from the uploaded image
  const recognizeText = async () => {
    // Identifying text in the uploaded image
    const { data } = await client.queries.identifyText({
      path, // File name
    });
    setTextData(data);
  };

  return (
    <div>
      <h1>Amazon Rekognition Text Recognition</h1>
      <div>
        <input type="file" onChange={handleTranslate} />
        <button onClick={recognizeText}>Recognize Text</button>
        <div>
          <h3>Recognized Text:</h3>
          {textData}
        </div>
      </div>
    </div>
  );
}

export default App;
