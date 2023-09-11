/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { GlossyMediumBase } from "../GlossyMediumBase";
import "./style.css";

export const GlossyButtonMedium = ({ className }) => {
  return (
    <div className={`glossy-button-medium ${className}`}>
      <GlossyMediumBase
        className="glossy-medium-base-instance"
        contentClassName="design-component-instance-node"
        divClassName="glossy-medium-base-2"
        text="Book Now"
        visible={false}
      />
    </div>
  );
};
