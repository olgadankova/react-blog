import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../router/router";

export const NotFound = () => {
  return <Link to={ROUTE.NOT_FOUND}>NotFound</Link>;
};
