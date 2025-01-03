import { faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./features.module.css";

function FeatureCard(props) {
  return (
    <div
      className={styles.cardContainer}
      style={{ backgroundColor: props.bgColor }}
    >
      {/* Icon */}
      <FontAwesomeIcon
        icon={props.icon}
        style={{ color: props.iconColor }}
        className={styles.cardIcon}
      />
      {/* Title */}
      <h3 className={styles.cardTitle}>{props.title}</h3>
      {/* Desc */}
      <p className={styles.cardDesc}>{props.desc}</p>
    </div>
  );
}

export default FeatureCard;
