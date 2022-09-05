import styled from "styled-components";
import { COLOR, media, typography } from "../../ui";
import { StyledButton } from "../Button/styles";

export const StyledModalWindow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
  margin-top: 20px;
  border: 1px solid ${COLOR.PURPLE};
  border-radius: 10px;
  background: ${COLOR.WHITE};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const Title = styled.h2`
  ${typography.H3}
  padding: 10px;
  padding-top: 30px;
`;

export const Button = styled(StyledButton)`
  display: block;
  width: 100%;
  margin: 0;
  padding: 10px 10px;
  margin: 20px auto;
  ${media.TABLET} {
    padding: 15px 10px;
  }
`;
