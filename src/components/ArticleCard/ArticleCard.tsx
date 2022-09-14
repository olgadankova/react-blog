import { IArticle } from "../../types";
import { Container, Description, Image } from "../ArticleItem/styles";

interface IProps {
  article: IArticle;
}

export const ArticleDetails = ({ article }: IProps) => {
  const date = new Date(article.publishedAt).toDateString();

  return (
    <>
      <Container>
        <Image src={article.imageUrl} alt="article" />
      </Container>
      <h4>{date}</h4>
      <h4>{article.url}</h4>
      <h4>{article.title}</h4>
      <h4>{article.summary}</h4>
      <h4>{article.publishedAt}</h4>
      <h4>{article.newsSite}</h4>
      <h4>{article.imageUrl}</h4>
      <h4>{article.id}</h4>
      <h4>{article.featured}</h4>
      <Description>{article.summary}</Description>
    </>
  );
};
