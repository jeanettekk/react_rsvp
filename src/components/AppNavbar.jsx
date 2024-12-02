import React, { useState } from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SideMenu from '../components/SideMenu';

const NavbarContainer = styled(Navbar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column; /* Stack title and menu vertically */
  justify-content: center;
  align-items: center;
  background-color: #be0e65;
  border-bottom: 3px solid #F4504C;
  padding: 0.5rem 0;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; /* To allow MenuButton positioning */
  width: 100%;
  margin-bottom: 0.5rem; /* Add spacing below the title */
`;

const TitleLink = styled(Link)`
  font-size: 2.2rem;
  font-family: "Prata", serif;
  color: #fdb21e;
  text-decoration: none;

  &:hover {
    color: #fdb21e;
    text-decoration: none;
  }
`;

const MenuButton = styled(Button)`
  position: absolute;
  left: 20px; /* Position MenuButton to the left */
  background: transparent;
  border: none;
  box-shadow: none;

  &:hover,
  &:active {
    background: transparent !important; /* Ensure the background stays transparent */
    box-shadow: none !important; /* Remove box shadow */
  }

  @media (min-width: 1103px) {
    display: none; /* Hide MenuButton on larger screens */
  }
`;

const NavItemsContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the menu links */
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  gap: 1.5rem; /* Add spacing between links */
  width: 100%; /* Ensure it spans the full width */
  max-width: 1200px; /* Limit width on larger screens */

  @media (max-width: 1103px) {
    display: none; /* Hide links on smaller screens */
  }
`;

const StyledNavLink = styled(Nav.Link)`
  font-size: 1.05rem;
  text-transform: uppercase;
  color: ${(props) => (props.active ? '#fdb21e' : '#F2E5D7')};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #fdb21e;
    text-decoration: none;
  }
`;

const StyledButton = styled(Button)`
  background-color: #fdb21e;
  border-color: #fdb21e;
  color: black;
  font-size: 1rem;
  padding: 0.1rem 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

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
    display: none; /* Hide RSVP button on smaller screens */
  }
`;

const AppNavbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleNavClick = (link) => {
    if (link === '/RSVP') {
      // Clear the activeLink state when RSVP is clicked
      setActiveLink('');
    } else {
      // Otherwise, set the active link normally
      setActiveLink(link);
    }
  };

  return (
    <NavbarContainer>
      {/* Title Section */}
      <TitleSection>
        <MenuButton>
          <SideMenu />
        </MenuButton>
        <TitleLink to="/" onClick={() => handleNavClick('/')}>
          Rhys & Teniola
        </TitleLink>
      </TitleSection>

      {/* Menu Links */}
      <NavItemsContainer>
        <StyledNavLink
          as={Link}
          to="/"
          active={activeLink === '/'}
          onClick={() => handleNavClick('/')}
        >
          Home
        </StyledNavLink>
        <StyledNavLink
          as={Link}
          to="/about"
          active={activeLink === '/about'}
          onClick={() => handleNavClick('/about')}
        >
          Our Story
        </StyledNavLink>
        <StyledNavLink
          as={Link}
          to="/schedule"
          active={activeLink === '/schedule'}
          onClick={() => handleNavClick('/schedule')}
        >
          Schedule
        </StyledNavLink>
        <StyledNavLink
          as={Link}
          to="/groomsmen"
          active={activeLink === '/groomsmen'}
          onClick={() => handleNavClick('/groomsmen')}
        >
          Groomsmen
        </StyledNavLink>
        <StyledNavLink
          as={Link}
          to="/bridesmaids"
          active={activeLink === '/bridesmaids'}
          onClick={() => handleNavClick('/bridesmaids')}
        >
          Bridesmaids
        </StyledNavLink>
        <StyledNavLink
          as={Link}
          to="/location"
          active={activeLink === '/location'}
          onClick={() => handleNavClick('/location')}
        >
          Location
        </StyledNavLink>
        <StyledButton as={Link} to="/RSVP" type="button" onClick={() => handleNavClick('/RSVP')}>
          RSVP
        </StyledButton>
      </NavItemsContainer>
    </NavbarContainer>
  );
};

export default AppNavbar;
