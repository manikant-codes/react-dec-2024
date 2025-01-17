import React from "react";
import Info from "./Info";
import FaqsList from "./FaqsList";
import styles from "./faqsRow.module.css";

function FaqsRow() {
  return (
    <div className={styles.container}>
      <Info />
      <FaqsList />
    </div>
  );
}

export default FaqsRow;
