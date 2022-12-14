import { ChangeEventHandler } from "react";

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
  events: IEvent[];
}

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

export interface ILaunch {
  id?: string | number;
  provider?: string;
}

export interface IEvent {
  id: string | number;
  provider?: string;
}

export type QueryParams = {
  limit: string;
  page: string;
  order: string;
  searchParams?: string;
};
export interface UserData {
  displayName: string | null;
  email: string | null;
}

export interface ISearch {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
