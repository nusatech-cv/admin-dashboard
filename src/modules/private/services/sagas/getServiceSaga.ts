import { call, put } from "redux-saga/effects";
import { createError } from "../../../public/errorHandler";
import { API } from "../../../../api";
import { serviceData, serviceError } from "../actions";
import { ServiceInterface } from "../types";

export function* getServiceSaga() {
  try {
    const { data }: ServiceInterface = yield call(
      API.get({
        apiVersion: "user",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("csrfToken")}`,
        },
      }),
      `/services`
    );

    yield put(serviceData({ data: data }));
  } catch (error) {
    yield put(
      createError({
        error,
        type: "alert",
        extraOptions: {
          actionError: serviceError,
        },
      })
    );
  }
}
