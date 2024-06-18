import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  User: a
    .model({
      id: a.id().required(),
      birthdate: a.string().required(),
      firstName: a.string().required(),
      lastName: a.string().required(),
      username: a.string().required(),
      phoneNumber: a.hasOne("PhoneNumber", "userId"),
      pushToken: a.string(),
      profileImage: a.url(),
      profileImageBlurhash: a.string(),
      searchTerm: a.string().required(),
    })
    .secondaryIndexes((index) => [
      index("searchTerm").queryField("listUsersBySearchTerm").sortKeys(["id"]),
    ])
    .authorization((allow) => [allow.publicApiKey()]),
  PhoneNumber: a
    .model({
      phoneNumber: a.string().required(),
      userId: a.string().required(),
      user: a.belongsTo("User", "userId"),
    })
    .identifier(["phoneNumber"])
    .authorization((allow) => [allow.publicApiKey()]),
  checkBatchOfPhoneNumbersForActiveUsers: a
    .query()
    .arguments({
      phoneNumbers: a.string().array(),
    })
    .returns(a.ref("PhoneNumber").array())
    .handler(
      a.handler.custom({
        dataSource: a.ref("PhoneNumber"),
        entry: "./functions/phoneBatchHandler.js",
      })
    )
    .authorization((allow) => [
      allow.groups(["admin", "projectManager"]),
      allow.publicApiKey(),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "MyLibrary",
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      description: "API Key authorization",
      expiresInDays: 365,
    },
  },
});
