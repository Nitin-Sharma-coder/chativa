import React from "react";
import "./InfoBar.css";

import closeIcon from "../../icons/logo2.png";
import onlineIcon from "../../icons/logo1.png";
import conversation from "./conv.svg";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img src={conversation} alt="talks" className="talks" />
      <img src={onlineIcon} alt="online" className="onlineIcon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="close" />
      </a>
    </div>
  </div>
);

export default InfoBar;
