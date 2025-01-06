import React from "react";
import FeaturesMobileCard from "./FeaturesMobileCard";
import styles from "./featuresMobileRow.module.css";
import {
  faCode,
  faDesktop,
  faEye,
  faFeather,
  faMobile,
  faWebAwesome
} from "@fortawesome/free-solid-svg-icons";

const dataLeft = [
  {
    id: 1,
    title: "Use On Any Device",
    desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.",
    icon: faDesktop
  },
  {
    id: 2,
    title: "Feather Icons",
    desc: "Phasellus ullamcorper ipsum rutrum nunc nunc nonummy metus vestibulum volutpat sapien arcu sed augue aliquam erat volutpat.",
    icon: faFeather
  },
  {
    id: 3,
    title: "Retina Ready",
    desc: "Aenean tellus metus bibendum sed posuere ac mattis non nunc vestibulum fringilla purus sit amet fermentum aenean commodo.",
    icon: faEye
  }
];

const dataRight = [
  {
    id: 1,
    title: "W3c Valid Code",
    desc: "Donec vitae sapien ut libero venenatis faucibus nullam quis ante etiam sit amet orci eget eros faucibus tincidunt.",
    icon: faCode
  },
  {
    id: 2,
    title: "Fully Responsive",
    desc: "Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.",
    icon: faMobile
  },
  {
    id: 3,
    title: "Browser Compatibility",
    desc: "Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi aenean vulputate.",
    icon: faWebAwesome
  }
];

function FeaturesMobileRow() {
  const listLeft = dataLeft.map((value) => {
    return (
      <FeaturesMobileCard
        key={value.id}
        title={value.title}
        desc={value.desc}
        icon={value.icon}
      />
    );
  });

  const listRight = dataRight.map((value) => {
    return (
      <FeaturesMobileCard
        key={value.id}
        title={value.title}
        desc={value.desc}
        icon={value.icon}
        isRight
      />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.cardsOuterContainer}>{listLeft}</div>
      <div className={styles.imageContainer}>
        <img src="phone-app-screen.webp" alt="" />
      </div>
      <div className={styles.cardsOuterContainer}>{listRight}</div>
    </div>
  );
}

export default FeaturesMobileRow;
