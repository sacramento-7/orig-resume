import React from "react";

import "./DownIcon.css";

const DownIcon = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="downIcon-wrapper"
      style={props.style}
    >
      <div className="downIcon1">
        <img src={props.icon} alt="" />
      </div>
    </div>
  );
};

export default DownIcon;
