type AlertType = "error" | "success";

export interface Alert {
  type?: AlertType;
  code?: number;
  message: string[] | string;
}
