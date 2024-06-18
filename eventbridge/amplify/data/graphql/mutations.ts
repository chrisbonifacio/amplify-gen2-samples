/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const publishOrderFromEventBridge = /* GraphQL */ `mutation PublishOrderFromEventBridge(
  $message: String
  $orderId: ID
  $status: String
) {
  publishOrderFromEventBridge(
    message: $message
    orderId: $orderId
    status: $status
  ) {
    message
    orderId
    status
    __typename
  }
}
` as GeneratedMutation<
  APITypes.PublishOrderFromEventBridgeMutationVariables,
  APITypes.PublishOrderFromEventBridgeMutation
>;
export const publishOrderToEventBridge = /* GraphQL */ `mutation PublishOrderToEventBridge(
  $message: String
  $orderId: ID
  $status: String
) {
  publishOrderToEventBridge(
    message: $message
    orderId: $orderId
    status: $status
  ) {
    message
    orderId
    status
    __typename
  }
}
` as GeneratedMutation<
  APITypes.PublishOrderToEventBridgeMutationVariables,
  APITypes.PublishOrderToEventBridgeMutation
>;
