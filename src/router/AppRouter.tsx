import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTE } from "./router";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { Content, Home, NotFound, SignIn, SignUp } from "../pages/index";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTE.HOME} element={<MainTemplate />}>
          <Route index element={<Home />} />
          <Route path={ROUTE.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTE.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTE.CONTENT} element={<Content />} />
          {/* <Route path={ROUTE.SEARCH} element={<Search />} /> */}
          <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
