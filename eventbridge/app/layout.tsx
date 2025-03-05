"use client";
import { Amplify } from "aws-amplify";
import config from "@/amplify_outputs.json";

Amplify.configure(config, { ssr: true });

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
