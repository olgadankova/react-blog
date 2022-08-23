import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../router/router";

export const SignIn = () => {
  return <Link to={ROUTE.SIGN_IN}>SignIn</Link>;
};
