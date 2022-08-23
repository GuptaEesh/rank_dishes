import React from "react";
import { Navigate, Outlet } from "react-router";
import { useUser } from "../../helpers/user-context";
import { App_Routes } from "../../utils";

const RequireAuth = ({ token }) => {
  // id and token whether logged in or not.
  const {
    usersState: { authStatus },
  } = useUser();
  return authStatus ? (
    <Outlet />
  ) : (
    <Navigate to={App_Routes.authenticate} replace={true} />
  );
};

export { RequireAuth };
