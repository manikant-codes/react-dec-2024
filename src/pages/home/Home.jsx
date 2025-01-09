import React from "react";
import About from "../../components/home/about/About";
import Hero from "../../components/home/hero/Hero";
import Navbar from "../../components/home/navbar/Navbar";
import Stats from "../../components/home/stats/Stats";
import "./home.css";
import FeaturesCardsRow from "../../components/home/fetures/FeatureCardsRow";
import ListRendering from "../../components/home/ListRendering";
import FeaturesMobileRow from "../../components/home/fetures/FeaturesMobileRow";
import ConditionalRendering from "../../components/home/ConditionalRendering";
import { faComment, faTractor } from "@fortawesome/free-solid-svg-icons";
import Clients from "../../components/home/clients/Clients";
import TestimonialsRow from "../../components/home/testimonials/TestimonialsRow";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <FeaturesCardsRow />
      <FeaturesMobileRow />
      <Clients />
      <TestimonialsRow />
      {/* <ListRendering /> */}
      {/* <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: "16px"
        }}
      >
        <ConditionalRendering
          isImage
          url="https://img.freepik.com/premium-photo/colorful-lizard-with-red-eye-green-eye_924629-324416.jpg"
        />
        <ConditionalRendering icon={faTractor} />
      </div> */}
    </div>
  );
}

export default Home;
