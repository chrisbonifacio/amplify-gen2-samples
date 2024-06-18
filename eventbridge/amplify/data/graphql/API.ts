/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type OrderStatusChange = {
  __typename: "OrderStatusChange",
  message?: string | null,
  orderId?: string | null,
  status?: OrderStatus | null,
};

export enum OrderStatus {
  DELIVERED = "DELIVERED",
  PENDING = "PENDING",
  SHIPPED = "SHIPPED",
}


export type NoopQueryVariables = {
};

export type NoopQuery = {
  noop?: string | null,
};

export type PublishOrderFromEventBridgeMutationVariables = {
  message?: string | null,
  orderId?: string | null,
  status?: string | null,
};

export type PublishOrderFromEventBridgeMutation = {
  publishOrderFromEventBridge?:  {
    __typename: "OrderStatusChange",
    message?: string | null,
    orderId?: string | null,
    status?: OrderStatus | null,
  } | null,
};

export type PublishOrderToEventBridgeMutationVariables = {
  message?: string | null,
  orderId?: string | null,
  status?: string | null,
};

export type PublishOrderToEventBridgeMutation = {
  publishOrderToEventBridge?:  {
    __typename: "OrderStatusChange",
    message?: string | null,
    orderId?: string | null,
    status?: OrderStatus | null,
  } | null,
};

export type OnOrderFromEventBridgeSubscriptionVariables = {
};

export type OnOrderFromEventBridgeSubscription = {
  onOrderFromEventBridge?:  {
    __typename: "OrderStatusChange",
    message?: string | null,
    orderId?: string | null,
    status?: OrderStatus | null,
  } | null,
};
