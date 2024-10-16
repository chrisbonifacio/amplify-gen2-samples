import { util, extensions } from "@aws-appsync/utils";

// Subscription handlers must return a `null` payload on the request
export function request() {
  return { payload: null };
}

export function response(ctx) {
  const filter = {
    owner: {
      eq: `${ctx.identity.sub}::${ctx.identity.username}`,
    },
  };

  extensions.setSubscriptionFilter(util.transform.toSubscriptionFilter(filter));

  return null;
}
