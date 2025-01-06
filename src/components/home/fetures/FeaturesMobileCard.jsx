import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./featuresMobileRow.module.css";

function FeaturesMobileCard(props) {
  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.textContainer}
        style={{
          order: props.isRight ? 2 : 1,
          textAlign: props.isRight ? "left" : "right"
        }}
      >
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
      <div
        className={styles.iconContainer}
        style={{ order: props.isRight ? 1 : 2 }}
      >
        <FontAwesomeIcon icon={props.icon} />
      </div>
    </div>
  );
}

export default FeaturesMobileCard;
