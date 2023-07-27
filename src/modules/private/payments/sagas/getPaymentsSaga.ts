import { call, put } from "redux-saga/effects";
import { createError } from "../../../public/errorHandler";
import { API } from "../../../../api";
import { paymentData, paymentError } from "../actions";
import { PaymentInterface } from "../types";


export function* getPaymentsSaga() {
  try {
    const response: PaymentInterface = yield call(
      API.get({
        apiVersion: "user",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("csrfToken")}`,
        },
      }),
      `/payments`
    );

    yield put(paymentData({ data: response }));
  } catch (error) {
    yield put(
      createError({
        error,
        type: "alert",
        extraOptions: {
          actionError: paymentError,
        },
      })
    );
  }
}
