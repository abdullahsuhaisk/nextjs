import React from "react";

const Image = () => {
  return (
    <div className="image-wrapper" style={{ width: "100%", height: "100%" }}>
      <div className="image" style={{ width: "100%", height: "100%" }}>
        <img
          className="image-service"
          src="/static/image.jpg"
          style={{
            width: "100%",
            height: "100%"
          }}
        ></img>
        <div
          className="image-overlay-container"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            pointerEvents: "none"
          }}
        ></div>
      </div>
    </div>
  );
};

export default Image;
