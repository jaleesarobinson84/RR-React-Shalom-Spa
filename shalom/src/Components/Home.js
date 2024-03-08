import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap/Container';

function NavBar() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#shop">Shop</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Manicure</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Facials</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Eyelashes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Waxing</NavDropdown.Item>
                {/* Separated link */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default NavBar;