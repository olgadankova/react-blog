import axios from "axios";
import { IArticle, IBlog, QueryParams } from "../types";

export enum BlogEndpoint {
  ARTICLE = "articles",
  ARTICLES_ID = "articles/{id}",
  ARTICLES_COUNT = "articles/count",
  BLOG = "blogs",
  BLOGS_COUNT = "blogs/count",
  BLOGS_ID = "blogs/{id}",
  SEARCH = "/search",
}

class BlogAPI {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_BLOG_API as string;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });
  public getArticles = async ({ limit, page, order }: QueryParams) => {
    const { data } = await this.API.get<IArticle[]>(
      `${BlogEndpoint.ARTICLE}?_limit=${limit}&_start=${page}&_sort=${order}`,
    );
    return data;
  };
  public getBlogs = async ({ limit, page }: QueryParams) => {
    const { data } = await this.API.get<IBlog[]>(
      `${BlogEndpoint.BLOG}?_limit=${limit}&_start=${page}`,
    );
    return data;
  };
  // public getSearchArticles = async ({ limit, page, searchParams }: QueryParams) => {
  //   const { data } = await this.API.get<IArticle[]>(
  //     `${BlogEndpoint.SEARCH}?_limit=${limit}&_start=${page}&_title_contains=${searchParams}`,
  //   );
  //   return data;
  // };
}

export const blogAPI = new BlogAPI();
