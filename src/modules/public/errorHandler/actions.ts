import { ERROR_HANDLER_DATA, ERROR_HANDLER_FETCH } from "./constants";

export interface ErrorHandlerFetch {
  type: typeof ERROR_HANDLER_FETCH;
  payload: {
    type: "alert";
    error: any;
    extraOptions?: any;
  };
}

export interface ErrorHandlerData {
  type: typeof ERROR_HANDLER_DATA;
}

export type ErrorHandlerAction = ErrorHandlerFetch | ErrorHandlerData;

export const createError = (
  payload: ErrorHandlerFetch["payload"]
): ErrorHandlerFetch => ({
  type: ERROR_HANDLER_FETCH,
  payload,
});

export const getErrorData = (): ErrorHandlerData => ({
  type: ERROR_HANDLER_DATA,
});
