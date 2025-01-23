// import "./navbar.css";

// Is styles object me hamare banaye class aur unhe mile hue unique naam hote hai.
// To mai styles.<apne-class-ka-naam> kar ke uska unique naam access kar sakta hun.
import styles from "./navbar.module.css";

function Navbar() {
  console.log("Navbar");
  return (
    <nav
      className={styles.container}
      // className="_container_19i9r_1"
    >
      <h1
        // className={"logo"} // Jab normal css file thim tab ye likha tha. Ab ye nahi chalega.
        // className="_logo_1bt31_23" // Kuy ke ab class name ye hai.
        className={styles.logo} // Ise aise likhenge kyu ke ye class name fix nahi hote hai, agle bar app chalu karo to hosakta hai class name badal jaye.
      >
        iLandingPage
      </h1>
      <ul
        // className="nav-links"
        className={styles.navLinks}
      >
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Service</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Dropdown</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <button>Get Started</button>
    </nav>
  );
}

export default Navbar;
