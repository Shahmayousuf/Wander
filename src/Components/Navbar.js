import React, { useState } from "react";
import { Link } from "react-router-dom";
import passenger from "../pictures/passenger.png";
import "./Navbar.css";
import { Col, Row } from "react-bootstrap";
const Navbar = () => {
  return (
    <>
    <Row className="navbar">
    <Col lg='6'>
      <div className="navbar-container">
        <div className="wander-logoicon">
          <h3>WANDER</h3>
          <img src={passenger} alt="icon" />
        </div>
      </div>
    </Col>
    <Col lg='6'>
      <div className="navs">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/products">Products</a>
      </div>
    </Col>
  </Row>
  </>
  );
};

export default Navbar;
