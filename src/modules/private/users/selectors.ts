import { RootState, CommonError } from "@modules/index";

/* ========== FETCH ========== */
export const selectUser = (state: RootState) =>
  state.private.user.fetch.data.users;

export const selectUserLoading = (state: RootState): boolean =>
  state.private.user.fetch.fetching;

export const selectUserSuccess = (state: RootState): boolean =>
  state.private.user.fetch.success;

export const selectUserError = (state: RootState): CommonError | undefined =>
  state.private.user.fetch.error;

/* ========== FETCH SINGLE ========== */
export const selectUserSingle = (state: RootState) =>
  state.private.user.fetch_single.data;

export const selectUserSingleLoading = (state: RootState): boolean =>
  state.private.user.fetch_single.fetching;

export const selectUserSingleSuccess = (state: RootState): boolean =>
  state.private.user.fetch_single.success;

export const selectUserSingleError = (
  state: RootState
): CommonError | undefined => state.private.user.fetch_single.error;

/* ========== FETCH BALANCE ========== */
export const selectUserBalance = (state: RootState) =>
  state.private.user.fetch_balance.data;

export const selectUserBalanceLoading = (state: RootState): boolean =>
  state.private.user.fetch_balance.fetching;

export const selectUserBalanceSuccess = (state: RootState): boolean =>
  state.private.user.fetch_balance.success;

export const selectUserBalanceError = (
  state: RootState
): CommonError | undefined => state.private.user.fetch_balance.error;

/* ========== UPDATE ========== */
export const selectUserUpdateSuccess = (state: RootState): boolean =>
  state.private.user.update.success;

export const selectUserUpdateLoading = (state: RootState): boolean =>
  state.private.user.update.fetching;

export const selectUserUpdateError = (
  state: RootState
): CommonError | undefined => state.private.user.update.error;
