import { ErrorHandlerAction } from "./actions";
import { ERROR_HANDLER_DATA, ERROR_HANDLER_FETCH } from "./constants";

export interface ErrorHandlerState {
  isProcessing: boolean;
}

export const initialErorHandlerState: ErrorHandlerState = {
  isProcessing: false,
};

export const errorHandlerReducer = (
  state = initialErorHandlerState,
  action: ErrorHandlerAction
) => {
  switch (action.type) {
    case ERROR_HANDLER_FETCH:
      return {
        isProcessing: true,
      };
    case ERROR_HANDLER_DATA:
      return {
        isProcessing: false,
      };
    default:
      return state;
  }
};
