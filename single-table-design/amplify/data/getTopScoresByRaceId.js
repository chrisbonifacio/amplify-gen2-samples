import { util } from "@aws-appsync/utils";
import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx) {
  const { raceId } = ctx.args;

  return ddb.query({
    query: {
      sk: `race-${raceId}`,
    },
    scanIndexForward: false,
    index: "GlobalSecondaryIndex",
    limit: 100,
  });
}

export function response(ctx) {
  return ctx.result;
}
