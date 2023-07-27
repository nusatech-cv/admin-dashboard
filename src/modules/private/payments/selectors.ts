import { RootState, CommonError } from "@modules/index";

/* ========== FETCH ========== */
export const selectPayment = (state: RootState) => state.private.payment.data;

export const selectPaymentLoading = (state: RootState): boolean =>
  state.private.payment.fetching;

export const selectPaymentSuccess = (state: RootState): boolean =>
  state.private.payment.success;

export const selectPaymentError = (state: RootState): CommonError | undefined =>
  state.private.payment.error;
