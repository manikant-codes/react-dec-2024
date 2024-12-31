import React from "react";
import About from "../../components/home/about/About";
import Footer from "../../components/home/Footer";
import Hero from "../../components/home/hero/Hero";
import Navbar from "../../components/home/navbar/Navbar";
import Stats from "../../components/home/stats/Stats";
import "./home.css";

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
