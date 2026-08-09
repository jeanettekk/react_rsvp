import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useMotionSetting from '../hooks/useMotionSetting';
import { navigation, wedding } from '../data/wedding';

export default function SideMenu() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const menuButtonRef = useRef(null);
  const { motionEnabled, toggleMotion } = useMotionSetting();

  useEffect(() => {
    if (!open) return undefined;

    closeButtonRef.current?.focus();
    document.body.classList.add('drawer-open');

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      document.body.classList.remove('drawer-open');
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <div className="mobile-menu">
      <button
        ref={menuButtonRef}
        className="mobile-menu-button"
        type="button"
        aria-label="Open navigation"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(true)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div className={`drawer-backdrop ${open ? 'is-open' : ''}`} aria-hidden={!open} onMouseDown={closeMenu} />
      <aside
        id="mobile-navigation"
        className={`mobile-drawer ${open ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="drawer-cover">
          <span className="chapter-label">Menu</span>
          <strong>{wedding.names}</strong>
          <small>{wedding.dateLabel}</small>
          <button ref={closeButtonRef} type="button" className="drawer-close" aria-label="Close navigation" onClick={closeMenu} tabIndex={open ? 0 : -1}>×</button>
        </div>
        <nav className="drawer-links">
          {navigation.map(([label, path], index) => (
            <Link to={path} key={path} onClick={closeMenu} tabIndex={open ? 0 : -1}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {label}
            </Link>
          ))}
          <Link className="drawer-rsvp" to="/rsvp" onClick={closeMenu} tabIndex={open ? 0 : -1}>RSVP now <span aria-hidden="true">→</span></Link>
        </nav>
        <button
          className="drawer-motion-toggle"
          type="button"
          onClick={toggleMotion}
          aria-pressed={motionEnabled}
          tabIndex={open ? 0 : -1}
        >
          <span className="motion-toggle-dot" aria-hidden="true" />
          Decorative motion: {motionEnabled ? 'on' : 'off'}
        </button>
      </aside>
    </div>
  );
}
