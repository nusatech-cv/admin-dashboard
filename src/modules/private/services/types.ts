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
import { CommonError } from "@modules/types";

export interface ServiceInt {
  id: number;
  name: string;
  description: string;
  price_per_hour: string;
  image: { url: string };
  minimum_duration: number | string;
  created_at: string;
  updated_at: string;
}

export interface ServiceInterface {
  data: ServiceInt[];
}

export interface ServiceFetch {
  type: typeof SERVICE_FETCH;
}

export interface ServiceData {
  type: typeof SERVICE_DATA;
  payload: ServiceInterface;
}

export interface ServiceError {
  type: typeof SERVICE_ERROR;
  error: CommonError;
}

export interface ServiceCreate {
  type: typeof SERVICE_CREATE;
  payload: FormData;
}

export interface ServiceCreateData {
  type: typeof SERVICE_CREATE_DATA;
}

export interface ServiceCreateError {
  type: typeof SERVICE_CREATE_ERROR;
  error: CommonError;
}

export interface ServiceUpdate {
  type: typeof SERVICE_UPDATE;
  payload: FormData;
  service_id: string | number;
}

export interface ServiceUpdateData {
  type: typeof SERVICE_UPDATE_DATA;
}

export interface ServiceUpdateError {
  type: typeof SERVICE_UPDATE_ERROR;
  error: CommonError;
}

export interface ServiceDelete {
  type: typeof SERVICE_DELETE;
  payload: {
    service_id: string | number;
  };
}

export interface ServiceDeleteData {
  type: typeof SERVICE_DELETE_DATA;
}

export interface ServiceDeleteError {
  type: typeof SERVICE_DELETE_ERROR;
  error: CommonError;
}
