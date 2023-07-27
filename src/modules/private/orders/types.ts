import { CommonError } from "@modules/types";
import {
  ORDERS_DATA,
  ORDERS_ERROR,
  ORDERS_FETCH,
  ORDER_SINGLE_DATA,
  ORDER_SINGLE_ERROR,
  ORDER_SINGLE_FETCH,
} from "./constants";

export interface OrdersInter {
  id: number;
  uid: string;
  user_id: number;
  therapist_id: number;
  service_id: number;
  order_status: string;
  appointment_date: string;
  appointment_duration: number;
  total_price: string;
  location: {
    x: number | string;
    y: number | string;
  };
  note: string;
  created_at: string;
  updated_at: string;
}

export interface OrdersInterface {
  orders: OrdersInter[];
}

export interface OrderSingleInterface {
  order: {
    id: number;
    user: {
      id: number;
      first_name: string;
      last_name: string;
      email: string;
    };
    therapist: {
      id: number;
      user_id: number;
      location: { type: string; coordinates: [number, number] };
      experience_years: number;
      photo: string;
      birthdate: string;
      gender: string;
      is_available: boolean;
      created_at: string;
      updated_at: string;
    };
    service: {
      id: number;
      name: string;
      description: string;
      price_per_hour: number;
      image: string;
      minimum_duration: number;
    };
    order_status: string;
    appointment_date: string;
    appointment_duration: number;
    total_price: number;
    rating: number;
    location: { type: string; coordinates: [number, number] };
    note: string;
    created_at: string;
    updated_at: string;
    payment: {
      id: number;
      order_id: number;
      user_id: number;
      payment_method: string;
      payment_status: string;
      amount_paid: number;
      to_account: string;
      sender_account: string;
      payment_expired: string;
      payment_at: string;
      created_at: string;
      updated_at: string;
    };
  };
}

export interface OrdersFetch {
  type: typeof ORDERS_FETCH;
}

export interface OrdersData {
  type: typeof ORDERS_DATA;
  payload: {
    data: OrdersInterface;
  };
}

export interface OrdersError {
  type: typeof ORDERS_ERROR;
  error: CommonError;
}

export interface OrderSingleFetch {
  type: typeof ORDER_SINGLE_FETCH;
  order_id: string;
}

export interface OrderSingleData {
  type: typeof ORDER_SINGLE_DATA;
  payload: {
    data: OrderSingleInterface;
  };
}

export interface OrderSingleError {
  type: typeof ORDER_SINGLE_ERROR;
  error: CommonError;
}
