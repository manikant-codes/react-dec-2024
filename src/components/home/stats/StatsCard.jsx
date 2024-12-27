import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function StatsCard(props) {
  return (
    <div className="stats-card-container">
      <div className="stats-card-icon-container">
        <FontAwesomeIcon
          style={{ width: "24px", height: "24px" }}
          icon={props.icon}
        />
      </div>
      <div>
        <h3 className="stats-card-title">{props.title}</h3>
        <p className="stats-card-desc">{props.desc}</p>
      </div>
    </div>
  );
}

export default StatsCard;
