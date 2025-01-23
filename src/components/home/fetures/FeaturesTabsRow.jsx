import React, { useState } from "react";
import styles from "./featuresTabsRow.module.css";

function FeaturesTabsRow() {
  const [tab, setTab] = useState(1);

  function handleChange(tabNo) {
    setTab(tabNo);
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
            handleChange(1);
          }}
        >
          Tab 1
        </button>
        <button
          onClick={() => {
            handleChange(2);
          }}
        >
          Tab 2
        </button>
        <button
          onClick={() => {
            handleChange(3);
          }}
        >
          Tab 3
        </button>
      </div>

      <div>
        {tab === 1 && (
          <div>
            <h3>Tab 1</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              maiores?
            </p>
          </div>
        )}
        {tab === 2 && (
          <div>
            <h3>Tab 2</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              maiores?
            </p>
          </div>
        )}
        {tab === 3 && (
          <div>
            <h3>Tab 3</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              maiores?
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeaturesTabsRow;
