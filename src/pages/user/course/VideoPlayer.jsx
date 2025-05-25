import React, { useEffect, useRef } from 'react';
import './VideoPlayer.css';
import VideoTabs from './VideoTabs';

function VideoPlayer() {
  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);

  useEffect(() => {
    // Load Bitmovin Player script
    const script = document.createElement('script');
    script.src = 'https://cdn.bitmovin.com/player/web/8/bitmovinplayer.js';
    script.async = true;
    script.onload = initPlayer;
    document.body.appendChild(script);

    // Load Bitmovin Player CSS
    const link = document.createElement('link');
    link.href = 'https://cdn.bitmovin.com/player/web/8/bitmovinplayer-ui.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Clean up on component unmount
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      if (link.parentNode) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const initPlayer = () => {
    if (!window.bitmovin || !window.bitmovin.player) {
      console.error('Bitmovin player not loaded');
      return;
    }

    const playerConfig = {
      key: 'f9ddfe8c-2406-4464-af51-a21caf941309',
      playback: {
        autoplay: true,
        muted: false
      },
      ui: {
        playbackSpeedSelection: true,
        watermark: false,
        customColors: {
          timeline: '#3152e8',
          buttons: '#3152e8'
        }
      },
      cast: {
        enable: true
      }
    };

    const source = {
      progressive: 'https://ellipsoniclms.s3.ap-south-1.amazonaws.com/nexgenversity/images/1742912488791-GP1.1%20Introduction.mp4.mp4'
    };

    try {
      // Create player instance
      const container = playerContainerRef.current;
      const player = new window.bitmovin.player.Player(container, playerConfig);
      playerRef.current = player;

      // Load source
      player.load(source).then(() => {
        console.log('Player loaded successfully');
      }).catch((error) => {
        console.error('Error loading player:', error);
      });

      // Add event listeners
      player.on('play', () => console.log('Video started playing'));
      player.on('paused', () => console.log('Video paused'));
      player.on('playbackfinished', () => console.log('Video finished'));
    } catch (error) {
      console.error('Error initializing player:', error);
    }
  };

  return (
    <div className="course-content-container">
      <div className="video-player-container">
        <div className="player-wrapper">
          <div ref={playerContainerRef} className="bitmovin-player"></div>
        </div>
      </div>
      
      {/* Course Tabs */}
      <div className="course-tabs-container mt-4">
        <VideoTabs />
      </div>
    </div>
  );
}

export default VideoPlayer;