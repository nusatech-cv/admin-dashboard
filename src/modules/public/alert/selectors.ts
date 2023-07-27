import { RootState } from "../../../store";
import { Alert } from ".";

export const selectAlert = (state: RootState): Alert[] =>
  state.public.alerts.alerts;
