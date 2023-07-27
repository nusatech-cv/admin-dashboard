import { call, put } from "redux-saga/effects";
import { createError } from "../../../public/errorHandler";
import { API } from "../../../../api";
import { activitySingleData, activitySingleError } from "../actions";
import { ActivitySingleInterface, ActivitySingleFetch } from "../types";

export function* getSingleActivitySaga(action: ActivitySingleFetch) {
  try {
    const response: ActivitySingleInterface = yield call(
      API.get({
        apiVersion: "user",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("csrfToken")}`,
        },
      }),
      `/activity_history/${action.activity_id}`
    );

    yield put(activitySingleData({ data: response }));
  } catch (error) {
    yield put(
      createError({
        error,
        type: "alert",
        extraOptions: {
          actionError: activitySingleError,
        },
      })
    );
  }
}
