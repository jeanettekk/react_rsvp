import { Link } from 'react-router-dom';
import couple from '../assets/images/couple-home.jpg';
import gokuChiChi from '../assets/images/anime/goku-chichi-wedding.webp';
import CountdownTimer from '../components/CountdownTimer';
import useRevealGroup from '../hooks/useRevealGroup';
import { wedding } from '../data/wedding';
import './WeddingPages.css';

const Home = () => {
  const sectionRef = useRevealGroup();

  return (
    <section id="home" className="chapter-section hero-section" aria-labelledby="home-heading" ref={sectionRef}>
      <div className="halftone-field halftone-field-one" aria-hidden="true" />
      <div className="hero-shell">
        <div className="hero-copy" data-reveal>
          <div className="chapter-heading-row">
            <span className="chapter-label">Chapter 00</span>
            <span className="chapter-rule" aria-hidden="true" />
            <span className="chapter-note">The wedding edition</span>
          </div>
          <span className="page-kicker">Save the date</span>
          <h1 id="home-heading" tabIndex="-1">Our greatest adventure begins</h1>
          <p className="hero-deck">Rhys and Teniola are getting married—and you&apos;re invited to be part of the story.</p>
          <div className="hero-date-lockup">
            <time dateTime="2027-02-27">{wedding.dateLabel}</time>
            <span>{wedding.ceremony.name}</span>
            <small>{wedding.ceremony.address}</small>
          </div>
          <div className="hero-actions">
            <Link className="manga-button manga-button-primary" to="/rsvp">RSVP now</Link>
            <Link className="manga-button manga-button-ghost" to="/#story">Read our story <span aria-hidden="true">↓</span></Link>
          </div>
          <CountdownTimer />
        </div>

        <div className="hero-art" data-reveal>
          <figure className="manga-cover">
            <div className="manga-cover-image">
              <img
                src={couple}
                alt="Rhys and Teniola together"
                className="hero-photo"
                width="720"
                height="1080"
                fetchPriority="high"
                decoding="async"
              />
              <span className="cover-issue">Vol. 01</span>
              <figcaption>
                <span>A love story by</span>
                <strong>Rhys & Teniola</strong>
              </figcaption>
            </div>
          </figure>
          <img
            src={gokuChiChi}
            className="hero-character-guide"
            alt=""
            aria-hidden="true"
            width="1024"
            height="1536"
            draggable="false"
          />
          <span className="hero-speech-bubble">A new chapter!</span>
        </div>
      </div>
      <a className="scroll-cue" href="#story">
        <span>Scroll to continue</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
};

export default Home;
