import { call, put } from "redux-saga/effects";
import { alertPush } from "../../alert";
import type { ErrorHandlerFetch } from "../actions";
import { getErrorData } from "../actions";
import { logout } from "@modules/index";

export function* errorHandlerSaga(action: ErrorHandlerFetch) {
  const { error, type, extraOptions } = action.payload;
  if (extraOptions?.actionError) {
    const { actionError, params } = extraOptions;
    yield put(actionError(params || error));
  }

  if (type === "alert") {
    yield call(handleAlertError, error);
  }

  yield put(getErrorData());
}

function* handleAlertError(error: any) {
  if (error.code === 401) {
    yield put(logout());
  }
  yield put(
    alertPush({
      message: error?.message?.split(".")[0],
      type: "error",
    })
  );
}
