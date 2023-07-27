import { takeLatest } from "redux-saga/effects";
import { ACTIVITY_FETCH, ACTIVITY_SINGLE_FETCH } from "../constants";

import { getAllActivitySaga } from "./getAllActivitySaga";
import { getSingleActivitySaga } from "./getSingleActivitySaga";

export function* rootActivitySaga() {
  yield takeLatest(ACTIVITY_FETCH, getAllActivitySaga);
  yield takeLatest(ACTIVITY_SINGLE_FETCH, getSingleActivitySaga);
}
