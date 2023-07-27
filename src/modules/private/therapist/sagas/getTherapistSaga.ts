import { call, put } from "redux-saga/effects";
import { createError } from "../../../public/errorHandler";
import { API } from "../../../../api";
import { therapistData, therapistError } from "../actions";


export function* getTherapistSaga() {
  try {
    const response = yield call(
      API.get({
        apiVersion: "user",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("csrfToken")}`,
        },
      }),
      `/therapist`
    );    

    yield put(therapistData({ data: response?.data }));
  } catch (error) {
    yield put(
      createError({
        error,
        type: "alert",
        extraOptions: {
          actionError: therapistError,
        },
      })
    );
  }
}
