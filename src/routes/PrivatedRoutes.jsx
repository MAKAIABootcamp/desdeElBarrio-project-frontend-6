import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivatedRoutes = ({
  isAuthenticate,
  redirectPath = "/Login",
  children,
}) => {
  if (!isAuthenticate) return <Navigate to={redirectPath = "/Admin"} />;
  return <div>{children ? children : <Outlet />}</div>;
};

export default PrivatedRoutes;