/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const checkBatchOfPhoneNumbersForActiveUsers = /* GraphQL */ `query CheckBatchOfPhoneNumbersForActiveUsers($phoneNumbers: [String]) {
  checkBatchOfPhoneNumbersForActiveUsers(phoneNumbers: $phoneNumbers) {
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
` as GeneratedQuery<
  APITypes.CheckBatchOfPhoneNumbersForActiveUsersQueryVariables,
  APITypes.CheckBatchOfPhoneNumbersForActiveUsersQuery
>;
export const getPhoneNumber = /* GraphQL */ `query GetPhoneNumber($phoneNumber: String!) {
  getPhoneNumber(phoneNumber: $phoneNumber) {
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
` as GeneratedQuery<
  APITypes.GetPhoneNumberQueryVariables,
  APITypes.GetPhoneNumberQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listPhoneNumbers = /* GraphQL */ `query ListPhoneNumbers(
  $filter: ModelPhoneNumberFilterInput
  $limit: Int
  $nextToken: String
  $phoneNumber: String
  $sortDirection: ModelSortDirection
) {
  listPhoneNumbers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    phoneNumber: $phoneNumber
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      phoneNumber
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPhoneNumbersQueryVariables,
  APITypes.ListPhoneNumbersQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const listUsersBySearchTerm = /* GraphQL */ `query ListUsersBySearchTerm(
  $filter: ModelUserFilterInput
  $id: ModelIDKeyConditionInput
  $limit: Int
  $nextToken: String
  $searchTerm: String!
  $sortDirection: ModelSortDirection
) {
  listUsersBySearchTerm(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    searchTerm: $searchTerm
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUsersBySearchTermQueryVariables,
  APITypes.ListUsersBySearchTermQuery
>;
