import React from "react";
import { StyledFooter, ExpDate, FooterToggle } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <ExpDate>©2022 Blogologo</ExpDate>
      <FooterToggle>Light theme</FooterToggle>
    </StyledFooter>
  );
};
