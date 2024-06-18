import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { Stack } from "aws-cdk-lib";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { storage } from "./storage/resource";

const backend = defineBackend({
  auth,
  data,
  storage,
});

const dataStack = Stack.of(backend.data);

// Set environment variables for the S3 Bucket name
backend.data.resources.cfnResources.cfnGraphqlApi.environmentVariables = {
  S3_BUCKET_NAME: backend.storage.resources.bucket.bucketName,
};

const rekognitionDataSource = backend.data.addHttpDataSource(
  "RekognitionDataSource",
  `https://rekognition.${dataStack.region}.amazonaws.com`,
  {
    authorizationConfig: {
      signingRegion: dataStack.region,
      signingServiceName: "rekognition",
    },
  }
);

rekognitionDataSource.grantPrincipal.addToPrincipalPolicy(
  new PolicyStatement({
    actions: ["rekognition:DetectText", "rekognition:DetectLabels"],
    resources: ["*"],
  })
);

backend.storage.resources.bucket.grantReadWrite(
  rekognitionDataSource.grantPrincipal
);
