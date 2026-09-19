import { useEffect, useState } from 'react';

const getInitialSetting = () => {
  if (typeof window === 'undefined') return true;
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export default function useMotionSetting() {
  const [motionEnabled, setMotionEnabled] = useState(getInitialSetting);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncSetting = (event) => setMotionEnabled(!event.matches);

    mediaQuery.addEventListener('change', syncSetting);
    return () => mediaQuery.removeEventListener('change', syncSetting);
  }, []);

  return { motionEnabled };
}
