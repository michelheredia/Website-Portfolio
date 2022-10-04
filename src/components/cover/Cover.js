import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container" id="cover">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Michel Heredia</h1>
      <p>Developer | Web designer</p>
    </div>
  );
};

export default Cover;
