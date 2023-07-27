import { CommonError } from "../../../types";
import { LoginAction, loginDataInterface } from "./actions";
import {
  AUTH_LOGIN_DATA,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_FETCH,
} from "./constants";

export interface LoginState {
  loginLoading: boolean;
  authError?: CommonError;
  data:loginDataInterface;
}

export const initialStateLogin: LoginState = {
  loginLoading: false,
  data:{
    data:{
      avatar:"",
      created_at:"",
      email:"",
      first_name:"",
      google_id:"",
      last_name:"",
      role:"",
      token_device:"",
      updated_at:""
    },
    token: "",
  },
};

export const loginReducer = (
  state = initialStateLogin,
  action: LoginAction
) => {
  switch (action.type) {
    case AUTH_LOGIN_FETCH:
      return { ...state, loginLoading: true };
    case AUTH_LOGIN_DATA:
      return { ...state, data: action.payload , loginLoading: false };
    case AUTH_LOGIN_ERROR:
      return { ...state, authError: action.error, loginLoading: false };
    default:
      return state;
  }
};
