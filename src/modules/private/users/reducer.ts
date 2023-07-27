import { CommonError } from "@modules/types";
import { UserActions } from "./actions";
import { UserInterface, UsersInterface, UserBalanceInteface } from "./types";
import {
  USER_BALANCE_DATA,
  USER_BALANCE_ERROR,
  USER_BALANCE_FETCH,
  USER_DATA,
  USER_ERROR,
  USER_FETCH,
  USER_UPDATE,
  USER_UPDATE_DATA,
  USER_UPDATE_ERROR,
  USER_SINGLE_DATA,
  USER_SINGLE_ERROR,
  USER_SINGLE_FETCH,
} from "./constants";

export interface UserState {
  fetch: {
    data: UsersInterface;
    fetching: boolean;
    success: boolean;
    error?: CommonError;
  };
  fetch_single: {
    data: UserInterface;
    fetching: boolean;
    success: boolean;
    error?: CommonError;
  };
  update: {
    fetching: boolean;
    success: boolean;
    error?: CommonError;
  };
  fetch_balance: {
    data: UserBalanceInteface[];
    fetching: boolean;
    success: boolean;
    error?: CommonError;
  };
}

export const initialUserState: UserState = {
  fetch: {
    data: {
      users: [],
    },
    fetching: false,
    success: false,
  },
  fetch_single: {
    data: {
      id: 0,
      first_name: "",
      last_name: "",
      role: "",
      email: "",
      avatar: "",
      created_at: "",
      updated_at: "",
    },
    fetching: false,
    success: false,
  },
  update: {
    fetching: false,
    success: false,
  },
  fetch_balance: {
    data: [],
    fetching: false,
    success: false,
  },
};

export const userFetchReducer = (
  state: UserState["fetch"],
  action: UserActions
): UserState["fetch"] => {
  switch (action.type) {
    case USER_FETCH:
      return {
        ...state,
        fetching: true,
        success: false,
        error: undefined,
      };
    case USER_DATA:
      return {
        ...state,
        data: action.payload.data,
        fetching: false,
        success: true,
        error: undefined,
      };
    case USER_ERROR:
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

export const userSingleReducer = (
  state: UserState["fetch_single"],
  action: UserActions
): UserState["fetch_single"] => {
  switch (action.type) {
    case USER_SINGLE_FETCH:
      return {
        ...state,
        fetching: true,
        success: false,
        error: undefined,
      };
    case USER_SINGLE_DATA:
      return {
        ...state,
        data: action.payload.data,
        fetching: false,
        success: true,
        error: undefined,
      };
    case USER_SINGLE_ERROR:
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

export const userUpdateReducer = (
  state: UserState["update"],
  action: UserActions
) => {
  switch (action.type) {
    case USER_UPDATE:
      return {
        ...state,
        fetching: true,
      };
    case USER_UPDATE_DATA:
      return {
        ...state,
        fetching: false,
        success: true,
        error: undefined,
      };
    case USER_UPDATE_ERROR:
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

export const userBalanceFetchReducer = (
  state: UserState["fetch_balance"],
  action: UserActions
): UserState["fetch_balance"] => {
  switch (action.type) {
    case USER_BALANCE_FETCH:
      return {
        ...state,
        fetching: true,
        success: false,
        error: undefined,
      };
    case USER_BALANCE_DATA:
      return {
        ...state,
        data: action.payload.data,
        fetching: false,
        success: true,
        error: undefined,
      };
    case USER_BALANCE_ERROR:
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

export const userReducer = (state = initialUserState, action: UserActions) => {
  switch (action.type) {
    case USER_FETCH:
    case USER_DATA:
    case USER_ERROR:
      return {
        ...state,
        fetch: userFetchReducer({ ...state.fetch }, action),
      };

    case USER_SINGLE_FETCH:
    case USER_SINGLE_DATA:
    case USER_SINGLE_ERROR:
      return {
        ...state,
        fetch_single: userSingleReducer({ ...state.fetch_single }, action),
      };

    case USER_UPDATE:
    case USER_UPDATE_DATA:
    case USER_UPDATE_ERROR:
      const userUpdateState = { ...state.update };

      return {
        ...state,
        update: userUpdateReducer(userUpdateState, action),
      };

    case USER_BALANCE_FETCH:
    case USER_BALANCE_DATA:
    case USER_BALANCE_ERROR:
      return {
        ...state,
        fetch_balance: userBalanceFetchReducer(
          { ...state.fetch_balance },
          action
        ),
      };

    default:
      return state;
  }
};
