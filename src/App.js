import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./components/Movies.css";
import About from "./components/pages/About";
import FilterbyRating from "./components/pages/FilterbyRating";
import FilterbyTitle from "./components/pages/FilterbyTitle";
import Home from "./components/pages/Home";
import MovieDetails from "./components/pages/MovieDetails/MovieDetails";

function App() {
  const [listofMovies, setListofMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              listofMovies={listofMovies}
              setListofMovies={setListofMovies}
              setSelectedMovie={setSelectedMovie}
            />
          }
        />
        <Route
          path="/filter/title"
          element={
            <FilterbyTitle
              listofMovies={listofMovies}
              setListofMovies={setListofMovies}
              setSelectedMovie={setSelectedMovie}
            />
          }
        />
        <Route
          path="/filter/rating"
          element={
            <FilterbyRating
              listofMovies={listofMovies}
              setListofMovies={setListofMovies}
              setSelectedMovie={setSelectedMovie}
            />
          }
        />
        <Route
          path="/movie/:id"
          element={<MovieDetails />}
          selectedMovie={selectedMovie}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
