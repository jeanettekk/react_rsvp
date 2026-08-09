import { Link } from 'react-router-dom';
import SideMenu from './SideMenu';
import useMotionSetting from '../hooks/useMotionSetting';
import { navigation, wedding } from '../data/wedding';
import './AppNavbar.css';

const AppNavbar = () => {
  const { motionEnabled, toggleMotion } = useMotionSetting();

  return (
    <header className="anime-navbar">
      <div className="anime-navbar-inner">
        <SideMenu />
        <Link className="brand-lockup" to="/#home" aria-label={`${wedding.names} wedding home`}>
          <span className="brand-monogram" aria-hidden="true">R<span>&</span>T</span>
          <span className="brand-copy">
            <strong>{wedding.names}</strong>
            <small>Wedding Manga · 2027</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, path]) => (
            <Link to={path} key={path}>{label}</Link>
          ))}
          <Link className="nav-rsvp" to="/rsvp">RSVP</Link>
        </nav>

        <button
          className="motion-toggle motion-toggle-desktop"
          type="button"
          onClick={toggleMotion}
          aria-pressed={motionEnabled}
          title={motionEnabled ? 'Pause decorative animation' : 'Play decorative animation'}
        >
          <span className="motion-toggle-dot" aria-hidden="true" />
          <span>{motionEnabled ? 'Motion on' : 'Motion off'}</span>
        </button>
      </div>
    </header>
  );
};

export default AppNavbar;
