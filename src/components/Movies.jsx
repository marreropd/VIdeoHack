import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import tmdbApiConfig from "../tmdbApiConfig";
import { Link } from "react-router-dom";

function Movies({ listofMovies, setListofMovies }) {
  const [isLoading, setIsLoading] = useState(true);
  const [apiPageNumber, setApiPageNumber] = useState(1);
  useEffect(() => {
    getListofMovies(apiPageNumber);
  }, []);

  const getListofMovies = async () => {
    const response = await axios.get("/discover/movie", tmdbApiConfig);
    setListofMovies(response.data.results);
    return response.data.results;
  };
  const fetchMoreData = async () => {
    setApiPageNumber(apiPageNumber + 1);
    const response = await axios.get("/discover/movie", {
      ...tmdbApiConfig,
      params: { ...tmdbApiConfig.params, page: apiPageNumber + 1 },
    });
    setListofMovies((prev) => [...prev, ...response.data.results]);
  };

  return (
    <div className="row ">
      <InfiniteScroll
        dataLength={listofMovies.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        className="row mt-1"
      >
        {listofMovies &&
          listofMovies.map((movie) => (
            <Link
              key={movie.id + Math.random()}
              className="col-lg-2  d-flex align-self-center p-3"
              to={`/movie/${movie.id}`}
            >
              <div
                className="align-self-center home-movies rounded zoom on-hover"
                onLoad={() => setIsLoading(false)}
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                }}
              >
                {/*  {isLoading && (
                <div className="spin">
                  <i className="fa-solid fa-spinner"></i>
                </div>
              )} */}
              </div>
            </Link>
          ))}
      </InfiniteScroll>
    </div>
  );
}

export default Movies;
