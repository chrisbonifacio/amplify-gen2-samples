import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  RacingTable: a.customType({
    pk: a.string().required(),
    sk: a.string().required(),
    numeric: a.float(),
    results: a.json(),
  }),
  createRace: a
    .mutation()
    .arguments({
      raceId: a.string().required(),
      classId: a.string(),
      results: a.json(),
    })
    .returns(a.ref("RacingTable"))
    .handler(
      a.handler.custom({
        dataSource: "RacingTableDataSource",
        entry: "./createRace.js",
      })
    )
    .authorization((allow) => [allow.publicApiKey()]),
  getRaceResultsByRacerId: a
    .query()
    .arguments({
      racerId: a.string().required(),
    })
    .returns(a.ref("RacingTable").array())
    .handler(
      a.handler.custom({
        dataSource: "RacingTableDataSource",
        entry: "./getRaceResultsByRacerId.js",
      })
    )
    .authorization((allow) => [allow.publicApiKey()]),
  getRacesByClassId: a
    .query()
    .arguments({
      classId: a.string().required(),
    })
    .returns(a.ref("RacingTable").array())
    .handler(
      a.handler.custom({
        dataSource: "RacingTableDataSource",
        entry: "./getRacesByClassId.js",
      })
    )
    .authorization((allow) => [allow.publicApiKey()]),
  getBestPerformanceByClassId: a
    .query()
    .arguments({
      classId: a.string().required(),
    })
    .returns(a.ref("RacingTable").array())
    .handler(
      a.handler.custom({
        dataSource: "RacingTableDataSource",
        entry: "./getBestPerformanceByClassId.js",
      })
    )
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "MyLibrary",
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 365,
    },
  },
});
