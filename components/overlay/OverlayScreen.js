import React from "react";

export const OverlayScreen = () => {
  console.log("Overlay Screen");
  return (
    <div
      className="overlay-screen"
      style={{ position: "absolute", width: "100%", height: "100%" }}
    >
      <div style={{ position: "relative", backgroundColor: "black" }}></div>
    </div>
  );
};
