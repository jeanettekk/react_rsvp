import { useState } from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardGiftcard } from '@mui/icons-material';
import SideMenu from './SideMenu';
import GiftRegistryModal from './GiftRegistryModal';
import chibiGoku from '../assets/images/chibi-goku-groom.webp';
import chibiChiChi from '../assets/images/chibi-chichi-bride.webp';

const NavbarContainer = styled(Navbar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 9px 24px 8px;
  border-bottom: 1px solid rgba(253, 178, 30, .28);
  background: #be0e65;
  box-shadow: 0 8px 28px rgba(50, 27, 39, .18);
  backdrop-filter: blur(14px);

  @media (max-width: 1103px) {
    padding: 8px 18px;
  }
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const TitleLink = styled(Link)`
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  gap: .42rem;
  font-size: 1.9rem;
  font-family: "Prata", serif;
  line-height: 1;
  white-space: nowrap;
  color: #fdb21e;
  text-decoration: none;
  &:hover { color: #fdb21e; text-decoration: none; }

  @media (max-width: 1103px) {
    align-items: center;
    gap: .34rem;
    font-size: 1.65rem;
  }

  @media (max-width: 560px) {
    gap: .28rem;
    font-size: 1.35rem;
  }
`;

const TitleCharacter = styled.img`
  width: auto;
  height: 2.35rem;
  flex: 0 0 auto;
  object-fit: contain;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateY(-3px);
  transition: opacity .2s ease;
  filter: drop-shadow(0 2px 3px rgba(50, 27, 39, .32));

  @media (max-width: 1103px) {
    height: 2.1rem;
  }

  @media (max-width: 560px) {
    height: 1.8rem;
  }
`;

const MenuButton = styled.div`
  position: absolute;
  left: 0;
  padding: 0;
  background: transparent;
  border: none;
  box-shadow: none;
  &:hover, &:active { background: transparent !important; box-shadow: none !important; }
  @media (min-width: 1103px) { display: none; }
`;

const NavItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
  flex-wrap: wrap;
  gap: 1.7rem;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 1103px) { display: none; }
`;

const StyledNavLink = styled(Nav.Link)`
  position: relative;
  margin-top: 4px;
  padding: 4px 0 !important;
  color: #f8eee4;
  font-size: .78rem;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  transition: color .2s ease;
  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    background: #fdb21e;
    content: "";
    transform: scaleX(0);
    transition: transform .2s ease;
  }
  &:hover { color: #fdb21e; text-decoration: none; }
  &:hover::after { transform: scaleX(1); }
`;

const StyledButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  margin-top: 2px;
  padding: .28rem 1.1rem;
  border-color: #fdb21e;
  border-radius: 4px;
  background-color: #fdb21e;
  color: black;
  font-size: .76rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: .08em;
  text-transform: uppercase;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  &:hover, &:active { background-color: #fdc149 !important; border-color: #fdc149 !important; color: black; }
  @media (max-width: 1103px) { display: none; }
`;

const GiftNavLink = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 4px;
  padding: 4px 0;
  border: none;
  background: transparent;
  color: #f8eee4;
  font-size: .78rem;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: color .2s ease;
  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    background: #fdb21e;
    content: "";
    transform: scaleX(0);
    transition: transform .2s ease;
  }
  &:hover { color: #fdb21e; }
  &:hover::after { transform: scaleX(1); }
  & svg { font-size: .85rem; }
  @media (max-width: 1103px) { display: none; }
`;

const links = [
  ['Home', '/#home'],
  ['Before We Met', '/#prologue'],
  ['Our Story', '/#story'],
  ['Schedule', '/#schedule'],
  ['Groomsmen', '/#groomsmen'],
  ['Bridesmaids', '/#bridesmaids'],
  ['Location', '/#location'],
];

const AppNavbar = () => {
  const [giftOpen, setGiftOpen] = useState(false);
  const [isRsvpHovered, setIsRsvpHovered] = useState(false);
  const [isRsvpFocused, setIsRsvpFocused] = useState(false);
  const areChibisVisible = isRsvpHovered || isRsvpFocused;

  return (
    <>
      <NavbarContainer>
        <TitleSection>
          <MenuButton><SideMenu /></MenuButton>
          <TitleLink to="/#home">
            <TitleCharacter $isVisible={areChibisVisible} src={chibiGoku} alt="" aria-hidden="true" draggable="false" />
            <span>Rhys</span>
            <span aria-hidden="true">&</span>
            <span>Teniola</span>
            <TitleCharacter $isVisible={areChibisVisible} src={chibiChiChi} alt="" aria-hidden="true" draggable="false" />
          </TitleLink>
        </TitleSection>
        <NavItemsContainer>
          {links.map(([label, path]) => (
            <StyledNavLink as={Link} to={path} key={path}>{label}</StyledNavLink>
          ))}
          <GiftNavLink type="button" onClick={() => setGiftOpen(true)}>
            <CardGiftcard />
            Gift Registry
          </GiftNavLink>
          <StyledButton
            as={Link}
            to="/rsvp"
            type="button"
            onMouseEnter={() => setIsRsvpHovered(true)}
            onMouseLeave={() => setIsRsvpHovered(false)}
            onFocus={() => setIsRsvpFocused(true)}
            onBlur={() => setIsRsvpFocused(false)}
          >
            RSVP
          </StyledButton>
        </NavItemsContainer>
      </NavbarContainer>
      <GiftRegistryModal open={giftOpen} onClose={() => setGiftOpen(false)} />
    </>
  );
};

export default AppNavbar;
