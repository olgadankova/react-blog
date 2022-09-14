import { Link } from "react-router-dom";
import styled from "styled-components";
import { typography } from "../../ui";

export const StyledNav = styled.div`
  height: 96px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background-color: #fff;
`;

export const AuthLink = styled(Link)`
  grid-area: justify-content;
  text-align: center;
  ${typography.S1}
`;

export const StyledLogo = styled.img`
  height: 6vh;
  cursor: pointer;
`;

export const SearchLink = styled(Link)`
  grid-area: 1 / 8 / 2 / 9;
`;
