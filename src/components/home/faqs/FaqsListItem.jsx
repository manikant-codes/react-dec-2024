import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./faqsRow.module.css";

function FaqsListItem(props) {
  const { question, answer, index } = props;
  function myFunction(event) {
    const para = document.getElementById(`my-para-${index}`);
    const btn = document.getElementById(`my-btn-${index}`);

    if (para.style.display === "block") {
      para.style.display = "none";
      btn.style.rotate = "0deg";
    } else {
      para.style.display = "block";
      btn.style.rotate = "180deg";
    }
  }

  return (
    <div className={styles.listItem}>
      <p>
        <span>{question}</span>{" "}
        <button id={`my-btn-${index}`} onClick={myFunction}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        {/* <button onclick="myFunction()">
          <FontAwesomeIcon icon={faArrowDown} />
        </button> */}
      </p>
      <p id={`my-para-${index}`} style={{ display: "block" }}>
        {answer}
      </p>
    </div>
  );
}

export default FaqsListItem;
