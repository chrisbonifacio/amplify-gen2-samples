import { util } from "@aws-appsync/utils";
import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx) {
  const { raceId, ...values } = ctx.args;

  const key = { pk: `race-${raceId ?? util.autoId()}` };
  const item = values;

  return ddb.put({ key, item });
}

export function response(ctx) {
  return ctx.result;
}
