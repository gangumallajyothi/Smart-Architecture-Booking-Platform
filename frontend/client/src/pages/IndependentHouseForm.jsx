import React, { useState } from "react";
import { API_BASE_URL } from "../apiConfig";
import { useNavigate } from "react-router-dom";
import IndependentHouseImg from "./images/IndependentHouseImg.jpg";
import IndependentArchitecture from "./images/IndependentArchitecture.png";

function IndependentHouse() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const goBack = () => {
    window.history.back();
  };

  const approved = async () => {
    if (!isChecked) {
      alert("Please tick the checkbox to approve ❌");
      return;
    }

    try {
      const userName = localStorage.getItem("userName") || "Unknown";
      const userEmail = localStorage.getItem("userEmail") || "Unknown";

      await fetch(`${API_BASE_URL}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: userName,
          userEmail: userEmail,
          projectType: "Independent House",
          status: "Approved",
          date: new Date().toISOString()
        })
      });

      navigate("/thank-you");
    } catch (error) {
      alert("Failed to save booking. Check server.");
    }
  };

  return (
    <>
      <style>{`
        @media (max-width: 600px) {
          .card-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
            grid-template-columns: 1fr !important;
            padding: 15px !important;
            gap: 20px !important;
          }
          .card {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
      <div style={{ fontFamily: "Arial, sans-serif", background: "#f2f2f2", margin: 0 }}>

        {/* Back Button */}
        <button
          onClick={goBack}
          style={{
            position: "fixed", top: "15px", left: "15px",
            background: "#2c3e50", color: "white",
            padding: "10px 18px", border: "none",
            borderRadius: "5px", cursor: "pointer"
          }}
        >
          ⬅ Back
        </button>

        {/* Approved Button */}
        <button
          onClick={approved}
          style={{
            position: "fixed", bottom: "20px", right: "20px",
            background: "#27ae60", color: "white",
            padding: "14px 26px", border: "none",
            borderRadius: "6px",
            cursor: isChecked ? "pointer" : "not-allowed",
            opacity: isChecked ? 1 : 0.6,
            fontSize: "16px"
          }}
        >
          Book Now
        </button>

        {/* Heading */}
        <h1 style={{
          textAlign: "center", padding: "25px",
          background: "#34495e", color: "white", margin: 0
        }}>
          Independent House – Standalone Family Residential Home
        </h1>

        {/* Top Section */}
        <div style={{ display: "flex", gap: "20px", padding: "20px", flexWrap: "wrap" }}>

          <div style={{
            flex: 1, minWidth: "300px", background: "white", padding: "15px",
            borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)"
          }}>
            <h2>House Exterior View</h2>
            <img src={IndependentHouseImg} alt="Independent House"
              style={{ width: "100%", height: "auto", maxHeight: "60vh", objectFit: "contain", borderRadius: "6px" }}
            />
          </div>

          <div style={{
            flex: 1, minWidth: "300px", background: "white", padding: "15px",
            borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)"
          }}>
            <h2>Architecture Layout</h2>
            <img src={IndependentArchitecture} alt="House"
              style={{
                width: "100%", height: "auto", maxHeight: "50vh", objectFit: "contain",
                borderRadius: "6px", border: "2px solid #ccc",
                background: "#fafafa", boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
              }}
            />
          </div>

        </div>

        {/* Content Section */}
        <div style={{
          background: "white", margin: "20px", padding: "25px",
          borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{ color: "#2c3e50" }}>About This Independent House</h2>
          <p style={{ lineHeight: "1.9", textAlign: "justify" }}>
            This independent house is a standalone family residential home designed for people who prefer privacy, comfort, and long-term investment. Since there are no shared walls, the house provides a peaceful living environment with better air circulation and natural lighting throughout the day.
          </p>
          <h2 style={{ color: "#2c3e50" }}>Space Occupied</h2>
          <p style={{ lineHeight: "1.9", textAlign: "justify" }}>
            The house is constructed on a 30 x 40 feet plot covering 1200 square feet of land. Out of this, approximately 900 to 1000 square feet is utilized as built-up area, while the remaining space is used for parking, setbacks, and open ventilation areas.
          </p>
          <h2 style={{ color: "#2c3e50" }}>Room Arrangement</h2>
          <p style={{ lineHeight: "1.9", textAlign: "justify" }}>
            The living room is placed at the front of the house for easy access and guest interaction. The kitchen is positioned at the back for cleanliness and privacy. Two bedrooms are provided, one with an attached bathroom and another with a common bathroom. The staircase leads to an open terrace which allows future expansion.
          </p>
          <h2 style={{ color: "#2c3e50" }}>Benefits</h2>
          <p style={{ lineHeight: "1.9", textAlign: "justify" }}>
            Independent houses offer complete freedom, better resale value, no maintenance charges, future construction flexibility, and peaceful living without disturbance from neighbors.
          </p>
          <h2 style={{ color: "#2c3e50" }}>Construction Cost</h2>
          <div style={{
            background: "#ecf0f1", padding: "15px",
            borderLeft: "5px solid #27ae60", marginTop: "10px"
          }}>
            <p>The estimated construction cost ranges between ₹15 lakhs to ₹22 lakhs depending on materials, labor charges, and interior finishes.</p>
          </div>
        </div>

        {/* Checkbox Section */}
        <div style={{
          margin: "20px", background: "white", padding: "20px",
          borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          display: "flex", alignItems: "center", gap: "10px", fontSize: "16px"
        }}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label>I have read all details and I agree (OK)</label>
        </div>

      </div>
    </>
  );
}

export default IndependentHouse;