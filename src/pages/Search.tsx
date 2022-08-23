import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../router/router";

export const Search = () => {
  return <Link to={ROUTE.SEARCH}>Search</Link>;
};
