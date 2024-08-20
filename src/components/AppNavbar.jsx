import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarContainer = styled(Navbar)`
  position: absolute; /* Keeps the navbar at the top */
  top: 0; 
  width: 100%; /* Ensure it spans the full width of the page */
  z-index: 1000; 
  display: flex;
  justify-content: center; /* Center everything within the navbar */
  align-items: center;
`;

const NavItemsContainer = styled(Nav)`
  display: flex;
  justify-content: space-around; /* Space items evenly within this container */
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: white;
  margin: 0 2rem; /* Add some margin to keep it separated from the links */
`;

const StyledNavLink = styled(Nav.Link)`
  font-size: 1.2rem;
  color: white;
  margin: 0 1rem; /* Adjust spacing between nav links */
`;

const AppNavbar = () => {
  return (
    <NavbarContainer className="p-3" expand="lg">
      <NavItemsContainer>
        <StyledNavLink href="#about">About Us</StyledNavLink>
        <StyledNavLink href="#schedule">Schedule</StyledNavLink>
        <StyledNavLink href="#groomsmen">Groomsmen</StyledNavLink>
        <Title href="#home">Rhys & Teniola</Title>
        <StyledNavLink href="#bridesmaids">Bridesmaids</StyledNavLink>
        <StyledNavLink href="#RSVP">RSVP</StyledNavLink>
        <StyledNavLink href="#location">Location</StyledNavLink>
      </NavItemsContainer>
    </NavbarContainer>
  );
};

export default AppNavbar;
