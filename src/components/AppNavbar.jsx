import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarContainer = styled(Navbar)`
  position: absolute;
  top: 5%; /* Move the navbar down */
  left: 50%;
  transform: translate(-50%, -50%); /* Center it vertically and horizontally */
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItemsContainer = styled(Nav)`
  display: flex;
  justify-content: space-around; /* Space items evenly within this container */
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #fdb21e;
  margin: 0 2rem; /* Add some margin to keep it separated from the links */
`;

const StyledNavLink = styled(Nav.Link)`
  font-size: 1.2rem;
  color: #F1DAC4;
  margin: 0 1rem; /* Adjust spacing between nav links */
   transition: color 0.3s ease-in-out; /* Smooth transition for color change */

  &:hover {
    color: #fdb21e; /* Change to yellow on hover */
    text-decoration: none; /* Optionally remove underline on hover */
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
