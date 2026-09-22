import { useEffect } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';
import KamehamehaAnimation from './components/KamehamehaAnimation';
import { Home, AboutUs, Schedule, Groomsmen, Bridesmaids, Location, Rsvp } from './pages';
import rhysBaby from './assets/images/prologue/rhys-baby.jpg';
import tennyBaby from './assets/images/prologue/tenny-baby.jpg';

const LandingPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(hash);
    if (!target) return;

    if (hash === '#story' && window.matchMedia('(min-width: 901px)').matches) {
      const stage = target.querySelector('.story-scroll-stage');
      if (stage) {
        requestAnimationFrame(() => {
          const travel = Math.max(1, stage.offsetHeight - window.innerHeight);
          const top = stage.getBoundingClientRect().top + window.scrollY + travel * 0.03;
          window.scrollTo({ top, behavior: 'smooth' });
        });
        return;
      }
    }

    requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth' }));
  }, [hash]);

  return (
    <div className="landing-page">
      <div id="home" className="scroll-section"><Home /></div>
      <section id="prologue" className="scroll-section prologue-section" aria-labelledby="prologue-heading">
        <header className="page-intro">
          <span className="page-kicker">The prologue</span>
          <h1 id="prologue-heading">Before We Met</h1>
        </header>
        <div className="prologue-portraits">
          <figure className="prologue-card prologue-card-groom">
            <div className="prologue-photo-wrap">
              <img src={rhysBaby} alt="Baby Rhys" className="prologue-photo" />
              <span className="prologue-photo-label">Baby Rhys</span>
            </div>
            <figcaption className="prologue-handwritten-quote">
              <p className="handwritten-text">&ldquo;Rhys was very alert, and also a greedy little boy. At nursery he would steal sausages and meat off the other children's plates. The nursery staff would have to give him extra. He was also very aware of his surroundings! He would learn the bus numbers and the routes. A very clever little boy ♥️&rdquo;</p>
              <span className="handwritten-attribution">— Mama Marie</span>
            </figcaption>
          </figure>
          <figure className="prologue-card prologue-card-bride">
            <div className="prologue-photo-wrap">
              <img src={tennyBaby} alt="Baby Teniola" className="prologue-photo" />
              <span className="prologue-photo-label">Baby Teniola</span>
            </div>
            <figcaption className="prologue-handwritten-quote">
              <p className="handwritten-text">&ldquo;Tenny was one of the quietest babies at first but the momemt she started talking that was it...... she became the most outgoing and bubbly child ever.&rdquo;</p>
              <span className="handwritten-attribution">— Mama Dayo</span>
            </figcaption>
          </figure>
        </div>
      </section>
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
        <Route path="/prologue" element={<Navigate to="/#prologue" replace />} />
        <Route path="/schedule" element={<Navigate to="/#schedule" replace />} />
        <Route path="/groomsmen" element={<Navigate to="/#groomsmen" replace />} />
        <Route path="/bridesmaids" element={<Navigate to="/#bridesmaids" replace />} />
        <Route path="/location" element={<Navigate to="/#location" replace />} />
      </Routes>
    </div>
    <AppFooter />
  </>
);

export default App;
