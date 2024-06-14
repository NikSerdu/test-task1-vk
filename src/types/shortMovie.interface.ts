import { IShortGenre } from "./genre.interface";

export interface IShortMovie {
  id: number;
  name: string;
  year: number;
  description: string;
  poster:
    | {
        previewUrl: string;
        url: string;
      }
    | undefined;
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  genres: IShortGenre[];
}
