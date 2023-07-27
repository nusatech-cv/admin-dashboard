import { call, delay, put } from "redux-saga/effects";
import { alertData, alertDelete } from "..";
import type { AlertPush } from "..";

export function* alertSaga(action: AlertPush) {
  yield call(callAlertData, action);
}

function* callAlertData(action: AlertPush) {
  yield put(alertData(action.payload));
  yield delay(2000);
  yield put(alertDelete());
}
