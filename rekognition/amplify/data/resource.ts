import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  identifyText: a
    .query()
    .arguments({
      path: a.string(),
    })
    .returns(a.string())
    .authorization((allow) => [allow.publicApiKey()])
    .handler(
      a.handler.custom({
        entry: "./identifyText.js",
        dataSource: "RekognitionDataSource",
      })
    ),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
