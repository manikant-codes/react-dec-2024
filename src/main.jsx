import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./main.css";

const myDiv = document.getElementById("mydiv");
const rootElement = createRoot(myDiv);
rootElement.render(<App />);
