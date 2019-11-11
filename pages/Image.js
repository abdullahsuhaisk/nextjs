import React from "react";
import OverlayContainer from "../components/overlay/OverlayContainer";
import { OverlayScreen } from "../components/overlay/OverlayScreen";

const Image = () => {
  return (
    <div
      className="image-container"
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
    >
      {
        //TODO: Spinner will come here
      }
      <img className="image-service" src="/static/image.jpg"></img>
      <OverlayContainer>
        <OverlayScreen />
      </OverlayContainer>
      <style jsx>
        {`
          div {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
};

export default Image;
