import styled from "styled-components";
import { typography } from "../../ui";
import { COLOR } from "../../ui/color";

export const StyledArticle = styled.div`
  max-width: 950px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
export const StyledContainer = styled.div`
  margin-top: 50px;
  ${typography.H2};
  ${COLOR.RED};
`;

export const ErrorMassage = styled.p`
  ${typography.H2};
  ${COLOR.RED};
  margin-top: 50px;
`;
