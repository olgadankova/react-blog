import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../router/router";

export const Content = () => {
  return <Link to={ROUTE.CONTENT}>Content</Link>;
};
