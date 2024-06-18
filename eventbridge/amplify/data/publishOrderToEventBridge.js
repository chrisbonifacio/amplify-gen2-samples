import { util } from "@aws-appsync/utils";

export function request(ctx) {
  return {
    operation: "PutEvents",
    events: [
      {
        source: "amplify.orders",
        detailType: "OrderStatusChange",
        detail: { ...ctx.args },
      },
    ],
  };
}

export function response(ctx) {
  if (ctx.error) util.error(ctx.error.message, ctx.error.type, ctx.result);
  else return ctx.args;
}
