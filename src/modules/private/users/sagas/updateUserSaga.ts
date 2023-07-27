import { call, put } from "redux-saga/effects";
import { API } from "api";
import { createError, alertPush } from "@modules/index";
import { userUpdateData, userUpdateError } from "../actions";
import { UserUpdate } from "../types";

export function* updateUserSaga(action: UserUpdate) {
  try {
    yield call(
      API.put({
        apiVersion: "user",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("csrfToken")}`,
        },
      }),
      `/users/${action.user_id}`,
      action.payload
    );
    yield put(userUpdateData());
    yield put(
      alertPush({
        message: ["Success Update User"],
        type: "success",
      })
    );
  } catch (error) {
    yield put(
      createError({
        error,
        type: "alert",
        extraOptions: {
          actionError: userUpdateError,
        },
      })
    );
  }
}
