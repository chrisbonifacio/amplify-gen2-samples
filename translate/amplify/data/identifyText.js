export function request(ctx) {
  return {
    method: "POST",
    resourcePath: "/",
    params: {
      body: {
        Image: {
          S3Object: {
            Bucket: ctx.env.S3_BUCKET_NAME,
            Name: ctx.arguments.path,
          },
        },
      },
      headers: {
        "Content-Type": "application/x-amz-json-1.1",
        "X-Amz-Target": "RekognitionService.DetectText",
      },
    },
  };
}

export function response(ctx) {
  return JSON.parse(ctx.result.body)
    .TextDetections.filter((item) => item.Type === "LINE")
    .map((item) => item.DetectedText)
    .join("\n")
    .trim();
}
