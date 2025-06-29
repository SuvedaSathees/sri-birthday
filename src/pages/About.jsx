import React from 'react';
import './About.css';

const About = () => {
  // Create an array of 9 stars
  const stars = Array.from({ length: 9 }, (_, i) => (
    <div key={i} className="sparkle-star" />
  ));

  return (
    <div className="about-container">
      {stars}
      <h2 className="about-title">💜About My Best Best Best Best Friend [Twineuhhh✨]💜</h2>

      <div className="profile-section">
        <div className="profile-pic-container">
          <img
            src="/images/about.jpg"
            alt="Srimun"
            className="profile-pic"
          />
        </div>
        <div className="about-text">
          <p>🌞 <strong> Happy Birthday Srimun..🎀</strong></p>
          <p>On your special day, I just want to say how much you truly mean to me💖</p>
          <p>Thank you for staying by my side, even during my worst moments.💫</p>
          <p>I really feel lucky to have you in my life. You've stood by me, tolerated all my stupid things and never gave up on us.🥺
          Let's cherish this bond forever, and no matter where life takes us, let's promise to never let go of each other. 🦄
          </p>
          <p>May your day be filled with happiness, laughter, and all the beautiful things you deserve🎁 Words Cannot Express how much your important to me...🥺Your always important to me keep that in mind ✨ </p>
          <p>You're not just my best friend — you're a forever promise I made, and one I'll always keep, no matter what🌌 </p>
          <p>Having you by my side is one of the greatest blessings I've ever known✨ </p>
        </div>
      </div>
    </div>
  );
};

export default About;
