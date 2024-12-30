import React from "react";

function AboutImage() {
  return (
    <div className="about-image-container">
      <img src="about-img-01.webp" alt="" className="about-image-1" />
      <img src="about-img-02.webp" alt="" className="about-image-2" />
      <div className="about-image-info-container">
        <p>
          <span className="about-image-info-digit">15+</span> Years
        </p>
        <p>Of experience in business service</p>
      </div>
    </div>
  );
}

export default AboutImage;
