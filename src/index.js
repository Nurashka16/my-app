import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import "./index.css";
import RequireAuth from "./Components/Auth/RequireAuth/RequireAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));
const isAuth = store.getState().authPage.isAuth;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RequireAuth />
    </Provider>
  </React.StrictMode>
);
