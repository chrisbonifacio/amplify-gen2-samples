import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

// Relational database sources can coexist with DynamoDB tables managed by Amplify.
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.authenticated("oidc")]),
    
});

// Use the a.combine() operator to stitch together the models backed by DynamoDB
// and the models backed by Postgres or MySQL databases.

// Don't forget to update your client types to take into account the types from
// both schemas.
export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  // Update the data definition to use the combined schema, instead of just
  // your DynamoDB-backed schema
  schema,
  name: "oidcProviderAPI",
  authorizationModes: {
    defaultAuthorizationMode: "oidc",
    oidcAuthorizationMode: {
      oidcProviderName: "Auth0",
      oidcIssuerUrl: "https://dev-7w7q5fl7.us.auth0.com",
      clientId: "liO9Y36I2JPPM6hUKd0Ka49Boe9d5UWO",
      tokenExpiryFromAuthInSeconds: 3600,
      tokenExpireFromIssueInSeconds: 3600,
    },
  },
});
