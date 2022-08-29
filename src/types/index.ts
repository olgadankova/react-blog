export interface IArticle extends IPost {
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
  events: IEvent[];
}

export interface ILaunch {
  id?: string | number;
  provider?: string;
}

export interface IEvent {
  id?: string | number;
  provider?: string;
}

export interface IPost {
  someField: string;
}

// TODO протипизировать блог
// TODO вынести общие поля для IBlog и IArticle в отдельный интерфейс и унаследоваться от него
export interface IBlog {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  launches: ILaunch[];
  events: IEvent[];
}
