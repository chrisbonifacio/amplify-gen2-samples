import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { Stack } from "aws-cdk-lib/core";
import {
  AttributeType,
  BillingMode,
  ProjectionType,
  Table,
} from "aws-cdk-lib/aws-dynamodb";

const backend = defineBackend({
  auth,
  data,
});

// const racingTable = new Table(Stack.of(backend.data), "RacingTable", {
//   tableName: "RacingTable",
//   partitionKey: {
//     name: "pk",
//     type: AttributeType.STRING,
//   },
//   sortKey: {
//     name: "sk",
//     type: AttributeType.STRING,
//   },
//   billingMode: BillingMode.PAY_PER_REQUEST,
// });

// // LSI: Partition key: pk, Sort key: numeric
// racingTable.addLocalSecondaryIndex({
//   indexName: "LocalSecondaryIndex",
//   sortKey: { name: "numeric", type: AttributeType.NUMBER },
//   projectionType: ProjectionType.ALL,
// });

// // GSI: Partition key: sk, Sort key: numeric
// racingTable.addGlobalSecondaryIndex({
//   indexName: "GlobalSecondaryIndex",
//   partitionKey: { name: "sk", type: AttributeType.STRING },
//   sortKey: { name: "numeric", type: AttributeType.NUMBER },
// });

const racingTable = Table.fromTableName(
  Stack.of(backend.data),
  "RacingTable",
  "RacingTable"
);

backend.data.addDynamoDbDataSource("RacingTableDataSource", racingTable);
