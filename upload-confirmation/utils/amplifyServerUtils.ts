import { type Schema } from "@/amplify/data/resource";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/data";
import outputs from "@/amplify_outputs.json";
import { cookies } from "next/headers";

export const cookieBasedClient = generateServerClientUsingCookies<Schema>({
  config: outputs,
  cookies,
});

import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingReqRes } from "@aws-amplify/adapter-nextjs/data";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
});

export const reqResBasedClient = generateServerClientUsingReqRes<Schema>({
  config: outputs,
});
