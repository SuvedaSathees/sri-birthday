import React, { useState, useEffect, useRef } from 'react';
import './Music.css';
import TikTokCarousel from './TikTokCarousel';

const lyrics = [
  { time: 2, text: "Lala Laala Laala Laalaa 🎶" },
  { time: 5, text: "Lala Laala Laala Laalaa 🎵" },
  { time: 8, text: "Lala Laala Laala Laalaa 🎶" },
  { time: 10, text: "Lala Laala Laala Laalaa 🎵" },
  { time: 13, text: "Neenda Neenda Kaalam ⏳" },
  { time: 15, text: "Nee Needu Vaazha Vendum 🌱" },
  { time: 17, text: "Vaanam Theendum Thooram ☁️" },
  { time: 19, text: "Nee Valarnthu Vaazha Vendum 🌿" },
  { time: 22, text: "Neenda Neenda Kaalam 🕰️" },
  { time: 24, text: "Nee Needu Vaazha Vendum 💫" },
  { time: 27, text: "Vaanam Theendum Thooram 🌌" },
  { time: 29, text: "Nee Valarnthu Vaazha Vendum 🌳" },
  { time: 32, text: "Anbu Vendum Arivu Vendum ❤️🧠" },
  { time: 34, text: "Panbu Vendum Panivu Vendum 🙏🕊️" },
  { time: 39, text: "Anbu Vendum Arivu Vendum 💖🧠" },
  { time: 41, text: "Panbu Vendum Panivu Vendum 🤝💗" },
  { time: 47, text: "Ettu Thikkum Pugazha Vendum 🌟" },
  { time: 49, text: "Eduthukkattu Aaga Vendum 🏆" },
  { time: 54, text: "Ettu Thikkum Pugazha Vendum ✨" },
  { time: 55, text: "Eduthukkattu Aaga Vendum 🥇" },
  { time: 58, text: "Ulagam Parkka Unathu Peyarai 🌍👀" },
  { time: 60, text: "Nilavuthaalil Ezhutha Vendum 🌕✍️" },
  { time: 65, text: "Ulagam Parkka Unathu Peyarai 🌎✨" },
  { time: 68, text: "Nilavuthaalil Ezhutha Vendum 🌙📝" },
  { time: 72, text: "Sakkarai Tamil Alli 🍬🌺" },
  { time: 75, text: "Thaalattu Naal Solli 🍼🎶" },
  { time: 78, text: "Vaazhthukirom 🎉" },
  { time: 81, text: "Pirantha Naal Vaazhthukkal 🎂🎈" },
  { time: 86, text: "Pirantha Naal Vaazhthukkal 🎊🎁" },
  { time: 91, text: "Iniya Pirantha Naal Vaazhthukkal 🥳💝" },
];

const Music = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const floatStyles = React.useMemo(
    () =>
      Array.from({ length: 30 }).map(() => ({
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${8 + Math.random() * 10}s`,
      })),
    []
  );

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      const time = audio.currentTime;
      setCurrentTime(time);
      const index = lyrics.findIndex((line, i) =>
        time >= line.time && (i === lyrics.length - 1 || time < lyrics[i + 1].time)
      );
      if (index !== -1 && index !== currentIndex) {
        setCurrentIndex(index);
      }
    };

    const loaded = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', loaded);
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', loaded);
    };
  }, [currentIndex]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    audio.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const objectTypes = ['petal', 'star', 'feather'];

  return (
    <div className="music-player">

      <div className="custom-audio-player">
        <button onClick={togglePlayPause}>{isPlaying ? '🎧' : '🎶'}</button>
        <span>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          step="0.01"
        />
        <button onClick={toggleMute}>{isMuted ? '🔇' : '🔊'}</button>
      </div>
<br></br>
      <audio ref={audioRef} src={audioSrc} />

      <div className="lyrics-window">
        <div
          className="lyrics-track"
          style={{
            transform: `translateY(calc(5rem - ${currentIndex * 2.5}rem))`,
          }}
        >
          {lyrics.map((line, index) => (
            <p
              key={index}
              className={`lyric-line ${index === currentIndex ? 'active-lyric' : ''}`}
            >
              {line.text}
            </p>
          ))}
        </div>
      </div>

      <TikTokCarousel />
    </div>
  );
};

export default Music;
