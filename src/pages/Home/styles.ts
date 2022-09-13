import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, media, typography } from "../../ui";

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

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 890px;
  ${media.LAPTOP} {
    max-width: 588px;
  }
`;

export const SortButton = styled.button`
  margin: 10px;
  padding: 15px;
  border: none;
  border-radius: 4px;
  color: ${COLOR.PURPLE};
  font-size: ${typography.S1};
  background-color: ${COLOR.LIGHT_GREY};
  :hover {
    color: ${COLOR.WHITE};
    background-color: ${COLOR.VIOLET};
  }
  :active {
    background-color: ${COLOR.VIOLET};
  }
`;
export const ButtonContainer = styled.div``;

export const SortDay = styled(SortButton)``;

export const SortWeek = styled(SortButton)``;

export const SortMonth = styled(SortButton)``;

export const SortYear = styled(SortButton)``;

export const NewsLink = styled(ArticleLink)``;
