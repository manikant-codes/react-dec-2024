import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <p>&copy; 2025. All Rights Reserved.</p>
      <ul>
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/tnc">Terms & Conditions</Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
