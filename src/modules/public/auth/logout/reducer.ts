import { CommonError } from "../../../types";
import { LogoutAction } from "./actions";
import {
  AUTH_LOGOUT_DATA,
  AUTH_LOGOUT_ERROR,
  AUTH_LOGOUT_FETCH,
} from "./constants";

export interface LogoutState {
  logoutError?: CommonError;
  logoutLoading: boolean;
  logoutSuccess: boolean;
}

export const initialStateLogout: LogoutState = {
  logoutLoading: false,
  logoutSuccess: false,
};

export const logoutReducer = (
  state = initialStateLogout,
  action: LogoutAction
) => {
  switch (action.type) {
    case AUTH_LOGOUT_FETCH:
      return { ...state, logoutLoading: true };
    case AUTH_LOGOUT_DATA:
      return {
        ...state,
        logoutLoading: false,
        logoutSuccess: true,
        loginSuccess: false,
      };
    case AUTH_LOGOUT_ERROR:
      return { ...state, logoutError: action.error };
    default:
      return state;
  }
};
