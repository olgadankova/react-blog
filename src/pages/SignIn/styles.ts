import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../ui/color";
import { typography } from "../../ui/typography";

const StyledSignIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const SignInTitle = styled.h2`
  ${typography.H2}
`;
const LinkToSignIn = styled(Link)`
  color: ${COLOR.DARK};
  font-size: 16px;
  font-weight: 400;
`;

export { StyledSignIn, SignInTitle, LinkToSignIn };
