import './WeddingPages.css';

function Groomsmen() {
  const party = [
    { initials: 'BM', name: 'Best Man Name', role: 'Best Man', text: 'Add a short introduction, a favourite memory, or how the groom and best man first met.' },
    { initials: 'G1', name: 'Groomsman Name', role: 'Groomsman', text: 'Add a few warm words about this groomsman and the role he has played in your story.' },
    { initials: 'G2', name: 'Groomsman Name', role: 'Groomsman', text: 'Add a fun fact, shared memory, or a short message celebrating your friendship.' },
  ];

  return (
    <main className="wedding-page">
      <header className="page-intro">
        <span className="page-kicker">Meet the gentlemen</span>
        <h1>The Groomsmen</h1>
        <p>The friends and family standing beside the groom on the big day. Replace these placeholders with their names, photographs, and stories.</p>
      </header>
      <section className="party-grid">
        {party.map((person, index) => (
          <article className="party-card" key={`${person.role}-${index}`}>
            <div className="portrait-placeholder" aria-label="Photograph placeholder">{person.initials}</div>
            <div className="party-card-body">
              <h2>{person.name}</h2>
              <span className="party-role">{person.role}</span>
              <p>{person.text}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Groomsmen;
