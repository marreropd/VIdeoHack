import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Movies from "../Movies";
import NavbarMovies from "../NavBarMovies";

function Home({ listofMovies, setListofMovies, setSelectedMovie }) {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=5a33fe746771b8d7938b9a70363e31b4&language=en-US&page=1`
    );
    console.log(response.data.results);
    setMovie(response.data.results);
  };

  return (
    <div className="mt-5">
      <NavbarMovies />
      <Carousel className="d-flex mt-5 ">
        {movie &&
          movie.map(
            (movies, i) =>
              i <= 9 && (
                <Carousel.Item interval={20000} className="">
                  <img
                    id="home-carousel-poster"
                    className="d-block home-carousel-poster rounded "
                    src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
                    alt="Second slide"
                  />

                  <Carousel.Caption className="mb-4">
                    <h3 className="text-start">{movies.title}</h3>
                    <p className="text-start">
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
          )}
      </Carousel>
      <div className="mb-5">
        <hr className="mb-5" />
      </div>
      <div className="container">
        <Movies
          listofMovies={listofMovies}
          setListofMovies={setListofMovies}
          setSelectedMovie={setSelectedMovie}
        />
      </div>
    </div>
  );
}

export default Home;
