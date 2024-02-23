import React from "react";
import { Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { NavbarApp } from "../Components/NavbarApp/NavbarApp";

export const AppRoutes = () => {
  return (
    <Container fluid>
      <Row className="header">
        <NavbarApp />
      </Row>
      <Row className="body">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Row>
    </Container>
  );
};
