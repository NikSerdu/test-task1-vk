import { Pagination } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieService } from "../../services/movie.service";
import Filters from "./Filters/Filters";
import MovieList from "./MovieList/MovieList";
import MoiveListItemSkeleton from "./MovieList/MovieListItem/MoiveListItemSkeleton";

const HomePage: FC = () => {
  const [filters, setFilters] = useSearchParams();

  const {
    data: movies,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["get movies"],
    queryFn: () =>
      MovieService.getAllWithFilters({
        page: Number(filters.get("page")) || 1,
        limit: 50,
        year: filters.get("year") || `1990-${new Date().getFullYear()}`,
        genres: filters.getAll("genres.name") || null,
        rating: filters.get("rating") || null,
      }),
  });

  useEffect(() => {
    refetch();

    window.scrollTo(0, 0);
  }, [filters]);

  return (
    <div className="flex gap-5 max-[840px]:flex-col ">
      <div className="min-[840px]:w-1/5">
        <Filters filters={filters} setFilters={setFilters} />
      </div>
      <div className="flex flex-col gap-2 min-[840px]:w-4/5">
        {!isFetching && movies ? (
          <>
            <div className="flex flex-wrap gap-3 justify-center">
              <MovieList data={movies} />
            </div>
            <div className="mx-auto">
              {movies.pages !== 1 && (
                <Pagination
                  color="primary"
                  count={movies && movies.pages}
                  page={Number(filters.get("page")) || 1}
                  onChange={(e, value) => {
                    filters.set("page", value.toString());
                    setFilters(filters);
                  }}
                />
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-wrap gap-3">
            {new Array(50).fill(0).map((item, index) => (
              <MoiveListItemSkeleton key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
