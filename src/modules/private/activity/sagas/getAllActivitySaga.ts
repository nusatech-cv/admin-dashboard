import { call, put } from "redux-saga/effects";
import { createError } from "../../../public/errorHandler";
import { API } from "../../../../api";
import { activityData, activityError } from "../actions";
import { ActivityInterface } from "../types";

export function* getAllActivitySaga() {
  try {
    const activity_history: ActivityInterface = yield call(
      API.get({
        apiVersion: "user",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("csrfToken")}`,
        },
      }),
      `/activity_history`
    );

    yield put(activityData({ data: activity_history }));
  } catch (error) {
    yield put(
      createError({
        error,
        type: "alert",
        extraOptions: {
          actionError: activityError,
        },
      })
    );
  }
}
