import { call, put } from "redux-saga/effects";
import { createError } from "../../../public/errorHandler";
import { API } from "../../../../api";
import { userData, userError } from "../actions";
import { UsersInterface } from "../types";

export function* getUsersSaga() {
  try {
    const users: UsersInterface = yield call(
      API.get({
        apiVersion: "user",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("csrfToken")}`,
        },
      }),
      `/users`
    );

    yield put(userData({ data: users }));
  } catch (error) {
    yield put(
      createError({
        error,
        type: "alert",
        extraOptions: {
          actionError: userError,
        },
      })
    );
  }
}
