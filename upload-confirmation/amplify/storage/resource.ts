import { defineFunction, defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "myProjectFiles",
  triggers: {
    onUpload: defineFunction({
      entry: "./on-upload-handler.ts",
    }),
  },
});
