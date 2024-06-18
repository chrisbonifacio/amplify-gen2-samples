import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "predictions_gen2",
  access: (allow) => ({
    "public/*": [allow.guest.to(["list", "write", "get"])],
  }),
});
