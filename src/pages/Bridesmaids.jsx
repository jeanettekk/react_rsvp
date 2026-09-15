import { useState } from 'react';
import Lightbox from '../components/Lightbox';
import './WeddingPages.css';

// Replace these with your actual image files in src/assets/images/bridesmaids/
// import bridesmaid1Img from '../assets/images/bridesmaids/bridesmaid1.webp';
// import bridesmaid2Img from '../assets/images/bridesmaids/bridesmaid2.webp';

function Bridesmaids() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxName, setLightboxName] = useState('');

  const party = [
    { initials: 'B1', name: 'Bridesmaid Name', role: 'Bridesmaid', images: [], text: 'Add a few warm words about this bridesmaid and the role she has played in your story.' },
    { initials: 'B2', name: 'Bridesmaid Name', role: 'Bridesmaid', images: [], text: 'Add a fun fact, shared memory, or a short message celebrating your friendship.' },
  ];

  const openLightbox = (images, name, index = 0) => {
    if (images.length === 0) return;
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxName(name);
    setLightboxOpen(true);
  };

  return (
    <main className="wedding-page bridesmaids-page">
      <header className="page-intro">
        <span className="page-kicker">Meet the ladies</span>
        <h1>The Bridesmaids</h1>
      </header>
      <section className="party-grid">
        {party.map((person, index) => (
          <article className="party-card" key={`${person.role}-${index}`}>
            {person.images.length > 0 ? (
              <div className="portrait-wrap">
                <img
                  src={person.images[0]}
                  alt={person.name}
                  className="portrait-img"
                  onClick={() => openLightbox(person.images, person.name)}
                />
              </div>
            ) : (
              <div className="portrait-placeholder" aria-label="Photograph placeholder">{person.initials}</div>
            )}
            <div className="party-card-body">
              <h2>{person.name}</h2>
              {person.text.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
      <Lightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        name={lightboxName}
      />
    </main>
  );
}

export default Bridesmaids;
