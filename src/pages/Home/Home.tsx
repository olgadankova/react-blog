import { SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleList } from "../../components/ArticleList/ArticleList";
import { CustomSelect } from "../../components/CustomSelect/CustomSelect";
import { Title } from "../../components/Title/Title";
import { ROUTE } from "../../router/routes";
import { fetchArticles } from "../../store/slices/articleSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  ArticleLink,
  ContainerLink,
  NewsLink,
  Container,
  SortDay,
  SortMonth,
  SortWeek,
  SortYear,
  StyledHome,
  PaginationBtn,
} from "./styles";
import { NewsList } from "../../components/NewsList/NewsList";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { results, isLoading, error } = useAppSelector(({ articles }) => articles);
  const { page = "" } = useParams();
  const [limit] = useState("50");
  const [order, setOrder] = useState<string>("");

  useEffect(() => {
    dispatch(fetchArticles({ limit, page, order }));
  }, [dispatch, limit, page, order]);

  return (
    <StyledHome>
      <Title title={"Blog"} />
      <ContainerLink>
        <ArticleLink to={ROUTE.ARTICLES}>Articles</ArticleLink>
        <NewsLink to={ROUTE.NEWS}>News</NewsLink>
      </ContainerLink>
      <Container>
        <SortDay>Day</SortDay>
        <SortWeek>Week</SortWeek>
        <SortMonth>Month</SortMonth>
        <SortYear>Year</SortYear>
        <CustomSelect onChange={({ value }: { value: string }) => setOrder(value)} />
      </Container>
      <ArticleList articles={results} isLoading={isLoading} errorMessage={error} />
      <NewsList blogs={results} isLoading={isLoading} errorMessage={error} />
      <PaginationBtn />
    </StyledHome>
  );
};
