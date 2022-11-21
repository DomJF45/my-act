import React, { useState } from 'react'
import '../../styles/Navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button';

const FullNavbar = ({user, setUser}) => {

  const handleLogout = () => {
    setUser(false);
  }

  if (user) {
    return (
      <div className='nav-container'>
        <Navbar bg="light" collapseOnSelect expand="lg" variant="light">
          <Container>
            <Navbar.Brand href="">MyAct</Navbar.Brand>
            <Navbar.Toggle aria-controles="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/dashboard/events">Events</Nav.Link>
                <Nav.Link href="/dashboard/user-info">User Info</Nav.Link>
                <Button onClick={handleLogout}>Log Out</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  } else {
    return (
      <div className='nav-container'>
        <Navbar bg="light" collapseOnSelect expand="lg" variant="light">
          <Container>
            <Navbar.Brand href="">MyAct</Navbar.Brand>
            <Navbar.Toggle aria-controles="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
                <Nav.Link href="services">Services</Nav.Link>
                <Nav.Link href="login">Log In</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default FullNavbar