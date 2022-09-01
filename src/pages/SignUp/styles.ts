import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, typography } from "../../ui";

export const StyledSignUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const SignUpTitle = styled.h2`
  ${typography.H2}
`;
export const LinkToSignUp = styled(Link)`
  color: ${COLOR.DARK};
  font-size: 16px;
  font-weight: 400;
`;
