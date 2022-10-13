import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Appbar = () => (
  <Navbar bg="light" expand="lg" className="shadow">
    <Container>
      <Navbar.Brand href="/" className="text-primary">
        Book Store CMS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto gap-3">
          <NavLink to="/" className="nav-link">
            Books
          </NavLink>
          <NavLink to="/categories" className="nav-link">
            Categories
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Appbar;
