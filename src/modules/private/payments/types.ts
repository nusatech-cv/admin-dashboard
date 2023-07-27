import { CommonError } from "@modules/types";
import { PAYMENT_DATA, PAYMENT_ERROR, PAYMENT_FETCH } from "./constants";

export interface PaymentsInf {
  id: number;
  order_id: number;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
  therapist: {
    id: number;
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
  service: {
    id: number;
    name: string;
    description: string;
    price_per_hour: number;
    image: string;
    minimum_duration: number;
  };
  payment_method: string;
  payment_status: string;
  amount_paid: number;
  to_account: string;
  sender_account: string;
  payment_expired: string;
  payment_at: string;
  created_at: string;
  updated_at: string;
  order_duration: number;
}

export interface PaymentInterface {
  payments: PaymentsInf[];
  total_revenue: number;
}

export interface PaymentFetch {
  type: typeof PAYMENT_FETCH;
}

export interface PaymentData {
  type: typeof PAYMENT_DATA;
  payload: {
    data: PaymentInterface;
  };
}

export interface PaymentError {
  type: typeof PAYMENT_ERROR;
  error: CommonError;
}
