import { CommonError } from "@modules/types";
import {
  ACTIVITY_DATA,
  ACTIVITY_ERROR,
  ACTIVITY_FETCH,
  ACTIVITY_SINGLE_DATA,
  ACTIVITY_SINGLE_ERROR,
  ACTIVITY_SINGLE_FETCH,
} from "./constants";

export interface HistoryInterface {
  id: number;
  user_id: number;
  first_name: string;
  last_name: string;
  user_email: string;
  timestamp: string;
  ip_address: string;
  updated_at: string;
  result: string;
  location: { x: number; y: number };
  activity_type: string;
  device_info: string;
  created_at: string;
}

export interface ActivityInterface {
  activity_history: HistoryInterface[];
}

export interface ActivitySingleInterface {
  activity: HistoryInterface;
}

export interface ActivityFetch {
  type: typeof ACTIVITY_FETCH;
}

export interface ActivityData {
  type: typeof ACTIVITY_DATA;
  payload: {
    data: ActivityInterface;
  };
}

export interface ActivityError {
  type: typeof ACTIVITY_ERROR;
  error: CommonError;
}

export interface ActivitySingleFetch {
  type: typeof ACTIVITY_SINGLE_FETCH;
  activity_id: string;
}

export interface ActivitySingleData {
  type: typeof ACTIVITY_SINGLE_DATA;
  payload: {
    data: ActivitySingleInterface;
  };
}

export interface ActivitySingleError {
  type: typeof ACTIVITY_SINGLE_ERROR;
  error: CommonError;
}
