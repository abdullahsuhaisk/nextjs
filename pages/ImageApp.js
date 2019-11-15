import React from "react";
import OverlayContainer from "../components/overlay/OverlayContainer";
import { OverlayScreen } from "../components/overlay/OverlayScreen";
import Image from "../components/Image";

const ImageApp = () => {
  return (
    <div
      className="imageHotSpot-container"
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
    >
      <Image />
      {
        //TODO: Spinner will come here
      }
      <OverlayContainer>
        <OverlayScreen />
      </OverlayContainer>
      <style jsx>{``}</style>
    </div>
  );
};

export default ImageApp;
