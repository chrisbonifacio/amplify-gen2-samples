import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

export const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
      type: a.string(),
      compeleted: a.boolean(),
    })
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  name: "SharpAPI",
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "identityPool",
  },
});
