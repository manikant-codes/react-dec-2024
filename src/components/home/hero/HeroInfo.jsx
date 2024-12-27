import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons/faCirclePlay";

function HeroInfo() {
  return (
    <div className="hero-info-container">
      <div className="hero-tab">
        <FontAwesomeIcon
          icon={faGear}
          style={{ width: "20px", height: "20px" }}
        />
        <p>Working for your success</p>
      </div>
      <h2 className="hero-title">
        Maecenas Vitae Consectetur Led <span>Vestibulum Ante</span>
      </h2>
      <p className="hero-para">
        Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
        leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
      </p>
      <div className="hero-btn-container">
        <button className="hero-action-btn">Get Started</button>
        <button className="hero-play-btn">
          <FontAwesomeIcon
            style={{ width: "24px", height: "24px" }}
            icon={faCirclePlay}
          />
          <span>Play Video</span>
        </button>
      </div>
    </div>
  );
}

export default HeroInfo;
