import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import "./index.css";
import RequireAuth from "./Components/Auth/RequireAuth/RequireAuth";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
