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
  return ctx.args;
}
