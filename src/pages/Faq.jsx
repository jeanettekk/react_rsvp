import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import merryGoSticker from '../assets/images/location-merry-go.gif';
import './WeddingPages.css';
import './Faq.css';

const topics = [
  {
    id: 'timings', label: 'Location & timings', icon: '✦',
    questions: [
      { question: 'When and where is the wedding?', answer: <>
        <p>Our wedding is on <strong>Saturday 27 February 2027</strong>.</p>
        <p><strong>Ceremony:</strong> St Mark’s Church, 82 Lincoln Rd, Peterborough PE1 2SN.</p>
        <p><strong>Reception:</strong> The Boizot Lounge, New Theatre, 46 Broadway, Peterborough PE1 1RS.</p>
        <p>The venues are roughly a 7–10-minute walk from each other.</p>
      </> },
      { question: 'What time should I arrive?', answer: <p>Please arrive at <strong>1pm</strong>. The ceremony will start at <strong>1:30pm</strong>.</p> },
      { question: 'What time will the wedding finish?', answer: <>
        <p>Our reception will finish at <strong>11pm</strong>. For anyone travelling back the same day, the last trains to London are due to depart at <strong>11:18pm</strong>.</p>
        <p>Please check your train times nearer the day and allow time to get to the station.</p>
      </> },
    ],
  },
  {
    id: 'dress-code', label: 'Dress code', icon: '★',
    questions: [
      { question: 'What is the dress code?', answer: <>
        <p><strong>Nollywood glam or cosplay — dress to impress!</strong></p>
        <p>Children are heavily encouraged to come in their favourite costume, and adults are very welcome to cosplay too! Rhys and I are big cosplay lovers, and it would make our day to see your costumes in our wedding photos.</p>
        <p><strong>Colours to avoid:</strong> pink, navy, emerald green and white/ivory.</p>
        <p>If you’d like to wear traditional Nigerian attire, feel free to get in touch with the bride for questions or suggestions.</p>
        <p>For second-hand outfits, try searching “Nigerian traditional outfits” on Vinted. Ladies can also browse <a href="https://grass-fields.co.uk/collections/dresses" target="_blank" rel="noopener noreferrer">dresses at Grass-fields</a>.</p>
      </> },
    ],
  },
  {
    id: 'travel', label: 'Getting there & parking', icon: '↗',
    questions: [
      { question: 'Is there parking at the venue?', answer: <p>There’s parking at the church and limited parking at the reception. You can also park at Queensgate Shopping Centre’s car park, which is a 9-minute walk from both locations.</p> },
      { question: 'Is there public transport nearby?', answer: <p>Peterborough Station is a 13-minute walk from the ceremony venue, and there are taxis by the station.</p> },
      { question: 'Where should I stay if I’m travelling from out of town?', answer: <>
        <p>There are a few hotels within a 10–15-minute walk. Nearby options include:</p>
        <ul><li>Bull Hotel Peterborough</li><li>Premier Inn Peterborough City Centre hotel</li><li>Park Inn by Radisson Peterborough</li><li>Pearl Hotel</li></ul>
      </> },
    ],
  },
  {
    id: 'children', label: 'Children', icon: '♡',
    questions: [
      { question: 'Are children invited?', answer: <>
        <p>We’ve tried to include all the children we know of in the invitations. Unfortunately, we won’t be able to accommodate children who haven’t been named on your invite.</p>
        <p>If you’d prefer to leave the children at home and party the night away, that’s absolutely fine by us! 😊</p>
      </> },
      { question: 'Will there be children’s food?', answer: <p>There will <strong>not</strong> be a dedicated children’s menu, as we’re having a buffet dinner, but there will be some suitable (and non-spicy) options available.</p> },
    ],
  },
  {
    id: 'gifts', label: 'Gifts', icon: '✧',
    questions: [
      { question: 'What about gifts and the registry?', answer: <>
        <p>As this is an Afro-Caribbean wedding, Tenny would love you to bring some <strong>US $1 bills</strong> to spray on her and her crew during the reception. Feel free to bring cash on the day!</p>
        <p>If you’d like to give a gift or contribute to our honeymoon or wishlist items, you can visit <a href="https://www.moonsift.com/collection/teniola_soyeju2026/SHaB5KHls6XwcAFc5HfI" target="_blank" rel="noopener noreferrer">our gift registry on Moonsift</a>.</p>
      </> },
    ],
  },
];

export default function Faq() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <main className="wedding-page faq-page">
      <header className="page-intro faq-intro">
        <span className="faq-sticker">The guest guide ★</span>
        <span className="page-kicker">A little prep for a big celebration</span>
        <h1>FAQs</h1>
        <p>From getting here to dressing up, here’s everything you need to join the party.</p>
      </header>
      <nav className="faq-topics" aria-label="FAQ topics">
        {topics.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
      <div className="faq-content">
        {topics.map(({ id, label, icon, questions }, index) => (
          <section className="faq-section" id={id} key={id} aria-labelledby={`${id}-heading`}>
            <h2 id={`${id}-heading`}>
              {id === 'travel' ? (
                <button className="faq-topic-icon faq-travel-icon" type="button" aria-label="A Merry Go surprise">
                  <span aria-hidden="true">{icon}</span>
                  <span className="faq-ship-voyage" aria-hidden="true">
                    <img className="faq-travel-surprise" src={merryGoSticker} alt="" decoding="async" />
                  </span>
                </button>
              ) : <span className="faq-topic-icon" aria-hidden="true">{icon}</span>}
              {label}
            </h2>
            <div className="faq-questions">
              {questions.map(({ question, answer }, questionIndex) => (
                <details className="faq-item" key={question} open={index === 0 && questionIndex === 0}>
                  <summary>{question}<span className="faq-toggle" aria-hidden="true" /></summary>
                  <div className="faq-answer">{answer}</div>
                </details>
              ))}
            </div>
          </section>
        ))}
        <aside className="faq-ready">
          <span aria-hidden="true">★</span>
          <h2>Ready to celebrate?</h2>
          <p>We can’t wait to see you there. Let us know you’re coming!</p>
          <Link className="rsvp-cta-button" to="/rsvp">RSVP now</Link>
          <Link className="faq-back" to="/">Back to our wedding</Link>
        </aside>
      </div>
    </main>
  );
}
