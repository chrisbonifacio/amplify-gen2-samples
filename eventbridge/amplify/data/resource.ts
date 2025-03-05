import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  OrderStatus: a.enum(["PENDING", "SHIPPED", "DELIVERED"]),
  OrderStatusChange: a
    .model({
      status: a.ref("OrderStatus").required(),
      message: a.string().required(),
      customerId: a.string().required(),
    })
    .authorization((allow) => [
      allow.ownerDefinedIn("customerId", "userPools"),
    ]),
  publishOrderToEventBridge: a
    .mutation()
    .arguments({
      status: a.string().required(),
      message: a.string().required(),
      customerId: a.string().required(),
    })
    .returns(a.ref("OrderStatusChange"))
    .authorization((allow) => [allow.authenticated()])
    .handler(
      a.handler.custom({
        dataSource: "MyEventBridgeDataSource",
        entry: "./publishOrderToEventBridge.js",
      })
    ),
  publishOrderFromEventBridge: a
    .mutation()
    .arguments({
      status: a.string().required(),
      message: a.string().required(),
      customerId: a.string().required(),
    })
    .returns(a.ref("OrderStatusChange"))
    .handler(
      a.handler.custom({
        entry: "./publishOrderFromEventBridge.js",
      })
    )
    .authorization((allow) => [allow.authenticated()]),
  onOrderFromEventBridge: a
    .subscription()
    .for(a.ref("publishOrderFromEventBridge"))
    .authorization((allow) => [allow.authenticated()])
    .handler(
      a.handler.custom({
        entry: "./onOrderFromEventBridge.js",
      })
    ),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "AmplifyGen2EventBridgeExample",
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
