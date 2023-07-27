import { CommonError } from "../../../types";
import {
  AUTH_LOGOUT_DATA,
  AUTH_LOGOUT_ERROR,
  AUTH_LOGOUT_FETCH,
} from "./constants";

export interface LogoutFetch {
  type: typeof AUTH_LOGOUT_FETCH;
}

export interface LogoutData {
  type: typeof AUTH_LOGOUT_DATA;
}

export interface LogoutError {
  type: typeof AUTH_LOGOUT_ERROR;
  error: CommonError;
}

export type LogoutAction = LogoutFetch | LogoutData | LogoutError;

export const logout = (): LogoutFetch => ({
  type: AUTH_LOGOUT_FETCH,
});

export const logoutData = (): LogoutData => ({
  type: AUTH_LOGOUT_DATA,
});

export const logoutError = (error: CommonError): LogoutError => ({
  type: AUTH_LOGOUT_ERROR,
  error,
});
