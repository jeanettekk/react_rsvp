import { useEffect, useRef } from 'react';
import useMotionSetting from './useMotionSetting';

export default function useRevealGroup() {
  const groupRef = useRef(null);
  const { motionEnabled } = useMotionSetting();

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return undefined;

    const items = [...group.querySelectorAll('[data-reveal]')];
    items.forEach((item) => item.classList.add('will-reveal'));
    if (!motionEnabled || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.14 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [motionEnabled]);

  return groupRef;
}
