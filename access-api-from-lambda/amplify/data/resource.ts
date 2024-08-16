import {
  a,
  defineData,
  defineFunction,
  type ClientSchema,
} from "@aws-amplify/backend";

export const functionWithDataAccess = defineFunction({
  entry: "../functions/data-access.ts",
});

const schema = a
  .schema({
    Todo: a
      .model({
        name: a.string(),
        description: a.string(),
      })
      .authorization((allow) => allow.authenticated()),
  })
  .authorization((allow) => [allow.resource(functionWithDataAccess)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
});
