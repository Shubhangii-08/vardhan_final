import React from "react";
import Navbar from "../components/Navbar";
export default function HeroSection() {
  return (
    <section id="home" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "#fff",
      position: "relative",
      zIndex: 2,
    }}>
      <h1 style={{
        fontSize: "4vw",
        fontWeight: 700,
        letterSpacing: "0.08em",
        margin: 0,
        textShadow: "0 4px 32px rgba(0,0,0,0.25)",
      }}>
        FROM PORT TO PORT, YOUR<br />GLOBAL SUPPORT!
      </h1>
      <p style={{
        fontSize: "1.4rem",
        marginTop: "2rem",
        fontWeight: 400,
        letterSpacing: "0.03em",
        textShadow: "0 2px 8px rgba(0,0,0,0.18)",
        maxWidth: "600px",
      }}>
        Experience seamless international trade solutions
      </p>
    </section>
  );
} 