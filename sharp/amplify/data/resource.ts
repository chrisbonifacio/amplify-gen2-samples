import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
// amplify/data/resource.ts
// const schema = a.schema({
//   // Todo: a
//   //   .model({
//   //     content: a.string(),
//   //     type: a.string(),
//   //   })
//   //   .secondaryIndexes((index) => [index("type").queryField("listByType")])
//   //   .authorization((allow) => [
//   //     allow.guest().to(["read"]),
//   //     allow.authenticated("identityPool").to(["read"]),
//   //   ]),

//   // //
//   // Vehicle: a
//   //   .model({
//   //     make: a.string().required(),
//   //     model: a.string().required(),
//   //     year: a.integer().required(),
//   //     type: a.enum(["sedan", "suv", "truck", "van"]),
//   //     dailyRate: a.float().required(),
//   //     available: a.boolean().required(),
//   //     locationId: a.id().required(),
//   //     location: a.belongsTo("Location", "locationId"),
//   //     rentals: a.hasMany("Rental", "vehicleId"),
//   //   })
//   //   .authorization((allow) => [allow.authenticated()]),
//   // Customer: a
//   //   .model({
//   //     name: a.string().required(),
//   //     email: a.email().required(),
//   //     phone: a.string(),
//   //     licenseNumber: a.string().required(),
//   //     rentals: a.hasMany("Rental", "customerId"),
//   //   })
//   //   .authorization((allow) => [
//   //     allow.group("Admin").to(["read"]),
//   //     allow.owner(),
//   //   ]),
//   // Location: a
//   //   .model({
//   //     name: a.string().required(),
//   //     address: a.string().required(),
//   //     vehicles: a.hasMany("Vehicle", "locationId"),
//   //   })
//   //   .authorization((allow) => [allow.authenticated()]),
//   // Rental: a
//   //   .model({
//   //     startDate: a.date().required(),
//   //     endDate: a.date().required(),
//   //     totalCost: a.float().required(),
//   //     status: a.enum(["reserved", "active", "completed", "cancelled"]),
//   //     customerId: a.id().required(),
//   //     customer: a.belongsTo("Customer", "customerId"),
//   //     vehicleId: a.id().required(),
//   //     vehicle: a.belongsTo("Vehicle", "vehicleId"),
//   //   })
//   //   .authorization((allow) => [
//   //     allow.authenticated().to(["read"]),
//   //     allow.owner(),
//   //   ]),
//   // Organization: a
//   //   .model({
//   //     id: a.id().required(),
//   //     name: a.string().required(),
//   //     tenantID: a.string(),
//   //   })
//   //   .identifier(["id", "name"])
//   //   .authorization((allow) => [allow.group("Admin")]),

//   // // #13877
//   // School: a
//   //   .model({
//   //     name: a.string().required(),
//   //     teachers: a.id().array(),
//   //     classes: a.hasMany("Class", "schoolId"),
//   //   })
//   //   .authorization((allow) => [
//   //     allow.groupDefinedIn("id").withClaimIn("read_schools"),
//   //     allow.ownersDefinedIn("teachers"),
//   //   ]),
//   // Class: a
//   //   .model({
//   //     schoolId: a.id().required(),
//   //     name: a.string().required(),
//   //     teacher: a.id().required(),
//   //     school: a.belongsTo("School", "schoolId"),
//   //   })
//   //   .authorization((allow) => [
//   //     allow.groupDefinedIn("schoolId").withClaimIn("read_schools"),
//   //     allow.ownerDefinedIn("teacher"),
//   //   ]),

//   // // #13870
//   // UserProfile: a
//   //   .model({
//   //     email: a.string(),
//   //     profileOwner: a.string(),
//   //   })
//   //   .authorization((allow) => [allow.ownerDefinedIn("profileOwner")]),
//   // Balance: a
//   //   .model({
//   //     current: a.float(),
//   //     income: a.float(),
//   //     expenses: a.float(),
//   //   })
//   //   .authorization((allow) => [allow.ownerDefinedIn("profileOwner")]),

//   // Transaction: a
//   //   .model({
//   //     avatar: a.string(),
//   //     name: a.string(),
//   //     category: a.string(),
//   //     date: a.string(),
//   //     amount: a.float(),
//   //     recurring: a.boolean(),
//   //   })
//   //   .authorization((allow) => [allow.ownerDefinedIn("profileOwner")]),

//   // Budget: a
//   //   .model({
//   //     category: a.string(),
//   //     maximum: a.float(),
//   //     theme: a.string(),
//   //   })
//   //   .authorization((allow) => [allow.ownerDefinedIn("profileOwner")]),

