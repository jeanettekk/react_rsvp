// src/pages/Schedule.jsx
import './WeddingPages.css';

const Schedule = () => {
  const events = [
    { time: '1:00 PM', title: 'Guest Arrival', text: 'Please arrive with plenty of time to find your seat and settle in before the ceremony begins.' },
    { time: '1:30 PM', title: 'Wedding Ceremony', text: 'Join us as we exchange our vows at St Mark’s Church. Add any ceremony notes here.' },
    { time: '3:00 PM', title: 'Drinks & Photographs', text: 'Enjoy refreshments, mingle with other guests, and join us for photographs.' },
    { time: '5:00 PM', title: 'Wedding Breakfast', text: 'Take your seat for dinner, speeches, and a celebration of good food and great company.' },
    { time: '8:00 PM', title: 'Evening Celebration', text: 'The dance floor opens. Add details for music, evening guests, food, or the last dance.' },
  ];

  return (
    <main className="wedding-page">
      <header className="page-intro">
        <span className="page-kicker">Saturday · 27 February 2027</span>
        <h1>The Schedule</h1>
        <p>A placeholder guide to our wedding day. Final timings and any extra guest information can be added here closer to the celebration.</p>
      </header>
      <section className="timeline">
        {events.map((event) => (
          <article className="timeline-item" key={`${event.time}-${event.title}`}>
            <time className="timeline-time">{event.time}</time>
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <h2>{event.title}</h2>
              <p>{event.text}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Schedule; // Ensure you have this line to export the component
