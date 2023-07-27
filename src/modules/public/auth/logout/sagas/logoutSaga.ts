import { put } from "redux-saga/effects";
import { createError } from "../../../errorHandler";
import { logoutError } from "../actions";
import { alertPush } from "@modules/index";

export function* logoutSaga() {
  try {
    sessionStorage.removeItem("csrfToken");
    yield put(
      alertPush({
        message: "Successfull Logout",
        type: "success",
      })
    );
  } catch (error) {
    yield put(
      createError({
        error,
        type: "alert",
        extraOptions: {
          actionError: logoutError,
        },
      })
    );
  }
}
