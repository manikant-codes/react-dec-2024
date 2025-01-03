import React from "react";
import About from "../../components/home/about/About";
import Hero from "../../components/home/hero/Hero";
import Navbar from "../../components/home/navbar/Navbar";
import Stats from "../../components/home/stats/Stats";
import "./home.css";
import Features from "../../components/home/fetures/Features";
import ListRendering from "../../components/home/ListRendering";

function Home() {
  return (
    <div className="home-container">
      {/* <Navbar />
      <Hero />
      <Stats />
      <About />
      <Features /> */}
      <ListRendering />
    </div>
  );
}

export default Home;
