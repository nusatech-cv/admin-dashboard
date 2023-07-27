import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { alertDelete, selectAlert, Alert as AlertState } from "@modules/index";

export const Alerts = () => {
  const dispatch = useDispatch();
  const alerts: AlertState[] = useSelector(selectAlert);

  const showToast = (msg: any, type: any) => {
    if (type === "error") {
      toast.error(msg);
    } else {
      toast.success(msg);
    }
    return null;
  };

  useEffect(() => {
    dispatch(alertDelete());
  }, [dispatch]);

  return (
    <>
      {alerts.map(({ message, type }, index) => (
        <div key={index} className="capitalize">
          {showToast(message, type === "error" ? "error" : "success")}
        </div>
      ))}
    </>
  );
};
