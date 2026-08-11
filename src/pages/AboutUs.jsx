import { useCallback, useEffect, useRef, useState } from 'react';
import narutoHinata from '../assets/images/anime/naruto-hinata-wedding.webp';
import useMotionSetting from '../hooks/useMotionSetting';
import useRevealGroup from '../hooks/useRevealGroup';
import { storyBabyPanel, storyChapters, wedding } from '../data/wedding';
import './WeddingPages.css';

/* ─── Placeholder image data URIs ─────────────────────────────────────────── */
/* Replace the src values below with real imported photos once you have them.  */

const PLACEHOLDER_BRIDE_BABY =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='400' viewBox='0 0 320 400'%3E%3Crect width='320' height='400' fill='%23f3dce5'/%3E%3Crect width='320' height='400' fill='url(%23d)' opacity='.35'/%3E%3Cdefs%3E%3Cpattern id='d' width='9' height='9' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='4.5' cy='4.5' r='1.2' fill='%238f084b'/%3E%3C/pattern%3E%3C/defs%3E%3Ccircle cx='160' cy='155' r='58' fill='%23be0e65' opacity='.18'/%3E%3Ctext x='160' y='175' text-anchor='middle' font-family='Georgia,serif' font-size='72' fill='%238f084b' opacity='.22'%3E%E2%99%A5%3C/text%3E%3Crect x='60' y='270' width='200' height='2' fill='%23321b27' opacity='.12'/%3E%3Ctext x='160' y='316' text-anchor='middle' font-family='Arial,sans-serif' font-size='11' font-weight='900' letter-spacing='3' fill='%238f084b'%3EPHOTO COMING SOON%3C/text%3E%3Ctext x='160' y='338' text-anchor='middle' font-family='Arial,sans-serif' font-size='10' fill='%235f4752'%3ETeniola · Baby Photo%3C/text%3E%3C/svg%3E";

const PLACEHOLDER_GROOM_BABY =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='400' viewBox='0 0 320 400'%3E%3Crect width='320' height='400' fill='%23f8eee4'/%3E%3Crect width='320' height='400' fill='url(%23d)' opacity='.35'/%3E%3Cdefs%3E%3Cpattern id='d' width='9' height='9' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='4.5' cy='4.5' r='1.2' fill='%23321b27'/%3E%3C/pattern%3E%3C/defs%3E%3Ccircle cx='160' cy='155' r='58' fill='%23321b27' opacity='.1'/%3E%3Ctext x='160' y='175' text-anchor='middle' font-family='Georgia,serif' font-size='72' fill='%23321b27' opacity='.14'%3E%E2%98%85%3C/text%3E%3Crect x='60' y='270' width='200' height='2' fill='%23321b27' opacity='.12'/%3E%3Ctext x='160' y='316' text-anchor='middle' font-family='Arial,sans-serif' font-size='11' font-weight='900' letter-spacing='3' fill='%23321b27'%3EPHOTO COMING SOON%3C/text%3E%3Ctext x='160' y='338' text-anchor='middle' font-family='Arial,sans-serif' font-size='10' fill='%235f4752'%3ERhys · Baby Photo%3C/text%3E%3C/svg%3E";

