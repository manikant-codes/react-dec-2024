import "./navbar.css";

function Navbar() {
  return (
    <nav className="nav-container">
      <h1 className="logo">iLandingPage</h1>
      <ul
        className="nav-links"
        style={{ listStyleType: "none", display: "flex", gap: "16px" }}
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
