import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "10px",
        textAlign: "center",
        backgroundColor: "#664",
        color: "#f2f",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
