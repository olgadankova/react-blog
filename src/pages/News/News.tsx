import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE } from "../../router/routes";
import { ArticleLink, ContainerLink, NewsLink, PaginationBtn } from "../Home/styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { PaginationContainer } from "../Articles/styles";
import { Title } from "../../components/ModalWindow/styles";
import { NewsList } from "../../components/NewsList/NewsList";
import { fetchNews } from "../../store/slices/newsSlice";
import { StyledNews } from "./styles";

export const News = () => {
  const dispatch = useAppDispatch();
  const { results, isLoading, error } = useAppSelector(({ blogs }) => blogs);
  const { page = "" } = useParams();
  const [limit] = useState("9");
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate(`../blogs/${+page + 1}`);
  };
  const handlePrevPage = () => {
    navigate(`../blogs/${+page - 1}`);
  };

  useEffect(() => {
    dispatch(fetchNews({ limit, page, order: "" }));
  }, [dispatch, limit, page]);
  return (
    <StyledNews>
      <Title>News</Title>
      <ContainerLink>
        <ArticleLink to={ROUTE.ARTICLES}>Articles</ArticleLink>
        <NewsLink to={ROUTE.NEWS}>News</NewsLink>
      </ContainerLink>
      <NewsList blogs={results} isLoading={isLoading} errorMessage={error} />
      <PaginationContainer>
        <PaginationBtn onClick={handlePrevPage} className={`${page === "1" && "disabled"}`}>
          ← Prev
        </PaginationBtn>
        <PaginationBtn onClick={handleNextPage} className={`${page === "804" && "disabled"}`}>
          Next →
        </PaginationBtn>
      </PaginationContainer>
    </StyledNews>
  );
};
