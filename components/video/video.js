// components/BackgroundVideo.js
import React from 'react';
import styles from './video.module.css';

const Video = () => {
  return (
    <>
      <video autoPlay loop muted className={styles.video}>
        <source src="/img/fond.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.voile}></div>
    </>
  );
};

export default Video;
