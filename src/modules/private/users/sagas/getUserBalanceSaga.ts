import { call, put } from "redux-saga/effects";
import { createError } from "../../../public/errorHandler";
import { API } from "../../../../api";
import { userBalanceData, userBalanceError } from "../actions";
import { UserBalanceInteface } from "../types";

export function* getUserBalanceSaga() {
  try {
    const response: UserBalanceInteface[] = yield call(
      API.get({
        apiVersion: "user",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("csrfToken")}`,
        },
      }),
      `/users`
    );

    yield put(userBalanceData({ data: response }));
  } catch (error) {
    yield put(
      createError({
        error,
        type: "alert",
        extraOptions: {
          actionError: userBalanceError,
        },
      })
    );
  }
}
