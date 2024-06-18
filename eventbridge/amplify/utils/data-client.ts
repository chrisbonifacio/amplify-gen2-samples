import { generateClient } from "aws-amplify/api";
import { Schema } from "../data/resource";

export const dataClient = generateClient<Schema>();