const PLACEHOLDER_CHAPTER_PHOTOS = [
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='380' viewBox='0 0 320 380'%3E%3Crect width='320' height='380' fill='%23fffaf2'/%3E%3Crect width='320' height='380' fill='url(%23d)' opacity='.3'/%3E%3Cdefs%3E%3Cpattern id='d' width='9' height='9' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='4.5' cy='4.5' r='1.1' fill='%23be0e65'/%3E%3C/pattern%3E%3C/defs%3E%3Ccircle cx='160' cy='150' r='52' fill='%23fdb21e' opacity='.22'/%3E%3Ctext x='160' y='170' text-anchor='middle' font-family='Georgia,serif' font-size='60' fill='%23321b27' opacity='.15'%3E01%3C/text%3E%3Crect x='60' y='258' width='200' height='2' fill='%23321b27' opacity='.1'/%3E%3Ctext x='160' y='298' text-anchor='middle' font-family='Arial,sans-serif' font-size='10' font-weight='900' letter-spacing='2.5' fill='%238f084b'%3EPHOTO COMING SOON%3C/text%3E%3Ctext x='160' y='318' text-anchor='middle' font-family='Arial,sans-serif' font-size='9.5' fill='%235f4752'%3EHow We Met%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='380' viewBox='0 0 320 380'%3E%3Crect width='320' height='380' fill='%23fffaf2'/%3E%3Crect width='320' height='380' fill='url(%23d)' opacity='.3'/%3E%3Cdefs%3E%3Cpattern id='d' width='9' height='9' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='4.5' cy='4.5' r='1.1' fill='%23be0e65'/%3E%3C/pattern%3E%3C/defs%3E%3Ccircle cx='160' cy='150' r='52' fill='%23be0e65' opacity='.14'/%3E%3Ctext x='160' y='170' text-anchor='middle' font-family='Georgia,serif' font-size='60' fill='%23321b27' opacity='.15'%3E02%3C/text%3E%3Crect x='60' y='258' width='200' height='2' fill='%23321b27' opacity='.1'/%3E%3Ctext x='160' y='298' text-anchor='middle' font-family='Arial,sans-serif' font-size='10' font-weight='900' letter-spacing='2.5' fill='%238f084b'%3EPHOTO COMING SOON%3C/text%3E%3Ctext x='160' y='318' text-anchor='middle' font-family='Arial,sans-serif' font-size='9.5' fill='%235f4752'%3EOur Favourite Chapter%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='380' viewBox='0 0 320 380'%3E%3Crect width='320' height='380' fill='%23fffaf2'/%3E%3Crect width='320' height='380' fill='url(%23d)' opacity='.3'/%3E%3Cdefs%3E%3Cpattern id='d' width='9' height='9' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='4.5' cy='4.5' r='1.1' fill='%23be0e65'/%3E%3C/pattern%3E%3C/defs%3E%3Ccircle cx='160' cy='150' r='52' fill='%23fdb21e' opacity='.3'/%3E%3Ctext x='160' y='170' text-anchor='middle' font-family='Georgia,serif' font-size='60' fill='%23321b27' opacity='.15'%3E03%3C/text%3E%3Crect x='60' y='258' width='200' height='2' fill='%23321b27' opacity='.1'/%3E%3Ctext x='160' y='298' text-anchor='middle' font-family='Arial,sans-serif' font-size='10' font-weight='900' letter-spacing='2.5' fill='%238f084b'%3EPHOTO COMING SOON%3C/text%3E%3Ctext x='160' y='318' text-anchor='middle' font-family='Arial,sans-serif' font-size='9.5' fill='%235f4752'%3EThe Proposal%3C/text%3E%3C/svg%3E",
];

