import { CommonError } from "@modules/types";
import {
  THERAPIST_DATA,
  THERAPIST_ERROR,
  THERAPIST_FETCH,
  THERAPIST_RATING_DATA,
  THERAPIST_RATING_ERROR,
  THERAPIST_RATING_FETCH,
} from "./constants";
import {
  TherapistData,
  TherapistError,
  TherapistFetch,
  TherapistRatingData,
  TherapistRatingError,
  TherapistRatingFetch,
} from "./types";

export type TherapistActions =
  | TherapistData
  | TherapistError
  | TherapistFetch
  | TherapistRatingData
  | TherapistRatingError
  | TherapistRatingFetch;

export const therapistFetch = (): TherapistFetch => ({
  type: THERAPIST_FETCH,
});

export const therapistData = (
  payload: TherapistData["payload"]
): TherapistData => ({
  type: THERAPIST_DATA,
  payload,
});

export const therapistError = (error: CommonError): TherapistError => ({
  type: THERAPIST_ERROR,
  error,
});

export const therapistRatingFetch = (
  therapist_id: TherapistRatingFetch["therapist_id"]
): TherapistRatingFetch => ({
  type: THERAPIST_RATING_FETCH,
  therapist_id,
});

export const therapistRatingData = (
  payload: TherapistRatingData["payload"]
): TherapistRatingData => ({
  type: THERAPIST_RATING_DATA,
  payload,
});

export const therapistRatingError = (
  error: CommonError
): TherapistRatingError => ({
  type: THERAPIST_RATING_ERROR,
  error,
});
