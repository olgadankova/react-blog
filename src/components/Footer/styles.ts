import styled from "styled-components";
import { COLOR, typography } from "../../ui";

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  padding: 0 60px;
  margin: 0 auto;
  /* border-top: 1px solid ${COLOR.GREY}; */
`;

export const ExpDate = styled.h3`
  ${typography.S1};
  color: ${COLOR.MEDIUM_GREY};
`;

export const FooterToggle = styled.h3`
  ${typography.S1};
  color: ${COLOR.MEDIUM_GREY};
`;