/* ─── Lightbox ──────────────────────────────────────────────────────────────── */
function StoryLightbox({ src, alt, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="story-lightbox"
      aria-modal="true"
      role="dialog"
      aria-label="Photo viewer"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        className="story-lightbox-close"
        aria-label="Close photo"
        onClick={onClose}
      >
        ✕
      </button>
      <img
        className="story-lightbox-img"
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

/* ─── Clickable photo inside a panel ───────────────────────────────────────── */
function PanelPhoto({ src, alt, caption, onOpen, rotate }) {
  return (
    <button
      className="panel-photo-wrap"
      style={{ '--photo-rotate': rotate ?? '2deg' }}
      aria-label={`View photo: ${alt}`}
      onClick={() => onOpen(src, alt)}
      type="button"
    >
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      {caption && <span className="panel-photo-label">{caption}</span>}
    </button>
  );
}

/* ─── Baby panel ────────────────────────────────────────────────────────────── */
function BabyPanel({ onOpen }) {
  return (
    <article className="manga-story-panel manga-story-panel-0" aria-label="Before it all began">
      <div className="panel-number" aria-hidden="true">{storyBabyPanel.number}</div>
      <span className="panel-label">{storyBabyPanel.label}</span>
      <h3>{storyBabyPanel.title}</h3>
      <div className="baby-panel-photos">
        <div className="baby-photo-cell">
          <button
            className="panel-photo-wrap panel-photo-wrap-baby"
            style={{ '--photo-rotate': '-2.5deg' }}
            aria-label={`View photo: ${storyBabyPanel.bride.alt}`}
            onClick={() => onOpen(PLACEHOLDER_BRIDE_BABY, storyBabyPanel.bride.alt)}
            type="button"
          >
            <img src={PLACEHOLDER_BRIDE_BABY} alt={storyBabyPanel.bride.alt} loading="lazy" decoding="async" />
          </button>
          <span className="baby-photo-caption">{storyBabyPanel.bride.caption}</span>
        </div>
        <div className="baby-photo-cell">
          <button
            className="panel-photo-wrap panel-photo-wrap-baby"
            style={{ '--photo-rotate': '2deg' }}
            aria-label={`View photo: ${storyBabyPanel.groom.alt}`}
            onClick={() => onOpen(PLACEHOLDER_GROOM_BABY, storyBabyPanel.groom.alt)}
            type="button"
          >
            <img src={PLACEHOLDER_GROOM_BABY} alt={storyBabyPanel.groom.alt} loading="lazy" decoding="async" />
          </button>
          <span className="baby-photo-caption">{storyBabyPanel.groom.caption}</span>
        </div>
      </div>
    </article>
  );
}



/* ─── Main component ────────────────────────────────────────────────────────── */
function AboutUs() {
  const revealRef = useRevealGroup();
  const storyStageRef = useRef(null);
  const [storyStage, setStoryStage] = useState(0);
  const { motionEnabled } = useMotionSetting();
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = useCallback((src, alt) => setLightbox({ src, alt }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    const storyStageElement = storyStageRef.current;
    if (!storyStageElement) return undefined;

    let animationFrame = 0;

    const updateStory = () => {
      animationFrame = 0;
      const desktop = window.matchMedia('(min-width: 901px)').matches;
      if (!motionEnabled || !desktop) {
        storyStageElement.style.setProperty('--story-progress', '1');
        setStoryStage(5);
        return;
      }

      const rect = storyStageElement.getBoundingClientRect();
      const travel = Math.max(1, storyStageElement.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      storyStageElement.style.setProperty('--story-progress', progress.toFixed(3));
      setStoryStage(Math.min(5, Math.floor(progress * 6)));
    };

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateStory);
    };

    updateStory();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [motionEnabled]);

  return (
    <section id="story" className="chapter-section story-section" aria-labelledby="story-heading" ref={revealRef}>
      <header className="section-heading story-section-heading" data-reveal>
        <span className="chapter-label">Chapter 01</span>
        <span className="page-kicker">Rhys & Teniola</span>
        <h2 id="story-heading" tabIndex="-1">Our Story</h2>
        <p>Every love story has its own rhythm. These panels are ready for the moments, memories, and happy surprises that led you to forever.</p>
      </header>

      <div ref={storyStageRef} className={`story-scroll-stage story-stage-${storyStage}`}>
        <div className="story-sticky-canvas">
          <div className="story-speed-lines" aria-hidden="true" />
          <div className="story-guide-wrap">
            <img
              src={narutoHinata}
              className="story-guide"
              alt=""
              aria-hidden="true"
              width="1024"
              height="1536"
              loading="lazy"
              decoding="async"
              draggable="false"
            />
            <span className="story-guide-caption">A story worth waiting for</span>
          </div>

          <div className="story-panels">
            {/* Chapter 00 — Baby panel */}
            <BabyPanel onOpen={openLightbox} />

            {/* Chapters 01–03 */}
            {storyChapters.map((chapter, index) => (
              <article className={`manga-story-panel manga-story-panel-${index + 1}`} key={chapter.number}>
                <div className="panel-number" aria-hidden="true">{chapter.number}</div>
                <span className="panel-label">{chapter.label}</span>

                <div className="panel-content-with-photo">
                  <PanelPhoto
                    src={PLACEHOLDER_CHAPTER_PHOTOS[index]}
                    alt={chapter.photoAlt}
                    caption={chapter.photoCaption}
                    onOpen={openLightbox}
                    rotate={index % 2 === 0 ? '-2deg' : '2.5deg'}
                  />
                  <div className="panel-text-block">
                    <h3>{chapter.title}</h3>
                    <p>{chapter.text}</p>
                    {index === 1 && <span className="speech-bubble">Favourite scene →</span>}
                  </div>
                </div>
              </article>
            ))}

            <article className="manga-story-panel manga-story-finale">
              <span className="panel-label">To be continued…</span>
              <h3>The next chapter begins</h3>
              <time dateTime="2027-02-27">{wedding.dateLabel}</time>
            </article>
          </div>

          <div className="story-progress" aria-hidden="true">
            <span>00</span>
            <i><b /></i>
            <span>03</span>
          </div>
        </div>
      </div>

      {lightbox && (
        <StoryLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}

export default AboutUs;
