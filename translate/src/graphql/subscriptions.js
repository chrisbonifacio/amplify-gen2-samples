/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onOrderStatusChange = /* GraphQL */ `
  subscription OnOrderStatusChange($orderId: ID!) {
    onOrderStatusChange(orderId: $orderId) {
      orderId
      status
      message
      __typename
    }
  }
`;
