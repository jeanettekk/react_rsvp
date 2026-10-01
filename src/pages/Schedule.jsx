// src/pages/Schedule.jsx
import { useState } from 'react';
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
  { startTime: '1:00 pm', activity: 'Guest arrival and seating', location: 'Church' },
  { startTime: '1:30 pm', endTime: '2:00 pm', activity: 'Wedding ceremony', location: 'Church', highlight: true },
  { startTime: '3:30 pm', activity: 'Cocktail Hour', location: 'Church' },
  { startTime: '5:00 pm', activity: 'Reception', location: 'Theatre', highlight: true },
  { startTime: '7:30 pm', activity: 'Wedding speeches', location: 'Theatre' },
  { startTime: '8:00 pm', activity: 'First dance and party', location: 'Theatre', highlight: true },
  { startTime: '11:00 pm', activity: 'Celebration ends', location: 'Theatre' },
];

const Schedule = () => {
  const [activeSticker, setActiveSticker] = useState(null);

  return (
  <main className="wedding-page schedule-page">
    <header className="page-intro">
      <span className="page-kicker">Saturday · 27 February 2027</span>
      <h1>The Schedule</h1>
    </header>

    <section className="timeline" aria-label="Wedding day schedule">
      {events.map((event) => (
        <article
          className={`timeline-item${event.highlight ? ' timeline-item--highlight' : ''}`}
          key={`${event.startTime}-${event.activity}`}
        >
          <time
            className="timeline-time"
            aria-label={event.endTime ? `${event.startTime} to ${event.endTime}` : event.startTime}
          >
            <span>{event.startTime}</span>
            {event.endTime && (
              <>
                <span className="timeline-time-divider" aria-hidden="true" />
                <span>{event.endTime}</span>
              </>
            )}
          </time>
          <span className="timeline-dot" aria-hidden="true" />
          <div className="timeline-content">
            <h2>{event.activity}</h2>
            <div
              className={`schedule-location-wrap schedule-location-wrap--${event.location.toLowerCase()}`}
              tabIndex="0"
              aria-label={`${event.location} location`}
              onMouseEnter={() => setActiveSticker(event.activity)}
              onMouseLeave={() => setActiveSticker(null)}
              onFocus={() => setActiveSticker(event.activity)}
              onBlur={() => setActiveSticker(null)}
            >
              {activeSticker === event.activity && (
                <img className="schedule-location-sticker" src={locationStickers[event.location]} width="480" height="480" alt="" aria-hidden="true" decoding="async" />
              )}
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
};

export default Schedule;
