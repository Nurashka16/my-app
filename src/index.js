import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../my-app/src/App";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import "./index.css";
import Entrance from "./Components/Entrance/Entrance";
import Router from "./Components/Router/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
const isAuth = store.getState().authPage.isAuth;
console.log(isAuth);

//const isAuth2 = useSelector(state => store.authPage.isAuth)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
