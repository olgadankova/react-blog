import { Link } from "react-router-dom";
import { Logo } from "../../assets";
import { SearchInput } from "../SearchInput/SearchInput";
import { ROUTE } from "../../router/routes";
import { AuthLink, StyledNav } from "./styles";

export const Nav = () => {
  return (
    <StyledNav>
      <Link to={ROUTE.HOME}>
        <Logo />
      </Link>
      <SearchInput />
      <AuthLink to={ROUTE.SIGN_UP}>Sign Up</AuthLink>
      <AuthLink to={ROUTE.SIGN_IN}>Sign In</AuthLink>
    </StyledNav>
  );
};
