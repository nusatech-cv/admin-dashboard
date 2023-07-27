import { RootState, CommonError } from "@modules/index";

/* ========== FETCH ========== */
export const selectTherapist = (state: RootState) =>
  state.private.therapist.fetch.data;

export const selectTherapistLoading = (state: RootState): boolean =>
  state.private.therapist.fetch.fetching;

export const selectTherapistSuccess = (state: RootState): boolean =>
  state.private.therapist.fetch.success;

export const selectTherapistError = (
  state: RootState
): CommonError | undefined => state.private.therapist.fetch.error;

/* ========== FETCH RATING ========== */
export const selectTherapistRating = (state: RootState) =>
  state.private.therapist.fetch_rating.data;

export const selectTherapistRatingLoading = (state: RootState): boolean =>
  state.private.therapist.fetch_rating.fetching;

export const selectTherapistRatingSuccess = (state: RootState): boolean =>
  state.private.therapist.fetch_rating.success;

export const selectTherapistRatingError = (
  state: RootState
): CommonError | undefined => state.private.therapist.fetch_rating.error;
