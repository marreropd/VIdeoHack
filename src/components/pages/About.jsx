import React from "react";
import NavbarMovies from "../NavBarMovies";

function About() {
  return (
    <div className="container">
      <NavbarMovies />
      <hr className="my-5" />
      <div>
        <h2 className="text-secondary">ABOUT US</h2>
        <hr className="fw-bold d-1 text-white" />
      </div>
      <div className="row">
        <div className="col-lg-6">
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            voluptatibus nesciunt officiis! Aspernatur temporibus, nesciunt cum
            eaque soluta numquam tempora nostrum. Maxime magnam exercitationem,
            porro eos tenetur a doloremque maiores. Magnam vitae enim iusto,
            asperiores id eos optio illo, tempora, a molestias corrupti
            excepturi eaque vel placeat totam eligendi ex commodi. Maxime
            dolorum molestiae ut nostrum eaque explicabo, libero odit! Vel
            corporis reprehenderit, consequuntur explicabo consectetur illo aut
            inventore ipsa perspiciatis iste, commodi recusandae nesciunt iure
            incidunt placeat quae quasi dolorem. Non debitis rem nostrum
            assumenda tenetur, atque nobis reiciendis?
          </p>
        </div>
        <div className="col-lg-6">
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            voluptatibus nesciunt officiis! Aspernatur temporibus, nesciunt cum
            eaque soluta numquam tempora nostrum. Maxime magnam exercitationem,
            porro eos tenetur a doloremque maiores. Magnam vitae enim iusto,
            asperiores id eos optio illo, tempora, a molestias corrupti
            excepturi eaque vel placeat totam eligendi ex commodi. Maxime
            dolorum molestiae ut nostrum eaque explicabo, libero odit! Vel
            corporis reprehenderit, consequuntur explicabo consectetur illo aut
            inventore ipsa perspiciatis iste, commodi recusandae nesciunt iure
            incidunt placeat quae quasi dolorem. Non debitis rem nostrum
            assumenda tenetur, atque nobis reiciendis?
          </p>
        </div>
        <footer className="text-center">
          <div className="row">
            <div className="col-lg">
              <p className="text-muted fs-6">
                All this site information is getting from:
              </p>

              <a href="https://www.themoviedb.org/">
                <img
                  height={200}
                  width={200}
                  className="mb-5"
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                />
              </a>
            </div>
          </div>
          <span className="text-muted text-center mt-5">
            VideoHack © Hack Academy | Pablo Marrero | 2022
          </span>
        </footer>
      </div>
    </div>
  );
}

export default About;
