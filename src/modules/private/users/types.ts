import {
  USER_BALANCE_DATA,
  USER_BALANCE_ERROR,
  USER_BALANCE_FETCH,
  USER_DATA,
  USER_ERROR,
  USER_FETCH,
  USER_UPDATE,
  USER_UPDATE_DATA,
  USER_UPDATE_ERROR,
  USER_SINGLE_DATA,
  USER_SINGLE_ERROR,
  USER_SINGLE_FETCH,
} from "./constants";
import { CommonError } from "@modules/types";

export interface UserInterface {
  id: number;
  first_name: string;
  last_name: string;
  role: string;
  email: string;
  avatar: string;
  created_at: string;
  updated_at: string;
}

export interface UsersInterface {
  users: UserInterface[];
}

export interface UserBalanceInteface {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
  balance_amount: number;
}

export interface UserFetch {
  type: typeof USER_FETCH;
}

export interface UserData {
  type: typeof USER_DATA;
  payload: {
    data: UsersInterface;
  };
}

export interface UserError {
  type: typeof USER_ERROR;
  error: CommonError;
}

export interface UserSingleFetch {
  type: typeof USER_SINGLE_FETCH;
  user_id: string;
}

export interface UserSingleData {
  type: typeof USER_SINGLE_DATA;
  payload: {
    data: UserInterface;
  };
}

export interface UserSingleError {
  type: typeof USER_SINGLE_ERROR;
  error: CommonError;
}

export interface UserUpdate {
  type: typeof USER_UPDATE;
  payload: {
    first_name: string;
    last_name: string;
    avatar: string;
    role: string;
  };
  user_id: string | number;
}

export interface UserUpdateData {
  type: typeof USER_UPDATE_DATA;
}

export interface UserUpdateError {
  type: typeof USER_UPDATE_ERROR;
  error: CommonError;
}

export interface UserBalanceFetch {
  type: typeof USER_BALANCE_FETCH;
}

export interface UserBalanceData {
  type: typeof USER_BALANCE_DATA;
  payload: {
    data: UserBalanceInteface[];
  };
}

export interface UserBalanceError {
  type: typeof USER_BALANCE_ERROR;
  error: CommonError;
}
