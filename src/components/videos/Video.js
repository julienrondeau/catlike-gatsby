import React from 'react';

const Video = ({ videoSrcURL, videoTitle, click, ...props }) => (
  <div id="lightbox" onClick={click}>
    <button onClick={click} className="btn-close">
      Fermer
    </button>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      width="640"
      height="360"
      allow="autoplay; fullscreen; picture-in-picture"
    ></iframe>
  </div>
);

export default Video;
