import { call, put } from "redux-saga/effects";
import { API } from "api";
import { createError, alertPush } from "@modules/index";
import { serviceCreateData, serviceCreateError } from "../actions";
import { ServiceCreate } from "../types";

export function* createServiceSaga(action: ServiceCreate) {
  try {
    yield call(
      API.post({
        apiVersion: "user",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("csrfToken")}`,
        },
      }),
      `/services`,
      action.payload
    );
    yield put(serviceCreateData());
    yield put(
      alertPush({
        message: ["Success Create Service"],
        type: "success",
      })
    );
  } catch (error) {
    yield put(
      createError({
        error,
        type: "alert",
        extraOptions: {
          actionError: serviceCreateError,
        },
      })
    );
  }
}
