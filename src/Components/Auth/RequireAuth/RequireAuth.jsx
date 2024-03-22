import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getStateIsAuth } from "../../../redux/auth/authSelectors";

const RequireAuth = () => {
  const location = useLocation();
  const isAuth = useSelector(getStateIsAuth);
  return (
    <>
      {isAuth ? <Outlet /> : <Navigate to="auth" state={{ from: location }} />}
    </>
  );
};

export default RequireAuth;
