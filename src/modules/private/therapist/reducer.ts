import { CommonError } from "@modules/types";
import { TherapistActions } from "./actions";
import { TherapistInterface, TherapistRatingInterface } from "./types";
import {
  THERAPIST_DATA,
  THERAPIST_ERROR,
  THERAPIST_FETCH,
  THERAPIST_RATING_DATA,
  THERAPIST_RATING_ERROR,
  THERAPIST_RATING_FETCH,
} from "./constants";

export interface TherapistState {
  fetch: {
    data: TherapistInterface[];
    fetching: boolean;
    success: boolean;
    error?: CommonError;
  };
  fetch_rating: {
    data: TherapistRatingInterface[];
    fetching: boolean;
    success: boolean;
    error?: CommonError;
  };
}

export const initialTherapistState: TherapistState = {
  fetch: {
    data: [],
    fetching: false,
    success: false,
  },
  fetch_rating: {
    data: [],
    fetching: false,
    success: false,
  },
};

export const therapistFetchReducer = (
  state: TherapistState["fetch"],
  action: TherapistActions
): TherapistState["fetch"] => {
  switch (action.type) {
    case THERAPIST_FETCH:
      return {
        ...state,
        fetching: true,
        success: false,
        error: undefined,
      };
    case THERAPIST_DATA:
      return {
        ...state,
        data: action.payload.data,
        fetching: false,
        success: true,
        error: undefined,
      };
    case THERAPIST_ERROR:
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

export const therapistRatingReducer = (
  state: TherapistState["fetch_rating"],
  action: TherapistActions
): TherapistState["fetch_rating"] => {
  switch (action.type) {
    case THERAPIST_RATING_FETCH:
      return {
        ...state,
        fetching: true,
        success: false,
        error: undefined,
      };
    case THERAPIST_RATING_DATA:
      return {
        ...state,
        data: action.payload.data,
        fetching: false,
        success: true,
        error: undefined,
      };
    case THERAPIST_RATING_ERROR:
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

export const therapistReducer = (
  state = initialTherapistState,
  action: TherapistActions
) => {
  switch (action.type) {
    case THERAPIST_FETCH:
    case THERAPIST_DATA:
    case THERAPIST_ERROR:
      return {
        ...state,
        fetch: therapistFetchReducer({ ...state.fetch }, action),
      };

    case THERAPIST_RATING_FETCH:
    case THERAPIST_RATING_DATA:
    case THERAPIST_RATING_ERROR:
      return {
        ...state,
        fetch_rating: therapistRatingReducer({ ...state.fetch_rating }, action),
      };

    default:
      return state;
  }
};
