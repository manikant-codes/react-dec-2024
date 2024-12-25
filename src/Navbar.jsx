function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#311b92",
        padding: "16px 32px",
        color: "white"
      }}
    >
      <h1>My First Site</h1>
      <ul style={{ listStyleType: "none", display: "flex", gap: "16px" }}>
        <li>
          <a href="" style={{ color: "white" }}>
            Home
          </a>
        </li>
        <li>
          <a href="" style={{ color: "white" }}>
            About
          </a>
        </li>
        <li>
          <a href="" style={{ color: "white" }}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
