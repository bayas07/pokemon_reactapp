import React from "react";
import "./BackgroundOverlay.css";

const BackgroundOverlay = ({ onClose }) => {
  return <div className="bg-overlay" onClick={onClose}></div>;
};

export default BackgroundOverlay;
