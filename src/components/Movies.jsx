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

  function handleOnLoad() {
    setIsLoading(false);
    console.log(isLoading);
  }
  console.log(isLoading);
  return (
    <div className="row ">
      {/*   <InfiniteScroll
        dataLength={listofMovies.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        className="row mt-1"
      > */}
      {listofMovies &&
        listofMovies.map((movie) =>
          movie.poster_path ? (
            <div className="col-lg  d-flex  mt-2 p-2  align-items-center justify-content-center">
              <Link key={movie.id + Math.random()} to={`/movie/${movie.id}`}>
                {isLoading && (
                  <div className="d-flex aling-items-center">
                    <div className="spin">
                      <i className="fa-solid fa-spinner"></i>
                    </div>
                  </div>
                )}

                <div className="zoom on-hover col-movie">
                  <img
                    id="image-movie"
                    onLoad={() => handleOnLoad()}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    height={350}
                  />
                </div>
              </Link>
            </div>
          ) : null
        )}
      {/*   </InfiniteScroll> */}
    </div>
  );
}

export default Movies;
