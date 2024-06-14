import { IShortMovie } from "./shortMovie.interface";

export interface IMoviesFilter {
  page: number;
  limit: number;
  genres?: string[] | null;
  rating?: string | null;
  year?: string | null;
}

export interface IMovieResponse {
  docs: IShortMovie[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
