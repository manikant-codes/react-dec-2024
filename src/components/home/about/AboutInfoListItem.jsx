import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AboutInfoListItem() {
  return (
    <li>
      <FontAwesomeIcon icon={faCheck} />
      <p>Lorem ipsum dolor sit amet </p>
    </li>
  );
}

export default AboutInfoListItem;
