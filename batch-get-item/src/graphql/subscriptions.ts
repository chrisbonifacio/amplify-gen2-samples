/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePhoneNumber = /* GraphQL */ `subscription OnCreatePhoneNumber(
  $filter: ModelSubscriptionPhoneNumberFilterInput
) {
  onCreatePhoneNumber(filter: $filter) {
    createdAt
    phoneNumber
    updatedAt
    user {
      birthdate
      createdAt
      firstName
      id
      lastName
      profileImage
      profileImageBlurhash
      pushToken
      searchTerm
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePhoneNumberSubscriptionVariables,
  APITypes.OnCreatePhoneNumberSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    birthdate
    createdAt
    firstName
    id
    lastName
    phoneNumber {
      createdAt
      phoneNumber
      updatedAt
      userId
      __typename
    }
    profileImage
    profileImageBlurhash
    pushToken
    searchTerm
    updatedAt
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeletePhoneNumber = /* GraphQL */ `subscription OnDeletePhoneNumber(
  $filter: ModelSubscriptionPhoneNumberFilterInput
) {
  onDeletePhoneNumber(filter: $filter) {
    createdAt
    phoneNumber
    updatedAt
    user {
      birthdate
      createdAt
      firstName
      id
      lastName
      profileImage
      profileImageBlurhash
      pushToken
      searchTerm
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePhoneNumberSubscriptionVariables,
  APITypes.OnDeletePhoneNumberSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    birthdate
    createdAt
    firstName
    id
    lastName
    phoneNumber {
      createdAt
      phoneNumber
      updatedAt
      userId
      __typename
    }
    profileImage
    profileImageBlurhash
    pushToken
    searchTerm
    updatedAt
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdatePhoneNumber = /* GraphQL */ `subscription OnUpdatePhoneNumber(
  $filter: ModelSubscriptionPhoneNumberFilterInput
) {
  onUpdatePhoneNumber(filter: $filter) {
    createdAt
    phoneNumber
    updatedAt
    user {
      birthdate
      createdAt
      firstName
      id
      lastName
      profileImage
      profileImageBlurhash
      pushToken
      searchTerm
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePhoneNumberSubscriptionVariables,
  APITypes.OnUpdatePhoneNumberSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    birthdate
    createdAt
    firstName
    id
    lastName
    phoneNumber {
      createdAt
      phoneNumber
      updatedAt
      userId
      __typename
    }
    profileImage
    profileImageBlurhash
    pushToken
    searchTerm
    updatedAt
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
