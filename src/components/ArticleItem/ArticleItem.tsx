import { ROUTE } from "../../router/routes";
import { createPath } from "../../router/utils";
import { IArticle } from "../../types";
import { Image, Container, ArticleLink, Description } from "./styles";

interface IProps {
  article: IArticle;
}

export const ArticleItem = ({ article }: IProps) => {
  const date = new Date(article.publishedAt).toDateString();

  return (
    <ArticleLink to={createPath(ROUTE.ATRICLES_DETAILS, { id: article.id })}>
      <Container>
        <Image src={article.imageUrl} alt="article" />
      </Container>
      <h5>{date}</h5>
      <Description>{article.summary}</Description>
    </ArticleLink>
  );
};
