import { takeEvery } from "redux-saga/effects";
import { AUTH_LOGOUT_FETCH } from "../constants";
import { logoutSaga } from "./logoutSaga";

export function* rootLogoutSaga() {
  yield takeEvery(AUTH_LOGOUT_FETCH, logoutSaga);
}
