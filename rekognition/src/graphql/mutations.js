/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateOrderStatus = /* GraphQL */ `
  mutation UpdateOrderStatus(
    $orderId: String!
    $status: String!
    $message: String!
  ) {
    updateOrderStatus(orderId: $orderId, status: $status, message: $message) {
      orderId
      status
      message
      __typename
    }
  }
`;
