/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPhoneNumber = /* GraphQL */ `mutation CreatePhoneNumber(
  $condition: ModelPhoneNumberConditionInput
  $input: CreatePhoneNumberInput!
) {
  createPhoneNumber(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreatePhoneNumberMutationVariables,
  APITypes.CreatePhoneNumberMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deletePhoneNumber = /* GraphQL */ `mutation DeletePhoneNumber(
  $condition: ModelPhoneNumberConditionInput
  $input: DeletePhoneNumberInput!
) {
  deletePhoneNumber(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeletePhoneNumberMutationVariables,
  APITypes.DeletePhoneNumberMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updatePhoneNumber = /* GraphQL */ `mutation UpdatePhoneNumber(
  $condition: ModelPhoneNumberConditionInput
  $input: UpdatePhoneNumberInput!
) {
  updatePhoneNumber(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdatePhoneNumberMutationVariables,
  APITypes.UpdatePhoneNumberMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
