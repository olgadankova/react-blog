import { IArticle } from "../../types";
import { ArticleItem } from "../ArticleItem/ArticleItem";
import { StyledArticle } from "./styles";

interface IProps {
  articles: IArticle[];
}

export const ArticleList = ({ articles }: IProps) => {
  return (
    <StyledArticle>
      {articles.map((article) => {
        return <ArticleItem article={article} />;
      })}
    </StyledArticle>
  );
};
