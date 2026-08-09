import { useEffect, useState } from 'react';
import { wedding } from '../data/wedding';

const weddingTime = new Date(wedding.dateTime).getTime();

const calculateTimeRemaining = () => {
  const distance = Math.max(0, weddingTime - Date.now());

  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance % 86400000) / 3600000),
    minutes: Math.floor((distance % 3600000) / 60000),
    seconds: Math.floor((distance % 60000) / 1000),
  };
};

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="countdown" aria-label={`Countdown to ${wedding.dateLabel}`}>
      {Object.entries(timeRemaining).map(([label, value]) => (
        <div className="countdown-unit" key={label}>
          <strong>{String(value).padStart(2, '0')}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
