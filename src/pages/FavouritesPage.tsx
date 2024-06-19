import { FC } from "react";
import MovieListItem from "../components/MovieList/MovieListItem/MovieListItem";
import { useFavourites } from "../hooks/useFavourites";

const FavouritesPage: FC = () => {
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

export default FavouritesPage;
