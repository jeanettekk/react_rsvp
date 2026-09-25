import { CollectionsOutlined } from '@mui/icons-material';
import { useState } from 'react';
import Lightbox from '../components/Lightbox';
import './WeddingPages.css';

import jen from '../assets/images/bridesmaids/jen.jpg';
import jen2 from '../assets/images/bridesmaids/jen-2.jpg';
import jen3 from '../assets/images/bridesmaids/jen-3.jpg';
import jen4 from '../assets/images/bridesmaids/jen-4.jpg';
import jen5 from '../assets/images/bridesmaids/jen-5.JPG';

function Bridesmaids() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxName, setLightboxName] = useState('');

  const party = [
    { initials: 'B1', name: 'Jessica', role: 'Bridesmaid', images: [], text: 'Jessicas intro' },
    { initials: 'B2', name: 'Jen', role: 'Bridesmaid', images: [jen, jen2, jen3, jen4, jen5], text: `Me and Tenny both attended Bournemouth University and I met her at her Anime Society's social cause I helped their president, my hallmate at the time, organise it, even though I wasn't a member yet. 

I didn't get to chat with her much cause we were sitting opposite ends of the table, but what I did notice is that every time I sent a funny face her way, she would return it right back. And that's when I knew — this was my type of gal!

To this day, we still love making funny faces! That funny face energy is probably why when I was introduced to her colleague at the Magnum ice cream store, he told her "You met another you?!"` },
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
              <button
                className="portrait-wrap"
                type="button"
                onClick={() => openLightbox(person.images, person.name)}
                aria-label={`View ${person.name} photo gallery`}
              >
                <img src={person.images[0]} alt="" className="portrait-img" />
                <span className="gallery-hint">
                  <CollectionsOutlined aria-hidden="true" />
                  <span className="gallery-hint-prefix">View </span>gallery
                </span>
              </button>
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
