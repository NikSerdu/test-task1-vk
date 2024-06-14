import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFavourites } from "../../hooks/useFavourites";
import { MovieService } from "../../services/movie.service";
import ToBack from "../ToBack/ToBack";
import MovieSkeleton from "./MovieSkeleton";
const Movie: FC = () => {
  const { movieId } = useParams();
  const { favourites, toggleFavourite } = useFavourites();
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const { data: movie, isLoading } = useQuery({
    queryKey: ["get movie", movieId],
    queryFn: () => MovieService.getById(+movieId!),
    enabled: !!movieId,
  });

  useEffect(() => {
    if (movieId) {
      setIsFavourite(favourites.some((item) => item.id === +movieId));
    }
  }, [favourites, movieId]);
  return (
    <div className="text-xl">
      {movieId && movie && !isLoading ? (
        <>
          <div className="flex gap-10 max-sm:flex-col">
            <div className="-ml-20">
              <ToBack />
            </div>
            <div>
              <img
                src={
                  movie?.poster?.previewUrl
                    ? movie.poster.previewUrl
                    : "/default_preview.png"
                }
                width={400}
                height={1000}
                alt={`${movie.name} poster`}
                className="max-sm:w-[90%] mx-auto"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <h1 className="font-bold text-2xl">{movie.name}</h1>
              <p>
                <strong>IMDb:</strong> {movie.rating.imdb}
              </p>
              <p>
                <strong>Дата выхода в России:</strong>{" "}
                {movie.premiere.russia
                  ? new Date(`${movie.premiere.russia}`).toLocaleDateString()
                  : "неизвестно"}
              </p>
              <div>
                <strong>Жанры:</strong>
                <div className="flex gap-3 mt-2">
                  {movie.genres
                    ? movie.genres.map((item) => {
                        return (
                          <span
                            key={item.name}
                            className="px-2 py-1 bg-slate-200 rounded-2xl"
                          >
                            {item.name}
                          </span>
                        );
                      })
                    : "информации о жанрах пока нет"}
                </div>
              </div>
              <div className="">
                <div className="">
                  {isFavourite ? (
                    <IconButton
                      aria-label="addToFavourite"
                      size="large"
                      onClick={() =>
                        toggleFavourite({
                          id: movie.id,
                          poster: {
                            previewUrl:
                              movie?.poster?.previewUrl ||
                              "/default_preview.png",
                            url: movie?.poster?.url || "/default_preview.png",
                          },
                          name: movie.name,
                          rating: movie.rating,
                          year: movie.year,
                          description: movie.description || "",
                          genres: movie.genres,
                        })
                      }
                    >
                      <FavoriteIcon sx={{ color: pink[500] }} />
                    </IconButton>
                  ) : (
                    <IconButton
                      aria-label="deleteFromFavourite"
                      size="large"
                      onClick={() =>
                        toggleFavourite({
                          id: movie.id,
                          poster: {
                            previewUrl:
                              movie?.poster?.previewUrl ||
                              "/default_preview.png",
                            url: movie?.poster?.url || "/default_preview.png",
                          },
                          name: movie.name,
                          rating: movie.rating,
                          year: movie.year,
                          description: movie.description || "",
                          genres: movie.genres,
                        })
                      }
                    >
                      <FavoriteBorderIcon sx={{ color: pink[500] }} />
                    </IconButton>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className="font-bold">Описание:</p>
            {movie.description || "ожидается..."}
          </div>
        </>
      ) : (
        <MovieSkeleton />
      )}
    </div>
  );
};

export default Movie;
