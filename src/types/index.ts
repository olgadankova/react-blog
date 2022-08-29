export interface IPost {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
}

export interface IArticle extends IPost {
  featured: boolean;
  launches: ILaunch[];
  events: IEvent[];
}

export interface IBlog extends IPost {
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

export interface IBlog extends IPost {
  launches: ILaunch[];
  events: IEvent[];
}
