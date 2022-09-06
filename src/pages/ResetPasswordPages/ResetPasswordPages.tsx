import { ArrowBack } from "../../components/ArrowBack/ArrowBack";
import { Nav } from "../../components/Nav/Nav";
import { ResetPassword } from "../../components/ResetPassword/ResetPassword";
import { StyledReset } from "./styles";

export const ResetPasswordPages = () => {
  return (
    <>
      <Nav />
      <ArrowBack />
      <StyledReset>
        <ResetPassword />
      </StyledReset>
    </>
  );
};
