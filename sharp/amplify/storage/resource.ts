import { defineStorage } from "@aws-amplify/backend";
import { sharpFunction } from "../functions/sharp/resource";

export const storage = defineStorage({
  name: "amplify-next-isr",
  access: (allow) => ({
    "public/*": [
      allow.guest.to(["write", "read"]),
      allow.authenticated.to(["write", "read"]),
    ],
    "profile-pictures/{entity_id}/*": [
      allow.guest.to(["read"]),
      allow.authenticated.to(["read"]),
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
    "product-pictures/*": [
      allow.guest.to(["read"]),
      allow.authenticated.to(["read"]),
      allow.groups(["Admin", "Editor"]).to(["read", "write", "delete"]),
    ],
    "media/*": [
      allow.guest.to(["read"]),
      allow.authenticated.to(["read"]),
      allow.groups(["Admin", "Editor"]).to(["read", "write", "delete"]),
    ],
  }),
  triggers: {
    onUpload: sharpFunction,
  },
});
