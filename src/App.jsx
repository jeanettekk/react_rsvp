import { lazy, Suspense, useEffect } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import KamehamehaAnimation from './components/KamehamehaAnimation';
import useMotionSetting from './hooks/useMotionSetting';
import { Home, AboutUs, Schedule, Groomsmen, Bridesmaids, Location } from './pages';

const Rsvp = lazy(() => import('./pages/Rsvp'));

const LandingPage = () => {
  const { hash } = useLocation();
  const { motionEnabled } = useMotionSetting();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: motionEnabled ? 'smooth' : 'auto' });
      return;
    }

    const target = document.querySelector(hash);
    if (!target) return;

    const frame = window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: motionEnabled ? 'smooth' : 'auto' });
      const heading = target.querySelector('h1, h2');
      heading?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash, motionEnabled]);

  return (
    <main id="main-content" className="landing-page">
      <Home />
      <AboutUs />
      <Schedule />
      <Groomsmen />
      <Bridesmaids />
      <Location />
      <section className="rsvp-cta" aria-labelledby="rsvp-heading">
        <div className="rsvp-ink-burst" aria-hidden="true" />
        <span className="chapter-label chapter-label-light">Final chapter</span>
        <span className="page-kicker">Will you join us?</span>
        <h2 id="rsvp-heading" tabIndex="-1">Join us for the next chapter</h2>
        <p>Please let us know if you&apos;ll be there by completing our RSVP form.</p>
        <div className="rsvp-action-stage">
          <Link className="rsvp-cta-button" to="/rsvp">RSVP now</Link>
          <KamehamehaAnimation />
        </div>
        <footer className="manga-footer">
          <span>Rhys & Teniola</span>
          <span aria-hidden="true">•</span>
          <span>27.02.2027</span>
        </footer>
      </section>
    </main>
  );
};

const App = () => (
  <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <AppNavbar />
    <div className="app-content">
      <Suspense fallback={<div className="route-loading">Turning the page…</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/rsvp" element={<Rsvp />} />
          <Route path="/about" element={<Navigate to="/#story" replace />} />
          <Route path="/schedule" element={<Navigate to="/#schedule" replace />} />
          <Route path="/groomsmen" element={<Navigate to="/#groomsmen" replace />} />
          <Route path="/bridesmaids" element={<Navigate to="/#bridesmaids" replace />} />
          <Route path="/location" element={<Navigate to="/#location" replace />} />
        </Routes>
      </Suspense>
    </div>
  </>
);

export default App;
