import { CommonError } from "@modules/types";
import {
  THERAPIST_DATA,
  THERAPIST_ERROR,
  THERAPIST_FETCH,
  THERAPIST_RATING_DATA,
  THERAPIST_RATING_ERROR,
  THERAPIST_RATING_FETCH,
} from "./constants";

export interface TherapistServiceInterface {
  service_id: number;
  name: string;
  description: string;
}

export interface TherapistInterface {
  start_day:number;
  end_day:number;
  start_time:string;
  end_time:string;
  birthdate:string;
  gender:string;
  is_available:boolean;
  first_name:string;
  last_name:string;
  email:string;
  avatar:string;
  role:string;
  average_rating:null | string |number;
  balances:number;
  created_at:string;
  updated_at:string;
  id: number;
  location: {
    x: string | number;
    y: string | number;
  }
}

export interface TherapistRatingInterface {
  id: number;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
  };
  therapist: {
    id: number;
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    average_rating: string;
  };
  order_id: number;
  service: {
    id: number;
    name: string;
    description: string;
  };
  rating: number;
  note: string;
  created_at: number;
  updated_at: number;
}
export interface TherapistFetch {
  type: typeof THERAPIST_FETCH;
}

export interface TherapistData {
  type: typeof THERAPIST_DATA;
  payload: {
    data: TherapistInterface[];
  };
}

export interface TherapistError {
  type: typeof THERAPIST_ERROR;
  error: CommonError;
}

export interface TherapistRatingFetch {
  type: typeof THERAPIST_RATING_FETCH;
  therapist_id: string;
}

export interface TherapistRatingData {
  type: typeof THERAPIST_RATING_DATA;
  payload: {
    data: TherapistRatingInterface[];
  };
}

export interface TherapistRatingError {
  type: typeof THERAPIST_RATING_ERROR;
  error: CommonError;
}
