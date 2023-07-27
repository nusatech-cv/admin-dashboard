import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./satoshi.css";
import "leaflet/dist/leaflet.css";

import { Provider } from "react-redux";
import { store, sagaMiddleware } from "store";
import { rootSaga } from "./modules";

sagaMiddleware.run(rootSaga);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
