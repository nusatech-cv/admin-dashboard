import { takeEvery } from "redux-saga/effects";
import { ERROR_HANDLER_FETCH } from "../constants";
import { errorHandlerSaga } from "./errorHandlerSaga";

export function* rootErrorHandlerSaga() {
  yield takeEvery(ERROR_HANDLER_FETCH, errorHandlerSaga);
}
