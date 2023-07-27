import { CommonError } from "@modules/types";
import { PaymentActions } from "./actions";
import { PaymentInterface } from "./types";
import { PAYMENT_DATA, PAYMENT_ERROR, PAYMENT_FETCH } from "./constants";

export interface PaymentState {
  data: PaymentInterface;
  fetching: boolean;
  success: boolean;
  error?: CommonError;
}

const initialPaymentState: PaymentState = {
  data: {
    payments: [],
    total_revenue: 0
  },
  fetching: false,
  success: false,
};

export const paymentReducer = (
  state = initialPaymentState,
  action: PaymentActions
) => {
  switch (action.type) {
    case PAYMENT_FETCH:
      return {
        ...state,
        fetching: true,
        success: false,
        error: undefined,
      };
    case PAYMENT_DATA:
      return {
        ...state,
        data: action.payload.data,
        fetching: false,
        success: true,
        error: undefined,
      };
    case PAYMENT_ERROR:
      return {
        ...state,
        fetching: false,
        success: false,
        error: action.error,
      };
    default:
      return state;
  }
};
