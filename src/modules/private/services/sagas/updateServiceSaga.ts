import { call, put } from "redux-saga/effects";
import { API } from "api";
import { createError, alertPush } from "@modules/index";
import { serviceUpdateData, serviceUpdateError } from "../actions";
import { ServiceUpdate } from "../types";

export function* updateServiceSaga(action: ServiceUpdate) {
  try {
    yield call(
      API.put({
        apiVersion: "user",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("csrfToken")}`,
        },
      }),
      `/services/${action.service_id}`,
      action.payload
    );
    yield put(serviceUpdateData());
    yield put(
      alertPush({
        message: ["Success Update Service"],
        type: "success",
      })
    );
  } catch (error) {
    yield put(
      createError({
        error,
        type: "alert",
        extraOptions: {
          actionError: serviceUpdateError,
        },
      })
    );
  }
}
