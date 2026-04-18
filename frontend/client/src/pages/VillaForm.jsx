import React, { useState } from "react";
import { API_BASE_URL } from "../apiConfig";
import { useNavigate } from "react-router-dom";
import VillaHouseImg from "./images/VillaHouseImg.jpeg";
import VillaArchitecture from "./images/VillaArchitecture.png";

function VillaHouse() {
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

      await fetch(`${API_BASE_URL}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: userName,
          userEmail: userEmail,
          projectType: "Villa House",
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
        body { margin:0; font-family:Arial; background:#eef2f4; }
        .header { background:#3d5164; color:white; padding:20px; text-align:center; font-size:26px; font-weight:bold; }
        .back-btn { position:absolute; left:20px; top:18px; background:#2c3e50; color:white; border:none; padding:8px 15px; border-radius:5px; cursor:pointer; }
        .section { background:white; margin:25px; padding:25px; border-radius:8px; box-shadow:0 0 10px rgba(0,0,0,0.15); }
        .top { display:flex; gap:30px; flex-wrap: wrap; }
        .left { flex:1; min-width: 300px; }
        .left img { width:100%; border-radius:8px; }
        .right { flex:1; min-width: 300px; display:flex; justify-content:space-between; align-items:flex-start; }
        .floor { text-align:center; }
        .floor img { width: 100%; max-width: 600px; height: auto; border-radius:8px; }
        h2 { color:#2c3e50; margin-top:25px; }
        p { line-height:1.8; color:#333; }
        .checkbox-section { margin:25px; padding:20px; background:white; border-radius:8px; display:flex; justify-content:space-between; align-items:center; flex-wrap: wrap; gap: 15px; box-shadow:0 0 10px rgba(0,0,0,0.15); }
        .approve-btn { background:#2ecc71; border:none; padding:12px 28px; color:white; font-size:16px; border-radius:6px; cursor:pointer; }
        .approve-btn:disabled { background:gray; cursor:not-allowed; }
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

      <div className="header">
        <button className="back-btn" onClick={goBack}>← Back</button>
        Villa – Luxury Independent Villa for Families
      </div>

      <div className="section">
        <h2>Villa Exterior & Architecture</h2>
        <div className="top">
          <div className="left">
            <img src={VillaHouseImg} alt="Luxury Villa Exterior" />
          </div>
          <div className="right">
            <div className="floor">
              <h2>Architecture Layout</h2>
              <img src={VillaArchitecture} alt="Villa Architecture Layout" />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>About Luxury Independent Villa</h2>
        <p>A luxury independent villa is a premium residential home designed for families who prefer privacy, comfort, and modern architectural living. These villas are built with spacious layouts, premium elevation designs, glass balconies, and landscaped outdoor areas. Independent villas provide full ownership and freedom to customize interiors.</p>
        <p>Luxury villas combine aesthetic architecture with functional planning. Large windows, natural lighting, and open ventilation improve health and energy efficiency while creating a peaceful living environment.</p>
        <h2>Space Occupied</h2>
        <p>Luxury villas are typically constructed on 40x60 ft, 50x80 ft, or larger plots. The built-up area ranges from 2200 sq.ft to 4000+ sq.ft depending on design requirements. Architectural planning ensures open movement spaces, terrace gardens, and outdoor relaxation zones.</p>
        <h2>Room Arrangement</h2>
        <p>Ground floor usually includes a grand living room, dining area, modular kitchen, utility space, guest bedroom, and internal staircase. The first floor consists of a master bedroom with balcony, additional bedrooms, family lounge, and attached bathrooms.</p>
        <p>The terrace level may include a gym, office, or open entertainment space. Modern villas focus on functional zoning separating private and common areas.</p>
        <h2>Benefits of Villa Living</h2>
        <p>Independent villas offer excellent privacy, premium lifestyle, natural ventilation, future expansion possibilities, and higher resale value. Compared to apartments, villas provide complete independence and a peaceful environment.</p>
        <h2>Estimated Construction Cost</h2>
        <p>Luxury villa construction cost depends on materials, location, and finishing quality. On average, construction ranges between ₹2,200 to ₹3,500 per square foot. For a 3000 sq.ft luxury independent villa, the estimated cost may range from ₹66 lakhs to ₹1.05 crore excluding land price.</p>
      </div>

      <div className="checkbox-section">
        <label>
          <input
            type="checkbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          {" "}I have read all the above details and I agree (OK)
        </label>
        <button
          className="approve-btn"
          disabled={!checked}
          onClick={approveHouse}
        >
          Book Now
        </button>
      </div>
    </>
  );
}

export default VillaHouse;