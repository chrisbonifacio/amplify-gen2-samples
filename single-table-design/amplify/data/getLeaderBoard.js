const AWS = require("aws-sdk");
AWS.config.region = process.env.AWS_REGION;
const documentClient = new AWS.DynamoDB.DocumentClient();

// Main Lambda handler
export function request(ctx) {
  console.log(JSON.stringify(event, null, 2));
  const classId = parseInt(event.queryStringParameters.classId);

  const params = {
    TableName: process.env.DDB_TABLE,
    IndexName: "LocalSecondaryIndex",
    KeyConditionExpression: "PK = :ID",
    ExpressionAttributeValues: {
      ":ID": `class-${classId}`,
    },
    ScanIndexForward: false,
    Limit: 1000,
  };

  console.log(params);
  const result = documentClient.query(params).promise();
  console.log(result);

  return result.Items;
}

export function response(ctx) {
  return ctx.result;
}
