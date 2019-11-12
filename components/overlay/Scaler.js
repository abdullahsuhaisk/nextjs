import React from "react";
import PropTypes from "prop-types";

let baseWidth = 812;
let baseHeight = 450;

const Scaler = props => {
  const { children } = props;
  const layout = props;
  const safeArea = props.layout && props.layout.safeArea;

  if (safeArea === null) return null;
  const scaleX = (layout.width - (safeArea.left + safeArea.right)) / baseWidth;
  const scaleY =
    (layout.height - (safeArea.top + safeArea.bottom)) / baseHeight;

  return (
    <div
      className="vb--scaler Template1"
      style={{
        width: `${baseWidth}px`,
        height: `${baseHeight}px`,
        transformOrigin: "left top",
        transform: `perspective(1px) scaleX(${scaleX.toFixed(
          9
        )}) scaleY(${scaleY.toFixed(9)})`,
        backfaceVisibility: "hidden",
        perspective: "1000px"
      }}
    >
      {children}
    </div>
  );
};

Scaler.propTypes = {
  children: PropTypes.node.isRequired
};

export default Scaler;
