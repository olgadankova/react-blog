import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { Content, Home, NotFound, Search, SignIn, SignUp } from "../pages";
import { ROUTE } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path={ROUTE.SEARCH} element={<Search />} />
        <Route path={ROUTE.CONTENT} element={<Content />} />
      </Route>
      <Route path={ROUTE.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTE.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};
