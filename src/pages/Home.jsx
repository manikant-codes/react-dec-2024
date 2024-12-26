import React from "react";
import Navbar from "../components/home/navbar/Navbar";
import Body from "../components/home/Body";
import Footer from "../components/home/Footer";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
