import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Home, SignIn } from "../../pages";
import { Search } from "../../pages/Search";
import { StyledNav } from "./styles";

export const Nav = () => {
  return (
    <StyledNav>
      <Logo />
      <Home />
      <Search />
      <SignIn />
    </StyledNav>
  );
};
