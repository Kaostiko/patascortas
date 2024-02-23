import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarApp.scss";

export const NavbarApp = () => {
  return (
    <Navbar expand="lg" className=" bg-navbar" fixed="top">
      <Container>
        <Navbar.Brand href="#top"> Ventorrillo PatasCortas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center links">
            <Nav.Link href="#comida">Carta</Nav.Link>
            <Nav.Link href="#about_us">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
