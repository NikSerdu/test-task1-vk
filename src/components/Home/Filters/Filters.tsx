import { Alert, Button, Snackbar } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import { MovieService } from "../../../services/movie.service";
import MultipleSelectChip from "./MultipleSelectChip";

type TypeProps = {
  filters: URLSearchParams;
  setFilters: (filters: URLSearchParams) => void;
};

const Filters: FC<TypeProps> = ({ filters, setFilters }) => {
  const { data: allGenres, isLoading } = useQuery({
    queryKey: ["get genres"],
    queryFn: () => MovieService.getAllGenres(),
  });

  const [year, setYear] = useState<string>(filters.get("year") || "");
  const [rating, setRating] = useState<string>(filters.get("rating") || "");
  const [selectedGenres, setSelectedGenres] = useState<string[]>(
    filters.getAll("genres.name") || []
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (year === "") {
      filters.delete("year");
    } else {
      if (+year < 1990 || year.split("-").some((item) => +item < 1990)) {
        setIsOpen(true);
        return;
      } else filters.set("year", year);
    }
    if (rating === "") {
      filters.delete("rating");
    } else {
      filters.set("rating", rating);
    }
    filters.set("page", "1");
    selectedGenres.forEach((genre) => filters.append("genres.name", genre));
    setFilters(filters);
  };

  const reset = () => {
    setYear("");
    setRating("");
    setSelectedGenres([]);
    setFilters({} as URLSearchParams);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <h2 className="font-bold">Фильтры</h2>
        <div className="text-sm">
          <div className="flex gap-1 mt-2">
            <TextField
              id="outlined-basic"
              label="Год"
              variant="outlined"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full"
              name="year"
            />
          </div>
        </div>
        <div className="text-sm">
          <div className="flex gap-1 mt-2">
            <TextField
              id="outlined-basic"
              label="Рейтинг"
              variant="outlined"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full"
              name="rating"
            />
          </div>
        </div>
        <div className="text-sm">
          <div className="mt-2">
            {!isLoading && allGenres && (
              <MultipleSelectChip
                selectedGenres={selectedGenres}
                setGenresName={setSelectedGenres}
                allGenres={allGenres}
              />
            )}
          </div>
        </div>
        <div className="">
          <Button variant="contained" type="submit" className="w-full">
            Применить
          </Button>
        </div>
      </form>
      <div className="mt-5">
        <Button variant="outlined" className="w-full" onClick={reset}>
          Сбросить
        </Button>
      </div>

      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Год не может быть меньше 1990!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Filters;
