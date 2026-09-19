// src/pages/Schedule.jsx
import './WeddingPages.css';
import chopperSticker from '../assets/images/location-chopper.gif';
import merryGoSticker from '../assets/images/location-merry-go.gif';
import crewSticker from '../assets/images/location-one-piece.gif';

const locationStickers = {
  Church: chopperSticker,
  Travel: merryGoSticker,
  Theatre: crewSticker,
};

const events = [
  { time: '13:00 – 13:30', activity: 'Guest arrival and seating', location: 'Church' },
  { time: '13:30 – 14:00', activity: 'Wedding ceremony', location: 'Church', highlight: true },
  { time: '16:00 – 16:30', activity: 'Guests travel to the reception', location: 'Travel' },
  { time: '16:30 – 17:00', activity: 'Guests arrival and seating', location: 'Theatre' },
  { time: '17:30 – 17:40', activity: 'Bride and groom entrance', location: 'Theatre', highlight: true },
  { time: '17:45 – 19:30', activity: 'Buffet dinner and games', location: 'Theatre' },
  { time: '19:30 – 19:50', activity: 'Wedding speeches', location: 'Theatre' },
  { time: '20:00 – 23:00', activity: 'First dance and party', location: 'Theatre', highlight: true },
  { time: '23:00', activity: 'Celebration ends', location: 'Theatre' },
];

const Schedule = () => (
  <main className="wedding-page schedule-page">
    <header className="page-intro">
      <span className="page-kicker">Saturday · 27 February 2027</span>
      <h1>The Schedule</h1>
      <p>Everything you need to know for celebrating with us, from the ceremony to the final dance.</p>
    </header>

    <section className="timeline" aria-label="Wedding day schedule">
      {events.map((event) => (
        <article
          className={`timeline-item${event.highlight ? ' timeline-item--highlight' : ''}`}
          key={`${event.time}-${event.activity}`}
        >
          <time className="timeline-time">{event.time}</time>
          <span className="timeline-dot" aria-hidden="true" />
          <div className="timeline-content">
            <h2>{event.activity}</h2>
            <div
              className={`schedule-location-wrap schedule-location-wrap--${event.location.toLowerCase()}`}
              tabIndex="0"
              aria-label={`${event.location} location`}
            >
              <img className="schedule-location-sticker" src={locationStickers[event.location]} alt="" aria-hidden="true" />
              <span className={`schedule-location schedule-location--${event.location.toLowerCase()}`}>
                {event.location}
              </span>
            </div>
          </div>
        </article>
      ))}
    </section>
  </main>
);

export default Schedule;
