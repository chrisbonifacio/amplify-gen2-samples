import { util } from "@aws-appsync/utils";

export const request = (ctx) => {
  const phoneNumbers = [];

  ctx.args.phoneNumbers.forEach((phoneNumber) => {
    phoneNumbers.push(util.dynamodb.toMapValues({ phoneNumber }));
  });

  return {
    operation: "BatchGetItem",
    tables: {
      [ctx.env.PHONENUMBER_TABLE]: {
        keys: phoneNumbers,
      },
    },
  };
};

export const response = (ctx) => {
  return ctx.result.data[ctx.env.PHONENUMBER_TABLE];
};
