import { defineAuth } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      saml: {
        name: "Auth0SAML",
        metadata: {
          metadataContent:
            "https://amplify-gen2-saml.us.auth0.com/samlp/metadata/W6TlmBDihV3HD6a4znOI4YrR6rJy0f3E", // or content of the metadata file
          metadataType: "URL", // or 'FILE',
        },
        attributeMapping: {
          email: "email",
          nickname: "name",
          givenName: "given_name",
          familyName: "family_name",
        },
      },
      logoutUrls: ["http://localhost:3000"],
      callbackUrls: ["http://localhost:3000"],
    },
  },
});
