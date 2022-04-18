import React from "react";
import NavbarMovies from "./NavBarMovies";

function Header({}) {
  return (
    <div>
      <NavbarMovies />
      <div className="header-row d-flex align-items-center w-100 justify-content-center mb-1"></div>
      <div className="bg-text rounded">
        <h1>¡Tus peliculas favoritas!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}

export default Header;
