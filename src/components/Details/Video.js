import React from "react";
import "./Video.css";
const VideoAdd = ({ detailsData }) => {
  return (
    <div>
      <video
        className="video"
        autoPlay
        loop
        muted
        type="video/mp4"
        src={detailsData.video}
      ></video>
      <div data-aos="fade-down" className="description-in-video">
        <li>THE {detailsData.year}</li>
        <li className="video-description">{detailsData.model}</li>
        <hr noshade className="line" />
        <li className="starting-at">STARTING AT </li>
        <li className="description-price">{detailsData.price} $</li>
        <li className="vehicle">{detailsData.unit}</li>
      </div>
    </div>
  );
};

export default VideoAdd;
