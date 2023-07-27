import { RootState, CommonError } from "@modules/index";

/* ========== FETCH ========== */
export const selectOrders = (state: RootState) =>
  state.private.order.fetch.data;

export const selectOrdersLoading = (state: RootState): boolean =>
  state.private.order.fetch.fetching;

export const selectOrdersSuccess = (state: RootState): boolean =>
  state.private.order.fetch.success;

export const selectOrdersError = (state: RootState): CommonError | undefined =>
  state.private.order.fetch.error;

/* ========== FETCH SINGLE ========== */
export const selectSingleOrder = (state: RootState) =>
  state.private.order.fetch_single.data;

export const selectSingleOrderLoading = (state: RootState): boolean =>
  state.private.order.fetch_single.fetching;

export const selectSingleOrderSuccess = (state: RootState): boolean =>
  state.private.order.fetch_single.success;

export const selectSingleOrderError = (
  state: RootState
): CommonError | undefined => state.private.order.fetch_single.error;
