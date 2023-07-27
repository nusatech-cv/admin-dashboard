import { call, put } from "redux-saga/effects";
import { createError } from "../../../errorHandler";
import { API, RequestOptions } from "../../../../../api";
import { loginData, loginError, LoginFetch } from "../actions";
import { loginDataInterface } from "../actions";
import { alertPush } from "@modules/index";

const sessionsConfig: RequestOptions = {
  apiVersion: "auth",
};

export function* loginSaga(action: LoginFetch) {
  try {
    const response: loginDataInterface = yield call(
      API.post(sessionsConfig),
      "/google",
      action.payload
    );
    if (response?.data?.role?.toLowerCase() === "admin") {
      sessionStorage.setItem("csrfToken", response?.token);
      yield put(
        alertPush({ message: ["Successfully logged in"], type: "success" })
      );
    } else {
      yield put(
        alertPush({ message: ["User Does Not Have Access"], type: "error" })
      );
    }

    yield put(
      loginData({
        data: response?.data,
        token: response?.token,
      })
    );
  } catch (error) {
    yield put(
      createError({
        error: error,
        type: "alert",
        extraOptions: {
          actionError: loginError,
        },
      })
    );
  }
}
