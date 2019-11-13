import React from "react";
import SafeArea from "./SafeArea";
import Scaler from "./Scaler";

export const OverlayScreen = props => {
  // console.log("Overlay Screen");
  // console.log(props);
  const { layout } = props;
  return (
    <SafeArea layout={layout}>
      <Scaler layout={layout}>
        <div
          className="overlay-screen"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        >
        ABC</div>
      </Scaler>
    </SafeArea>
  );
};
