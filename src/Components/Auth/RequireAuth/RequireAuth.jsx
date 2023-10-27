import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const isAuth = useSelector((state) => state.authPage.isAuth);
  const location = useLocation();

  return (
    <>
      {true ? <Outlet /> : <Navigate to="auth" state={{ from: location }} />}
    </>
  );
};

export default RequireAuth;
