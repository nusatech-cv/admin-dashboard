import { CommonError } from "@modules/types";
import { OrderActions } from "./actions";
import { OrderSingleInterface, OrdersInterface } from "./types";
import {
  ORDERS_DATA,
  ORDERS_ERROR,
  ORDERS_FETCH,
  ORDER_SINGLE_DATA,
  ORDER_SINGLE_ERROR,
  ORDER_SINGLE_FETCH,
} from "./constants";

export interface OrderState {
  fetch: {
    data: OrdersInterface;
    fetching: boolean;
    success: boolean;
    error?: CommonError;
  };
  fetch_single: {
    data: OrderSingleInterface;
    fetching: boolean;
    success: boolean;
    error?: CommonError;
  };
}

export const initialOrderState: OrderState = {
  fetch: {
    data: {
      orders: [],
    },
    fetching: false,
    success: false,
  },
  fetch_single: {
    data: {
      order: {
        id: 0,
        user: {
          id: 0,
          first_name: "",
          last_name: "",
          email: "",
        },
        therapist: {
          id: 0,
          user_id: 0,
          location: { type: "", coordinates: [0, 0] },
          experience_years: 0,
          photo: "",
          birthdate: "",
          gender: "",
          is_available: false,
          created_at: "",
          updated_at: "",
        },
        service: {
          id: 0,
          name: "",
          description: "",
          price_per_hour: 0,
          image: "",
          minimum_duration: 0,
        },
        order_status: "",
        appointment_date: "",
        appointment_duration: 0,
        total_price: 0,
        rating: 0,
        location: { type: "", coordinates: [0, 0] },
        note: "",
        created_at: "",
        updated_at: "",
        payment: {
          id: 0,
          order_id: 0,
          user_id: 0,
          payment_method: "",
          payment_status: "",
          amount_paid: 0,
          to_account: "",
          sender_account: "",
          payment_expired: "",
          payment_at: "",
          created_at: "",
          updated_at: "",
        },
      },
    },
    fetching: false,
    success: false,
  },
};

export const orderFetchReducer = (
  state: OrderState["fetch"],
  action: OrderActions
): OrderState["fetch"] => {
  switch (action.type) {
    case ORDERS_FETCH:
      return {
        ...state,
        fetching: true,
        success: false,
        error: undefined,
      };
    case ORDERS_DATA:
      return {
        ...state,
        data: action.payload.data,
        fetching: false,
        success: true,
        error: undefined,
      };
    case ORDERS_ERROR:
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

export const orderSingleReducer = (
  state: OrderState["fetch_single"],
  action: OrderActions
): OrderState["fetch_single"] => {
  switch (action.type) {
    case ORDER_SINGLE_FETCH:
      return {
        ...state,
        fetching: true,
        success: false,
        error: undefined,
      };
    case ORDER_SINGLE_DATA:
      return {
        ...state,
        data: action.payload.data,
        fetching: false,
        success: true,
        error: undefined,
      };
    case ORDER_SINGLE_ERROR:
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

export const orderReducer = (
  state = initialOrderState,
  action: OrderActions
) => {
  switch (action.type) {
    case ORDERS_FETCH:
    case ORDERS_DATA:
    case ORDERS_ERROR:
      return {
        ...state,
        fetch: orderFetchReducer({ ...state.fetch }, action),
      };

    case ORDER_SINGLE_FETCH:
    case ORDER_SINGLE_DATA:
    case ORDER_SINGLE_ERROR:
      return {
        ...state,
        fetch_single: orderSingleReducer({ ...state.fetch_single }, action),
      };

    default:
      return state;
  }
};
