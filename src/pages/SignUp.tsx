import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../router/router";

export const SignUp = () => {
  return <Link to={ROUTE.SIGN_UP}>SignUp</Link>;
};
