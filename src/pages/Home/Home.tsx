import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList/ArticleList";
import { CustomSelect } from "../../components/CustomSelect/CustomSelect";
import { Title } from "../../components/Title/Title";
import { ROUTE } from "../../router/routes";
import { blogAPI } from "../../services/blogApi";
import {
  ArticleLink,
  ButtonContainer,
  Container,
  ContainerLink,
  NewsLink,
  SortDay,
  SortMonth,
  SortWeek,
  SortYear,
  StyledHome,
} from "./styles";

export const Home = () => {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    blogAPI.getArticles().then((data) => {
      setArticles(data);
    });
  }, []);
  return (
    <StyledHome>
      <Title title="Blog" />
      <ContainerLink>
        <ArticleLink to={ROUTE.ARTICLES}>Articles</ArticleLink>
        <NewsLink to={ROUTE.NEWS}>News</NewsLink>
      </ContainerLink>
      <Container>
        <ButtonContainer>
          <SortDay>Day</SortDay>
          <SortWeek>Week</SortWeek>
          <SortMonth>Month</SortMonth>
          <SortYear>Year</SortYear>
        </ButtonContainer>
        <CustomSelect />
      </Container>
      <ArticleList articles={articles} isLoading={false} errorMessage={null} />
    </StyledHome>
  );
};
