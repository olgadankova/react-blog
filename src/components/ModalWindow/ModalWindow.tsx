import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../router/routes";
import { Button } from "../Button/Button";
import { Portal, PortalTarget } from "../Portal/Portal";
import { Container, StyledModalWindow, Title, Wrapper } from "./styles";

interface IProps {
  isOpen: boolean;
  handleModal: () => void;
}

export const ModalWindow = ({ isOpen, handleModal }: IProps) => {
  return isOpen ? (
    <Portal target={PortalTarget.MODAL}>
      <StyledModalWindow onClick={handleModal}>
        <Wrapper>
          <Container>
            <Title>Congratulations, registration was successful!</Title>
            <Link to={ROUTE.SIGN_IN}>
              <Button text={"Go to Sign In"} />
            </Link>
          </Container>
        </Wrapper>
      </StyledModalWindow>
    </Portal>
  ) : null;
};
