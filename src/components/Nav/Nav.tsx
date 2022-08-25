import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Home } from "../../pages";
import { StyledNav } from "./styles";

export const Nav = () => {
  return (
    <StyledNav>
      <Logo />
      <Home />
    </StyledNav>
  );
};
