import React from "react";
import OverlayContainer from "../components/overlay/OverlayContainer";
import { OverlayScreen } from "../components/overlay/OverlayScreen";

const ImageApp = () => {
  return (
    <div
      className="image-container"
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
    >
      {
        //TODO: Spinner will come here
      }
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
      <OverlayContainer>
        <OverlayScreen />
      </OverlayContainer>
      <style jsx>{``}</style>
    </div>
  );
};

export default ImageApp;
