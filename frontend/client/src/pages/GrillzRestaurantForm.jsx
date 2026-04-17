import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GrillzRestaurantImg from "./images/GrillzRestaurantImg.png";
import GrillzRestaurantArchitecture from "./images/GrillzRestaurantArchitecture.png";

export default function GrillzRestaurantForm() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [popup, setPopup] = useState(null);

  const handleBack = () => {
    window.history.back();
  };

  const handleApprove = async () => {
    if (!checked) {
      setPopup({ type: "error", message: "❌ Please check the declaration before approving." });
      setTimeout(() => setPopup(null), 3000);
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
          projectType: "Grillz Restaurant",
          status: "Approved",
          date: new Date().toISOString()
        })
      });

      setPopup({ type: "success", message: "✅ Your application has been successfully approved." });
      setTimeout(() => {
        navigate("/thank-you");
      }, 3000);

    } catch (err) {
      setPopup({ type: "error", message: "❌ Failed to save booking. Check server." });
      setTimeout(() => setPopup(null), 3000);
    }
  };

  return (
    <div className="page">

      <div className="topCard">
        <button className="backBtn" onClick={handleBack}>← Back</button>
        <h1 className="pageTitle">
          Grillz Restaurant – Modern Grill Dining and Barbecue Restaurant
        </h1>
      </div>

      {popup && (
        <div className={`popup ${popup.type}`}>
          {popup.message}
        </div>
      )}

      <div className="topCards">
        <div className="imageCard">
          <h2>Grillz Restaurant</h2>
          <img src={GrillzRestaurantImg} alt="Grillz Restaurant" />
        </div>
        <div className="imageCard">
          <h2>Architecture Plan</h2>
          <img src={GrillzRestaurantArchitecture} alt="Grillz Restaurant Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h3>About Grillz Restaurant</h3>
        <p>Grillz Restaurant is a modern dining space designed mainly for grilled food, barbecue dishes, and casual dining experiences. The restaurant focuses on a comfortable environment where customers can enjoy fresh grilled meals with family and friends. Its architectural design combines modern style, efficient kitchen layout, and spacious dining areas.</p>
        <h3>Ground Floor Planning</h3>
        <p>The ground floor includes the main dining area, service counter, and kitchen space where food preparation takes place. It also contains storage rooms, office space, and restrooms for men and women. The layout is designed so that customers can move easily while staff can serve food efficiently.</p>
        <h3>Architecture Benefits</h3>
        <p>The architecture of Grillz Restaurant provides a modern and attractive appearance that attracts customers. Large glass windows allow natural light to enter the building and improve the interior atmosphere. The open dining layout creates a comfortable and welcoming environment.</p>
        <h3>Construction & Space Efficiency</h3>
        <p>The floor plan is designed to use the available space efficiently by separating kitchen, dining, and service areas. This layout improves workflow for restaurant staff and reduces service delays. Proper space management allows the restaurant to serve more customers comfortably.</p>
        <h3>Advantages</h3>
        <p>Grillz Restaurant offers a relaxing dining experience with spacious seating and high-quality grilled food. The organized layout improves customer service and reduces waiting time. The modern building design also increases the restaurant's visibility and brand appeal.</p>
        <h3>Grillz Restaurant Arrangement</h3>
        <p>The restaurant arrangement includes a large dining area with multiple tables arranged for customer comfort. The kitchen and service counter are placed strategically for quick food delivery. Storage and utility rooms are placed in separate sections to maintain cleanliness and organization.</p>
        <h3>Space Occupied</h3>
        <p>A typical grill restaurant building like this may occupy around 1500 to 4000 square feet depending on seating capacity. This space includes the dining area, kitchen, storage rooms, restrooms, and service areas. Proper planning ensures maximum use of the available building space.</p>
        <h3>Construction Method & Materials</h3>
        <p>Grillz Restaurant buildings are usually constructed using reinforced concrete structures and steel framing for strength and durability. Exterior materials often include glass panels, stone finishes, and wooden panels for a modern look. Interior areas use durable flooring, kitchen equipment, and proper ventilation systems.</p>
        <h3>Estimated Construction Cost</h3>
        <p>The estimated construction cost depends on the size, materials, and interior design of the restaurant. A medium-sized Grillz Restaurant building may cost approximately ₹50 lakh to ₹2 crore including construction, kitchen setup, furniture, and interior decoration. High-end designs with premium materials may increase the total cost.</p>
      </div>

      <div className="approveCard">
        <div className="checkboxRow">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <p>I confirm that the Grillz Restaurant building plan and architectural design provided above are correct and acceptable.</p>
        </div>
        <button
          className={`approveBtn ${checked ? "active" : ""}`}
          onClick={handleApprove}
        >
          Book Now
        </button>
      </div>

      <style>{`
        .topCard { width:100%; background: linear-gradient(90deg,#b71c1c,#ffd700); padding:15px 20px; border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,0.2); margin-bottom:20px; }
        .backBtn { background: darkgreen; color:white; border:none; padding:10px 20px; font-size:16px; border-radius:6px; cursor:pointer; }
        .backBtn:hover { background: darkblue; }
        .pageTitle { color: white; font-size:28px; font-weight:bold; margin:0 auto; margin-top: 1px; margin-left: 200px; }
        .popup { position:fixed; top:20px; left:50%; transform:translateX(-50%); padding:15px 30px; border-radius:8px; color:white; font-weight:bold; z-index:1000; }
        .popup.error { background:red; }
        .popup.success { background:green; }
        .topCards { display:flex; gap:20px; margin-top:30px; }
        .imageCard { flex:1; min-width: 300px; background:white; border-radius:10px; padding:20px; box-shadow:0 4px 10px rgba(0,0,0,0.2); text-align:center; }
        .imageCard img { width:100%; height:70vh; border-radius:8px; }
        .contentCard { background:white; margin-top:30px; padding:30px; border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,0.2); }
        .contentCard h3 { color: red; margin-top:20px; }
        .approveCard { margin-top:30px; background:white; padding:25px; border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,0.2); }
        .checkboxRow { display:flex; gap:10px; align-items:flex-start; }
        .approveBtn { margin-top:1px; margin-left:1000px; background: red; font-weight:bold; color:white; border:none; padding:10px 30px; border-radius:6px; font-size:16px; cursor:pointer; }
        .approveBtn.active { background:darkgreen; }
      `}
        @media (max-width: 600px) {
          .card-container {
            grid-template-columns: 1fr !important;
            padding: 15px !important;
            gap: 20px !important;
          }
          .card {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
        
        </style>

    </div>
  );
}