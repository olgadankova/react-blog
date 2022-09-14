import { Route, Routes } from "react-router-dom";
import { Account } from "../components/Account/Account";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { RequareAuth } from "../components/RequareAuth/RequareAuth";
import { ResetPassword } from "../components/ResetPassword/ResetPassword";
import { Home, NotFound, SignIn, SignUp, Search } from "../pages";
import { Articles } from "../pages/Articles/Articles";
import { News } from "../pages/News/News";
import { ROUTE } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path={ROUTE.SEARCH} element={<Search />} />
        <Route element={<RequareAuth />}>
          <Route path={ROUTE.ACCOUNT} element={<Account />} />
        </Route>
        <Route path={ROUTE.ATRICLES_DETAILS} element={<></>} />
        <Route path={ROUTE.NEWS_DETAILS} element={<></>} />
        <Route path={ROUTE.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTE.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<ResetPassword />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
        <Route path={ROUTE.NEWS} element={<News />} />
        <Route path={ROUTE.NEWS_PAGES} element={<News />} />
        <Route path={ROUTE.ARTICLES} element={<Articles />} />
        <Route path={ROUTE.ARTICLES_PAGES} element={<Articles />} />
      </Route>
    </Routes>
  );
};
