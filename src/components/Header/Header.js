import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'

const Header = () => {


  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="light"
        variant="light" className="py-3"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={35} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ms-auto">
              {/* <Nav.Link as={Link} to="/home">Home</Nav.Link> */}
              <Nav.Link as={Link} to="/">Products</Nav.Link>
              <Nav.Link as={Link} to="/upload">Upload</Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
