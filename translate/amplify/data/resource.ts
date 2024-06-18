import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  translate: a
    .query()
    .arguments({
      sourceLanguage: a.string().required(),
      targetLanguage: a.string().required(),
      text: a.string().required(),
    })
    .returns(a.string())
    .authorization((allow) => [allow.publicApiKey()])
    .handler(
      a.handler.custom({
        dataSource: "TranslateDataSource",
        entry: "./translate.js",
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
