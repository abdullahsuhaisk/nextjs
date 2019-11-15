import React from "react";

const Image = () => {
  return (
    <div className="image-wrapper" style={{ width: "100%", height: "100%" }}>
      <div
        className="image-overlay-container"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          pointerEvents: "none"
        }}
      >
        <img
          className="image-service"
          src="/static/image.jpg"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            pointerEvents: "none"
          }}
        ></img>
      </div>
    </div>
  );
};

export default Image;
