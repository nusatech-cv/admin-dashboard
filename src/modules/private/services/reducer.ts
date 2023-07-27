import { CommonError } from "@modules/types";
import { ServiceActions } from "./actions";
import { ServiceInterface } from "./types";
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

export interface ServiceState {
  fetch: {
    data: ServiceInterface;
    fetching: boolean;
    success: boolean;
    error?: CommonError;
  };

  create: {
    fetching: boolean;
    success: boolean;
    error?: CommonError;
  };

  update: {
    fetching: boolean;
    success: boolean;
    error?: CommonError;
  };

  delete: {
    fetching: boolean;
    success: boolean;
    error?: CommonError;
  };
}

export const initialServiceState: ServiceState = {
  fetch: {
    data: {
      data: [],
    },
    fetching: false,
    success: false,
  },

  create: {
    fetching: false,
    success: false,
  },

  delete: {
    fetching: false,
    success: false,
  },

  update: {
    fetching: false,
    success: false,
  },
};

export const serviceFetchReducer = (
  state: ServiceState["fetch"],
  action: ServiceActions
): ServiceState["fetch"] => {
  switch (action.type) {
    case SERVICE_FETCH:
      return {
        ...state,
        fetching: true,
        success: false,
        error: undefined,
      };
    case SERVICE_DATA:
      return {
        ...state,
        data: action.payload,
        fetching: false,
        success: true,
        error: undefined,
      };
    case SERVICE_ERROR:
      return {
        ...state,
        fetching: false,
        success: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const serviceCreateReducer = (
  state: ServiceState["create"],
  action: ServiceActions
) => {
  switch (action.type) {
    case SERVICE_CREATE:
      return {
        ...state,
        fetching: true,
        success: false,
      };
    case SERVICE_CREATE_DATA:
      return {
        ...state,
        fetching: false,
        success: true,
        error: undefined,
      };
    case SERVICE_CREATE_ERROR:
      return {
        ...state,
        fetching: false,
        success: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const serviceUpdateReducer = (
  state: ServiceState["update"],
  action: ServiceActions
) => {
  switch (action.type) {
    case SERVICE_UPDATE:
      return {
        ...state,
        fetching: true,
        success: false,
      };
    case SERVICE_UPDATE_DATA:
      return {
        ...state,
        fetching: false,
        success: true,
        error: undefined,
      };
    case SERVICE_UPDATE_ERROR:
      return {
        ...state,
        fetching: false,
        success: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const serviceDeleteReducer = (
  state: ServiceState["delete"],
  action: ServiceActions
) => {
  switch (action.type) {
    case SERVICE_DELETE:
      return {
        ...state,
        fetching: true,
        success: false,
      };
    case SERVICE_DELETE_DATA:
      return {
        ...state,
        fetching: false,
        success: true,
        error: undefined,
      };
    case SERVICE_DELETE_ERROR:
      return {
        ...state,
        fetching: false,
        success: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const serviceReducer = (
  state = initialServiceState,
  action: ServiceActions
) => {
  switch (action.type) {
    case SERVICE_FETCH:
    case SERVICE_DATA:
    case SERVICE_ERROR:
      return {
        ...state,
        fetch: serviceFetchReducer({ ...state.fetch }, action),
      };
    case SERVICE_CREATE:
    case SERVICE_CREATE_DATA:
    case SERVICE_CREATE_ERROR:
      const serviceCreateState = { ...state.create };

      return {
        ...state,
        create: serviceCreateReducer(serviceCreateState, action),
      };

    case SERVICE_UPDATE:
    case SERVICE_UPDATE_DATA:
    case SERVICE_UPDATE_ERROR:
      const serviceUpdateState = { ...state.update };

      return {
        ...state,
        update: serviceUpdateReducer(serviceUpdateState, action),
      };

    case SERVICE_DELETE:
    case SERVICE_DELETE_DATA:
    case SERVICE_DELETE_ERROR:
      const serviceDeleteState = { ...state.delete };

      return {
        ...state,
        delete: serviceDeleteReducer(serviceDeleteState, action),
      };

    default:
      return state;
  }
};
