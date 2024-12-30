import React from "react";
import AboutInfo from "./AboutInfo";
import AboutImage from "./AboutImage";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <AboutInfo />
      <AboutImage />
    </div>
  );
}

export default About;
