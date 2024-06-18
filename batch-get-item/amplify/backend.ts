import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { Stack } from "aws-cdk-lib";
import { aws_iam } from "aws-cdk-lib";

export const backend = defineBackend({
  auth,
  data,
});

backend.data.resources.cfnResources.cfnGraphqlApi.environmentVariables = {
  PHONENUMBER_TABLE:
    // replace with your own table name
    `PhoneNumber-md4n36jl7za7xi4mie3cs3wyey-NONE`,
};

const apiStack = Stack.of(backend.data);

// Enable logging for troubleshooting and debugging
const cloudWatchLogsRole = new aws_iam.Role(
  apiStack,
  "MyLibraryCloudWatchRole2",
  {
    roleName: "MyLibraryCloudWatchRole2",
    assumedBy: new aws_iam.ServicePrincipal("appsync.amazonaws.com"),
    managedPolicies: [
      aws_iam.ManagedPolicy.fromAwsManagedPolicyName(
        "service-role/AWSAppSyncPushToCloudWatchLogs"
      ),
    ],
  }
);

backend.data.resources.cfnResources.cfnGraphqlApi.logConfig = {
  cloudWatchLogsRoleArn: cloudWatchLogsRole.roleArn,
  fieldLogLevel: "ALL",
  excludeVerboseContent: false,
};
