import React from 'react';
import '../../styles/Navigation.css';
import { useNavigate } from 'react-router';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container"

const Navigation = () => {

  const navigate = useNavigate();

  return (
    <div className='nav-container'>
      <Navbar bg="light" collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="">MyAct</Navbar.Brand>
          <Navbar.Toggle aria-controles="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/login">Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation;
