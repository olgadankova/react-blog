import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledArticle = styled.div`
  width: 300px;
  height: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 285px;
  height: 200px;
  border-radius: 15px;
  opacity: 0.6;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

export const ArticleLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 340px;
  padding: 10px;
`;

export const Title = styled.p``;

export const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Container = styled.div`
  padding: 5px;
`;
