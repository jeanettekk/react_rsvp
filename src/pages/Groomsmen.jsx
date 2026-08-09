import gojoMarin from '../assets/images/anime/gojo-marin-wedding.webp';
import useRevealGroup from '../hooks/useRevealGroup';
import { groomsmen } from '../data/wedding';
import './WeddingPages.css';

function Groomsmen() {
  const sectionRef = useRevealGroup();

  return (
    <section id="groomsmen" className="chapter-section cast-section cast-section-groomsmen" aria-labelledby="groomsmen-heading" ref={sectionRef}>
      <div className="section-shell cast-layout">
        <header className="section-heading section-heading-left cast-heading" data-reveal>
          <span className="chapter-label">Chapter 03 · Side A</span>
          <span className="page-kicker">Meet the gentlemen</span>
          <h2 id="groomsmen-heading" tabIndex="-1">The Groomsmen</h2>
          <p>The friends and family standing beside the groom on the big day. Portraits, names, and introductions can be added when they are ready.</p>
        </header>
        <div className="cast-guide-crop cast-guide-gojo" data-reveal aria-hidden="true">
          <img src={gojoMarin} alt="" width="1024" height="1536" loading="lazy" decoding="async" draggable="false" />
          <span>Meet the cast</span>
        </div>
      </div>

      <div className="party-grid section-shell">
        {groomsmen.map((person, index) => (
          <article className="party-card" data-reveal key={`${person.role}-${index}`}>
            <div className="portrait-placeholder" aria-label="Photograph placeholder">
              <span>{person.initials}</span>
              <small>Portrait coming soon</small>
            </div>
            <div className="party-card-body">
              <span className="party-card-number">Cast {String(index + 1).padStart(2, '0')}</span>
              <h3>{person.name}</h3>
              <span className="party-role">{person.role}</span>
              <p>{person.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Groomsmen;
