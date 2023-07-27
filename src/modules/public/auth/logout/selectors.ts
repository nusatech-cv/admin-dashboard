import { RootState } from "../../../index";
import { LogoutState } from "./reducer";

export const selectLogoutLoading = (
  state: RootState
): LogoutState["logoutLoading"] => state.public.logout.logoutLoading;

export const selectLogoutError = (
  state: RootState
): LogoutState["logoutError"] => state.public.logout.logoutError;
