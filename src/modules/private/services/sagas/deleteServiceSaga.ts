import { call, put } from "redux-saga/effects";
import { API } from "api";
import { createError, alertPush } from "@modules/index";
import { serviceDeleteData, serviceDeleteError } from "../actions";
import { ServiceDelete } from "../types";

export function* deleteServiceSaga(action: ServiceDelete) {
  try {
    yield call(
      API.delete({
        apiVersion: "user",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("csrfToken")}`,
        },
      }),
      `/services/${action.payload.service_id}`
    );
    yield put(serviceDeleteData());
    yield put(
      alertPush({
        message: ["Success Delete Service"],
        type: "success",
      })
    );
  } catch (error) {
    yield put(
      createError({
        error,
        type: "alert",
        extraOptions: {
          actionError: serviceDeleteError,
        },
      })
    );
  }
}
