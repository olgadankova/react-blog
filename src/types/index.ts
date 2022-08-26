export interface IArticle {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: ILaunch[];
  events: ILaunch[];
}

export interface ILaunch {
  id?: string;
  provider?: string;
}
