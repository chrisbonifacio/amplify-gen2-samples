import { defineBackend } from "@aws-amplify/backend";
import { data } from "./data/resource";
import { auth } from "./auth/resource";
import { BillingMode } from "aws-cdk-lib/aws-dynamodb";

const backend = defineBackend({
  data,
  auth,
});

const dataResources = backend.data.resources;

Object.values(dataResources.cfnResources.amplifyDynamoDbTables).forEach(
  (table) => {
    table.pointInTimeRecoveryEnabled = true;
  }
);

dataResources.cfnResources.cfnGraphqlApi.xrayEnabled = true;

dataResources.cfnResources.amplifyDynamoDbTables["Todo"].timeToLiveAttribute = {
  attributeName: "ttl",
  enabled: true,
};

dataResources.cfnResources.amplifyDynamoDbTables["Todo"].billingMode =
  BillingMode.PROVISIONED;

dataResources.cfnResources.amplifyDynamoDbTables["Todo"].provisionedThroughput =
  {
    readCapacityUnits: 5,
    writeCapacityUnits: 5,
  };

dataResources.cfnResources.amplifyDynamoDbTables[
  "Todo"
].pointInTimeRecoveryEnabled = true;
