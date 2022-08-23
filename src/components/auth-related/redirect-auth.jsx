import React from "react";
import { Navigate, Outlet } from "react-router";
import { useUser } from "../../helpers/user-context";
import { App_Routes } from "../../utils";

const RedirectAuth = () => {
  // id and token whether logged in or not.
  const {
    usersState: { authStatus },
  } = useUser();
  return authStatus ? (
    <Navigate to={App_Routes.home} replace={true} />
  ) : (
    <Outlet />
  );
};

export { RedirectAuth };
