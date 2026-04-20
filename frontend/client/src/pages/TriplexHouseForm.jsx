import React, { useState } from "react";
import { API_BASE_URL } from "../apiConfig";
import { useNavigate } from "react-router-dom";
import TriplexHouseImg from "./images/TriplexHouseImg.avif";
import TriplexArchitecture from "./images/TriplexArchitecture.png";

function TriplexHouse() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const goBack = () => {
    window.history.back();
  };

  const handleApprove = async () => {
    if (!isChecked) {
      alert("Please declare before approval");
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
          projectType: "Triplex House",
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
        body { margin:0; font-family:Arial, sans-serif; background:#eef1f5; }
        .header { background:#3e556b; color:white; padding:15px; text-align:center; position:relative; }
        .backBtn { position:absolute; left:20px; top:12px; padding:6px 14px; background:#2c3e50; color:white; border:none; border-radius:5px; cursor:pointer; }
        .topSection { display:flex; gap:20px; padding:20px; }
        .card { background:white; padding:20px; border-radius:10px; flex:1; min-width: 0; box-shadow:0 0 10px rgba(0,0,0,0.1); }
        .card img { width:100%; border-radius:8px; }
        .floorImages { display:flex; gap:20px; margin-top:10px; }
        .floorImages img { width:100%; border-radius:6px; }
        .contentBox { background:white; margin:20px; padding:30px; border-radius:10px; box-shadow:0 0 10px rgba(0,0,0,0.1); }
        .contentBox h2 { margin-top:20px; }
        .approvalBox { background:white; margin:20px; padding:20px; border-radius:10px; display:flex; justify-content:space-between; align-items:center; flex-wrap: wrap; gap: 15px; box-shadow:0 0 10px rgba(0,0,0,0.1); }
        .approveBtn { background:green; color:white; border:none; padding:12px 25px; font-size:16px; border-radius:6px; cursor:pointer; }
        .approveBtn:hover { background:#006400; }
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
        <button className="backBtn" onClick={goBack}>← Back</button>
        <h1>Triplex House – Three-level residential house</h1>
      </div>

      <div className="topSection">
        <div className="card">
          <h3>House Exterior Design</h3>
          <img src={TriplexHouseImg} alt="Triplex House" />
        </div>
        <div className="card">
          <h3>Architecture Layout (G + 1)</h3>
          <div className="floorImages">
            <div>
              <h4>1st Floor Plan</h4>
              <img src={TriplexArchitecture} alt="Triplex Layout" />
            </div>
          </div>
        </div>
      </div>

      <div className="contentBox">
        <h2>About Triplex House</h2>
        <p>A triplex house is a modern three-level residential structure designed to accommodate multiple living units within a single building. Each level is carefully planned to balance privacy, comfort, and functionality. Triplex homes are ideal for extended families, rental investment, or homeowners seeking flexible living spaces. The architectural design focuses on symmetry, efficient circulation, and optimized natural ventilation.</p>
        <h2>Space Planning & Land Usage</h2>
        <p>Triplex houses are commonly constructed on plots ranging from 40 × 60 feet to larger dimensions depending on zoning regulations. Each unit may cover approximately 1200–1500 sq.ft of built-up area. The full building may occupy 3500–4500 sq.ft including parking areas, patios, and staircases. Proper setbacks ensure natural lighting, airflow, and accessibility.</p>
        <h2>Ground Floor Arrangement</h2>
        <p>The ground level generally includes a covered porch, entrance foyer, living room, dining area, modular kitchen with pantry, powder room, internal staircase, and garage space. This level is designed for social interaction and daily family activities. Open-plan concepts allow smooth movement between kitchen and living areas.</p>
        <h2>Upper Floor Layout</h2>
        <p>The first and second floors contain private spaces such as master bedrooms, secondary bedrooms, attached bathrooms, balconies, and family lounges. Bedrooms are positioned to maximize privacy while maintaining structural efficiency. Laundry areas and storage spaces are included for practical daily usage.</p>
        <h2>Architectural Benefits</h2>
        <p>Triplex homes offer excellent land utilization, independent living zones, and higher resale value. Shared structural walls reduce construction cost while maintaining durability. The vertical design allows future expansion options such as terrace gardens, solar panels, or additional recreational areas.</p>
        <h2>Estimated Construction Cost</h2>
        <p>Construction costs vary based on location, material quality, and interior finishes. In India, average construction cost ranges between ₹1,900 to ₹2,600 per sq.ft. For a 4000 sq.ft triplex house, the total construction cost may range between ₹75 lakhs and ₹1.2 crore excluding land price. Premium elevation designs, smart home features, and luxury interiors may increase the budget.</p>
        <h2>Why Choose a Triplex Design?</h2>
        <p>Triplex houses provide a perfect balance between independent houses and apartment living. They allow multiple families to live under one structure while maintaining personal privacy. This design is highly suitable for rental income, joint families, and long-term property investment.</p>
      </div>

      <div className="approvalBox">
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          {" "}I have read all Triplex House details carefully. I declare that I understand the design and approve this application.
        </label>
        <button className="approveBtn" onClick={handleApprove}>Book Now</button>
      </div>
    </>
  );
}

export default TriplexHouse;