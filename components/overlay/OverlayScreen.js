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
          <img src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"></img>
        </div>
      </Scaler>
    </SafeArea>
  );
};
