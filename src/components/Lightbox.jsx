import { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import './Lightbox.css';

function Lightbox({ images = [], initialIndex = 0, open, onClose, name = '' }) {
  const [index, setIndex] = useState(initialIndex);
  const touchStartX = useRef(0);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex, open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, prev, next]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 50) next();
    else if (delta < -50) prev();
  };

  if (!open || images.length === 0) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.length > 1 && (
          <button className="lightbox-arrow lightbox-arrow-left" onClick={prev} aria-label="Previous image">
            &#8249;
          </button>
        )}
        <img src={images[index]} alt="" className="lightbox-image" />
        {images.length > 1 && (
          <>
            <button className="lightbox-arrow lightbox-arrow-right" onClick={next} aria-label="Next image">
              &#8250;
            </button>
            <div className="lightbox-tap lightbox-tap-left" onClick={prev} aria-label="Previous image" />
            <div className="lightbox-tap lightbox-tap-right" onClick={next} aria-label="Next image" />
          </>
        )}
      </div>
      {name && <span className="lightbox-name">{name}</span>}
      <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
        &#215;
      </button>
      {images.length > 1 && (
        <span className="lightbox-counter">{index + 1} / {images.length}</span>
      )}
    </div>
  );
}

Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialIndex: PropTypes.number,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default Lightbox;
