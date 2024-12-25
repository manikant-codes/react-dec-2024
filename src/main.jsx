import { createRoot } from "react-dom/client";
import Navbar from "./Navbar.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import "./main.css";

const myDiv = document.getElementById("mydiv");
const rootElement = createRoot(myDiv);
rootElement.render(
  <>
    <Navbar />
    <Body />
    <Footer />
  </>
);
