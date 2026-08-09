import './WeddingPages.css';

const venues = [
  {
    type: 'Ceremony venue',
    name: 'St Mark’s Church',
    address: '82 Lincoln Road, Peterborough, PE1 2SN',
    map: 'https://www.google.com/maps?q=St%20Mark%27s%20Church%2C%2082%20Lincoln%20Road%2C%20Peterborough%20PE1%202SN&output=embed',
  },
  {
    type: 'Reception venue',
    name: 'New Theatre',
    address: '46 Broadway, Peterborough, PE1 1RT',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.5910762704357!2d-0.24330222288270084!3d52.57700593200693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877f0fefe09dde7%3A0x1ff1b27549735dbf!2sNew%20Theatre!5e0!3m2!1sen!2suk!4v1733180237913!5m2!1sen!2suk',
  },
];

const Location = () => (
  <main className="wedding-page location-page">
    <header className="page-intro">
      <span className="page-kicker">Getting there</span>
      <h1>Locations</h1>
      <p>Everything you need to find your way from the ceremony to the celebration. Select a map to explore the surrounding area.</p>
    </header>
    <section className="venue-list">
      {venues.map((venue) => (
        <article className="venue-card" key={venue.name}>
          <div className="venue-details">
            <span className="page-kicker">{venue.type}</span>
            <h2>{venue.name}</h2>
            <p>{venue.address}</p>
            <span className="venue-note">Peterborough, United Kingdom</span>
          </div>
          <div className="venue-map-wrap">
            <iframe className="venue-map" src={venue.map} title={`${venue.name} map`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </article>
      ))}
    </section>
  </main>
);

export default Location;
