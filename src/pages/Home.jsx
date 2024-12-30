import React from "react";
import Navbar from "../components/home/navbar/Navbar";
import Body from "../components/home/Body";
import Footer from "../components/home/Footer";
import "./home.css";
import Hero from "../components/home/hero/Hero";
import Stats from "../components/home/stats/Stats";
import About from "../components/home/about/About";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
