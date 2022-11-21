import React from 'react'
import '../../styles/Navigation.css';
import { useNavigate } from 'react-router';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button';

const FullNavbar = () => {

  const handleLogout = () => {
    // handle the logout here
  }

  return (
    <div className='nav-container'>
      <Navbar bg="light" collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="">MyAct</Navbar.Brand>
          <Navbar.Toggle aria-controles="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="dashboard/events">Events</Nav.Link>
              <Nav.Link href="dashboard/user-info">User Info</Nav.Link>
              <Button href="/">Log Out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default FullNavbar