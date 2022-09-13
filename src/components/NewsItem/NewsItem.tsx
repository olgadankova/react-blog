import { ROUTE } from "../../router/routes";
import { createPath } from "../../router/utils";
import { IBlog } from "../../types";
import { Description, Container } from "../ArticleItem/styles";
import { Image, NewsLink } from "./styles";

interface IProps {
  blog: IBlog;
}

export const NewsItem = ({ blog }: IProps) => {
  const date = new Date(blog.publishedAt).toDateString();

  return (
    <NewsLink to={createPath(ROUTE.NEWS_DETAILS, { id: blog.id })}>
      <Container>
        <Image src={blog.imageUrl} alt="blog" />
      </Container>
      <h4>{date}</h4>
      <Description>{blog.summary}</Description>
    </NewsLink>
  );
};
