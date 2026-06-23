import { useEffect, useState } from 'react';

const units = [
  ['days', 'Days'],
  ['hours', 'Hours'],
  ['minutes', 'Minutes'],
  ['seconds', 'Seconds']
];

function getTimeLeft(targetISO) {
  const diff = new Date(targetISO).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
}

export default function Countdown({ targetISO }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetISO));

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft(targetISO)), 1000);
    return () => window.clearInterval(timer);
  }, [targetISO]);

  return (
    <section className="countdown-strip" aria-label="Countdown to ceremony">
      <div className="countdown-inner" data-reveal>
        <div className="countdown-copy">
          <p className="countdown-label">Awaiting the sacred day</p>
          <strong>{timeLeft.days} days until the betrothal</strong>
        </div>
        <div className="countdown-grid">
          {units.map(([key, label]) => (
            <div className={`countdown-cell ${key === 'seconds' ? 'is-secondary' : ''}`} key={key}>
              <strong aria-live={key === 'minutes' ? 'polite' : 'off'}>{String(timeLeft[key]).padStart(2, '0')}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
