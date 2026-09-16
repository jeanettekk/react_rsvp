import { useEffect, useRef, useState } from 'react';
import howWeMet1 from '../assets/images/story/how-we-met.jpg';
import howWeMet2 from '../assets/images/story/how-we-met-2.jpg';
import howWeMet3 from '../assets/images/story/how-we-met-3.jpg';
import howWeMet4 from '../assets/images/story/how-we-met-4.jpg';
import favouriteChapter1 from '../assets/images/story/favourite-chapter.jpg';
import favouriteChapter2 from '../assets/images/story/favourite-chapter-2.jpg';
import proposal1 from '../assets/images/story/proposal-1.svg';
import proposal2 from '../assets/images/story/proposal-2.svg';
import proposal3 from '../assets/images/story/proposal-3.svg';
import Lightbox from '../components/Lightbox';
import useMotionSetting from '../hooks/useMotionSetting';
import './WeddingPages.css';

const storyChapters = [
  {
    number: '01',
    title: 'How We Met',
    label: 'The opening scene',
    images: [howWeMet1, howWeMet2, howWeMet3, howWeMet4],
    text: 'Add the story of where it all began—the first hello, the first laugh, and the moment you knew this meeting was special.',
  },
  {
    number: '02',
    title: 'Our Favourite Chapters',
    label: 'The adventure so far',
    images: [favouriteChapter1, favouriteChapter2],
    text: 'Share a memorable adventure, a meaningful milestone, or one of the little everyday moments that brought you closer together.',
  },
  {
    number: '03',
    title: 'The Proposal',
    label: 'The page-turner',
    images: [proposal1, proposal2, proposal3],
    text: 'Tell your guests how the question was asked, where it happened, and what made that unforgettable day uniquely yours.',
  },
];

function AboutUs() {
  const storyStageRef = useRef(null);
  const [storyStage, setStoryStage] = useState(0);
  const [lightboxGallery, setLightboxGallery] = useState(null);
  const { motionEnabled } = useMotionSetting();

  const openLightbox = (chapter) => {
    setLightboxGallery(chapter);
  };

  const navigateStory = (direction) => {
    const storyStageElement = storyStageRef.current;
    if (!storyStageElement) return;

    const currentStage = Math.max(1, storyStage);
    const targetStage = storyStage === 0 && direction > 0
      ? 1
      : Math.min(4, Math.max(1, currentStage + direction));
    const travel = Math.max(1, storyStageElement.offsetHeight - window.innerHeight);
    const stageTop = window.scrollY + storyStageElement.getBoundingClientRect().top;

    window.scrollTo({
      top: stageTop + travel * ((targetStage + 0.5) / 5),
      behavior: motionEnabled ? 'smooth' : 'auto',
    });
  };

  useEffect(() => {
    const storyStageElement = storyStageRef.current;
    if (!storyStageElement) return undefined;

    let animationFrame = 0;

    const updateStory = () => {
      animationFrame = 0;
      const desktop = window.matchMedia('(min-width: 901px)').matches;
      if (!motionEnabled || !desktop) {
        storyStageElement.style.setProperty('--story-progress', '1');
        setStoryStage(4);
        return;
      }

      const rect = storyStageElement.getBoundingClientRect();
      const travel = Math.max(1, storyStageElement.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      storyStageElement.style.setProperty('--story-progress', progress.toFixed(3));
      setStoryStage(Math.min(4, Math.floor(progress * 5)));
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
    <section className="story-section" aria-labelledby="story-heading">
      <header className="page-intro">
        <span className="page-kicker">Rhys & Teniola</span>
        <h1 id="story-heading">Our Story</h1>
      </header>

      <div ref={storyStageRef} className={`story-scroll-stage story-stage-${storyStage}`}>
        <div className="story-sticky-canvas">
          <div className="story-panels">
            {storyChapters.map((chapter, index) => (
              <article className={`manga-story-panel manga-story-panel-${index + 1}`} key={chapter.number}>
                <div className="panel-number" aria-hidden="true">{chapter.number}</div>
                <button
                  className="story-gallery-trigger"
                  type="button"
                  onClick={() => openLightbox(chapter)}
                  aria-label={`View ${chapter.title} photo gallery`}
                >
                  <img src={chapter.images[0]} alt="" className="story-card-image" />
                  <span>View gallery</span>
                </button>
                <div className="story-panel-copy">
                  <span className="panel-label">{chapter.label}</span>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.text}</p>
                </div>
              </article>
            ))}

            <article className="manga-story-panel manga-story-finale">
              <span className="panel-label">To be continued…</span>
              <h3>The next chapter begins</h3>
              <time dateTime="2027-02-27">Saturday, 27 February 2027</time>
            </article>
          </div>

          <div className="story-progress">
            <button
              type="button"
              onClick={() => navigateStory(-1)}
              disabled={storyStage <= 1}
              aria-label="Previous story chapter"
            >
              &#8249;
            </button>
            <span aria-hidden="true">01</span>
            <i aria-hidden="true"><b /></i>
            <span aria-hidden="true">04</span>
            <button
              type="button"
              onClick={() => navigateStory(1)}
              disabled={storyStage >= 4}
              aria-label="Next story chapter"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
      <Lightbox
        images={lightboxGallery?.images ?? []}
        initialIndex={0}
        open={Boolean(lightboxGallery)}
        onClose={() => setLightboxGallery(null)}
        name={lightboxGallery?.title ?? ''}
      />
    </section>
  );
}

export default AboutUs;
