import React from "react";
import Profile from "../../common/profile/Profile";
import styles from "./testimonialsRow.module.css";

function TestimonialCard(props) {
  return (
    <div className={styles.cardContainer}>
      {/* Profile */}
      <div className={styles.profileContainer}>
        <Profile
          image={props.image}
          name={props.name}
          designation={props.designation}
          rating={props.rating}
        />
      </div>

      {/* Quote */}
      <div className={styles.quoteContainer}>
        <p>
          <em>
            "<span className={styles.quote}></span>Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Reprehenderit, dolorem."
          </em>
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
