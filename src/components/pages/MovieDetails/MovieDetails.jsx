import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "react-rating";
import NavbarMovies from "../../NavBarMovies";

import styles from "./MovieDetailsPage.css";

function MovieDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const params = useParams();

  useEffect(() => {
    getMovie();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const getMovie = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=5a33fe746771b8d7938b9a70363e31b4&language=en-US`
    );

    setMovie(response.data);
  };
  console.log(movie);
  return (
    <div>
      <NavbarMovies />
      {/*  <div className="container">
        <div
          className="MovieDetails-background mt-5 "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
          }}
        >
          <div className=" MovieDetails-details align-items-start d-flex flex-column justify-content-end  h-100 w-100">
            <h1 className="text-white ">{movie.title}</h1>
            <h2 className="text-white h4">({movie.original_title})</h2>
            <p className="text-white mt-4">
              Release date: {movie.release_date}
            </p>
            <p className="text-white d-block">{movie.overview}</p>
            <span className="">
              {" "}
              <Rating
                readonly
                emptySymbol="bi bi-star"
                fullSymbol="bi bi-star-fill"
                className="text-warning"
                initialRating={movie.vote_average / 2}
              />
            </span>
            <hr className="text-white" />
          </div>
        </div>
      </div> */}

      <div
        className="h-100 w-100 container"
        id="movie-details-image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          id="movie-main-background"
          className="d-flex  align-items-center"
        ></div>

        <div id="bg-movie-data" className="align-items-start container ">
          <div className="d-flex flex-column align-items-center ">
            <h1 className="text-white mt-1">{movie.title}</h1>
            <h2 className="text-white h4">({movie.original_title})</h2>
            <p className="text-white mt-4">
              Release date: {movie.release_date}
            </p>
            <p className="text-white d-block">{movie.overview}</p>
            <span className="mb-3">
              {" "}
              <Rating
                readonly
                emptySymbol="bi bi-star"
                fullSymbol="bi bi-star-fill"
                className="text-warning"
                initialRating={movie.vote_average / 2}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
