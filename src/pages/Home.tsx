import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../router/router";

export const Home = () => {
  return (
    <div>
      <Link to={ROUTE.HOME}></Link>
    </div>
  );
};
