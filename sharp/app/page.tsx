"use client";

import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { FileUploader } from "@aws-amplify/ui-react-storage";

export default function App() {
  return (
    <Authenticator>
      <main>
        <h1>Upload & Optimize an Image</h1>
        <FileUploader maxFileCount={1} path={"public/"} />
      </main>
    </Authenticator>
  );
}
