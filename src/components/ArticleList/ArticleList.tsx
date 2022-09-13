import { DotLoader } from "react-spinners";
import { IArticle } from "../../types";
import { ArticleItem } from "../ArticleItem/ArticleItem";
import { ErrorMassage, StyledArticle, StyledContainer } from "./styles";

interface IProps {
  articles: IArticle[];
  isLoading: boolean;
  errorMessage: string | null;
}

export const ArticleList = ({ articles, isLoading, errorMessage }: IProps) => {
  if (isLoading) {
    return (
      <StyledContainer>
        <DotLoader />
      </StyledContainer>
    );
  }
  if (errorMessage) {
    return (
      <StyledContainer>
        <ErrorMassage>{errorMessage}</ErrorMassage>
      </StyledContainer>
    );
  }
  return (
    <StyledArticle>
      {articles.map((article) => {
        return <ArticleItem article={article} key={article.id} />;
      })}
    </StyledArticle>
  );
};
