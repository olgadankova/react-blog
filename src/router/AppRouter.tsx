import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./router";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import {
  Content,
  Home,
  NotFound,
  Search,
  SignIn,
  SignUp,
} from "../pages/index";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.HOME} element={<MainTemplate />}>
          <Route index element={<Home />} />
          <Route path={routes.SIGN_IN} element={<SignIn />} />
          <Route path={routes.SIGN_IN} element={<SignUp />} />
          <Route path={routes.CONTENT} element={<Content />} />
          <Route path={routes.SEARCH} element={<Search />} />
          <Route path={routes.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
