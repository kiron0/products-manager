import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from '../../images/logo.png'
import { auth } from "../../Firebase/Firebase.init";
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="light"
        variant="light" className="py-3 navbar"
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
              <Nav.Link as={Link} to="/products" className="link">Products</Nav.Link>
              <Nav.Link as={Link} to="/upload" className="link">Upload</Nav.Link>
              <Nav.Link as={Link} to="/about" className="link">
                About
              </Nav.Link>
                {/* <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link> */}
                {user?.email ? (
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              ) : (
                <Nav.Link as={Link} to="/login" className="link">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
