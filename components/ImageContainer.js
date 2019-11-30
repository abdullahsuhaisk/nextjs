import React from "react";

const ImageContainer = ({ children }) => {
  return (
    <div
      className="image-wrapper"
      style={{ width: "100vw", height: "100vh", position: "relative" }}
    >
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <img
          className="image-service"
          src="/static/image.jpg"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute"
          }}
        ></img>
        <div
          className="image-overlay-container"
          style={{
            pointerEvents: "none"
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
