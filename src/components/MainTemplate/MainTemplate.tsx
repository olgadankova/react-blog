import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Nav } from "../Nav/Nav";
import { Wrapper } from "./styles";

export const MainTemplate = () => {
  return (
    <>
      <Nav />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
};
