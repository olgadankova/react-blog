import { DotLoader } from "react-spinners";
import { IBlog } from "../../types";
import { ErrorMassage, StyledContainer } from "../ArticleList/styles";
import { NewsItem } from "../NewsItem/NewsItem";
import { StyledNews } from "./styles";

interface IProps {
  blogs: IBlog[];
  isLoading: boolean;
  errorMessage: string | null;
}

export const NewsList = ({ blogs, isLoading, errorMessage }: IProps) => {
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
    <StyledNews>
      {blogs.map((blog) => {
        return <NewsItem blog={blog} key={blog.id} />;
      })}
    </StyledNews>
  );
};
