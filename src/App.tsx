import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const AlertsContainer = React.lazy(() =>
  import("./containers").then(({ Alerts }) => ({ default: Alerts }))
);
const LayoutContainer = React.lazy(() =>
  import("./routes").then(({ LayoutComponent }) => ({
    default: LayoutComponent,
  }))
);

export default function App() {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("csrfToken");
  React.useEffect(() => {
    if (!token || token === null) {
      navigate("/auth/signin");
    }
  }, [token]);

  return (
    <>
      <AlertsContainer />
      <Toaster position="top-right" />
      <LayoutContainer />
    </>
  );
}
