import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DuplexHouseImg from "./images/DuplexHouseImg.jpg";
import DuplexArchitecture from "./images/DuplexArchitecture.jpg";

function DuplexHouse() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const goBack = () => {
    window.history.back();
  };

  const approveHouse = async () => {
    if (!checked) {
      alert("Please tick the checkbox to approve ❌");
      return;
    }

    try {
      const userName = localStorage.getItem("userName") || "Unknown";
      const userEmail = localStorage.getItem("userEmail") || "Unknown";

      await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: userName,
          userEmail: userEmail,
          projectType: "Duplex House",
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
    <div style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f2f2f2" }}>

      {/* Back Button */}
      <button onClick={goBack} style={{
        position: "fixed", top: "15px", left: "15px",
        background: "#2c3e50", color: "white", padding: "10px 18px",
        border: "none", borderRadius: "5px", cursor: "pointer", zIndex: "1000"
      }}>
        ⬅ Back
      </button>

      {/* Book Now Button */}
      <button onClick={approveHouse} style={{
        position: "fixed", bottom: "20px", right: "20px",
        background: "#27ae60", color: "white", padding: "14px 28px",
        border: "none", borderRadius: "6px",
        cursor: checked ? "pointer" : "not-allowed",
        opacity: checked ? "1" : "0.6",
        fontSize: "16px", zIndex: "1000"
      }}>
        Book Now
      </button>

      {/* Heading */}
      <h1 style={{
        textAlign: "center", padding: "25px",
        background: "#34495e", color: "white", margin: "0"
      }}>
        Duplex House – Two-Floor Family Residential Home
      </h1>

      {/* Top Section */}
      <div style={{ display: "flex", gap: "25px", padding: "25px" }}>

        <div style={{
          flex: "1", background: "white", padding: "15px",
          borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}>
          <h2>Duplex House Exterior</h2>
          <img src={DuplexHouseImg} alt="Duplex House" style={{
            width: "100%", height: "480px", objectFit: "cover", borderRadius: "6px"
          }} />
        </div>

        <div style={{
          flex: "1", background: "white", padding: "15px",
          borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}>
          <h2>Architecture Layout (G + 1)</h2>
          <img src={DuplexArchitecture} alt="Duplex Architecture" style={{
            width: "100%", height: "480px", objectFit: "cover", borderRadius: "6px"
          }} />
        </div>

      </div>

      {/* Content */}
      <div style={{
        background: "white", margin: "20px", padding: "30px",
        borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ color: "#2c3e50" }}>About Duplex House</h2>
        <p style={{ lineHeight: "1.9", textAlign: "justify" }}>
          A duplex house is a two-floor independent residential building designed for a single family where the ground floor and first floor are connected internally through a staircase. This type of house provides better space utilization, privacy between floors, and a modern living experience. Duplex houses are ideal for medium to large families who prefer independent living with clear separation between common and private areas.
        </p>
        <h2 style={{ color: "#2c3e50" }}>Space Occupied</h2>
        <p style={{ lineHeight: "1.9", textAlign: "justify" }}>
          This duplex house is generally constructed on a 30 x 40 feet or 40 x 60 feet plot. The total built-up area ranges between 1600 to 2200 square feet depending on design requirements. The ground floor and first floor share equal or optimized space distribution, allowing comfortable living without congestion.
        </p>
        <h2 style={{ color: "#2c3e50" }}>Room Arrangement</h2>
        <p style={{ lineHeight: "1.9", textAlign: "justify" }}>
          On the ground floor, the house consists of a spacious living room, dining area, kitchen with utility space, one bedroom, a common bathroom, and internal staircase. The first floor includes two or three bedrooms with attached bathrooms, a family lounge, and a balcony. This arrangement provides privacy for family members while keeping common areas accessible.
        </p>
        <h2 style={{ color: "#2c3e50" }}>Benefits of Duplex House</h2>
        <p style={{ lineHeight: "1.9", textAlign: "justify" }}>
          Duplex houses offer excellent privacy, better ventilation, future expansion possibilities, and higher resale value. They provide clear separation of spaces for elders, guests, or children. Compared to apartments, duplex houses give full ownership and freedom to modify the structure as per family needs.
        </p>
        <h2 style={{ color: "#2c3e50" }}>Estimated Construction Cost</h2>
        <p style={{ lineHeight: "1.9", textAlign: "justify" }}>
          The construction cost of a duplex house depends on materials, location, and finishing quality. On average, the cost ranges between ₹1,900 to ₹2,500 per square foot. For a 1800 sq.ft duplex house, the total estimated cost ranges from ₹35 lakhs to ₹45 lakhs excluding land cost.
        </p>
      </div>

      {/* Checkbox */}
      <div style={{
        margin: "20px", background: "white", padding: "20px",
        borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        display: "flex", gap: "10px", alignItems: "center", fontSize: "16px"
      }}>
        <input
          type="checkbox"
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label>I have read all the above details and I agree (OK)</label>
      </div>

    </div>
  );
}

export default DuplexHouse;