import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ROUTE } from "../../router/routes";

export const RequareAuth = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.REGISTRATION} />;
};
