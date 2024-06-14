export interface IRating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface IVotes {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface IPoster {
  url: string;
  previewUrl: string;
}

export interface ICountry {
  name: string;
}

export interface IPerson {
  id: number;
  photo: string;
  name: string;
  enName: string | null;
  description: string;
  profession: string;
  enProfession: string;
}

export interface IPremiere {
  country: string | null;
  russia: string | null;
  digital: string | null;
  cinema: string | null;
  bluray: string | null;
  dvd: string | null;
}

export interface IFullMovie {
  id: number;
  name: string;
  alternativeName: string;
  enName: string | null;
  type: string;
  typeNumber: number;
  year: number;
  description: string | null;
  shortDescription: string | null;
  slogan: string | null;
  status: string | null;
  rating: IRating;
  votes: IVotes;
  movieLength: number;
  totalSeriesLength: number | null;
  seriesLength: number | null;
  ratingMpaa: string | null;
  ageRating: string | null;
  poster: IPoster;
  genres: {
    name: string;
  }[];
  countries: ICountry[];
  persons: IPerson[];
  premiere: IPremiere;
  top10: number | null;
  top250: number | null;
  isSeries: boolean;
  ticketsOnSale: boolean;
  lists: any[];
  createdAt: string;
  updatedAt: string;
}
