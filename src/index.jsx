import React from "react";
import ReactDOM from "react-dom/client";
// import store from './redux-store'
import store from './redux-slice-store.js'
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App store={store} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
