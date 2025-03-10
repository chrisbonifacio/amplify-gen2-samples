import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

import { schema as generatedSqlSchema } from "./schema.sql";

// Add a global authorization rule
const sqlSchema = generatedSqlSchema
  .addToSchema({
    subscribeToNotificationsByUserId: a
      .subscription()
      .arguments({
        userId: a.string(),
      })
      .for(a.ref("notifications").mutations(["create"]))
      .authorization((allow) => [allow.authenticated()])
      .handler(
        a.handler.custom({ entry: "./resolvers/subscribe-to-notifications.js" })
      ),
  })
  .authorization((allow) => allow.authenticated());

// Relational database sources can coexist with DynamoDB tables managed by Amplify.
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.guest()]),
});

// Use the a.combine() operator to stitch together the models backed by DynamoDB
// and the models backed by Postgres or MySQL databases.
const combinedSchema = a.combine([schema, sqlSchema]);

// Don't forget to update your client types to take into account the types from
// both schemas.
export type Schema = ClientSchema<typeof combinedSchema>;

export const data = defineData({
  // Update the data definition to use the combined schema, instead of just
  // your DynamoDB-backed schema
  schema: combinedSchema,
  name: "PostgresAPI",
  authorizationModes: {
    defaultAuthorizationMode: "identityPool",
  },
});
