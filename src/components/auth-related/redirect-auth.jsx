import React from "react";
import { Navigate, Outlet } from "react-router";
import { App_Routes } from "../../utils";

const RedirectAuth = ({ token }) => {
  // id and token whether logged in or not.
  return token ? <Navigate to={App_Routes.home} replace={true} /> : <Outlet />;
};

export { RedirectAuth };
