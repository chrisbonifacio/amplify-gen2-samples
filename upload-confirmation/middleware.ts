import { type Schema } from "@/amplify/data/resource";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  runWithAmplifyServerContext,
  reqResBasedClient,
} from "@/utils/amplifyServerUtils";

type ResponseData = {
  todos: Schema["Todo"]["type"][];
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseData>
) {
  const todos = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      const { data: todos } = await reqResBasedClient.models.Todo.list(
        contextSpec
      );
      return todos;
    },
  });

  response.status(200).json({ todos });
}
