import type { S3Handler } from "aws-lambda";

export const handler: S3Handler = async (event) => {
  const objectKeys = event.Records.map((record) => record.s3.object.key);
  console.log(`Upload handler invoked for objects [${objectKeys.join(", ")}]`);
};
