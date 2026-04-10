import React from "react";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      height: "100vh", fontFamily: "Arial", background: "#f4f6fb"
    }}>
      <div style={{
        background: "white", padding: "50px", borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)", textAlign: "center"
      }}>
        <div style={{ fontSize: "60px" }}>✅</div>
        <h1 style={{ color: "#004aad" }}>Thank You for Booking!</h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Your project has been successfully Booking.<br />
          Our team will contact you soon.
        </p>
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "20px", background: "#004aad", color: "white",
            border: "none", padding: "12px 24px", borderRadius: "6px",
            fontSize: "16px", cursor: "pointer"
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default ThankYou;