import couple from '../assets/images/couple.jpg';
import CountdownTimer from '../components/CountdownTimer';
import './WeddingPages.css';

const Home = () => (
  <main className="wedding-page home-page">
    <section className="home-hero">
      <div className="home-copy">
        <span className="page-kicker">Save the date</span>
        <h1>We&apos;re getting married!</h1>
        <p className="home-date">Friday · 26 February 2027</p>
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
