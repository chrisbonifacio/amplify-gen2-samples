import { Amplify } from "aws-amplify";
import amplify_outputs from "@/amplify_outputs.json";

import type { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";

Amplify.configure(amplify_outputs);

export const client = generateClient<Schema>();
