import React, { useState } from "react";
import styles from "./featuresTabsRow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    title: "Tab 1",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, maiores?",
    listItems: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur."
    ],
    image:
      "https://bootstrapmade.com/content/demo/iLanding/assets/img/features-illustration-1.webp"
  },
  {
    title: "Tab 2",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, maiores?",
    listItems: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur."
    ],
    image:
      "https://bootstrapmade.com/content/demo/iLanding/assets/img/features-illustration-2.webp"
  },
  {
    title: "Tab 3",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, maiores?",
    listItems: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur."
    ],
    image:
      "https://bootstrapmade.com/content/demo/iLanding/assets/img/features-illustration-3.webp"
  }
];

function FeaturesTabsRow() {
  const [activeTab, setActiveTab] = useState(0);

  console.log("activeTab", activeTab);

  function handleChange(tabNo) {
    setActiveTab(tabNo);
  }

  return (
    <div>
      {/* Title */}
      <div className={styles.titleContainer}>
        <h2>Features</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          maxime?
        </p>
      </div>
      {/* Tabs */}
      <div className={styles.tabsContainer}>
        <button
          onClick={() => {
            handleChange(0);
          }}
        >
          Tab 1
        </button>
        <button
          onClick={() => {
            handleChange(1);
          }}
        >
          Tab 2
        </button>
        <button
          onClick={() => {
            handleChange(2);
          }}
        >
          Tab 3
        </button>
      </div>

      <div className={styles.tabContainer}>
        <div className={styles.tabTextContainer}>
          <h3>{data[activeTab].title}</h3>
          <hr />
          <p>
            <i>{data[activeTab].desc}</i>
          </p>
          <ul>
            {data[activeTab].listItems.map((listItem, index) => {
              return (
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  <p>{listItem}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.tabImageContainer}>
          <img src={data[activeTab].image} alt="tab 1 illustration" />
        </div>
      </div>
    </div>
  );
}

export default FeaturesTabsRow;
