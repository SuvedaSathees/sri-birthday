import React, { useState, useEffect } from 'react';
import './TikTokCarousel.css';

const images = [
  '/images/img20.jpg',
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img22.jpg',
  '/images/img15.jpg',
  '/images/img6.jpg',
  '/images/img7.jpg',
  '/images/img8.jpg',
  '/images/img9.jpg',
  '/images/img10.jpg',
  '/images/img11.jpg',
  '/images/img12.jpg',
  '/images/img13.jpg',
  '/images/img14.jpg',
  '/images/img19.jpg',
  '/images/img5.jpg',
  '/images/img21.jpg',
  '/images/img17.jpg',
  '/images/img18.jpg',
  '/images/img16.jpg',
  '/images/img23.jpg',
  '/images/img24.jpg',
];

const TikTokCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getClassName = (i) => {
    const total = images.length;
    if (i === currentIndex) return 'carousel-item active';
    if (i === (currentIndex + 1) % total) return 'carousel-item next';
    if (i === (currentIndex + 2) % total) return 'carousel-item next2';
    if (i === (currentIndex - 1 + total) % total) return 'carousel-item prev';
    if (i === (currentIndex - 2 + total) % total) return 'carousel-item prev2';
    return 'carousel-item hidden';
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`carousel-${i}`} className={getClassName(i)} />
        ))}
      </div>
    </div>
  );
};

export default TikTokCarousel;
