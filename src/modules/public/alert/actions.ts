import { ALERT_PUSH, ALERT_DATA, ALERT_DELETE } from "./constants";
import { Alert } from "./types";

export interface AlertPush {
  type: typeof ALERT_PUSH;
  payload: Alert;
}

export interface AlertData {
  type: typeof ALERT_DATA;
  payload: Alert;
}

export interface AlertDelete {
  type: typeof ALERT_DELETE;
}

export type AlertAction = AlertPush | AlertData | AlertDelete;

export const alertPush = (payload: AlertPush["payload"]): AlertPush => ({
  type: "ALERT_PUSH",
  payload,
});

export const alertData = (payload: AlertData["payload"]): AlertData => ({
  type: "ALERT_DATA",
  payload,
});

export const alertDelete = (): AlertDelete => ({
  type: "ALERT_DELETE",
});
