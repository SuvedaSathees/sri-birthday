import React, { useState } from 'react';
import './Bond.css';

const Bond = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [lightboxVideo, setLightboxVideo] = useState(null);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000); 
  };

  return (
    <div className="bond-container">
      <h2 className="bond-heading">
        <span className="link-icon" role="img" aria-label="link">🔗</span> Our Unbreakable Bond
      </h2>

      <div className="bond-card">
        <img src="/images/promise.jpg" alt="Bond" className="bond-image" />
        <p className="bond-text handwritten">
          {`Dear Srimun,
    
This is more than just a promise — it's a bond built on trust, love, laughter, and loyalty. I'm here for you through every storm, every joke, and every quiet moment. No matter what happens, I'm your Bestfriend Forever.

I promise I won't leave you once my needs are met — I'll stay by your side always, and I will never break this promise. And please promise me this too: if we ever fight, let's sort it out within an hour. Don't let time pass without fixing us.`}
        </p>
      </div>

      <div className="reveal-section">
        <button className="cute-button" onClick={handleClick}>
          Click to Reveal Message <span className="heart-icon">💌</span>
        </button>
      </div>

      {showMessage && (
        <div className="popup-message">
          <p className="popup-text">
            Thanking for coming into my life, I have learned many things from you and thank you so much for being an amazing, kind, and irreplaceable soul✨
          
              Once again happy birthday Sri...<span className="red-heart">✨</span>
          </p>
        </div>
      )}

      <h3 className="bond-heading" style={{ marginTop: '40px' }}>
        📸 Our Moments
      </h3>

      <div className="bond-gallery grid-4-col">
        {Array.from({ length: 16 }, (_, i) => {
          const index = i + 1;
          const isVideo = (index > 4 && index <= 8) || (index > 12 && index <= 16);

          return isVideo ? (
            <video
              key={index}
              className="bond-gallery-img circle-img"
              onClick={() => setLightboxVideo(`/video/bond/bond${index}.mp4`)}
              muted
              playsInline
            >
              <source src={`/video/bond/bond${index}.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              key={index}
              src={`/images/bond/bond${index}.jpg`}
              alt={`Bond ${index}`}
              className="bond-gallery-img circle-img"
              onClick={() => setLightbox(`/images/bond/bond${index}.jpg`)}
            />
          );
        })}
      </div>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <img
            src={lightbox}
            alt="Fullscreen"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {lightboxVideo && (
        <div className="lightbox-overlay" onClick={() => setLightboxVideo(null)}>
          <video
            src={lightboxVideo}
            controls
            autoPlay
            className="lightbox-video"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Bond;
