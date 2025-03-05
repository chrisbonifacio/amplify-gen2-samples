export function request(ctx) {
  return {
    payload: {
      status: ctx.arguments.status,
      message: ctx.arguments.message,
      customerId: ctx.arguments.customerId,
    },
  };
}

export function response(ctx) {
  const data = ctx.result || ctx.prev.result || ctx.arguments;
  return {
    status: data.status,
    message: data.message,
    customerId: data.customerId,
  };
}
