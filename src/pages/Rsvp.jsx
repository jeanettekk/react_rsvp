import './WeddingPages.css';

const Rsvp = () => {
  return (
    <main className="wedding-page rsvp-page">
      <header className="page-intro">
        <span className="page-kicker">We'd love to hear from you</span>
        <h1>The Invitation</h1>
        <p>Please let us know if you can join our celebration</p>
      </header>

      <section className="rsvp-container">
        <div className="rsvp-card">
          <div className="rsvp-form-container">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdEF3YVa91oZ9yHXJSOzrLXr6DhklBmv0Y-K2XpBaNKN8le2Q/viewform?embedded=true"
              title="RSVP Form"
              className="rsvp-iframe"
              scrolling="no"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Rsvp;
