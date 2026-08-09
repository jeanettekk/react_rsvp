import { Link } from 'react-router-dom';
import gokuChiChi from '../assets/images/anime/goku-chichi-wedding.webp';
import './WeddingPages.css';

const Rsvp = () => (
  <main id="main-content" className="rsvp-page">
    <div className="rsvp-page-heading">
      <Link className="back-link" to="/#home"><span aria-hidden="true">←</span> Back to the story</Link>
      <span className="chapter-label">Final chapter</span>
      <span className="page-kicker">Your reply</span>
      <h1>Will you join us?</h1>
      <p>Complete the form below to let Rhys and Teniola know whether you can celebrate with them.</p>
      <img src={gokuChiChi} alt="" aria-hidden="true" width="1024" height="1536" decoding="async" />
    </div>
    <div className="rsvp-form-frame">
      <span className="form-frame-label">RSVP · 27.02.2027</span>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdEF3YVa91oZ9yHXJSOzrLXr6DhklBmv0Y-K2XpBaNKN8le2Q/viewform?embedded=true"
        title="Rhys and Teniola wedding RSVP form"
      />
    </div>
  </main>
);

export default Rsvp;
