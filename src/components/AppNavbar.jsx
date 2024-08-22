import React, {useState} from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Button } from 'react-bootstrap';

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

const TitleLink = styled.a`
  font-size: 2.2rem;
  color: #fdb21e;
  margin: 0 2rem; /* Add some margin to keep it separated from the links */
  text-decoration: none; /* Remove underline */
  cursor: pointer; /* Make it look clickable */

  &:hover {
    color: #fdb21e !important; /* Change to yellow on hover */
    text-decoration: none; /* Optionally remove underline on hover */
  }
`;

const StyledNavLink = styled(Nav.Link)`
  font-size: 1.05rem;
  text-transform: uppercase;
  color: ${(props) => (props.active ? '#fdb21e !important' : '#F2E5D7 !important')}; /* Dynamic color based on active prop */
  margin: 0 1rem; /* Adjust spacing between nav links */
   transition: color 0.3s ease-in-out; /* Smooth transition for color change */

  &:hover {
    color: #fdb21e !important; /* Change to yellow on hover */
    text-decoration: none; /* Optionally remove underline on hover */
  }
`;

const StyledButton = styled(Button)`
  background-color: #fdb21e;
  border-color: #fdb21e;
  color: black;

  &:hover {
    background-color: #fdc149;
    border-color: #fdc149;
    color: black;
  }
  
  &:active {
    background-color: #fdc149 !important;
    border-color: #fdc149 !important;
  }
`;

const AppNavbar = () => {
  const [activeLink, setActiveLink] = useState('#about'); // Manage active link state

  const handleNavClick = (link) => {
    setActiveLink(link); // Update active link when a nav item is clicked
  };

  return (
    <NavbarContainer className="p-3" expand="lg">
      <NavItemsContainer>

        <StyledNavLink 
          href="#about" 
          active={activeLink === '#about'}
          onClick={() => handleNavClick('#about')}>About Us</StyledNavLink>

        <StyledNavLink 
          href="#schedule" 
          active={activeLink === '#schedule'}
          onClick={() => handleNavClick('#schedule')}>Schedule</StyledNavLink>

        <StyledNavLink 
          href="#groomsmen" 
          active={activeLink === '#groomsmen'}
          onClick={() => handleNavClick('#groomsmen')}>Groomsmen</StyledNavLink>

        <TitleLink 
          href="#home" 
          active={activeLink === '#home'}
          onClick={() => handleNavClick('#home')}
          as="h1">Rhys & Teniola</TitleLink> {/* Render as an <h1> element */}
          
        <StyledNavLink 
          href="#bridesmaids" 
          active={activeLink === '#bridesmaids'}
          onClick={() => handleNavClick('#bridesmaids')}>Bridesmaids</StyledNavLink>

        <StyledNavLink 
          href="#location" 
          active={activeLink === '#location'}
          onClick={() => handleNavClick('#location')}>Location</StyledNavLink>

        <StyledButton 
          href="#RSVP" 
          type="button" 
          className="btn">RSVP</StyledButton>
          
      </NavItemsContainer>
    </NavbarContainer>
  );
};

export default AppNavbar;
