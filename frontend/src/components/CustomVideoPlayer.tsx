'use client';
import { useRef, useState } from 'react';

const CustomVideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMute = () => {
    if (videoRef.current.muted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handleProgress = (e) => {
    const value = e.target.value;
    videoRef.current.currentTime = (value / 100) * videoRef.current.duration;
  };

  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      // Firefox
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      // IE/Edge
      videoRef.current.msRequestFullscreen();
    }
  };

  return (
    <div className="relative w-full pb-[56.25%]">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dazt6g3o1/video/upload/v1724428962/juvdebis2n2bkoioxd08.mp4"
      ></video>
      <div className="controls absolute bottom-0 left-0 w-full flex items-center justify-between p-4 bg-black bg-opacity-50">
        <button
          onClick={handlePlayPause}
          className="text-white bg-gray-800 p-2 rounded"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={handleMute}
          className="text-white bg-gray-800 p-2 rounded"
        >
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
        <input
          type="range"
          className="flex-grow mx-2"
          min="0"
          max="100"
          step="1"
          onChange={handleProgress}
        />
        <button
          onClick={handleFullscreen}
          className="text-white bg-gray-800 p-2 rounded"
        >
          Fullscreen
        </button>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
