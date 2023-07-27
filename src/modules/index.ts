import { combineReducers } from "redux";
import { all, call } from "redux-saga/effects";
import { publicReducer, privateReducer } from "./app";

import type { AlertState } from "./public/alert";
import { rootAlertSaga } from "./public/alert";
import type { ErrorHandlerState } from "./public/errorHandler";
import { rootErrorHandlerSaga } from "./public/errorHandler";
import type { LoginState } from "./public/auth/login";
import { rootLoginSaga } from "./public/auth/login";
import type { LogoutState } from ".";
import { rootLogoutSaga } from ".";
import type { ServiceState } from "./private/services";
import { rootServiceSaga } from "./private/services";
import type { UserState } from "./private/users/reducer";
import { rootUserSaga } from "./private/users/sagas";
import type { TherapistState } from "./private/therapist";
import { rootTherapistSaga } from "./private/therapist";
import type { OrderState } from "./private/orders";
import { rootOrderSaga } from "./private/orders";
import type { ActivityState } from "./private/activity";
import { rootActivitySaga } from "./private/activity";
import type { PaymentState } from "./private/payments";
import { rootPaymentSaga } from "./private/payments";

export * from "./public/alert";
export * from "./public/auth/login";
export * from "./public/auth/logout";
export * from "./public/errorHandler";
export * from "./private/services";
export * from "./private/users";
export * from "./private/therapist";
export * from "./private/orders";
export * from "./private/activity";
export * from "./private/payments";

export * from "./types";

export interface RootState {
  public: {
    alerts: AlertState;
    errorHandler: ErrorHandlerState;
    login: LoginState;
    logout: LogoutState;
  };
  private: {
    service: ServiceState;
    user: UserState;
    therapist: TherapistState;
    order: OrderState;
    activity: ActivityState;
    payment: PaymentState;
  };
}

export const rootReducer = combineReducers({
  public: publicReducer,
  private: privateReducer,
});

export function* rootSaga() {
  yield all([
    call(rootAlertSaga),
    call(rootErrorHandlerSaga),
    call(rootLoginSaga),
    call(rootLogoutSaga),
    call(rootServiceSaga),
    call(rootUserSaga),
    call(rootTherapistSaga),
    call(rootOrderSaga),
    call(rootActivitySaga),
    call(rootPaymentSaga),
  ]);
}
