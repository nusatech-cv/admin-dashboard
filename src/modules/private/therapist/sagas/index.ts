import { takeLatest } from "redux-saga/effects";
import { THERAPIST_FETCH, THERAPIST_RATING_FETCH } from "../constants";

import { getTherapistSaga } from "./getTherapistSaga";
import { getTherapistRatingSaga } from "./getTherapistRatingSaga";

export function* rootTherapistSaga() {
  yield takeLatest(THERAPIST_FETCH, getTherapistSaga);
  yield takeLatest(THERAPIST_RATING_FETCH, getTherapistRatingSaga);
}
