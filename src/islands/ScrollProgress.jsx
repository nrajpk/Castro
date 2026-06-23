import { useEffect, useState } from 'react';

const chapters = [
  ['top', 'Opening'],
  ['invitation', 'Invitation'],
  ['memory', 'A Moment'],
  ['story', 'The Couple'],
  ['ceremonies', 'The Day'],
  ['sharing', 'Sharing'],
  ['blessings', 'Blessings'],
  ['travel', 'Travel'],
  ['contact', 'Contact']
];

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [chapter, setChapter] = useState('Opening');

  useEffect(() => {
    let frame = 0;
    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollable = doc.scrollHeight - window.innerHeight;
        const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        setProgress(Math.min(100, Math.max(0, value)));
      });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const targets = chapters
      .map(([id, label]) => [document.getElementById(id), label])
      .filter(([element]) => Boolean(element));

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      const match = targets.find(([element]) => element === visible.target);
      if (match) setChapter(match[1]);
    }, { threshold: [0.18, 0.34, 0.5], rootMargin: '-24% 0px -58% 0px' });

    targets.forEach(([element]) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span style={{ width: `${progress}%` }} />
      <small>{chapter}</small>
    </div>
  );
}
