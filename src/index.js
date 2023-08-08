import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../my-app/src/App";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import "./index.css";
import Entrance from "./Components/Entrance/Entrance";

const root = ReactDOM.createRoot(document.getElementById("root"));
let user = store.getState().authPage.data;
function isAuto(info) {
  if (!info) {
    return <Entrance />;
  } else return <App />;
}
root.render(
  <React.StrictMode>
    <Provider store={store}>{isAuto(user)}</Provider>
  </React.StrictMode>
);
