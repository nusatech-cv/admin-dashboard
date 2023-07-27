import { takeEvery } from "redux-saga/effects";
import { ALERT_PUSH } from "../constants";
import { alertSaga } from "./alertSaga";

export function* rootAlertSaga() {
  yield takeEvery(ALERT_PUSH, alertSaga);
}
