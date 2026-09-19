import { useState } from 'react';
import Lightbox from '../components/Lightbox';
import './WeddingPages.css';

// Replace these with your actual image files in src/assets/images/groomsmen/
import jkImg from '../assets/images/groomsmen/jk.jpg';
import jkImg2 from '../assets/images/groomsmen/jk-2.jpg';
import jkImg3 from '../assets/images/groomsmen/jk-3.jpg';
import nyleImg from '../assets/images/groomsmen/nyle.jpg';
import nyleImg2 from '../assets/images/groomsmen/nyle-2.jpg';
import aflayImg from '../assets/images/groomsmen/aflay.jpg';
import aflayImg2 from '../assets/images/groomsmen/aflay-2.jpg';

function Groomsmen() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxName, setLightboxName] = useState('');

  const party = [
    { initials: 'BM', name: 'JK', role: 'Groomsman', images: [jkImg, jkImg2, jkImg3], text: 'Hi I\'m  JK. Me and Rhys met many moons ago as lil bebes at our first job. He was the tall one, I was the short one, we\'re made quite the pair.' },
    { initials: 'G1', name: 'Nyle', role: 'Groomsman', images: [nyleImg, nyleImg2], text: 'I\'m Nyle, Rhys\'s brother.\nSome of my earliest memories of Rhys involve my mum standing over his bed with a spray bottle, trying to get him up on a weekend. He was not a morning person. When he was actually awake, chances are he was glued to Dragon Ball Z, which he was completely obsessed with.\nHe was also the first person I ever saw buying and selling on eBay, back when eBay had a bit of a dodgy reputation (at least in our parents\' eyes). Watching him do it got me curious, so I started small, flogging little bits here and there, and it slowly grew into something a lot bigger. So in a way, Rhys is the reason I got into all of that.\nCouldn\'t be prouder of him. Love you bro.' },
    { initials: 'G2', name: 'Aflay', role: 'Groomsman', images: [aflayImg, aflayImg2], text: 'I met Rhys through my friend Degan who was a mutual friend of both of ours and I Came to dodgeball and Met RJ although I was introduced to him with the name Booze, so I didn\'t even know his real name until a little later on.\nHe seemed like a cool guy, it\'s great that we have stayed in touch ever since. Its even an honour to be a groomsmen although I was told by his fiancè I was a groomsmen and I said to her \'are you sure because RJ has not told me anything?\'' },
  ];

  const openLightbox = (images, name, index = 0) => {
    if (images.length === 0) return;
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxName(name);
    setLightboxOpen(true);
  };

  return (
    <main className="wedding-page">
      <header className="page-intro">
        <span className="page-kicker">Meet the gentlemen</span>
        <h1>The Groomsmen</h1>
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

export default Groomsmen;
