import { ALERT_PUSH, ALERT_DATA, ALERT_DELETE } from "./constants";
import type { Alert } from "./types";
import { AlertAction } from "./actions";

export interface AlertState {
  alerts: Alert[];
}

export const initalAlertState: AlertState = {
  alerts: [],
};

export const alertReducer = (state = initalAlertState, action: AlertAction) => {
  switch (action.type) {
    case ALERT_DATA:
      const data = [...state.alerts, action.payload];
      const uniqueObjects = Array.from(
        new Set(data.map((obj) => obj.message[0]))
      ).map((message) => {
        return data.find((obj) => obj.message[0] === message);
      });
      return {
        alerts: uniqueObjects,
      };
    case ALERT_DELETE:
      return {
        alerts: [...state.alerts.slice(1, state.alerts.length)],
      };
    case ALERT_PUSH:
    default:
      return state;
  }
};
