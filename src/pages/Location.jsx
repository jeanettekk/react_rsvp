import useRevealGroup from '../hooks/useRevealGroup';
import { venues } from '../data/wedding';
import './WeddingPages.css';

const Location = () => {
  const sectionRef = useRevealGroup();

  return (
    <section id="location" className="chapter-section location-section" aria-labelledby="location-heading" ref={sectionRef}>
      <header className="section-heading" data-reveal>
        <span className="chapter-label">Chapter 04</span>
        <span className="page-kicker">Two destinations · one adventure</span>
        <h2 id="location-heading" tabIndex="-1">Find Your Way</h2>
        <p>Everything you need to travel from the ceremony to the celebration.</p>
      </header>

      <div className="venue-route section-shell">
        <div className="route-line" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>
        {venues.map((venue, index) => (
          <article className="venue-card" data-reveal key={venue.name}>
            <div className="venue-details">
              <span className="venue-step">Destination {String(index + 1).padStart(2, '0')}</span>
              <span className="page-kicker">{venue.type}</span>
              <h3>{venue.name}</h3>
              <p>{venue.address}</p>
              <a className="directions-link" href={venue.directions} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </div>
            <div className="venue-map-wrap">
              <iframe className="venue-map" src={venue.map} title={`${venue.name} map`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Location;
