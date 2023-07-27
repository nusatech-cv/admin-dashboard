import { CommonError } from "@modules/types";
import {
  ORDERS_DATA,
  ORDERS_ERROR,
  ORDERS_FETCH,
  ORDER_SINGLE_DATA,
  ORDER_SINGLE_ERROR,
  ORDER_SINGLE_FETCH,
} from "./constants";
import {
  OrderSingleData,
  OrderSingleError,
  OrderSingleFetch,
  OrdersData,
  OrdersError,
  OrdersFetch,
} from "./types";

export type OrderActions =
  | OrderSingleData
  | OrderSingleError
  | OrderSingleFetch
  | OrdersData
  | OrdersError
  | OrdersFetch;

export const ordersFetch = (): OrdersFetch => ({
  type: ORDERS_FETCH,
});

export const ordersData = (payload: OrdersData["payload"]): OrdersData => ({
  type: ORDERS_DATA,
  payload,
});

export const ordersError = (error: CommonError): OrdersError => ({
  type: ORDERS_ERROR,
  error,
});

export const orderSingleFetch = (
  order_id: OrderSingleFetch["order_id"]
): OrderSingleFetch => ({
  type: ORDER_SINGLE_FETCH,
  order_id,
});

export const orderSingleData = (
  payload: OrderSingleData["payload"]
): OrderSingleData => ({
  type: ORDER_SINGLE_DATA,
  payload,
});

export const orderSingleError = (error: CommonError): OrderSingleError => ({
  type: ORDER_SINGLE_ERROR,
  error,
});
