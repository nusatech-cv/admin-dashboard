import { CommonError } from "@modules/types";
import {
  SERVICE_CREATE,
  SERVICE_CREATE_DATA,
  SERVICE_CREATE_ERROR,
  SERVICE_DATA,
  SERVICE_DELETE,
  SERVICE_DELETE_DATA,
  SERVICE_DELETE_ERROR,
  SERVICE_ERROR,
  SERVICE_FETCH,
  SERVICE_UPDATE,
  SERVICE_UPDATE_DATA,
  SERVICE_UPDATE_ERROR,
} from "./constants";
import {
  ServiceCreate,
  ServiceCreateData,
  ServiceCreateError,
  ServiceData,
  ServiceDelete,
  ServiceDeleteData,
  ServiceDeleteError,
  ServiceError,
  ServiceFetch,
  ServiceUpdate,
  ServiceUpdateData,
  ServiceUpdateError,
} from "./types";

export type ServiceActions =
  | ServiceCreate
  | ServiceCreateData
  | ServiceCreateError
  | ServiceData
  | ServiceDelete
  | ServiceDeleteData
  | ServiceDeleteError
  | ServiceError
  | ServiceFetch
  | ServiceUpdate
  | ServiceUpdateData
  | ServiceUpdateError;

export const serviceFetch = (): ServiceFetch => ({
  type: SERVICE_FETCH,
});

export const serviceData = (payload: ServiceData["payload"]): ServiceData => ({
  type: SERVICE_DATA,
  payload,
});

export const serviceError = (error: CommonError): ServiceError => ({
  type: SERVICE_ERROR,
  error,
});

export const serviceCreate = (
  payload: ServiceCreate["payload"]
): ServiceCreate => ({
  type: SERVICE_CREATE,
  payload,
});

export const serviceCreateData = (): ServiceCreateData => ({
  type: SERVICE_CREATE_DATA,
});

export const serviceCreateError = (error: CommonError): ServiceCreateError => ({
  type: SERVICE_CREATE_ERROR,
  error,
});

export const serviceUpdate = (
  payload: ServiceUpdate["payload"],
  service_id: ServiceUpdate["service_id"]
): ServiceUpdate => ({
  type: SERVICE_UPDATE,
  payload,
  service_id,
});

export const serviceUpdateData = (): ServiceUpdateData => ({
  type: SERVICE_UPDATE_DATA,
});

export const serviceUpdateError = (error: CommonError): ServiceUpdateError => ({
  type: SERVICE_UPDATE_ERROR,
  error,
});

export const serviceDelete = (
  payload: ServiceDelete["payload"]
): ServiceDelete => ({
  type: SERVICE_DELETE,
  payload,
});

export const serviceDeleteData = (): ServiceDeleteData => ({
  type: SERVICE_DELETE_DATA,
});

export const serviceDeleteError = (error: CommonError): ServiceDeleteError => ({
  type: SERVICE_DELETE_ERROR,
  error,
});
