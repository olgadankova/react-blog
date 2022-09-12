import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList/ArticleList";
import { CustomSelect } from "../../components/CustomSelect/CustomSelect";
import { Title } from "../../components/Title/Title";
import { blogAPI } from "../../services/blogApi";
import { ArticleLink, ContainerLink, NewsLink, StyledHome } from "./styles";

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
        <ArticleLink to="">Articles</ArticleLink>
        <NewsLink to="">News</NewsLink>
      </ContainerLink>
      <ArticleList articles={articles} />
      <CustomSelect />
    </StyledHome>
  );
};
