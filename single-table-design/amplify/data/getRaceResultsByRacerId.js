import { util } from "@aws-appsync/utils";
import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx) {
  const { racerId } = ctx.args;

  return ddb.query({
    query: {
      pk: `racer-${racerId}`,
    },
  });
}

export function response(ctx) {
  return ctx.result;
}
