import React from "react";
import styles from "./title.module.css";

function Title(props) {
  const { title, desc } = props;
  return (
    <div className={styles.titleContainer}>
      <h2>{title}</h2>
      <hr />
      <p>{desc}</p>
    </div>
  );
}

export default Title;
