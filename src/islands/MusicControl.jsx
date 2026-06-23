import { useEffect, useRef, useState } from 'react';

export default function MusicControl() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.28;
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
      setNotice('');
    } catch {
      setNotice('Add music.mp3 inside public to enable music.');
      window.setTimeout(() => setNotice(''), 2800);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop preload="none" />
      <button
        className={`music-control ${playing ? 'is-playing' : ''}`}
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Pause background music' : 'Play background music'}
      >
        <span className="music-ring" aria-hidden="true" />
        <span>{playing ? 'Pause' : 'Music'}</span>
      </button>
      <div className={`mini-toast ${notice ? 'is-visible' : ''}`} role="status" aria-live="polite">
        {notice}
      </div>
    </>
  );
}
