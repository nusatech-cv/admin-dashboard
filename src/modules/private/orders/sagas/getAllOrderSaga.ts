import { call, put } from "redux-saga/effects";
import { createError } from "../../../public/errorHandler";
import { API } from "../../../../api";
import { ordersData, ordersError } from "../actions";
import { OrdersInterface } from "../types";


export function* getAllOrderSaga() {
  try {
    const response: OrdersInterface = yield call(
      API.get({
        apiVersion: "user",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("csrfToken")}`,
        },
      }),
      `/orders`
    );

    yield put(ordersData({ data: response }));
  } catch (error) {
    yield put(
      createError({
        error,
        type: "alert",
        extraOptions: {
          actionError: ordersError,
        },
      })
    );
  }
}
