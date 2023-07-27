import { takeLatest } from "redux-saga/effects";
import { ORDERS_FETCH, ORDER_SINGLE_FETCH } from "../constants";

import { getAllOrderSaga } from "./getAllOrderSaga";
import { getSingleOrderSaga } from "./getSingleOrderSaga";

export function* rootOrderSaga() {
  yield takeLatest(ORDERS_FETCH, getAllOrderSaga);
  yield takeLatest(ORDER_SINGLE_FETCH, getSingleOrderSaga);
}
