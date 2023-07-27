import { RootState } from "../../../index";
import { LoginState } from "./reducer";

export const selectLoginLoading = (
  state: RootState
): LoginState["loginLoading"] => state.public.login.loginLoading;

export const selectLoginError = (state: RootState): LoginState["authError"] =>
  state.public.login.authError;

export const selectLoginData = (state: RootState) =>
state.public.login.data;

export const selectUserLoggedIn = (state: RootState): boolean => {
  const {
  } = state;
  return (
    sessionStorage.getItem('csrfToken') !== null
  );
};
