import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import chibiGoku from '../assets/images/chibi-goku-groom-2d.webp';
import chibiChiChi from '../assets/images/chibi-chichi-bride-2d.webp';
import './GiftRegistryModal.css';

const REGISTRY_URL = 'https://example.com/registry';

function GiftRegistryModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="gift-backdrop" onClick={onClose}>
      <div className="gift-panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="gift-heading">
        <button className="gift-close" onClick={onClose} aria-label="Close gift registry">
          &#215;
        </button>

        <div className="gift-panel-inner">
          <span className="gift-kicker">Gift Registry</span>
          <h2 id="gift-heading" className="gift-heading">Thank you for thinking&nbsp;of&nbsp;us!</h2>
          <p className="gift-message">
            Your presence at our wedding is the greatest gift of all.
            However, if you wish to honour us with a gift, we have set up a registry.
          </p>
          <a
            className="gift-cta"
            href={REGISTRY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Registry
          </a>
        </div>

        <div className="gift-chibis" aria-hidden="true">
          <img src={chibiGoku} alt="" className="gift-chibi gift-chibi-groom" draggable="false" />
          <img src={chibiChiChi} alt="" className="gift-chibi gift-chibi-bride" draggable="false" />
        </div>
      </div>
    </div>,
    document.body
  );
}

GiftRegistryModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default GiftRegistryModal;
