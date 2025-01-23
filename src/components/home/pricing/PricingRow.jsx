import React from "react";
import PricingCard from "./PricingCard";
import Title from "../../common/Title";
import styles from "./pricingRow.module.css";

const data = [
  {
    id: 1,
    title: "Basic Plan",
    price: 9.9,
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.",
    features: [
      "Duis aute irure dolor",
      "Excepteur sint occaecat",
      "Nemo enim ipsam voluptatem"
    ]
  },
  {
    id: 2,
    title: "Standard Plan",
    price: 19.9,
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
      "Ut labore et dolore magna aliqua"
    ]
  },
  {
    id: 3,
    title: "Premium Plan",
    price: 39.9,
    desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
    features: [
      "Temporibus autem quibusdam",
      "Saepe eveniet ut et voluptates",
      "Nam libero tempore soluta",
      "Cumque nihil impedit quo",
      "Maxime placeat facere possimus"
    ]
  }
];

function PricingRow() {
  return (
    <div>
      <Title
        title="Pricing"
        desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam."
      />
      <div className={styles.cardsContainer}>
        {data.map((priceObject) => {
          return <PricingCard key={priceObject.id} priceObject={priceObject} />;
        })}
      </div>
    </div>
  );
}

export default PricingRow;
