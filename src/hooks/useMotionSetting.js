import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'rhys-teniola-motion';
const CHANGE_EVENT = 'wedding-motion-change';

const getInitialSetting = () => {
  if (typeof window === 'undefined') return true;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'on') return true;
  if (stored === 'off') return false;
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export default function useMotionSetting() {
  const [motionEnabled, setMotionEnabled] = useState(getInitialSetting);

  useEffect(() => {
    document.documentElement.dataset.motion = motionEnabled ? 'on' : 'off';
  }, [motionEnabled]);

  useEffect(() => {
    const syncSetting = (event) => setMotionEnabled(event.detail);
    window.addEventListener(CHANGE_EVENT, syncSetting);
    return () => window.removeEventListener(CHANGE_EVENT, syncSetting);
  }, []);

  const toggleMotion = useCallback(() => {
    setMotionEnabled((current) => {
      const next = !current;
      window.localStorage.setItem(STORAGE_KEY, next ? 'on' : 'off');
      window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: next }));
      return next;
    });
  }, []);

  return { motionEnabled, toggleMotion };
}
