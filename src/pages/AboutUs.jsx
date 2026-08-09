import './WeddingPages.css';

function AboutUs() {
  const chapters = [
    { number: '01', title: 'How We Met', text: 'Add the story of where it all began—the first hello, the first laugh, and the moment you knew this meeting was special.' },
    { number: '02', title: 'Our Favourite Chapter', text: 'Share a memorable adventure, a meaningful milestone, or one of the little everyday moments that brought you closer together.' },
    { number: '03', title: 'The Proposal', text: 'Tell your guests how the question was asked, where it happened, and what made that unforgettable day uniquely yours.' },
  ];

  return (
    <main className="wedding-page">
      <header className="page-intro">
        <span className="page-kicker">Rhys & Teniola</span>
        <h1>Our Story</h1>
        <p>Every love story has its own rhythm. Here is a little space for the moments, memories, and happy surprises that led us to forever.</p>
      </header>
      <section className="story-grid">
        {chapters.map((chapter) => (
          <article className="story-card" key={chapter.number}>
            <span className="story-number">{chapter.number}</span>
            <h2>{chapter.title}</h2>
            <p>{chapter.text}</p>
          </article>
        ))}
      </section>
      <div className="story-quote">“Add a favourite quote, lyric, or a few words that capture your life together.”</div>
    </main>
  );
}

export default AboutUs;
