import { takeEvery } from "redux-saga/effects";
import { AUTH_LOGIN_FETCH } from "../constants";
import { loginSaga } from "./loginSaga";

export function* rootLoginSaga() {
  yield takeEvery(AUTH_LOGIN_FETCH, loginSaga);
}
