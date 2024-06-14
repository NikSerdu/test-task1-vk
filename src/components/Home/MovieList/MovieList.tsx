import { FC } from "react";
import { useFavourites } from "../../../hooks/useFavourites";
import { IMovieResponse } from "../../../types/movies.interface";
import MovieListItem from "./MovieListItem/MovieListItem";

type TypeProps = {
  data: IMovieResponse;
};

const MovieList: FC<TypeProps> = ({ data }) => {
  const { favourites, toggleFavourite } = useFavourites();
  return (
    <>
      {data.docs.map((movie) => (
        <MovieListItem
          movie={movie}
          key={movie.id}
          toggleFavourite={toggleFavourite}
          isFavourite={favourites.some((item) => item.id === movie.id)}
        />
      ))}
    </>
  );
};

export default MovieList;
