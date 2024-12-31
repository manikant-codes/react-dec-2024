import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AboutInfoListItem(props) {
  return (
    <li className="about-info-list-item">
      <FontAwesomeIcon className="about-info-list-item-icon" icon={faCheck} />
      <p className="about-info-list-item-text">{props.text}</p>
    </li>
  );
}

export default AboutInfoListItem;
