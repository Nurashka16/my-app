import React from "react";
import App from "../../../App";
import { useSelector } from "react-redux";
import RouterAuth from "../RouterAuth/RouterAuth";

const RequireAuth = () => {
  const isAuth = useSelector((state) => state.authPage.isAuth);

  return <>{!isAuth ? <RouterAuth /> : <App />}</>;
};

export default RequireAuth;
