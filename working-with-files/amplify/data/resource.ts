import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Song: a
    .model({
      id: a.id().required(),
      name: a.string().required(),
      coverArtPath: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  PhotoAlbum: a
    .model({
      id: a.id().required(),
      name: a.string().required(),
      imagePaths: a.string().array(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
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
