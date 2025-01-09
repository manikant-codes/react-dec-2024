import React from "react";
import AboutInfoListItem from "./AboutInfoListItem";
import Profile from "../../common/profile/Profile";

function AboutInfo() {
  // const listItems = [
  //   <AboutInfoListItem text="Lorem ipsum dolor sit amet" />,
  //   <AboutInfoListItem text="Consectetur adipiscing elit" />,
  //   <AboutInfoListItem text="Sed do eiusmod tempor" />,
  //   <AboutInfoListItem text="Incididunt ut labore et" />,
  //   <AboutInfoListItem text="Dolore magna aliqua" />,
  //   <AboutInfoListItem text="Ut enim ad minim veniam" />
  // ];

  const listItems = [];

  const texts = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Sed do eiusmod tempor",
    "Incididunt ut labore et",
    "Dolore magna aliqua",
    "Ut enim ad minim veniam"
  ];

  for (const text of texts) {
    listItems.push(<AboutInfoListItem text={text} />);
  }

  return (
    <div className="about-info-container">
      <h2 className="about-info-title">Voluptas enim suscipit temporibus</h2>
      <p className="about-info-desc">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <ul className="about-info-list">
        {/* <AboutInfoListItem text="Lorem ipsum dolor sit amet" />
        <AboutInfoListItem text="Consectetur adipiscing elit" />
        <AboutInfoListItem text="Sed do eiusmod tempor" />
        <AboutInfoListItem text="Incididunt ut labore et" />
        <AboutInfoListItem text="Dolore magna aliqua" />
        <AboutInfoListItem text="Ut enim ad minim veniam" /> */}
        {listItems}
      </ul>
      <div className="about-profile-container">
        <Profile
          image="https://bootstrapmade.com/content/demo/iLanding/assets/img/testimonials/testimonials-1.jpg"
          name="Saul Goodman"
          designation="Ceo & Founder"
        />
      </div>
    </div>
  );
}

export default AboutInfo;
