import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Presentation/App";
import { Provider } from "react-redux";
import store from "./Aplication/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
