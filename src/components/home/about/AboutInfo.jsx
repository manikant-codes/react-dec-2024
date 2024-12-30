import React from "react";
import AboutInfoListItem from "./AboutInfoListItem";

function AboutInfo() {
  return (
    <div className="about-info-container">
      <h2>Voluptas enim suscipit temporibus</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <ul>
        <AboutInfoListItem />
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor</li>
        <li>Incididunt ut labore et</li>
        <li>Dolore magna aliqua</li>
        <li>Ut enim ad minim veniam</li>
      </ul>
    </div>
  );
}

export default AboutInfo;
