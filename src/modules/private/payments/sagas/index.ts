import { takeLatest } from "redux-saga/effects";
import { PAYMENT_FETCH } from "../constants";

import { getPaymentsSaga } from "./getPaymentsSaga";

export function* rootPaymentSaga() {
  yield takeLatest(PAYMENT_FETCH, getPaymentsSaga);
}
