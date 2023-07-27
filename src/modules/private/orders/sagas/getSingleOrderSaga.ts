import { call, put } from "redux-saga/effects";
import { createError } from "../../../public/errorHandler";
import { API} from "../../../../api";
import { orderSingleData, orderSingleError } from "../actions";
import { OrderSingleInterface, OrderSingleFetch } from "../types";


export function* getSingleOrderSaga(action: OrderSingleFetch) {
  try {
    const response: OrderSingleInterface = yield call(
      API.get({
        apiVersion: "user",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("csrfToken")}`,
        },
      }),
      `/orders/${action.order_id}`
    );

    yield put(orderSingleData({ data: response }));
  } catch (error) {
    yield put(
      createError({
        error,
        type: "alert",
        extraOptions: {
          actionError: orderSingleError,
        },
      })
    );
  }
}
