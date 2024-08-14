"use client";

import "./globals.css";

import { Amplify } from "aws-amplify";
import aws_outputs from "@/amplify_outputs.json";
Amplify.configure(aws_outputs);

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
