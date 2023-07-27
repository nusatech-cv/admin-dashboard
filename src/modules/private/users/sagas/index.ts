import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  USER_FETCH,
  USER_BALANCE_FETCH,
  USER_UPDATE,
  USER_SINGLE_FETCH,
} from "../constants";

import { getUsersSaga } from "./getUsersSaga";
import { getUserBalanceSaga } from "./getUserBalanceSaga";
import { updateUserSaga } from "./updateUserSaga";
import { getSingleUserSaga } from "./getSingleUserSaga";

export function* rootUserSaga() {
  yield takeLatest(USER_FETCH, getUsersSaga);
  yield takeLatest(USER_SINGLE_FETCH, getSingleUserSaga);
  yield takeLatest(USER_BALANCE_FETCH, getUserBalanceSaga);
  yield takeEvery(USER_UPDATE, updateUserSaga);
}
