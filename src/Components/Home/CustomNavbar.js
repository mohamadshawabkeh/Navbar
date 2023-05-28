import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";
// import "./CustomNavbar.css";

function CustomNavbar() {
  return (
    
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Ticket Ease</Navbar.Brand>

      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>

          <Nav.Link href="/faq">FAQ</Nav.Link>
          <Nav.Link href="/aboutus">About Us</Nav.Link>
          <Nav.Link href="#">Contact Us</Nav.Link>
          <NavDropdown title="Log In" id="navbarDropdownMenuLink">
            <NavDropdown.Item href="logincustomer">Log in as customer </NavDropdown.Item>
            <NavDropdown.Item href="loginagent">Log in as agent </NavDropdown.Item>
            <NavDropdown.Item href="loginemployee">Log in as employee </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
