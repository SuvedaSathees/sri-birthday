import React, { useEffect, useState } from 'react';
import './OpeningScreen.css';

export default function OpeningScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  const sparkles = Array.from({ length: 35 }).map(() => ({
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    delay: (Math.random() * 2).toFixed(2) + 's',
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onFinish(), 1000);
    }, 15000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`opening-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="candles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`candle candle-${i + 1}`}>🕯️</div>
        ))}
      </div>

      {sparkles.map((sparkle, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            animationDelay: sparkle.delay,
          }}
        />
      ))}
      <div class="lucifer-walk walk1"><img src="/images/down.png" /></div>
<div class="lucifer-walk walk2"><img src="/images/download.png" /></div>
<div class="lucifer-walk walk3"><img src="/images/downl.png" /></div>

      <div className="App">
      <img
        src="/images/hide.png"
        alt="Luffy peeking"
        className="corner-image"
      />
    </div>
      <div className="cake-container">
        <div className="cake-glow"></div>
        <div className="cake">🎂</div>
        <h1 className="birthday-text typing-text">Happy Birthday Srimun 🎉</h1>
      </div>
    </div>
  );
}
