export function request(ctx) {
  return {
    payload: {
      status: ctx.arguments?.status || "PENDING",
      message: ctx.arguments?.message || "",
      customerId: ctx.arguments?.customerId || "",
    },
  };
}

export function response(ctx) {
  // Ensure we have valid data
  const data = ctx.result || ctx.prev.result || ctx.arguments || {};

  // Return with default values if any field is missing
  return {
    status: data.status || "PENDING",
    message: data.message || "",
    customerId: data.customerId || "",
  };
}
