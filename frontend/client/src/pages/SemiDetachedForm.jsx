import React, { useState } from "react";
import { API_BASE_URL } from "../apiConfig";
import { useNavigate } from "react-router-dom";
import SemiDetachedHouseImg from "./images/SemiDetachedHouseImg.jpg";
import SemiDetachedArchitecture from "./images/SemiDetachedArchitecture.png";

function SemiDetachedHouse() {
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
          projectType: "Semi Detached House",
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
        .card { background:white; padding:15px; border-radius:10px; flex:1; min-width: 0; box-shadow:0px 2px 6px rgba(0,0,0,0.1); }
        // .card { background:white; padding:20px; border-radius:10px; flex:1; min-width: 100%; max-width: 300px; box-shadow:0 0 10px rgba(0,0,0,0.1); }
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

      {/* Header */}
      <div className="header">
        <button className="backBtn" onClick={goBack}>← Back</button>
        <h1>Semi-Detached House – Two Houses Sharing One Wall</h1>
      </div>

      {/* Top Images Section */}
      <div className="topSection">
        <div className="card">
          <h3>House Exterior Design</h3>
          <img src={SemiDetachedHouseImg} alt="House" />
        </div>
        <div className="card">
          <h3>Architecture Layout (G + 1)</h3>
          <div className="floorImages">
            <div>
              <h4>1st Floor Plan</h4>
              <img src={SemiDetachedArchitecture} alt="Semi Detached Layout" />
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="contentBox">
        <h2>About Semi-Detached House</h2>
        <p>A semi-detached house is a residential structure consisting of two independent homes connected by a shared central wall. Each unit has its own entrance, living space, and private layout. This type of architecture balances privacy, space efficiency, and cost-effective construction, making it ideal for modern urban housing developments.</p>
        <h2>Ground Floor Planning</h2>
        <p>The ground floor typically includes a spacious living room or great room, a dining area, a modern kitchen with utility space, and a powder room. The staircase is usually positioned near the shared wall, allowing both units to maintain a symmetrical and efficient floor layout.</p>
        <h2>First Floor Planning</h2>
        <p>The first floor contains private living spaces such as the owner's suite, additional bedrooms, and attached bathrooms. The design separates common areas from private areas, improving comfort and functionality for families. Large windows provide natural light and ventilation on both sides of the home.</p>
        <h2>Architecture Benefits</h2>
        <p>Semi-detached homes provide better privacy than apartments while using land more efficiently than fully independent villas. The shared wall reduces construction cost, improves thermal insulation, and allows architects to create balanced symmetrical designs. This house type is ideal for medium-size families who want independent living with optimized space planning.</p>
        <h2>Construction & Space Efficiency</h2>
        <p>These houses are commonly built on 30×40 or 40×60 plots and can accommodate two floors with smart room distribution. The mirrored layout simplifies structural planning and ensures equal space allocation for both units, making the design suitable for duplex-style developments.</p>
        <h2>Estimated Construction Cost</h2>
        <p>The average construction cost of a Semi-Detached House ranges between ₹1,800 – ₹2,600 per sq.ft depending on materials and finishing quality. For a G+1 two-floor house (1800–2200 sq.ft), the total estimated construction cost is around ₹32 Lakhs to ₹48 Lakhs. Luxury interiors, smart features, and premium elevation design may increase the overall budget further.</p>
      </div>

      {/* Approval Section */}
      <div className="approvalBox">
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          {" "}I have read all Semi-Detached House details carefully. I declare that I understand the design and approve this application.
        </label>
        <button className="approveBtn" onClick={handleApprove}>Book Now</button>
      </div>
    </>
  );
}

export default SemiDetachedHouse;