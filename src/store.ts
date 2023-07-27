import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./modules";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: import.meta.env.VITE_MODE !== "production",
});

export { store, sagaMiddleware };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
