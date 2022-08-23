import React from "react";
import { Navigate, Outlet } from "react-router";
import { App_Routes } from "../../utils";

const RequireAuth = ({ token }) => {
  // id and token whether logged in or not.
  return token ? <Outlet /> : <Navigate to={App_Routes.home} replace={true} />;
};

export { RequireAuth };