//   // Pot: a
//   //   .model({
//   //     name: a.string(),
//   //     target: a.float(),
//   //     total: a.float(),
//   //     theme: a.string(),
//   //   })
//   //   .authorization((allow) => [allow.ownerDefinedIn("profileOwner")]),
//   Artist: a
//     .model({
//       name: a.string().required(),
//       bio: a.string(),
//       albums: a.hasMany("Album", "artistId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   Album: a
//     .model({
//       title: a.string().required(),
//       releaseDate: a.date().required(),
//       artistId: a.id().required(),
//       artist: a.belongsTo("Artist", "artistId"),
//       tracks: a.hasMany("Track", "albumId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   Track: a
//     .model({
//       title: a.string().required(),
//       duration: a.integer().required(),
//       albumId: a.id().required(),
//       album: a.belongsTo("Album", "albumId"),
//       playlists: a.hasMany("PlaylistTrack", "trackId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   User: a
//     .model({
//       username: a.string().required(),
//       playlists: a.hasMany("Playlist", "userId"),
//     })
//     .authorization((allow) => [allow.owner()]),
//   Playlist: a
//     .model({
//       name: a.string().required(),
//       userId: a.id().required(),
//       user: a.belongsTo("User", "userId"),
//       tracks: a.hasMany("PlaylistTrack", "playlistId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   PlaylistTrack: a
//     .model({
//       playlistId: a.id().required(),
//       trackId: a.id().required(),
//       playlist: a.belongsTo("Playlist", "playlistId"),
//       track: a.belongsTo("Track", "trackId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
// });

// const schema = a.schema({
//   Instructor: a
//     .model({
//       name: a.string().required(),
//       bio: a.string(),
//       courses: a.hasMany("Course", "instructorId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   Student: a
//     .model({
//       name: a.string().required(),
//       enrollments: a.hasMany("Enrollment", "studentId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   Course: a
//     .model({
//       title: a.string().required(),
//       description: a.string().required(),
//       instructorId: a.id().required(),
//       instructor: a.belongsTo("Instructor", "instructorId"),
//       lessons: a.hasMany("Lesson", "courseId"),
//       enrollments: a.hasMany("Enrollment", "courseId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   Lesson: a
//     .model({
//       title: a.string().required(),
//       content: a.string().required(),
//       order: a.integer().required(),
//       courseId: a.id().required(),
//       course: a.belongsTo("Course", "courseId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   Enrollment: a
//     .model({
//       studentId: a.id().required(),
//       student: a.belongsTo("Student", "studentId"),
//       courseId: a.id().required(),
//       course: a.belongsTo("Course", "courseId"),
//       progress: a.float(),
//     })
//     .authorization((allow) => [allow.owner()]),
// });

// const schema = a.schema({
//   User: a
//     .model({
//       username: a.string().required(),
//       email: a.email().required(),
//       games: a.hasMany("GamePlayer", "playerId"),
//     })
//     .authorization((allow) => [allow.owner()]),
//   Game: a
//     .model({
//       name: a.string().required(),
//       status: a.enum(["waiting", "in_progress", "finished"]),
//       players: a.hasMany("GamePlayer", "gameId"),
//       currentTurnId: a.id(),
//       currentTurn: a.belongsTo("User", "currentTurnId"),
//       winnerId: a.id(),
//       winner: a.belongsTo("User", "winnerId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   GamePlayer: a
//     .model({
//       gameId: a.id().required(),
//       game: a.belongsTo("Game", "gameId"),
//       playerId: a.id().required(),
//       player: a.belongsTo("User", "playerId"),
//       score: a.float(),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   Move: a
//     .model({
//       gameId: a.id().required(),
//       game: a.belongsTo("Game", "gameId"),
//       playerId: a.id().required(),
//       player: a.belongsTo("User", "playerId"),
//       position: a.string().required(),
//       timestamp: a.date().required(),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
// });

// const schema = a.schema({
//   Restaurant: a
//     .model({
//       name: a.string().required(),
//       address: a.string().required(),
//       cuisine: a.string(),
//       openingHours: a.string(),
//       tables: a.hasMany("Table", "resturantId"),
//       menu: a.hasMany("MenuItem", "resturantId"),
//       reservations: a.hasMany("Reservation", "restaurantId"),
//       reviews: a.hasMany("Review", "restaurantId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   Table: a
//     .model({
//       number: a.integer().required(),
//       capacity: a.integer().required(),
//       isAvailable: a.boolean().required(),
//       resturantId: a.id().required(),
//       restaurant: a.belongsTo("Restaurant", "resturantId"),
//       reservation: a.hasMany("Reservation", "tableId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   MenuItem: a
//     .model({
//       name: a.string().required(),
//       description: a.string(),
//       price: a.float().required(),
//       category: a.enum(["appetizer", "main", "dessert", "beverage"]),
//       resturantId: a.id().required(),
//       restaurant: a.belongsTo("Restaurant", "resturantId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   User: a
//     .model({
//       name: a.string().required(),
//       email: a.email().required(),
//       phone: a.string(),
//       reservations: a.hasMany("Reservation", "userId"),
//       reviews: a.hasMany("Review", "userId"),
//     })
//     .authorization((allow) => [
//       allow.group("Admin").to(["read"]),
//       allow.owner(),
//     ]),
//   Reservation: a
//     .model({
//       date: a.date().required(),
//       time: a.string().required(),
//       partySize: a.integer().required(),
//       status: a.enum(["pending", "confirmed", "cancelled"]),
//       userId: a.id().required(),
//       user: a.belongsTo("User", "userId"),
//       restaurantId: a.id().required(),
//       restaurant: a.belongsTo("Restaurant", "restaurantId"),
//       tableId: a.id().required(),
//       table: a.belongsTo("Table", "tableId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   Review: a
//     .model({
//       rating: a.integer().required(),
//       comment: a.string(),
//       userId: a.id().required(),
//       user: a.belongsTo("User", "userId"),
//       restaurantId: a.id().required(),
//       restaurant: a.belongsTo("Restaurant", "restaurantId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
// });

