import axios from "axios";
import { IArticle, IBlog } from "../types";

enum BlogEndpoint {
  ARTICLE = "/articles",
  BLOG = "/blogs",
}

class BlogAPI {
  private readonly API_URL = process.env.REACT_APP_BASE_URL_BLOG_API;
  private API = axios.create({
    baseURL: this.API_URL,
  });

  public async getArticles(): Promise<IArticle[]> {
    const { data } = await this.API.get<IArticle[]>(BlogEndpoint.ARTICLE);
    return data;
  }
  public async getBlogs(): Promise<IBlog[]> {
    const { data } = await this.API.get<IBlog[]>(BlogEndpoint.BLOG);
    return data;
  }
}

export const blogAPI = new BlogAPI();
