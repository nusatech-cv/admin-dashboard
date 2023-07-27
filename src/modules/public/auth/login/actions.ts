import { CommonError } from "../../../types";
import {
  AUTH_LOGIN_DATA,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_FETCH,
} from "./constants";

export interface loginDataInterface {
  token: string;
  data: {
    first_name: string;
    last_name:string;
    email: string;
    google_id: string;
    avatar: string;
    role: string;
    token_device: null | string;
    created_at: string;
    updated_at: string;
  };
}

export interface LoginFetch {
  type: typeof AUTH_LOGIN_FETCH;
  payload: {
    code: string;
    redirect_uri: string;
  };
}

export interface LoginError {
  type: typeof AUTH_LOGIN_ERROR;
  error: CommonError;
}

export interface LoginData {
  type: typeof AUTH_LOGIN_DATA;
  payload: loginDataInterface;
}

export type LoginAction = LoginFetch | LoginData | LoginError;

export const login = (payload: LoginFetch["payload"]): LoginFetch => ({
  type: AUTH_LOGIN_FETCH,
  payload,
});

export const loginData = (payload: LoginData["payload"]): LoginData => ({
  type: AUTH_LOGIN_DATA,
  payload,
});

export const loginError = (error: CommonError): LoginError => ({
  type: AUTH_LOGIN_ERROR,
  error,
});
