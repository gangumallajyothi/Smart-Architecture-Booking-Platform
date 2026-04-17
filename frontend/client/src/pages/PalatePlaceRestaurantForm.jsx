import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PalatePlaceRestaurantImg from "./images/PalatePlaceRestaurantImg.png";
import PalatePlaceRestaurantArchitecture from "./images/PalatePlaceRestaurantArchitecture.png";

export default function PalatePlaceRestaurantForm() {
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
          projectType: "Palate Place Restaurant",
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
          🍽️ Palate Place Restaurant – Modern Fine Dining Restaurant
        </h1>
      </div>

      {popup && (
        <div className={`popup ${popup.type}`}>
          {popup.message}
        </div>
      )}

      <div className="topCards">
        <div className="imageCard">
          <h2>Palate Place Restaurant</h2>
          <img src={PalatePlaceRestaurantImg} alt="Palate Place Restaurant" />
        </div>
        <div className="imageCard">
          <h2>Architecture Plan</h2>
          <img src={PalatePlaceRestaurantArchitecture} alt="Palate Place Restaurant Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h3>About Palate Place Restaurant</h3>
        <p>Palate Place Restaurant is a modern casual dining restaurant designed to provide a comfortable and welcoming dining experience. The restaurant offers a variety of cuisines and focuses on creating a relaxed environment for families and social gatherings. Its architecture combines elegant stone finishes, large glass windows, and stylish red canopies that enhance the overall appearance of the building.</p>
        <h3>Ground Floor Planning</h3>
        <p>The ground floor plan includes the main seating area where customers can dine comfortably. It also contains important sections such as the kitchen, storage area, restrooms, waiting area, office room, and entry space. The layout is designed to allow smooth movement for both customers and restaurant staff.</p>
        <h3>Architecture Benefits</h3>
        <p>The architectural design of Palate Place Restaurant makes the building visually attractive and easily noticeable. Large glass windows provide natural lighting and create a bright interior environment. The combination of stone walls, decorative lights, and red awnings gives the restaurant a premium and welcoming look.</p>
        <h3>Construction & Space Efficiency</h3>
        <p>The building layout is designed to maximize the use of available space while maintaining comfort. Dining areas, kitchen, and service sections are separated properly to improve efficiency. This planning helps restaurant staff serve customers quickly and manage operations effectively.</p>
        <h3>Advantages</h3>
        <p>Palate Place Restaurant provides a comfortable dining environment suitable for families, friends, and small gatherings. The organized seating arrangement ensures better customer comfort and smooth service flow. Its modern architectural design also attracts more visitors and increases business potential.</p>
        <h3>Palate Place Restaurant Arrangement</h3>
        <p>The restaurant arrangement includes a spacious seating area with dining tables arranged in an organized layout. The kitchen and storage rooms are placed near the service area for efficient food preparation and delivery. Additional spaces such as waiting areas and office rooms help manage restaurant operations smoothly.</p>
        <h3>Space Occupied</h3>
        <p>A restaurant building like Palate Place usually occupies around 2000 to 4500 square feet depending on seating capacity and facility size. This space includes dining areas, kitchen, storage rooms, restrooms, waiting areas, and office space. Proper space planning ensures maximum usage of the available building area.</p>
        <h3>Construction Method & Materials</h3>
        <p>Palate Place Restaurant is typically constructed using reinforced concrete structures with steel support frames for durability. Exterior materials include stone cladding, glass panels, metal frames, and decorative lighting. Interior materials generally include ceramic flooring, wooden furniture, and modern kitchen equipment.</p>
        <h3>Estimated Construction Cost</h3>
        <p>The estimated cost of constructing a restaurant like Palate Place depends on the building size, materials, and interior design quality. A medium-sized restaurant may cost approximately ₹50 lakh to ₹2 crore including building construction, kitchen equipment, furniture, and interior decoration. High-end designs and luxury interiors can increase the total construction cost.</p>
      </div>

      <div className="approveCard">
        <div className="checkboxRow">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <p>I confirm that the Palate Place Restaurant building plan and architectural design provided above are correct and acceptable.</p>
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