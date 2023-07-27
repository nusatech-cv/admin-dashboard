import { combineReducers } from "redux";
import { alertReducer } from "./public/alert";
import { errorHandlerReducer } from "./public/errorHandler";
import { loginReducer } from "./public/auth/login";
import { logoutReducer } from "./public/auth/logout";
import { serviceReducer } from "./private/services";
import { userReducer } from "./private/users";
import { therapistReducer } from "./private/therapist";
import { orderReducer } from "./private/orders";
import { activityReducer } from "./private/activity";
import { paymentReducer } from "./private/payments";

export const publicReducer = combineReducers({
  alerts: alertReducer,
  errorHandler: errorHandlerReducer,
  login: loginReducer,
  logout: logoutReducer,
});

export const privateReducer = combineReducers({
  service: serviceReducer,
  user: userReducer,
  therapist: therapistReducer,
  order: orderReducer,
  activity: activityReducer,
  payment: paymentReducer,
});
