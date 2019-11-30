import React from "react";
import ImageContainer from "../components/ImageContainer";
const image2 = () => {
  return (
    <div>
      <ImageContainer>
        <span
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            top: "50%",
            left: "50%"
          }}
        >
          Abc
        </span>
      </ImageContainer>
    </div>
  );
};

export default image2;
