import { RootState, CommonError } from "@modules/index";

/* ========== FETCH ========== */
export const selectActivity = (state: RootState) =>
  state.private.activity.fetch.data.activity_history;

export const selectActivityLoading = (state: RootState): boolean =>
  state.private.activity.fetch.fetching;

export const selectActivitySuccess = (state: RootState): boolean =>
  state.private.activity.fetch.success;

export const selectActivityError = (
  state: RootState
): CommonError | undefined => state.private.activity.fetch.error;

/* ========== FETCH SINGLE ========== */
export const selectSingleActivity = (state: RootState) =>
  state.private.activity.fetch_single.data;

export const selectSingleActivityLoading = (state: RootState): boolean =>
  state.private.activity.fetch_single.fetching;

export const selectSingleActivitySuccess = (state: RootState): boolean =>
  state.private.activity.fetch_single.success;

export const selectSingleActivityError = (
  state: RootState
): CommonError | undefined => state.private.activity.fetch_single.error;
