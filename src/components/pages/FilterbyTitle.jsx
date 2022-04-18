import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import tmdbApiConfig from "../../tmdbApiConfig";
import { Link } from "react-router-dom";
import NavbarMovies from "../NavBarMovies";
function FilterbyTitle({ listofMovies, setListofMovies }) {
  const [isLoading, setIsLoading] = useState(true);
  const [apiPageNumber, setApiPageNumber] = useState(1);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getListofMovies = async () => {
      const response = await axios.get("/search/movie", {
        ...tmdbApiConfig,
        params: { ...tmdbApiConfig.params, query: title },
      });
      setListofMovies(response.data.results);
      return response.data.results;
    };
    title && getListofMovies();
  }, [title]);

  const fetchMoreData = async () => {
    setApiPageNumber((prev) => prev + 1);
    const response = await axios.get("/search/movie", {
      ...tmdbApiConfig,
      params: {
        ...tmdbApiConfig.params,
        query: title,
        page: apiPageNumber + 1,
      },
    });
    setListofMovies((prev) => [...prev, ...response.data.results]);
  };

  return (
    <div>
      <NavbarMovies />
      <div className="mt-5 py-2">
        <h1 className="text-center text-white mt-5">
          ¡Start looking for your favorite movies...!
        </h1>

        <form className="text-center">
          <label htmlFor="title" className="visually-hidden">
            Enter a title to load movies
          </label>
          <input
            className="mt-5 w-75"
            value={title}
            id="title"
            placeholder="Ingrese un título para cargar peliculas ..."
            type={"text"}
            onChange={(e) => {
              setTitle(e.target.value);
              setApiPageNumber(1);
            }}
          />

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
                    variant="primary"
                    key={movie.id + Math.random()}
                  >
                    <Link to={`/movie/${movie.id}`}>
                      {" "}
                      <div className="">
                        {isLoading && (
                          <div className="spin">
                            <i className="fa-solid fa-spinner"></i>
                          </div>
                        )}
                        <img
                          onLoad={() => setIsLoading(false)}
                          //alt={`${movie.name}`}
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
        </form>
      </div>
    </div>
  );
}

export default FilterbyTitle;
