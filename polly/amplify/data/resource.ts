import {
  type ClientSchema,
  a,
  defineData,
  defineFunction,
} from "@aws-amplify/backend";

export const convertTextToSpeech = defineFunction({
  entry: "./convertTextToSpeech.ts",
});

const schema = a.schema({
  Todo: a
    .model({
      content: a.string().required(),
      done: a.boolean().required(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  convertTextToSpeech: a
    .mutation()
    .arguments({
      text: a.string().required(),
    })
    .returns(a.string().required())
    .authorization((allow) => [allow.publicApiKey()])
    .handler(a.handler.function(convertTextToSpeech)),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "TextToSpeechAPI",
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
