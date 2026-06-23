import { useEffect, useMemo, useState } from 'react';

const storageKey = 'cera-tony-blessings-v1';

export default function BlessingBoard({ initialBlessings = [] }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [blessings, setBlessings] = useState(initialBlessings);
  const [toast, setToast] = useState('');
  const [latestKey, setLatestKey] = useState('');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) setBlessings(JSON.parse(saved));
    } catch {
      setBlessings(initialBlessings);
    }
  }, [initialBlessings]);

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(blessings));
    } catch {
      // Local storage is optional. The board still works for the current session.
    }
  }, [blessings]);

  const canSubmit = useMemo(() => name.trim().length > 1 && message.trim().length > 4, [name, message]);

  const postBlessing = (event) => {
    event.preventDefault();
    if (!canSubmit) return;

    const key = `${Date.now()}-${name.trim()}`;
    setLatestKey(key);
    setBlessings((items) => [
      {
        key,
        name: name.trim(),
        text: message.trim(),
        date: 'Saved on this device'
      },
      ...items
    ]);
    setName('');
    setMessage('');
    setToast('Blessing saved on this device.');
    window.setTimeout(() => setToast(''), 2600);
    window.setTimeout(() => setLatestKey(''), 1500);
  };

  return (
    <section id="blessings" className="blessing-section section-pad" aria-labelledby="blessing-title">
      <div className="blessing-layout">
        <div className="blessing-copy" data-reveal>
          <p className="eyebrow">Write a personal blessing</p>
          <h2 id="blessing-title" className="section-title compact">Words of grace</h2>
          <p>
            Near or far, your warm thoughts and prayers can be kept as a personal note on this invitation.
          </p>
          <form className="blessing-form" onSubmit={postBlessing}>
            <label>
              <span>Your name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name or family name" autoComplete="name" />
            </label>
            <label>
              <span>Your blessing</span>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write a blessing" rows="4" />
            </label>
            <button className="button-primary" type="submit" disabled={!canSubmit}>Save blessing</button>
          </form>
        </div>

        <div className="blessing-board" data-reveal data-reveal-delay="120">
          <div className="board-head">
            <strong>Guestbook notes</strong>
            <span>{blessings.length} wishes</span>
          </div>
          <div className="blessing-list" tabIndex="0" aria-label="Blessings list">
            {blessings.map((item, index) => {
              const key = item.key || `${item.name}-${index}`;
              return (
                <article className={`blessing-card ${latestKey === key ? 'is-new' : ''}`} key={key}>
                  <p>“{item.text}”</p>
                  <footer>
                    <strong>{item.name}</strong>
                    <span>{item.date}</span>
                  </footer>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <div className={`mini-toast ${toast ? 'is-visible' : ''}`} role="status" aria-live="polite">
        {toast}
      </div>
    </section>
  );
}
