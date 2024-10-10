import { defineBackend, defineFunction } from "@aws-amplify/backend";
import { auth } from "./auth/resource.js";
import { data } from "./data/resource.js";
import { storage } from "./storage/resource.js";
import { sharpFunction } from "./functions/sharp/resource.js";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";

const backend = defineBackend({
  auth,
  data,
  storage,
  sharpFunction,
});

backend.sharpFunction.resources.lambda.addToRolePolicy(
  new PolicyStatement({
    actions: ["s3:ListBucket", "s3:GetObject", "s3:PutObject"],
    resources: ["*"],
  })
);
