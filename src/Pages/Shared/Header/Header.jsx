import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd,MMMM MM,YYYY")}</p>
      </div>
      <div className="p-2 bg-danger d-flex align-items-center bg-opacity-25">
        <Button className="bg-danger border-0 me-2">Latest</Button>
        <Marquee pauseOnHover="boolean">
          I can be a React component, multiple React components, or just some
          text......
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum rerum libero corrupti dolor ex sunt, quidem porro reiciendis ullam......
        </Marquee>
      </div>
      <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/"><Link className="text-decoration-none text-dark" to="/">Home</Link></Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav className="d-flex gap-2 align-items-center">
            <FaUserCircle style={{fontSize:'35px',cursor:'pointer'}}></FaUserCircle>
            <Button variant="dark">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </Container>
  );
};

export default Header;
