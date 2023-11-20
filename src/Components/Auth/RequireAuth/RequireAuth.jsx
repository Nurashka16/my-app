import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const location = useLocation();
  const isAuth = useSelector((state) => state.authPage.isAuth);
  return (
    <>
      {isAuth ? <Outlet /> : <Navigate to="auth" state={{ from: location }} />}
    </>
  );
};

export default RequireAuth;
