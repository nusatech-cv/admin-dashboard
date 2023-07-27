import { RootState, CommonError } from "@modules/index";

/* ========== FETCH ========== */
export const selectService = (state: RootState) =>
  state.private.service.fetch.data;

export const selectServiceLoading = (state: RootState): boolean =>
  state.private.service.fetch.fetching;

export const selectServiceSuccess = (state: RootState): boolean =>
  state.private.service.fetch.success;

export const selectServiceError = (state: RootState): CommonError | undefined =>
  state.private.service.fetch.error;

/* ========== CREATE ========== */
export const selectServiceCreateSuccess = (state: RootState): boolean =>
  state.private.service.create.success;

export const selectServiceCreateLoading = (state: RootState): boolean =>
  state.private.service.create.fetching;

export const selectServiceCreateError = (
  state: RootState
): CommonError | undefined => state.private.service.create.error;

/* ========== UPDATE ========== */
export const selectServiceUpdateSuccess = (state: RootState): boolean =>
  state.private.service.update.success;

export const selectServiceUpdateLoading = (state: RootState): boolean =>
  state.private.service.update.fetching;

export const selectServiceUpdateError = (
  state: RootState
): CommonError | undefined => state.private.service.update.error;

/* ========== DELETE ========== */
export const selectServiceDeleteSuccess = (state: RootState): boolean =>
  state.private.service.delete.success;

export const selectServiceDeleteLoading = (state: RootState): boolean =>
  state.private.service.delete.fetching;

export const selectServiceDeleteError = (
  state: RootState
): CommonError | undefined => state.private.service.delete.error;
