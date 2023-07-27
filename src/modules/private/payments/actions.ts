import { CommonError } from "@modules/types";
import { PAYMENT_DATA, PAYMENT_ERROR, PAYMENT_FETCH } from "./constants";
import { PaymentData, PaymentError, PaymentFetch } from "./types";

export type PaymentActions = PaymentData | PaymentError | PaymentFetch;

export const paymentFetch = (): PaymentFetch => ({
  type: PAYMENT_FETCH,
});

export const paymentData = (payload: PaymentData["payload"]): PaymentData => ({
  type: PAYMENT_DATA,
  payload,
});

export const paymentError = (error: CommonError): PaymentError => ({
  type: PAYMENT_ERROR,
  error,
});
