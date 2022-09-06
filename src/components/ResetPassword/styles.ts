import styled from "styled-components";
import { COLOR, typography } from "../../ui";
import { StyledButton } from "../Button/styles";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding-left: 40px;
`;
export const Input = styled.input`
  width: 90%;
  padding: 10px 10px;
  border: 1px solid ${COLOR.PURPLE};
  border-radius: 8px;
`;

export const Button = styled(StyledButton)`
  display: block;
  width: 90%;
  margin: 0;
  margin-bottom: 50px;
  @media (max-width: 576px) {
    padding: 15px 10px;
  }
`;
export const Title = styled.p`
  padding: 10px 20px;
  ${typography.B1};
  color: ${COLOR.DARK};
`;
