import { CommonError } from "@modules/types";
import { ActivityActions } from "./actions";
import {
  ActivityInterface,
  HistoryInterface,
  ActivitySingleInterface,
} from "./types";
import {
  ACTIVITY_DATA,
  ACTIVITY_ERROR,
  ACTIVITY_FETCH,
  ACTIVITY_SINGLE_DATA,
  ACTIVITY_SINGLE_ERROR,
  ACTIVITY_SINGLE_FETCH,
} from "./constants";

export interface ActivityState {
  fetch: {
    data: ActivityInterface;
    fetching: boolean;
    success: boolean;
    error?: CommonError;
  };
  fetch_single: {
    data: ActivitySingleInterface;
    fetching: boolean;
    success: boolean;
    error?: CommonError;
  };
}

export const initialActivityState: ActivityState = {
  fetch: {
    data: {
      activity_history: [],
    },
    fetching: false,
    success: false,
  },
  fetch_single: {
    data: {
      activity: {
        id: 0,
        user_id: 0,
        first_name: "",
        last_name: "",
        user_email: "",
        timestamp: "",
        ip_address: "",
        device_info: "",
        location: { x: 0, y: 0 },
        activity_type:"",
        created_at:"",
        result:"",
        updated_at:"",
      },
    },
    fetching: false,
    success: false,
  },
};

export const activityFetchReducer = (
  state: ActivityState["fetch"],
  action: ActivityActions
): ActivityState["fetch"] => {
  switch (action.type) {
    case ACTIVITY_FETCH:
      return {
        ...state,
        fetching: true,
        success: false,
        error: undefined,
      };
    case ACTIVITY_DATA:
      return {
        ...state,
        data: action.payload.data,
        fetching: false,
        success: true,
        error: undefined,
      };
    case ACTIVITY_ERROR:
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

export const activitySingleReducer = (
  state: ActivityState["fetch_single"],
  action: ActivityActions
): ActivityState["fetch_single"] => {
  switch (action.type) {
    case ACTIVITY_SINGLE_FETCH:
      return {
        ...state,
        fetching: true,
        success: false,
        error: undefined,
      };
    case ACTIVITY_SINGLE_DATA:
      return {
        ...state,
        data: action.payload.data,
        fetching: false,
        success: true,
        error: undefined,
      };
    case ACTIVITY_SINGLE_ERROR:
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

export const activityReducer = (
  state = initialActivityState,
  action: ActivityActions
) => {
  switch (action.type) {
    case ACTIVITY_FETCH:
    case ACTIVITY_DATA:
    case ACTIVITY_ERROR:
      return {
        ...state,
        fetch: activityFetchReducer({ ...state.fetch }, action),
      };

    case ACTIVITY_SINGLE_FETCH:
    case ACTIVITY_SINGLE_DATA:
    case ACTIVITY_SINGLE_ERROR:
      return {
        ...state,
        fetch_single: activitySingleReducer({ ...state.fetch_single }, action),
      };

    default:
      return state;
  }
};
