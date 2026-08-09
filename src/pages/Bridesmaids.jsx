import './WeddingPages.css';

function Bridesmaids() {
  const party = [
    { initials: 'MOH', name: 'Maid of Honour Name', role: 'Maid of Honour', text: 'Add a short introduction, a favourite memory, or how the bride and maid of honour first met.' },
    { initials: 'B1', name: 'Bridesmaid Name', role: 'Bridesmaid', text: 'Add a few warm words about this bridesmaid and the role she has played in your story.' },
    { initials: 'B2', name: 'Bridesmaid Name', role: 'Bridesmaid', text: 'Add a fun fact, shared memory, or a short message celebrating your friendship.' },
  ];

  return (
    <main className="wedding-page bridesmaids-page">
      <header className="page-intro">
        <span className="page-kicker">Meet the ladies</span>
        <h1>The Bridesmaids</h1>
        <p>The friends and family standing beside the bride on the big day. Replace these placeholders with their names, photographs, and stories.</p>
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

export default Bridesmaids;
