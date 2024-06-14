import { useState } from "react";
import { IShortMovie } from "../types/shortMovie.interface";

export const useFavourites = () => {
  const [favourites, setFavourites] = useState<IShortMovie[]>(
    JSON.parse(localStorage.getItem("favourites") || "[]")
  );

  const toggleFavourite = (movie: IShortMovie) => {
    const isFavourite = favourites.some((item) => item.id === movie.id);
    if (!movie) return;
    let updatedFavourites: IShortMovie[];
    if (isFavourite) {
      updatedFavourites = favourites.filter((item) => item.id !== movie.id);
    } else {
      updatedFavourites = [...favourites, movie];
    }
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return { favourites, toggleFavourite };
};
