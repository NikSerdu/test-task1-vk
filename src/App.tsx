import { Route, Routes } from "react-router-dom";
import "./App.css";
import Favourites from "./components/Favourites/Favourites";
import Home from "./components/Home/Home";
import Movie from "./components/Movie/Movie";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Movie />} path="/movie/:movieId" />
      <Route element={<Favourites />} path="/favourites" />
    </Routes>
  );
}

export default App;
