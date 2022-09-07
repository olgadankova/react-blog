import styled from "styled-components";
import { COLOR, media, typography } from "../../ui";
import { StyledButton } from "../Button/styles";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding-left: 40px;
  align-items: flex-start;
`;
export const Input = styled.input`
  width: 90%;
  padding: 20px 20px;
  border-radius: 8px;
  border: 1px solid ${COLOR.PURPLE};
`;

export const Button = styled(StyledButton)`
  display: block;
  height: 70px;
  width: 90%;
  margin: 0;
  margin-bottom: 25px;
  ${media.TABLET} {
    padding: 10px 10px;
  }
`;
export const Title = styled.p`
  padding: 25px 20px;
  ${typography.B1};
  color: ${COLOR.DARK};
`;
