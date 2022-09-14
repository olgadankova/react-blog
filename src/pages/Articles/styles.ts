import styled from "styled-components";
import { COLOR } from "../../ui/color";
import { StyledHome } from "../Home/styles";

export const StyledArticle = styled(StyledHome)``;

export const PaginationBtn = styled.div`
  :hover {
    color: ${COLOR.PURPLE};
  }
`;

export const PaginationContainer = styled.div`
  display: grid;
`;
