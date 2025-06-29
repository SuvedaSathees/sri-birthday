import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Video from './pages/Video';
import Bond from './pages/Bond';
import Music from './pages/Music';
import OpeningScreen from './pages/OpeningScreen';
import Cringeday from './pages/Cringeday';

import './App.css';

const FloatingEmojis = () => {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    const birthdayEmojis = [
      ''
    ];
    
    const createEmoji = () => ({
      id: Math.random(),
      emoji: birthdayEmojis[Math.floor(Math.random() * birthdayEmojis.length)],
      left: `${Math.random() * 100}%`,
      duration: 8 + Math.random() * 7,
      delay: Math.random() * 3,
      translateX: -100 + Math.random() * 200,
      rotate: Math.random() * 720 - 360, 
      size: 0.8 + Math.random() * 0.8 
    });

    const addEmoji = () => {
      setEmojis(prev => [...prev, createEmoji()]);
    };

    for (let i = 0; i < 15; i++) {
      addEmoji();
    }
    const interval = setInterval(() => {
      addEmoji();
      setEmojis(prev => prev.slice(-25));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-emojis">
      {emojis.map(emoji => (
        <div
          key={emoji.id}
          className="floating-emoji"
          style={{
            left: emoji.left,
            '--duration': `${emoji.duration}s`,
            '--translate-x': `${emoji.translateX}px`,
            '--rotate': `${emoji.rotate}deg`,
            '--size': emoji.size,
            animationDelay: `${emoji.delay}s`
          }}
        >
          {emoji.emoji}
        </div>
      ))}
    </div>
  );
};
const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to} className={isActive ? 'active' : ''}>
      {children}
    </Link>
  );
};

export default function App() {
  const [showOpening, setShowOpening] = useState(true);

  return (
    <Router>
      {showOpening ? (
        <OpeningScreen onFinish={() => setShowOpening(false)} />
      ) : (
        <div className="app-container purple-theme">
          <div className="animated-background">
            <FloatingEmojis />
            <nav className="navbar">
              <h1 className="title">Happy Birthday Srimunnnnnn 🎉</h1>
              <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/bond">Bond</NavLink>
                <NavLink to="/video">Video</NavLink>
                <NavLink to="/cringeday">Cringe</NavLink>
                <NavLink to="/music">Wish</NavLink>
              </div>
            </nav>
            <div className="content-wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/video" element={<Video />} />
                <Route path="/bond" element={<Bond />} />
                <Route path="/music" element={<Music audioSrc="/birthday-song.mp3" />} />
                <Route path="/cringeday" element={<Cringeday/>} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </Router>
  );
}