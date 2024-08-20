import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarContainer = styled(Navbar)`
  position: absolute; /* Change from 'fixed' to 'absolute' */
  top: 0; /* Adjust as needed for your layout */
  z-index: 1000; /* Ensure it appears above other content */
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: white;
`;

const StyledNavLink = styled(Nav.Link)`
  font-size: 1.2rem;
  color: white;

`;

const AppNavbar = () => {
  return (
    <NavbarContainer className="p-3" expand="lg">
      <Navbar.Brand>
        <Title className="px-5" href="#home">Rhys & Tenny</Title>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <StyledNavLink href="#about">About Us</StyledNavLink>
          <StyledNavLink href="#bridesmaids">Bridesmaids</StyledNavLink>
          <StyledNavLink href="#groomsmen">Groomsmen</StyledNavLink>
          <StyledNavLink href="#schedule">Schedule</StyledNavLink>
          <StyledNavLink href="#location">Location</StyledNavLink>
          {/* <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </NavbarContainer>
  );
};

export default AppNavbar;