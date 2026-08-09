import { useEffect } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import KamehamehaAnimation from './components/KamehamehaAnimation';
import { Home, AboutUs, Schedule, Groomsmen, Bridesmaids, Location, Rsvp } from './pages';

const LandingPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(hash);
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth' }));
    }
  }, [hash]);

  return (
    <div className="landing-page">
      <div id="home" className="scroll-section"><Home /></div>
      <div id="story" className="scroll-section"><AboutUs /></div>
      <div id="schedule" className="scroll-section"><Schedule /></div>
      <div id="groomsmen" className="scroll-section"><Groomsmen /></div>
      <div id="bridesmaids" className="scroll-section"><Bridesmaids /></div>
      <div id="location" className="scroll-section"><Location /></div>
      <section className="rsvp-cta" aria-labelledby="rsvp-heading">
        <span className="page-kicker">Will you join us?</span>
        <h2 id="rsvp-heading">We hope you can celebrate with us</h2>
        <p>Please let us know if you&apos;ll be there by completing our RSVP form.</p>
        <div className="rsvp-action-stage">
          <Link className="rsvp-cta-button" to="/rsvp">RSVP now</Link>
          <KamehamehaAnimation />
        </div>
      </section>
    </div>
  );
};

const App = () => (
  <>
    <AppNavbar />
    <div className="app-content">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rsvp" element={<Rsvp />} />
        <Route path="/about" element={<Navigate to="/#story" replace />} />
        <Route path="/schedule" element={<Navigate to="/#schedule" replace />} />
        <Route path="/groomsmen" element={<Navigate to="/#groomsmen" replace />} />
        <Route path="/bridesmaids" element={<Navigate to="/#bridesmaids" replace />} />
        <Route path="/location" element={<Navigate to="/#location" replace />} />
      </Routes>
    </div>
  </>
);

export default App;
