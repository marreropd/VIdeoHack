import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import tmdbApiConfig from "../../tmdbApiConfig";
import NavbarMovies from "../NavBarMovies";

function FilterbyRating({ listofMovies, setListofMovies }) {
  const [isLoading, setIsLoading] = useState(true);
  const [apiPageNumber, setApiPageNumber] = useState(1);
  const [rating, setRating] = useState(3);

  useEffect(() => {
    const getListofMovies = async () => {
      const response = await axios.get("/discover/movie", {
        ...tmdbApiConfig,
        params: {
          ...tmdbApiConfig.params,
          page: apiPageNumber,
          "vote_average.gte": rating * 2,
          "vote_average.lte": rating * 2 + 1,
          "vote_count.gte": 5,
        },
      });
      setListofMovies(response.data.results);
      return response.data.results;
    };
    getListofMovies();
  }, [rating]);

  const fetchMoreData = async () => {
    setApiPageNumber(apiPageNumber + 1);
    const response = await axios.get("/discover/movie", {
      ...tmdbApiConfig,
      params: {
        ...tmdbApiConfig.params,
        page: apiPageNumber + 1,
        "vote_average.gte": rating * 2,
        "vote_average.lte": rating * 2 + 1,
      },
    });
    setListofMovies((prev) => [...prev, ...response.data.results]);
  };

  return (
    <div>
      <NavbarMovies className="" />
      <div className="py-5">
        <h1 className="text-center text-white mt-5">
          ¡Start looking for your favorite movies...!
        </h1>
        <div className="filt-star d-flex justify-content-center mt-5">
          <p className="text-white">filter by rating:</p>{" "}
          <Rating
            emptySymbol="bi bi-star"
            fullSymbol="bi bi-star-fill"
            className="text-warning"
            initialRating={rating}
            onChange={(value) => {
              setRating(value);
              setApiPageNumber(1);
            }}
          />
        </div>
        <div className="container mt-3">
          <hr className="text-white fw-bold" />
          <InfiniteScroll
            dataLength={listofMovies.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            className="row g-1"
          >
            {listofMovies &&
              listofMovies.map((movie) => (
                <div
                  className="col-lg-2 text-center"
                  key={movie.id + Math.random()}
                  variant="primary"
                >
                  {" "}
                  <Link to={`/movie/${movie.id}`}>
                    <div className="">
                      {isLoading && (
                        <div className="spin">
                          <i class="fa-solid fa-spinner"></i>
                        </div>
                      )}
                      <img
                        onLoad={() => setIsLoading(false)}
                        className="rounded zoom"
                        height={300}
                        width={200}
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      />
                    </div>
                  </Link>
                </div>
              ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default FilterbyRating;
