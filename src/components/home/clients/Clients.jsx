import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./clients.module.css";

const logos = [
  "https://bootstrapmade.com/content/demo/iLanding/assets/img/clients/client-5.png",
  "https://bootstrapmade.com/content/demo/iLanding/assets/img/clients/client-6.png",
  "https://bootstrapmade.com/content/demo/iLanding/assets/img/clients/client-7.png",
  "https://bootstrapmade.com/content/demo/iLanding/assets/img/clients/client-8.png",
  "https://bootstrapmade.com/content/demo/iLanding/assets/img/clients/client-1.png",
  "https://bootstrapmade.com/content/demo/iLanding/assets/img/clients/client-2.png",
  "https://bootstrapmade.com/content/demo/iLanding/assets/img/clients/client-3.png",
  "https://bootstrapmade.com/content/demo/iLanding/assets/img/clients/client-4.png"
];

function Clients() {
  const settings = {
    autoplay: true,
    infinite: true,
    dots: true,
    slidesToShow: 6
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {/* <Slider autoplay infinite dots> */}
        {logos.map((logo, index) => {
          return (
            <div className={styles.slideContainer}>
              <img src={logo} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Clients;
