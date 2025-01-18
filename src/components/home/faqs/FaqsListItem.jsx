import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./faqsRow.module.css";

function FaqsListItem(props) {
  const { question, answer, index } = props;

  // function myFunction(event) {
  //   const para = document.getElementById(`my-para-${index}`);
  //   const btn = document.getElementById(`my-btn-${index}`);

  //   if (para.style.display === "block") {
  //     para.style.display = "none";
  //     btn.style.rotate = "0deg";
  //   } else {
  //     para.style.display = "block";
  //     btn.style.rotate = "180deg";
  //   }
  // }

  // let showPara = false;

  // const stateArr = useState(false);
  // const showPara = stateArr[0];
  // const setShowPara = stateArr[1];
  // OR

  const [showPara, setShowPara] = useState(false);

  function myFunction(e) {
    if (showPara) {
      // showPara = false;
      setShowPara(false);
    } else {
      // showPara = true;
      setShowPara(true);
    }

    console.log("showPara", showPara);
  }

  return (
    <div className={styles.listItem}>
      <p>
        <span>{question}</span>{" "}
        <button id={`my-btn-${index}`} onClick={myFunction}>
          {showPara ? (
            <FontAwesomeIcon icon={faArrowUp} />
          ) : (
            <FontAwesomeIcon icon={faArrowDown} />
          )}
        </button>
        {/* <button onclick="myFunction()">
          <FontAwesomeIcon icon={faArrowDown} />
        </button> */}
      </p>
      {showPara && (
        <p id={`my-para-${index}`} style={{ display: "block" }}>
          {answer}
        </p>
      )}
    </div>
  );
}

export default FaqsListItem;
