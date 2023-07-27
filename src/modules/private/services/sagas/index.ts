import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  SERVICE_FETCH,
  SERVICE_CREATE,
  SERVICE_UPDATE,
  SERVICE_DELETE,
} from "../constants";
import { getServiceSaga } from "./getServiceSaga";
import { createServiceSaga } from "./createServiceSaga";
import { updateServiceSaga } from "./updateServiceSaga";
import { deleteServiceSaga } from "./deleteServiceSaga";

export function* rootServiceSaga() {
  yield takeLatest(SERVICE_FETCH, getServiceSaga);
  yield takeEvery(SERVICE_CREATE, createServiceSaga);
  yield takeEvery(SERVICE_UPDATE, updateServiceSaga);
  yield takeEvery(SERVICE_DELETE, deleteServiceSaga);
}
