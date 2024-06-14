import { authInstance } from "../api/api.interceptor";
import { IFullMovie } from "../types/fullMovie.interface";
import { IFullGenre } from "../types/genre.interface";
import { IMovieResponse, IMoviesFilter } from "../types/movies.interface";

export const MovieService = {
  async getAllWithFilters(data: IMoviesFilter) {
    const { genres, limit, page, rating, year } = data;
    const response = await authInstance<IMovieResponse>({
      url: `v1.4/movie`,
      method: "GET",
      params: {
        page,
        limit,

        selectFields: ["id", "poster", "name", "year", "rating"],
        "genres.name": genres,
        "rating.imdb": rating,
        year,
        notNullFields: ["name", "year", "rating.imdb"],
      },
      paramsSerializer: {
        indexes: null,
      },
    });
    return response.data;
  },

  async getById(movieId: number) {
    const response = await authInstance<IFullMovie>({
      url: `v1.4/movie/${movieId}`,
      method: "GET",
    });

    return response.data;
  },

  async getAllGenres() {
    const response = await authInstance<IFullGenre[]>({
      url: `v1/movie/possible-values-by-field`,
      method: "GET",
      params: {
        field: "genres.name",
      },
    });
    return response.data;
  },
};
