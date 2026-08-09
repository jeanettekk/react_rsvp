import { useEffect, useRef, useState } from 'react';
import narutoHinata from '../assets/images/anime/naruto-hinata-wedding.webp';
import useMotionSetting from '../hooks/useMotionSetting';
import useRevealGroup from '../hooks/useRevealGroup';
import { storyChapters, wedding } from '../data/wedding';
import './WeddingPages.css';

function AboutUs() {
  const revealRef = useRevealGroup();
  const storyStageRef = useRef(null);
  const [storyStage, setStoryStage] = useState(0);
  const { motionEnabled } = useMotionSetting();

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
            {storyChapters.map((chapter, index) => (
              <article className={`manga-story-panel manga-story-panel-${index + 1}`} key={chapter.number}>
                <div className="panel-number" aria-hidden="true">{chapter.number}</div>
                <span className="panel-label">{chapter.label}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.text}</p>
                {index === 1 && <span className="speech-bubble">Favourite scene →</span>}
              </article>
            ))}

            <article className="manga-story-panel manga-story-finale">
              <span className="panel-label">To be continued…</span>
              <h3>The next chapter begins</h3>
              <time dateTime="2027-02-27">{wedding.dateLabel}</time>
            </article>
          </div>

          <div className="story-progress" aria-hidden="true">
            <span>01</span>
            <i><b /></i>
            <span>04</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
