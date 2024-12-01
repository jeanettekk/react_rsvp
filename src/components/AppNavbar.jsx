import React, {useState} from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SideMenu from '../components/SideMenu';

const NavbarContainer = styled(Navbar)`
  position: fixed; /* Fix the navbar to the top of the viewport */
  top: 0;
  left: 0;
  width: 100%; /* Make sure the navbar spans the full width */
  height: 88px; /* Use a fixed height for consistent spacing */
  z-index: 1000; /* Ensure it stays above other content */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #be0e65;
  border-bottom: 3px solid #F4504C;
`;

const NavItemsContainer = styled(Nav)`
  display: flex;
  justify-content: space-around; /* Space items evenly within this container */
  align-items: center;
`;

const TitleLink = styled(Link)`
  font-size: 2.2rem;
  font-family: "Prata", serif;
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
  
  @media (max-width: 1103px) {
    display: none;
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
  
  @media (max-width: 1103px) {
    display: none;
  }
`;

const MenuButton = styled(Button)`
  position: absolute;
  left: 10px;
  background: transparent;
  border: none;
  box-shadow: none;

  &:hover, &:active {
    background: transparent !important; /* Ensure the background stays transparent when clicked */
    box-shadow: none !important; /* Remove box shadow when clicked */
  }

  @media (min-width: 1103px) {
    display: none;
  }
`;

const AppNavbar = () => {
  const [activeLink, setActiveLink] = useState('#about'); // Manage active link state

  const handleNavClick = (link) => {
    setActiveLink(link); // Update active link when a nav item is clicked
  };

  return (
    <NavbarContainer className="p-3" expand="lg">

      <MenuButton>
        <SideMenu />
      </MenuButton>

      <NavItemsContainer>

      <StyledNavLink 
          as={Link} // Specify the component to render
          to="/" 
          active={activeLink === '/'}
          onClick={() => handleNavClick('/')}>Home</StyledNavLink>

        <StyledNavLink 
          as={Link} 
          to="/about" 
          active={activeLink === '/about'}
          onClick={() => handleNavClick('/about')}>Our Story</StyledNavLink>

        <StyledNavLink 
          as={Link} 
          to="/schedule" 
          active={activeLink === '/schedule'}
          onClick={() => handleNavClick('/schedule')}>Schedule</StyledNavLink>

        <TitleLink 
          to="/" 
          active={activeLink === '/'}
          onClick={() => handleNavClick('/')}
          as={Link}>Rhys & Teniola</TitleLink> {/* Render as an <h1> element */}

        <StyledNavLink 
          as={Link} 
          to="/groomsmen" 
          active={activeLink === '/groomsmen'}
          onClick={() => handleNavClick('/groomsmen')}>Groomsmen</StyledNavLink>

        <StyledNavLink 
          as={Link} 
          to="/bridesmaids" 
          active={activeLink === '/bridesmaids'}
          onClick={() => handleNavClick('/bridesmaids')}>Bridesmaids</StyledNavLink>

        <StyledNavLink 
          as={Link} 
          to="/location" 
          active={activeLink === '/location'}
          onClick={() => handleNavClick('/location')}>Location</StyledNavLink>

        <StyledButton 
          as={Link} 
          to="/RSVP" 
          type="button" 
          className="btn">RSVP</StyledButton>
          
      </NavItemsContainer>
    </NavbarContainer>
  );
};

export default AppNavbar;
