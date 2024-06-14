import { FC } from "react";

import { useFavourites } from "../../hooks/useFavourites";
import MovieListItem from "../Home/MovieList/MovieListItem/MovieListItem";

const Favourites: FC = () => {
  const { favourites, toggleFavourite } = useFavourites();
  return (
    <div className="flex flex-wrap gap-3 max-sm:justify-center ">
      {favourites.map((movie) => (
        <MovieListItem
          movie={movie}
          key={movie.id}
          toggleFavourite={toggleFavourite}
          isFavourite={favourites.some((item) => item.id === movie.id)}
        />
      ))}
    </div>
  );
};

export default Favourites;
