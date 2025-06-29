import React, { useState } from 'react';
import './Gallery.css';

const littleFeetData = [
  { src: '/images/memory-0.jpg', caption: 'Narayana narayana 😂 ' },
  { src: '/images/memory-1.jpg', caption: 'Daiii ena da pandrainga Akka vathu irukan daaaaa💃' },
  { src: '/images/memory-2.jpg', caption: 'Enakku oru calm look kuduthu… adhuvum mass-a irukkanum!😌' },
  { src: '/images/memory-3.jpg', caption: 'Ulagathu layeah cooling glass potu cycle ootunavanda nanu🚴' },
  { src: '/images/memory-4.jpg', caption: 'Varataa mamey duruhhhhhhhhh!❤️' },
  { src: '/images/memory-5.jpg', caption: 'Amma ena trouser ya kannom!😭' },
  { src: '/images/memory-6.jpg', caption: 'Hair illa-nu paatha confuse aagidatha… mass-u da naan!😎' },
  { src: '/images/memory-7.jpg', caption: 'Amma sonna look-na… Hollywood stylists kooda shock aagiduvaanga❤️' },
  { src: '/images/memory-8.jpg', caption: 'Photo paakalaam, cake thaan mukkiyam!🥲' }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [popped, setPopped] = useState(false);

  const usImages = Array.from({ length: 92 }, (_, i) => ({
    src: `/images/us-${i + 1}.jpg`,
    alt: `Us memory ${i + 1}`
  }));

  const handlePop = () => {
    setPopped(true);
    setTimeout(() => setPopped(false), 15000);
  };

  const handleOverlayClick = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="balloon-wrapper">
        {!popped ? (
          <div className="balloon blink" onClick={handlePop}>
            🎈<span className="balloon-text">Tap!</span>
          </div>
        ) : (
          <div className="birthday-message">
            <div className="confetti">🎉</div>
            <h1 className="wish-heading"><strong>HAPPY BIRTHDAY TWINEEUHHHHHHH🎉</strong></h1>
            <p className="wish-text">
              Wishing you a life filled with endless h😊ppiness ✨<br></br>
              Thank you for being such a kind, genuine, and truly irreplaceable soul 🌟<br></br>
              You’re not just my best friend — you’re a rare kind of treasure 💎, <br></br>
              and I’m beyond lucky to have you in my life.🎊
            </p>
            <div className="confetti"><strong>"I’m always here, no matter what...💛</strong></div>
          </div>
        )}
      </div>
<br>
</br>
      <h2 className="gallery-title">Little feet, endless journeys to come✨</h2>
      <div className="gallery-grid little-feet-grid">
        {littleFeetData.map((item, index) => (
          <div
            className="gallery-card jump"
            key={index}
            onClick={() => setSelectedImage(item.src)}
          >
            <img src={item.src} alt={`memory-${index}`} />
            <p>{item.caption}</p>
          </div>
        ))}
      </div>
      <h2 className="gallery-title" style={{ marginTop: '4rem' }}>Where We Belong 💜</h2>
      <div className="gallery-grid us-gallery-grid">
        {usImages.map((img, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => setSelectedImage(img.src)}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="overlay" onClick={handleOverlayClick}>
          <img src={selectedImage} className="overlay-image" alt="Full view" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
