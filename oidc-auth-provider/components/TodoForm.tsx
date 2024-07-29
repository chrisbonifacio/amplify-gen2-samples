"use client";

import { client } from "@/utils/client";

const TodoForm = ({ accessToken }: { accessToken: string }) => {
  const createTodo = async () => {
    const { data, errors } = await client.models.Todo.create(
      {
        content: window.prompt("Enter your todo"),
      },
      { authMode: "oidc", authToken: accessToken }
    );
  };
  return <button onClick={createTodo}>Create Todo</button>;
};

export default TodoForm;
