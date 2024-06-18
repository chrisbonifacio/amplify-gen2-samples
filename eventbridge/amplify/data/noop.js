import { util } from "@aws-appsync/utils";

export function request(ctx) {
  return "noop";
}

export function response(ctx) {
  if (ctx.error) {
    util.error(ctx.error.message, ctx.error.type, ctx.result);
  } else {
    return ctx.result;
  }
}
