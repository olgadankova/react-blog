import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import { Container } from "./styles";

export const MainTemplate = () => {
  return (
    <Container>
      <Nav />
      <Outlet />
    </Container>
  );
};
