import couple from '../assets/images/couple-home.jpg?w=720&format=webp&quality=80';
import coupleSrcSet from '../assets/images/couple-home.jpg?w=360;540;720&format=webp&quality=80&as=srcset';
import CountdownTimer from '../components/CountdownTimer';
import ResponsiveImage from '../components/ResponsiveImage';
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
        <ResponsiveImage
          src={couple}
          srcSet={coupleSrcSet}
          sizes="(max-width: 900px) 100vw, 50vw"
          width={720}
          height={1080}
          alt="Rhys and Teniola"
          className="home-photo"
          loading="eager"
          fetchPriority="high"
        />
        <figcaption>Rhys & Teniola · 2027</figcaption>
      </figure>
    </section>
  </main>
);

export default Home;
