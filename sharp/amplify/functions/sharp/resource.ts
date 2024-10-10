import { defineFunction } from "@aws-amplify/backend";

// Define the image optimization function
export const sharpFunction = defineFunction({
  name: "imageOptimizer",
  entry: "./handler.js",
  runtime: 18,
  timeoutSeconds: 120,
  layers: {
    sharp: "arn:aws:lambda:us-east-1:123456789101:layer:SharpLayerGen2:2", // Replace with your Layer's ARN
  },
});
