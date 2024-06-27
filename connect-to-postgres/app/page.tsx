"use client";

import { Amplify } from "aws-amplify";
import aws_outputs from "@/amplify_outputs.json";
import { generateClient } from "aws-amplify/api";
import { Schema } from "@/amplify/data/resource";
import { useEffect, useState } from "react";

Amplify.configure({ ...aws_outputs });

const client = generateClient<Schema>();

type Post = Schema["posts"]["type"];

export default function Home() {
  const [posts, setPosts] = useState<Post[]>();

  const getPosts = async () => {
    const { data } = await client.models.posts.list();

    console.log(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={getPosts}>List Posts</button>

      <div>
        {posts?.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </main>
  );
}
