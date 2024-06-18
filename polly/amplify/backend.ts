import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data, convertTextToSpeech } from "./data/resource";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { storage } from "./storage/resource";

const backend = defineBackend({
  auth,
  data,
  storage,
  convertTextToSpeech,
});

backend.convertTextToSpeech.resources.lambda.addToRolePolicy(
  new PolicyStatement({
    actions: ["polly:StartSpeechSynthesisTask"],
    resources: ["*"],
  })
);
