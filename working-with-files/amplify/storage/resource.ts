import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplify-gen2-files",
  access: (allow) => ({
    "images/*": [allow.authenticated.to(["read", "write", "delete"])],
  }),
});
