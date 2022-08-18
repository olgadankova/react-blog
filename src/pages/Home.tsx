import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../router/router";

export const Home = () => {
  return (
    <div>
      <Link to={routes.HOME}></Link>
    </div>
  );
};
