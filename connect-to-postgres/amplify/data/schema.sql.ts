/* eslint-disable */
/* THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. */
import { a } from "@aws-amplify/data-schema";
import { configure } from "@aws-amplify/data-schema/internals";
import { secret } from "@aws-amplify/backend";

export const schema = configure({
  database: {
    identifier: "ID21dub0s9I1le4hxtO7ctg",
    engine: "postgresql",
    connectionUri: secret("SQL_CONNECTION_STRING"),
    vpcConfig: {
      vpcId: "vpc-249a1859",
      securityGroupIds: ["sg-8c07608f"],
      subnetAvailabilityZones: [
        {
          subnetId: "subnet-88babcc5",
          availabilityZone: "us-east-1b",
        },
        {
          subnetId: "subnet-50601636",
          availabilityZone: "us-east-1d",
        },
        {
          subnetId: "subnet-778ba379",
          availabilityZone: "us-east-1f",
        },
        {
          subnetId: "subnet-721fa543",
          availabilityZone: "us-east-1e",
        },
        {
          subnetId: "subnet-110b7730",
          availabilityZone: "us-east-1a",
        },
        {
          subnetId: "subnet-cbe69594",
          availabilityZone: "us-east-1c",
        },
      ],
    },
  },
}).schema({
  locations: a
    .model({
      id: a.string().required(),
      name: a.string().required(),
      geom: a.string().required(),
      address: a.string(),
    })
    .identifier(["id"]),
  notifications: a
    .model({
      user_id: a.string().required(),
      id: a.string().required(),
      message: a.string().required(),
    })
    .identifier(["id"]),
  posts: a
    .model({
      id: a.string().required(),
      title: a.string().required(),
      published: a.boolean(),
      owner: a.string(),
    })
    .identifier(["id"]),
  spatial_ref_sys: a
    .model({
      srid: a.integer().required(),
      auth_name: a.string(),
      auth_srid: a.integer(),
      srtext: a.string(),
      proj4text: a.string(),
    })
    .identifier(["srid"]),
});
