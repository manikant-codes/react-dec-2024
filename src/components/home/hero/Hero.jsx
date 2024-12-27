import React from "react";
import HeroInfo from "./HeroInfo";
import HeroImage from "./HeroImage";
import "./hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <HeroInfo />
      <HeroImage />
    </div>
  );
}

export default Hero;
