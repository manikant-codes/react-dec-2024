import React from "react";
import TestimonialCard from "./TestimonialCard";
import styles from "./testimonialsRow.module.css";

function TestimonialsRow() {
  return (
    <div className={styles.container}>
      {/* Title */}
      <div className={styles.titleContainer}>
        <h2>Testimonials</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          maxime?
        </p>
      </div>
      {/* Cards */}
      <div className={styles.cardsOuterContainer}>
        <TestimonialCard
          image="https://bootstrapmade.com/content/demo/iLanding/assets/img/testimonials/testimonials-1.jpg"
          name="Saul Goodman"
          designation="Ceo & Founder"
          rating={3}
        />
        <TestimonialCard
          image="https://bootstrapmade.com/content/demo/iLanding/assets/img/testimonials/testimonials-2.jpg"
          name="Sara Wilsson"
          designation="Designer"
          rating={5}
        />
        <TestimonialCard
          image="https://bootstrapmade.com/content/demo/iLanding/assets/img/testimonials/testimonials-2.jpg"
          name="Sara Wilsson"
          designation="Designer"
          rating={5}
        />
        <TestimonialCard
          image="https://bootstrapmade.com/content/demo/iLanding/assets/img/testimonials/testimonials-2.jpg"
          name="Sara Wilsson"
          designation="Designer"
          rating={5}
        />
      </div>
    </div>
  );
}

export default TestimonialsRow;
