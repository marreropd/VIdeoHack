import React from "react";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
                className="text-decoration-none ms-2 mt-1  text-white nav-links"
                to="/about"
              >
                About
              </Link>
            </div>
            <div className="d-flex align-items-center">
              <Link
                className="text-decoration-none text-secondary ms-2 mt-1 text-white nav-links"
                to="/"
              >
                Contact
              </Link>
            </div>

            <Nav className="ms-auto sticky-top me-3">
              <NavDropdown className="ms-2 " title="Filter" menuVariant="dark">
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMovies;
