import couple from '../assets/images/couple-home.jpg';
import CountdownTimer from '../components/CountdownTimer';
import './WeddingPages.css';

const Home = () => (
  <main className="wedding-page home-page">
    <section className="home-hero">
      <div className="home-copy">
        <span className="page-kicker">Save the date</span>
        <h1>We&apos;re getting married!</h1>
        <time className="home-date" dateTime="2027-02-27T13:00:00" aria-label="Saturday, 27 February 2027 at 1 PM">
          <span className="home-date-day">Saturday</span>
          <span className="home-date-separator" aria-hidden="true">·</span>
          <span>27 February 2027</span>
          <span className="home-date-time"><span aria-hidden="true">·</span> 1 PM</span>
        </time>
        <div className="home-venue">
          <span>Ceremony at</span>
          <strong>St Mark&apos;s Church</strong>
          <p>82 Lincoln Road, Peterborough · PE1 2SN</p>
        </div>
        <CountdownTimer />
      </div>
      <figure className="home-photo-wrap">
        <img src={couple} alt="Rhys and Teniola" className="home-photo" />
        <figcaption>Rhys & Teniola · 2027</figcaption>
      </figure>
    </section>
  </main>
);

export default Home;
