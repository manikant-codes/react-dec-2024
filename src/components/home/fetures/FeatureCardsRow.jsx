import React from "react";
import FeatureCard from "./FeatureCard";
import styles from "./features.module.css";
import {
  faAward,
  faCheck,
  faShieldHalved,
  faSun
} from "@fortawesome/free-solid-svg-icons";

function FeaturesCardsRow() {
  return (
    <div className={styles.container}>
      <FeatureCard
        icon={faAward}
        iconColor="#edb86e"
        bgColor="#fff3e2"
        title="Corporis voluptates"
        desc="Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip"
      />
      <FeatureCard
        icon={faCheck}
        iconColor="#20a5f8"
        bgColor="#deedfd"
        title="Explicabo consectetur"
        desc="Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore"
      />
      <FeatureCard
        icon={faSun}
        iconColor="#48c88a"
        bgColor="#d5f1e4"
        title="Ullamco laboris"
        desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
      />
      <FeatureCard
        icon={faShieldHalved}
        iconColor="#f28484"
        bgColor="#fdeded"
        title="Labore consequatur"
        desc="Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"
      />
    </div>
  );
}

export default FeaturesCardsRow;
