import darknessKazuma from '../assets/images/anime/darkness-kazuma-wedding.webp';
import useRevealGroup from '../hooks/useRevealGroup';
import { schedule, wedding } from '../data/wedding';
import './WeddingPages.css';

const Schedule = () => {
  const sectionRef = useRevealGroup();

  return (
    <section id="schedule" className="chapter-section quest-section" aria-labelledby="schedule-heading" ref={sectionRef}>
      <div className="quest-header section-shell" data-reveal>
        <div className="section-heading section-heading-left">
          <span className="chapter-label">Chapter 02</span>
          <span className="page-kicker">Wedding day quest log</span>
          <h2 id="schedule-heading" tabIndex="-1">The Schedule</h2>
          <p>Follow the checkpoints from the first arrival to the last dance. Final details can be updated here as the day approaches.</p>
          <div className="quest-date-stamp">
            <span>Quest date</span>
            <time dateTime="2027-02-27">{wedding.dateLabel}</time>
          </div>
        </div>
        <div className="quest-guide-wrap">
          <span className="quest-speech">Quest accepted!</span>
          <img
            src={darknessKazuma}
            alt=""
            aria-hidden="true"
            width="1024"
            height="1536"
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </div>
      </div>

      <div className="quest-log section-shell">
        <div className="quest-path" aria-hidden="true" />
        {schedule.map((event, index) => (
          <article className="quest-card" data-reveal key={`${event.time}-${event.title}`}>
            <div className="quest-marker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
            <div className="quest-card-copy">
              <time className="quest-time" dateTime={event.dateTime}>{event.time}</time>
              <h3>{event.title}</h3>
              <p>{event.text}</p>
            </div>
            <span className="quest-status">Checkpoint</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
