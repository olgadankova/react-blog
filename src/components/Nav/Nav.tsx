import { Link } from "react-router-dom";
import { Logo } from "../../assets";
import { Loupe } from "../../assets";
import { ROUTE } from "../../router/routes";
import { StyledNav } from "./styles";

export const Nav = () => {
  return (
    <StyledNav>
      <Link to={ROUTE.HOME}>
        <Logo />
      </Link>
      <Loupe />
      <Link to={ROUTE.SIGN_UP}>Sign Up</Link>
      <Link to={ROUTE.SIGN_IN}>Sign In</Link>
    </StyledNav>
  );
};
