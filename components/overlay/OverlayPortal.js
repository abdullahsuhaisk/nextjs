/* eslint-disable no-new */
import React, { useRef, useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import ResizeSensor from "css-element-queries/src/ResizeSensor";
import { throttle } from "lodash";

const aspectRatio = 1.777;

const OverlayPortal = props => {
  const { container } = props;
  const containerRef = useRef();
  const [layout, setLayout] = useState(null);

  const updateLayout = useCallback(() => {
    const containerWidth = 800;
    const containerHeight = 454;
    const containerAspectRatio = containerWidth / containerHeight;
    let rightLeftMargin = 0;
    let topBottomMargin = 0;

    if (containerAspectRatio >= aspectRatio) {
      const width = containerHeight * aspectRatio;
      rightLeftMargin = Math.round((containerWidth - width) / 2);
    } else {
      const height = containerWidth / aspectRatio;
      topBottomMargin = Math.round((containerHeight - height) / 2);
    }
    const alayout = {
      __typename: "Layout",
      width: containerWidth,
      height: containerHeight,
      safeArea: {
        top: topBottomMargin,
        right: rightLeftMargin,
        bottom: topBottomMargin,
        left: rightLeftMargin
      }
    };
    setLayout(alayout);
    // console.log(layout);
    // console.log(alayout);

    // if (apolloClientRef.current) {
    //   const data = {
    //     layout: {
    //       __typename: "Layout",
    //       width: containerWidth,
    //       height: containerHeight,
    //       safeArea: {
    //         __typename: "SafeArea",
    //         top: topBottomMargin,
    //         right: rightLeftMargin,
    //         bottom: topBottomMargin,
    //         left: rightLeftMargin
    //       }
    //     }
    //   };

    //   apolloClientRef.current.writeData({ data });
    // }
  }, []);

  useEffect(() => {
    updateLayout();
    console.log(containerRef.current);
    new ResizeSensor(containerRef.current, throttle(updateLayout, 100));
  }, []);

  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      // PassToProps
      container,
      layout
    });
  });

  return ReactDOM.createPortal(
    <div
      ref={containerRef}
      className="overlay-container"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        pointerEvents: "auto"
      }}
    >
      {children}
    </div>,
    container
  );
};
OverlayPortal.propTypes = {
  children: PropTypes.node.isRequired
};

export default OverlayPortal;
