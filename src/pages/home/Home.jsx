import React from "react";
import About from "../../components/home/about/About";
import Hero from "../../components/home/hero/Hero";
import Navbar from "../../components/home/navbar/Navbar";
import Stats from "../../components/home/stats/Stats";
import "./home.css";
import FeaturesCardsRow from "../../components/home/fetures/FeatureCardsRow";
import ListRendering from "../../components/home/ListRendering";
import FeaturesMobileRow from "../../components/home/fetures/FeaturesMobileRow";

function Home() {
  return (
    <div className="home-container">
      {/* <Navbar />
      <Hero />
      <Stats />
      <About />
      <FeaturesCardsRow />
      <FeaturesMobileRow /> */}
      <ListRendering />
    </div>
  );
}

export default Home;
