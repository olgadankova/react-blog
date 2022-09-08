import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, media } from "../../ui";

export const StyledHome = styled.div`
  margin: auto;
  ${media.LAPTOP} {
    max-width: 600px;
  }
  ${media.TABLET} {
    max-width: 290px;
  }
`;

export const ContainerLink = styled.div`
  display: flex;
  gap: 40px;
  padding: 10px;
`;

export const ArticleLink = styled(Link)`
  color: ${COLOR.PURPLE};
  :hover {
    color: ${COLOR.VIOLET};
  }
`;

export const NewsLink = styled(ArticleLink)``;
