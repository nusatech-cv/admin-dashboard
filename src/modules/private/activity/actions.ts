import { CommonError } from "@modules/types";
import {
  ACTIVITY_DATA,
  ACTIVITY_ERROR,
  ACTIVITY_FETCH,
  ACTIVITY_SINGLE_DATA,
  ACTIVITY_SINGLE_ERROR,
  ACTIVITY_SINGLE_FETCH,
} from "./constants";
import {
  ActivityData,
  ActivityError,
  ActivityFetch,
  ActivitySingleData,
  ActivitySingleError,
  ActivitySingleFetch,
} from "./types";

export type ActivityActions =
  | ActivityData
  | ActivityError
  | ActivityFetch
  | ActivitySingleData
  | ActivitySingleError
  | ActivitySingleFetch;

export const activityFetch = (): ActivityFetch => ({
  type: ACTIVITY_FETCH,
});

export const activityData = (
  payload: ActivityData["payload"]
): ActivityData => ({
  type: ACTIVITY_DATA,
  payload,
});

export const activityError = (error: CommonError): ActivityError => ({
  type: ACTIVITY_ERROR,
  error,
});

export const activitySingleFetch = (
  activity_id: ActivitySingleFetch["activity_id"]
): ActivitySingleFetch => ({
  type: ACTIVITY_SINGLE_FETCH,
  activity_id,
});

export const activitySingleData = (
  payload: ActivitySingleData["payload"]
): ActivitySingleData => ({
  type: ACTIVITY_SINGLE_DATA,
  payload,
});

export const activitySingleError = (
  error: CommonError
): ActivitySingleError => ({
  type: ACTIVITY_SINGLE_ERROR,
  error,
});
