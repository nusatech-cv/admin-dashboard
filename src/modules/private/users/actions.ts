import { CommonError } from "@modules/types";
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
import {
  UserBalanceData,
  UserBalanceError,
  UserBalanceFetch,
  UserData,
  UserError,
  UserFetch,
  UserUpdate,
  UserUpdateData,
  UserUpdateError,
  UserSingleData,
  UserSingleError,
  UserSingleFetch,
} from "./types";

export type UserActions =
  | UserBalanceData
  | UserBalanceError
  | UserBalanceFetch
  | UserData
  | UserError
  | UserFetch
  | UserUpdate
  | UserUpdateData
  | UserUpdateError
  | UserSingleData
  | UserSingleError
  | UserSingleFetch;

export const userFetch = (): UserFetch => ({
  type: USER_FETCH,
});

export const userData = (payload: UserData["payload"]): UserData => ({
  type: USER_DATA,
  payload,
});

export const userError = (error: CommonError): UserError => ({
  type: USER_ERROR,
  error,
});

export const userSingleFetch = (
  user_id: UserSingleFetch["user_id"]
): UserSingleFetch => ({
  type: USER_SINGLE_FETCH,
  user_id,
});

export const userSingleData = (
  payload: UserSingleData["payload"]
): UserSingleData => ({
  type: USER_SINGLE_DATA,
  payload,
});

export const userSingleError = (error: CommonError): UserSingleError => ({
  type: USER_SINGLE_ERROR,
  error,
});

export const userUpdate = (
  payload: UserUpdate["payload"],
  user_id: UserUpdate["user_id"]
): UserUpdate => ({
  type: USER_UPDATE,
  payload,
  user_id,
});

export const userUpdateData = (): UserUpdateData => ({
  type: USER_UPDATE_DATA,
});

export const userUpdateError = (error: CommonError): UserUpdateError => ({
  type: USER_UPDATE_ERROR,
  error,
});

export const userBalanceFetch = (): UserBalanceFetch => ({
  type: USER_BALANCE_FETCH,
});

export const userBalanceData = (
  payload: UserBalanceData["payload"]
): UserBalanceData => ({
  type: USER_BALANCE_DATA,
  payload,
});

export const userBalanceError = (error: CommonError): UserBalanceError => ({
  type: USER_BALANCE_ERROR,
  error,
});
