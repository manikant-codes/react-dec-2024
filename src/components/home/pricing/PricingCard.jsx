import React from "react";
import styles from "./pricingRow.module.css";

function PricingCard({ priceObject }) {
  return (
    <div
      className={styles.cardContainer}
      style={
        priceObject.id === 2
          ? {
              backgroundColor: "#0d83fd",
              color: "white"
            }
          : {}
      }
    >
      <h3>{priceObject.title}</h3>
      <p className={styles.price}>
        <span>
          <sup>$</sup>
        </span>
        <span>{priceObject.price}</span>
        <span>/ month</span>
      </p>
      <p>{priceObject.desc}</p>
      <p>Features Included:</p>
      <ul>
        {priceObject.features.map((feature) => {
          return <li>{feature}</li>;
        })}
      </ul>
      <button className={priceObject.id === 2 ? styles.mainCardBtn : ""}>
        Get Started
      </button>
    </div>
  );
}

export default PricingCard;
