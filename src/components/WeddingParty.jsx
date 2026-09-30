import { CollectionsOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Lightbox from './Lightbox';
import ResponsiveImage from './ResponsiveImage';

function WeddingParty({ className = '', kicker, title, party }) {
  const [gallery, setGallery] = useState(null);

  return (
    <main className={`wedding-page${className ? ` ${className}` : ''}`}>
      <header className="page-intro">
        <span className="page-kicker">{kicker}</span>
        <h1>{title}</h1>
      </header>
      <section className="party-grid">
        {party.map((person) => (
          <article className="party-card" key={person.name}>
            {person.images.length > 0 ? (
              <button
                className="portrait-wrap"
                type="button"
                onClick={() => setGallery(person)}
                aria-label={`View ${person.name} photo gallery`}
              >
                <ResponsiveImage
                  src={person.thumbnail.src}
                  width={person.thumbnail.width}
                  height={person.thumbnail.height}
                  alt=""
                  className="portrait-img"
                  fetchPriority="low"
                />
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
              {person.text.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
      <Lightbox
        images={gallery?.images ?? []}
        initialIndex={0}
        open={Boolean(gallery)}
        onClose={() => setGallery(null)}
        name={gallery?.name ?? ''}
      />
    </main>
  );
}

const personShape = PropTypes.shape({
  initials: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  thumbnail: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
});

WeddingParty.propTypes = {
  className: PropTypes.string,
  kicker: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  party: PropTypes.arrayOf(personShape).isRequired,
};

export default WeddingParty;
