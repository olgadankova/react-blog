import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleList } from "../../components/ArticleList/ArticleList";
import { Title } from "../../components/Title/Title";
import { ROUTE } from "../../router/routes";
import { fetchArticles } from "../../store/slices/articleSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ArticleLink, ContainerLink, NewsLink, PaginationBtn } from "../Home/styles";
import { PaginationContainer, StyledArticle } from "./styles";

export const Articles = () => {
  const dispatch = useAppDispatch();
  const { results, isLoading, error } = useAppSelector(({ articles }) => articles);
  const { page = "" } = useParams();
  const [limit] = useState("9");
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate(`../articles/${+page + 1}`);
  };
  const handlePrevPage = () => {
    navigate(`../articles/${+page - 1}`);
  };

  useEffect(() => {
    dispatch(fetchArticles({ limit, page, order: "" }));
  }, [dispatch, limit, page]);

  return (
    <StyledArticle>
      <Title title={"Articles"} />
      <ContainerLink>
        <ArticleLink to={ROUTE.ARTICLES}>Articles</ArticleLink>
        <NewsLink to={ROUTE.NEWS}>News</NewsLink>
      </ContainerLink>
      <ArticleList articles={results} isLoading={isLoading} errorMessage={error} />
      <PaginationContainer>
        <PaginationBtn onClick={handlePrevPage} className={`${page === "1" && "disabled"}`}>
          ← Prev
        </PaginationBtn>
        <PaginationBtn onClick={handleNextPage} className={`${page === "804" && "disabled"}`}>
          Next →
        </PaginationBtn>
      </PaginationContainer>
    </StyledArticle>
  );
};
