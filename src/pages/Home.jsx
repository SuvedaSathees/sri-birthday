import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import "./Home.css";

export default function Home() {
  const launchConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  useEffect(() => {
    launchConfetti();
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-content">
        <div className="text-section">
          <h1 className="heading typewriter">🎉 Happy Birthday <span className="name-glow">Srimun</span>... 🎂</h1>

          <p className="intro">
            Some people walk into your life and change everything — and for me, that person has always been you.

You’ve been my constant, my comfort zone, the one who listens when I don’t even know how to explain what I’m feeling. You’ve seen me at my best and my absolute worst, and yet, you’ve stayed — with the same warmth, the same heart, the same care. <strong>Srimun</strong>  <br />
            
          </p>
          <div className="quote-box">
            <p className="quote">💫  "You truly deserve all the joy this world can offer."</p>
            <p className="quote">😅 "No matter how annoying I am, thanks for tolerating me!"</p>
          </div>
          <p className="closing-text">Even when life gets heavy, you still manage to light up the room — so you deserve all the peace and sunshine that follows the storm.</p>

          <button className="confetti-btn" onClick={launchConfetti}>
            🎊 Celebrate Again!
          </button>
        </div>

        <div className="animation-section">
          <div className="cake-emoji" role="img" aria-label="birthday cake">🎂</div>
          <img
            src="/images/hbd_sri.png"
            alt="Cute Cartoon"
            className="cartoon-img"
          />
        </div>
      </div>
    </div>
  );
}
