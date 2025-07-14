import React from "react";

export default function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      zIndex: 10,
      background: "rgba(30, 44, 61, 0.85)",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.75rem 2rem",
      fontFamily: "inherit",
      fontWeight: 600,
      letterSpacing: "0.03em",
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      backdropFilter: "blur(4px)",
    }}>
      <div style={{ fontSize: "1.3rem", letterSpacing: "0.04em" }}>Sourcing Sharks</div>
      <div style={{ display: "flex", gap: "2rem", fontSize: "1rem" }}>
        <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
        <a href="/about" style={{ color: "#fff", textDecoration: "none" }}>About Us</a>
        <a href="/products" style={{ color: "#fff", textDecoration: "none" }}>Products</a>
        <a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a>
      </div>
    </nav>
  );
} 