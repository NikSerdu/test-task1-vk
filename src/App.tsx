import { Route, Routes } from "react-router-dom";
import "./App.css";
import FavouritesPage from "./pages/FavouritesPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<MoviePage />} path="/movie/:movieId" />
      <Route element={<FavouritesPage />} path="/favourites" />
    </Routes>
  );
}

export default App;
