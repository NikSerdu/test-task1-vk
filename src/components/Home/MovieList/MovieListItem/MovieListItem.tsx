import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import { pink } from "@mui/material/colors";
import { FC } from "react";
import { Link } from "react-router-dom";
import { IShortMovie } from "../../../../types/shortMovie.interface";
type TypeProps = {
  movie: IShortMovie;
  toggleFavourite: (movie: IShortMovie) => void;
  isFavourite: boolean;
};

const MovieListItem: FC<TypeProps> = ({
  movie,
  isFavourite,
  toggleFavourite,
}) => {
  return (
    <div className="relative">
      <div className="absolute right-0 top-0">
        {isFavourite ? (
          <IconButton
            aria-label="addToFavourite"
            size="large"
            onClick={() => toggleFavourite(movie)}
          >
            <FavoriteIcon sx={{ color: pink[500] }} />
          </IconButton>
        ) : (
          <IconButton
            aria-label="deleteFromFavourite"
            size="large"
            onClick={() => toggleFavourite(movie)}
          >
            <FavoriteBorderIcon sx={{ color: pink[500] }} />
          </IconButton>
        )}
      </div>
      <Link
        className="w-[200px] flex flex-col"
        key={movie.id}
        to={`/movie/${movie.id}`}
      >
        <div className="">
          <img
            className="h-[282px]"
            src={
              movie?.poster?.previewUrl
                ? movie.poster.previewUrl
                : "/default_preview.png"
            }
            width={200}
            height={282}
            alt={`${movie.name} poster`}
          />
        </div>
        <p>{movie.name}</p>
        <p>IMDb {movie.rating.imdb}</p>
        <p>{movie.year}</p>
      </Link>
    </div>
  );
};

export default MovieListItem;
