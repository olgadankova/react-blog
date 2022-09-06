import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Nav } from "../Nav/Nav";
import { Container, Main, StyledMainTemplate } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Nav />
      <Container>
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Container>
    </StyledMainTemplate>
  );
};
