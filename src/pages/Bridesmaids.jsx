import marinKitagawa from '../assets/images/anime/marin-kitagawa-wedding.webp';
import useRevealGroup from '../hooks/useRevealGroup';
import { bridesmaids } from '../data/wedding';
import './WeddingPages.css';

function Bridesmaids() {
  const sectionRef = useRevealGroup();

  return (
    <section id="bridesmaids" className="chapter-section cast-section cast-section-bridesmaids" aria-labelledby="bridesmaids-heading" ref={sectionRef}>
      <div className="section-shell cast-layout cast-layout-reverse">
        <header className="section-heading section-heading-left cast-heading" data-reveal>
          <span className="chapter-label">Chapter 03 · Side B</span>
          <span className="page-kicker">Meet the ladies</span>
          <h2 id="bridesmaids-heading" tabIndex="-1">The Bridesmaids</h2>
          <p>The friends and family standing beside the bride on the big day. Portraits, names, and introductions can be added when they are ready.</p>
        </header>
        <figure className="cast-character-panel cast-character-marin" data-reveal>
          <img
            src={marinKitagawa}
            alt="Marin Kitagawa dressed for a wedding"
            width="864"
            height="1821"
            loading="lazy"
            decoding="async"
            draggable="false"
          />
          <figcaption>Marin Kitagawa · Guest guide</figcaption>
        </figure>
      </div>

      <div className="party-grid section-shell">
        {bridesmaids.map((person, index) => (
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

export default Bridesmaids;
