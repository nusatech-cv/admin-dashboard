import { call, put } from "redux-saga/effects";
import { createError } from "../../../public/errorHandler";
import { API } from "../../../../api";
import { therapistRatingData, therapistRatingError } from "../actions";
import { TherapistRatingInterface, TherapistRatingFetch } from "../types";


export function* getTherapistRatingSaga(action: TherapistRatingFetch) {
  try {
    const response: TherapistRatingInterface[] = yield call(
      API.get({
        apiVersion: "user",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("csrfToken")}`,
        },
      }),
      `/therapist/${action.therapist_id}/ratings`
    );

    yield put(therapistRatingData({ data: response }));
  } catch (error) {
    yield put(
      createError({
        error,
        type: "alert",
        extraOptions: {
          actionError: therapistRatingError,
        },
      })
    );
  }
}
