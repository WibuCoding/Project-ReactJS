import React from 'react';
import { Link } from "react-router-dom"
import { NavbarCollapse, Nav, Navbar, Container } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id='basic-navbar-nav'>
          <Nav.Link as={Link} to='/books'>
            Daftar Buku-
          </Nav.Link>
          <Nav.Link as={Link} to='/peminjam'>
            -Daftar Peminjam
          </Nav.Link>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;