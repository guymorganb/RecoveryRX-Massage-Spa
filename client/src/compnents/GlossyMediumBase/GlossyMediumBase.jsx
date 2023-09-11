/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import  IconMedium1  from "../../icons/IconMedium1/IconMedium1";
import "./style.css";

export const GlossyMediumBase = ({ className, contentClassName, divClassName, text = "BUTTON", visible = true }) => {
  return (
    <div className={`glossy-medium-base ${className}`}>
      <div className={`content ${contentClassName}`}>
        <div className={`BUTTON ${divClassName}`}>{text}</div>
        {visible && <IconMedium1 className="icon-medium" />}
      </div>
    </div>
  );
};

GlossyMediumBase.propTypes = {
  text: PropTypes.string,
  visible: PropTypes.bool,
};
