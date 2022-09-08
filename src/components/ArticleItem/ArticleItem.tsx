import { IArticle } from "../../types";
import { Container, Description, Image, StyledArticle, Title } from "./styles";

interface IProps {
  article: IArticle;
}

export const ArticleItem = ({ article }: IProps) => {
  return (
    <StyledArticle>
      <Image src={article.imageUrl} alt="article" />
      <Container>
        <Title>{article.title}</Title>
        <Description>{article.summary}</Description>
      </Container>
    </StyledArticle>
  );
};