// const schema = a.schema({
//   Salon: a
//     .model({
//       name: a.string().required(),
//       address: a.string(),
//       stylists: a.hasMany("Stylist", "salonId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   Stylist: a
//     .model({
//       name: a.string().required(),
//       salonId: a.id().required(),
//       salon: a.belongsTo("Salon", "salonId"),
//       appointments: a.hasMany("Appointment", "stylistId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   Service: a
//     .model({
//       name: a.string().required(),
//       duration: a.integer().required(),
//       price: a.float().required(),
//       appointments: a.hasMany("Appointment", "serviceId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   Appointment: a
//     .model({
//       date: a.date().required(),
//       time: a.string().required(),
//       stylistId: a.id().required(),
//       stylist: a.belongsTo("Stylist", "stylistId"),
//       customerId: a.id().required(),
//       customer: a.belongsTo("Customer", "customerId"),
//       serviceId: a.id().required(),
//       service: a.belongsTo("Service", "serviceId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   Customer: a
//     .model({
//       name: a.string().required(),
//       email: a.email().required(),
//       phone: a.string(),
//       appointments: a.hasMany("Appointment", "customerId"),
//     })
//     .authorization((allow) => [
//       allow.group("Admin").to(["read"]),
//       allow.owner(),
//     ]),
// });

// const schema = a.schema({
//   User: a
//     .model({
//       username: a.string().required(),
//       email: a.email().required(),
//       socialAccounts: a.hasMany("SocialAccount", "userId"),
//       campaigns: a.hasMany("Campaign", "userId"),
//     })
//     .authorization((allow) => [allow.owner()]),
//   SocialAccount: a
//     .model({
//       platform: a.enum(["facebook", "instagram", "linkedin"]),
//       accountId: a.string().required(),
//       userId: a.id().required(),
//       user: a.belongsTo("User", "userId"),
//       posts: a.hasMany("Post", "socialAccountId"),
//       analytics: a.hasMany("Analytics", "socialAccountId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   Post: a
//     .model({
//       content: a.string().required(),
//       publishDate: a.date().required(),
//       likes: a.integer(),
//       shares: a.integer(),
//       comments: a.integer(),
//       socialAccountId: a.id().required(),
//       socialAccount: a.belongsTo("SocialAccount", "socialAccountId"),
//       campaigns: a.hasMany("PostCampaign", "postId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   Analytics: a
//     .model({
//       date: a.date().required(),
//       followers: a.integer(),
//       engagement: a.float(),
//       impressions: a.integer(),
//       socialAccountId: a.id().required(),
//       socialAccount: a.belongsTo("SocialAccount", "socialAccountId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   PostCampaign: a
//     .model({
//       postId: a.id().required(),
//       post: a.belongsTo("Post", "postId"),
//       campaignId: a.id().required(),
//       campaign: a.belongsTo("Campaign", "campaignId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
//   Campaign: a
//     .model({
//       name: a.string().required(),
//       startDate: a.date().required(),
//       endDate: a.date().required(),
//       budget: a.float(),
//       posts: a.hasMany("PostCampaign", "campaignId"),
//       userId: a.id().required(),
//       user: a.belongsTo("User", "userId"),
//     })
//     .authorization((allow) => [
//       allow.authenticated().to(["read"]),
//       allow.owner(),
//     ]),
// });

// export const schema = a.schema({
//   Customer: a
//     .model({
//       name: a.string(),
//       phoneNumber: a.phone(),
//       accountRepresentativeId: a.id().required(),
//     })
//     .authorization((allow) => [allow.publicApiKey()])
//     .secondaryIndexes((index) => [index("accountRepresentativeId")]),
// });

export const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
      type: a.string(),
      compeleted: a.boolean(),
    })
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  name: "SSRClientAPI",
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "identityPool",
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
