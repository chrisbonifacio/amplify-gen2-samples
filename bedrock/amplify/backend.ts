import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data, generateHaikuFunction } from "./data/resource";
import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Stack } from "aws-cdk-lib";

export const backend = defineBackend({
  auth,
  data,
  generateHaikuFunction,
});

const MODEL_ID = "anthropic.claude-3-haiku-20240307-v1:0";

backend.generateHaikuFunction.resources.lambda.addToRolePolicy(
  new PolicyStatement({
    effect: Effect.ALLOW,
    actions: ["bedrock:InvokeModel"],
    resources: [`arn:aws:bedrock:*::foundation-model/${MODEL_ID}`],
  })
);

const bedrockDataSource = backend.data.addHttpDataSource(
  "BedrockDataSource",
  "https://bedrock-runtime.us-east-1.amazonaws.com",
  {
    authorizationConfig: {
      signingRegion: Stack.of(backend.data).region,
      signingServiceName: "bedrock",
    },
  }
);

bedrockDataSource.grantPrincipal.addToPrincipalPolicy(
  new PolicyStatement({
    effect: Effect.ALLOW,
    actions: ["bedrock:InvokeModel"],
    resources: [
      `arn:aws:bedrock:${
        Stack.of(backend.data).region
      }::foundation-model/${MODEL_ID}`,
    ],
  })
);

backend.data.resources.cfnResources.cfnGraphqlApi.environmentVariables = {
  MODEL_ID,
};

// backend.generateHaikuFunction.resources.lambda.addToRolePolicy(
//   new PolicyStatement({
//     effect: Effect.ALLOW,
//     actions: ["bedrock:InvokeModel"],
//     resources: [`arn:aws:bedrock:*::foundation-model/${MODEL_ID}`],
//   })
// );
