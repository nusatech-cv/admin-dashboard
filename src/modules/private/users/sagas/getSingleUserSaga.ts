import { call, put } from "redux-saga/effects";
import { createError } from "../../../public/errorHandler";
import { API } from "../../../../api";
import { userSingleData, userSingleError } from "../actions";
import { UserInterface, UserSingleFetch } from "../types";

export function* getSingleUserSaga(action: UserSingleFetch) {
  try {
    const response: UserInterface = yield call(
      API.get({
        apiVersion: "user",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("csrfToken")}`,
        },
      }),
      `/users/${action.user_id}`
    );

    yield put(userSingleData({ data: response }));
  } catch (error) {
    yield put(
      createError({
        error,
        type: "alert",
        extraOptions: {
          actionError: userSingleError,
        },
      })
    );
  }
}
