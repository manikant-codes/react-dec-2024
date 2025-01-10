import React from "react";
import CountUp from "react-countup";
import styles from "./figuresRow.module.css";

function FigureCard(props) {
  const { figure, desc } = props;
  return (
    <div className={styles.cardContainer}>
      <CountUp end={figure} duration={2} className={styles.figure} />
      <hr />
      <p>{desc}</p>
    </div>
  );
}

export default FigureCard;
