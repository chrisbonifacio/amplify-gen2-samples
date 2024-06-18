import { util } from "@aws-appsync/utils";

export function request(ctx) {
  const { racerId, raceId } = ctx.args;
  let query = {
    expression: "pk = :racerId",
    expressionValues: util.dynamodb.toMapValues({ ":racerId": racerId }),
  };

  if (raceId) {
    query.expression += " AND sk = :raceId";
    query.expressionValues[":raceId"] = raceId;
  }

  return {
    operation: "Query",
    query,
  };
}

export function response(ctx) {
  return ctx.result;
}
