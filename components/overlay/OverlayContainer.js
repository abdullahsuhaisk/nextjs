import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import OverlayPortal from "./OverlayPortal";

const OverlayContainer = ({ children }) => {
  const [container, setcontainer] = useState(null);
  useEffect(() => {
    setcontainer(
      document && document.getElementsByClassName("image-service")[0]
    );
  }, []);
  // console.log(container);
  if (container) {
    return <OverlayPortal container={container}>{children}</OverlayPortal>;
  }

  return null;
};

OverlayContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default OverlayContainer;
