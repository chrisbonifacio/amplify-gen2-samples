import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
      isDone: a.boolean(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  OrderStatus: a.enum(["PENDING", "SHIPPED", "DELIVERED"]),
  OrderStatusChange: a.customType({
    orderId: a.id(),
    status: a.ref("OrderStatus"),
    message: a.string(),
  }),
  publishOrderToEventBridge: a
    .mutation()
    .arguments({
      orderId: a.id(),
      status: a.string(),
      message: a.string(),
    })
    .returns(a.ref("OrderStatusChange"))
    .authorization((allow) => [allow.authenticated()])
    .handler(
      a.handler.custom({
        dataSource: "EventBridgeDataSource",
        entry: "./publishOrderToEventBridge.js",
      })
    ),
  publishOrderFromEventBridge: a
    .mutation()
    .arguments({
      orderId: a.id(),
      status: a.string(),
      message: a.string(),
    })
    .returns(a.ref("OrderStatusChange"))
    .authorization((allow) => [allow.authenticated()])
    .handler(
      a.handler.custom({
        entry: "./publishOrderFromEventBridge.js",
      })
    ),
  onOrderFromEventBridge: a
    .subscription()
    .for(a.ref("publishOrderFromEventBridge"))
    .authorization((allow) => [allow.authenticated()])
    .handler(
      a.handler.custom({
        entry: "./onOrderFromEventBridge.js",
      })
    ),
  // We need at least one query in the schema to deploy the API
  noop: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.publicApiKey()])
    .handler(
      a.handler.custom({
        entry: "./noop.js",
      })
    ),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "MyLibrary",
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
