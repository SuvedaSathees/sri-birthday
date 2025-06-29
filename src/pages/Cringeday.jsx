import React, { useState } from 'react';
import './Cringeday.css';

const Cringeday = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentFilter, setCurrentFilter] = useState('all');

 const crazyPictures = [
  { src: '/images/cringe/c1.jpg', category: 'early' },
  { src: '/images/cringe/c2.jpg', category: 'early' },
  { src: '/images/cringe/c3.jpg', category: 'early' },
  { src: '/images/cringe/c4.jpg', category: 'early' },
  { src: '/images/cringe/c5.jpg', category: 'early' },
  { src: '/images/cringe/c6.jpg', category: 'early' },
  { src: '/images/cringe/c7.jpg', category: 'early' },
  { src: '/images/cringe/c8.jpg', category: 'early' },
  { src: '/images/cringe/c9.jpg', category: 'early' },
  { src: '/images/cringe/c10.jpg', category: 'early' },
  { src: '/images/cringe/c11.jpg', category: 'early' },
  { src: '/images/cringe/c12.jpg', category: 'early' },
  { src: '/images/cringe/c13.jpg', category: 'early' },
  { src: '/images/cringe/c14.jpg', category: 'early' },
  { src: '/images/cringe/c15.jpg', category: 'early' },
  { src: '/images/cringe/c16.jpg', category: 'early' },
  { src: '/images/cringe/c17.jpg', category: 'early' },
  { src: '/images/cringe/c18.jpg', category: 'early' },
  { src: '/images/cringe/c19.jpg', category: 'early' },
  { src: '/images/cringe/c20.jpg', category: 'early' },
  { src: '/images/cringe/c21.jpg', category: 'early' },
  { src: '/images/cringe/c22.jpg', category: 'early' },
  { src: '/images/cringe/c23.jpg', category: 'early' },
  { src: '/images/cringe/c24.jpg', category: 'early' },
  { src: '/images/cringe/c25.jpg', category: 'early' },
  { src: '/images/cringe/c26.jpg', category: 'early' },
  { src: '/images/cringe/c27.jpg', category: 'early' },
  { src: '/images/cringe/c28.jpg', category: 'early' },
  { src: '/images/cringe/c29.jpg', category: 'early' },
  { src: '/images/cringe/c30.jpg', category: 'early' },
  { src: '/images/cringe/c31.jpg', category: 'early' },
  { src: '/images/cringe/c32.jpg', category: 'early' },
  { src: '/images/cringe/c33.jpg', category: 'early' },
  { src: '/images/cringe/c34.jpg', category: 'early' },
  { src: '/images/cringe/c35.jpg', category: 'early' },
  { src: '/images/cringe/c36.jpg', category: 'early' },
  { src: '/images/cringe/c37.jpg', category: 'early' },
  { src: '/images/cringe/c38.jpg', category: 'early' },
  { src: '/images/cringe/c39.jpg', category: 'early' },
  { src: '/images/cringe/c40.jpg', category: 'early' },
  { src: '/images/cringe/c41.jpg', category: 'early' },
  { src: '/images/cringe/c42.jpg', category: 'early' },
  { src: '/images/cringe/c43.jpg', category: 'early' },
  { src: '/images/cringe/c44.jpg', category: 'early' },
  { src: '/images/cringe/c45.jpg', category: 'early' },
  { src: '/images/cringe/c46.jpg', category: 'early' },
  { src: '/images/cringe/c47.jpg', category: 'early' },
  { src: '/images/cringe/c48.jpg', category: 'early' },
  ];

  const filteredPictures = currentFilter === 'all' 
    ? crazyPictures 
    : crazyPictures.filter(pic => pic.category === currentFilter);

  const handleOverlayClick = () => {
    setSelectedImage(null);
  };

  const getRandomAnimation = () => {
    const animations = ['bounce', 'shake', 'rotate', 'pulse', 'wiggle', 'flip', 'zoom', 'slide', 'jelly', 'tada'];
    return animations[Math.floor(Math.random() * animations.length)];
  };

  return (
    <div className="cringeday-container">
      <div className="cringeday-header">
        <h1 className="crazy-title">
          <span className="crazy-text">Error 404: </span>
          <span className="day-text">Chill Not Found</span>
          <span className="emoji">😂</span>
        </h1>
        <p className="crazy-subtitle">When Logic Took a Vacation…😈</p>
      </div>


      <div className="crazy-grid">
        {filteredPictures.map((pic, index) => (
          <div
            key={index}
            className={`crazy-card ${getRandomAnimation()}`}
            onClick={() => setSelectedImage(pic.src)}
            style={{
              animationDelay: `${index * 0.1}s`,
              transform: `rotate(${Math.random() * 10 - 5}deg)`
            }}
          >
            <div className="image-container">
              <img src={pic.src} alt={`Crazy pic ${index + 1}`} />
            </div>
            <div className="crazy-sticker">🤪</div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="overlay" onClick={handleOverlayClick}>
          <img src={selectedImage} className="overlay-image" alt="Full view" />
        </div>
      )}

      <div className="crazy-footer">
        <p>Remember: Life is too short to be normal! 😜</p>
        <div className="floating-emojis">
          <span className="floating-emoji">🤪</span>
          <span className="floating-emoji">😈</span>
          <span className="floating-emoji">🤡</span>
          <span className="floating-emoji">👻</span>
        </div>
      </div>
    </div>
  );
};

export default Cringeday;
