import React, { useState } from 'react';
import './Video.css';
const videos = [
  { src: '/videos/video1.mp4' },
  { src: '/videos/video2.mp4' },
  { src: '/videos/video3.mp4' },
  { src: '/videos/video4.mp4' },
  { src: '/videos/video5.mp4' },
  { src: '/videos/video6.mp4' },
  { src: '/videos/video7.mp4' },
  { src: '/videos/video8.mp4' },
  { src: '/videos/video9.mp4' },
  { src: '/videos/video10.mp4' },
  { src: '/videos/video11.mp4' },
  { src: '/videos/video12.mp4' },
  { src: '/videos/video13.mp4' },
  { src: '/videos/video14.mp4' },
  { src: '/videos/video15.mp4' },
  { src: '/videos/video16.mp4' },
  { src: '/videos/video17.mp4' },
  { src: '/videos/video18.mp4' },
  { src: '/videos/video19.mp4' },
  { src: '/videos/video20.mp4' },
  { src: '/videos/video21.mp4' },
  { src: '/videos/video22.mp4' },
  { src: '/videos/video23.mp4' },
  { src: '/videos/video24.mp4' },
  { src: '/videos/video25.mp4' },
  { src: '/videos/video26.mp4' },
  { src: '/videos/video27.mp4' },
  { src: '/videos/video28.mp4' },
  { src: '/videos/video29.mp4' },
  { src: '/videos/video30.mp4' },
  { src: '/videos/video31.mp4' },
  { src: '/videos/video32.mp4' },
  { src: '/videos/video33.mp4' },
  { src: '/videos/video34.mp4' },
  { src: '/videos/video35.mp4' },
  { src: '/videos/video36.mp4' },
  { src: '/videos/video37.mp4' },
  { src: '/videos/video38.mp4' },
  { src: '/videos/video39.mp4' },
  { src: '/videos/video40.mp4' },
  { src: '/videos/video41.mp4' },
  { src: '/videos/video42.mp4' },
  { src: '/videos/video43.mp4' },
  { src: '/videos/video44.mp4' },
  { src: '/videos/video45.mp4' },
  { src: '/videos/video46.mp4' },
  { src: '/videos/video47.mp4' },
  { src: '/videos/video48.mp4' },
  { src: '/videos/video49.mp4' },
  { src: '/videos/video50.mp4' },
  { src: '/videos/video51.mp4' },
  { src: '/videos/video52.mp4' },
  { src: '/videos/video53.mp4' },
  { src: '/videos/video54.mp4' },
  { src: '/videos/video55.mp4' },
  { src: '/videos/video56.mp4' },
  { src: '/videos/video57.mp4' },
  { src: '/videos/video58.mp4' },
  { src: '/videos/video59.mp4' },
  { src: '/videos/video60.mp4' },
];

const Video = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const openModal = (video) => setActiveVideo(video);
  const closeModal = () => setActiveVideo(null);
  return (
    <div className="video-page">
      <h2 className="video-heading">🎬 Our Crazy Cute Moments!</h2>
      <div className="video-grid">
        {videos.map((video, index) => {
          if (index === 8) {
            return (
              <React.Fragment key={index}>
              
                <div className="video-card" onClick={() => openModal(video)}>
                  <video className="video-thumb" src={video.src} muted loop />
                  <p className="caption">{video.caption}</p>
                </div>
              </React.Fragment>
            );
          }
          return (
            <div className="video-card" key={index} onClick={() => openModal(video)}>
              <video className="video-thumb" src={video.src} muted loop />
              <p className="caption">{video.caption}</p>
            </div>
          );
        })}
      </div>

      {activeVideo && (
        <div className="video-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>✖</button>
            <video
              src={activeVideo.src}
              controls
              autoPlay
              className="modal-video"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
