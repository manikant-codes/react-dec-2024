import React, { useState } from "react";
import About from "../../components/home/about/About";
import Hero from "../../components/home/hero/Hero";
import Navbar from "../../components/common/navbar/Navbar";
import Stats from "../../components/home/stats/Stats";
import "./home.css";
import FeaturesCardsRow from "../../components/home/fetures/FeatureCardsRow";
import ListRendering from "../../components/home/ListRendering";
import FeaturesMobileRow from "../../components/home/fetures/FeaturesMobileRow";
import ConditionalRendering from "../../components/home/ConditionalRendering";
import { faComment, faTractor } from "@fortawesome/free-solid-svg-icons";
import Clients from "../../components/home/clients/Clients";
import TestimonialsRow from "../../components/home/testimonials/TestimonialsRow";
import FiguresRow from "../../components/home/figures/FiguresRow";
import FaqsRow from "../../components/home/faqs/FaqsRow";
import UseStateDemo from "../../components/home/UseStateDemo";
import UseStateCountDemo from "../../components/home/UseStateCountDemo";
import FeaturesTabsRow from "../../components/home/fetures/FeaturesTabsRow";
import PricingRow from "../../components/home/pricing/PricingRow";
import Footer from "../../components/common/footer/Footer";

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <Stats />
      <About />
      <FeaturesTabsRow />
      <FeaturesCardsRow />
      <FeaturesMobileRow />
      <Clients />
      <TestimonialsRow />
      <FiguresRow />
      <FaqsRow />
      <PricingRow />

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
      {/* <UseStateDemo /> */}
      {/* <UseStateCountDemo /> */}
    </div>
  );
}

export default Home;
