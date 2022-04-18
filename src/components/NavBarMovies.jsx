import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarMovies() {
  return (
    <div className="fixed-top nav-bg mb-5">
      <Navbar variant="dark" bg="nav-bg" expand="sm">
        <Container className="">
          <Navbar.Brand>
            <Link className="text-decoration-none text-white " to="/">
              HACKVIDEO{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <div className="d-flex align-items-center">
              <Link
                className="text-decoration-none ms-2  text-white nav-links"
                to="/"
              >
                About
              </Link>

              <Link
                className="text-decoration-none ms-2 text-white nav-links"
                to="/"
              >
                Contact
              </Link>
            </div>
            <Nav className=" sticky-top fixed-top">
              <div className="d-flex justify-content-end">
                <div>
                  <NavDropdown
                    className="ms-2"
                    id="nav-dropdown-dark-example"
                    title="Filter"
                    menuVariant="dark"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      <Link
                        className="text-decoration-none text-white"
                        to="/filter/title"
                      >
                        Filtrar by title
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      <Link
                        className="text-decoration-none text-white"
                        to="/filter/rating"
                      >
                        Filter by rating
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMovies;
