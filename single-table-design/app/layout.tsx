"use client";
import { Amplify } from "aws-amplify";
import amplify_outputs from "@/amplify_outputs.json";

Amplify.configure(amplify_outputs);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
