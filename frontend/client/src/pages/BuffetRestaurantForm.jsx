import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BuffetRestaurantImg from "./images/BuffetRestaurantImg.png";
import BuffetRestaurantArchitecture from "./images/BuffetRestaurantArchitecture.png";

export default function BuffetRestaurantForm() {
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
          projectType: "Buffet Restaurant",
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
        <div>
          <h1 className="pageTitle">
            🥗 Buffet Restaurant – Premium All-You-Can-Eat Dining Experience
          </h1>
        </div>
      </div>

      {popup && (
        <div className={`popup ${popup.type}`}>
          {popup.message}
        </div>
      )}

      <div className="topCards">
        <div className="imageCard">
          <h2>Buffet Restaurant</h2>
          <img src={BuffetRestaurantImg} alt="Buffet Restaurant" />
        </div>
        <div className="imageCard">
          <h2>Architecture Plan</h2>
          <img src={BuffetRestaurantArchitecture} alt="Buffet Restaurant Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h3>About Buffet Restaurant</h3>
        <p>A Buffet Restaurant is a dining establishment where customers serve themselves from a variety of dishes displayed on buffet counters. It is designed to accommodate many guests at the same time while offering multiple cuisine options. The architecture usually includes large dining halls, spacious kitchens, buffet serving counters, and organized service areas.</p>
        <h3>Ground Floor Planning</h3>
        <p>The ground floor mainly includes a large dining area where customers can sit comfortably and access buffet counters. It also contains important facilities such as the kitchen, storage rooms, washing area, and office space for management. The design ensures smooth movement for customers and staff during busy dining hours.</p>
        <h3>First Floor Planning</h3>
        <p>The first floor generally includes additional seating areas, lounge spaces, or event rooms for private gatherings. This floor helps increase the restaurant's capacity and can host celebrations, corporate meetings, or family functions. The layout also includes service spaces and access through staircases or elevators.</p>
        <h3>Architecture Benefits</h3>
        <p>The architecture of the buffet restaurant is designed to be visually attractive and functional. Large glass windows allow natural light and improve the interior atmosphere. The curved modern design and decorative lighting create a unique appearance that attracts customers.</p>
        <h3>Construction & Space Efficiency</h3>
        <p>The building layout separates kitchen, dining, and service areas to improve efficiency. This organization allows staff to prepare and serve food quickly without disturbing customers. Efficient space planning ensures the restaurant can handle a large number of guests comfortably.</p>
        <h3>Advantages</h3>
        <p>Buffet restaurants offer customers a wide variety of food choices in a single dining experience. Guests can choose their preferred dishes and enjoy flexible dining without waiting for table service. Large seating capacity also makes buffet restaurants ideal for parties, events, and group dining.</p>
        <h3>Buffet Restaurant Arrangement</h3>
        <p>The arrangement includes buffet serving counters, dining tables, lounge areas, and staff service pathways. The kitchen and storage areas are positioned near the buffet counters for efficient food preparation. Dining tables are arranged in rows to provide comfortable seating and easy access to food counters.</p>
        <h3>Space Occupied</h3>
        <p>A buffet restaurant typically occupies approximately 5000 to 12,000 square feet depending on the seating capacity and facility size. This area includes dining halls, buffet serving counters, kitchens, storage rooms, restrooms, and service spaces. Proper planning ensures maximum utilization of available building space.</p>
        <h3>Construction Method & Materials</h3>
        <p>Buffet restaurant buildings are generally constructed using reinforced concrete structures with steel frameworks for strength and durability. Exterior finishes may include brick cladding, glass panels, metal frames, and decorative lighting elements. Interior spaces use ceramic flooring, stainless steel kitchen equipment, wooden furniture, and ventilation systems.</p>
        <h3>Estimated Construction Cost</h3>
        <p>The estimated construction cost of a buffet restaurant depends on the building size, materials used, and interior design quality. A medium-sized buffet restaurant building may cost approximately ₹2 crore to ₹8 crore including building construction, buffet counters, kitchen equipment, furniture, and interior decoration. Premium restaurants with luxury interiors may cost even higher.</p>
      </div>

      <div className="approveCard">
        <div className="checkboxRow">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <p>I confirm that the Buffet Restaurant building plan and architectural design provided above are correct and acceptable.</p>
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
        .pageTitle { color: darkblue; font-size:28px; font-weight:bold; margin:0 auto; margin-top: 1px; margin-left: 200px; }
        .popup { position:fixed; top:20px; left:50%; transform:translateX(-50%); padding:15px 30px; border-radius:8px; color:white; font-weight:bold; z-index:1000; }
        .popup.error { background:red; }
        .popup.success { background:green; }
        .topCards { display:flex; gap:20px; margin-top:30px; }
        .imageCard { flex:1; background:white; border-radius:10px; padding:20px; box-shadow:0 4px 10px rgba(0,0,0,0.2); text-align:center; }
        .imageCard img { width:100%; height:80vh; border-radius:8px; }
        .contentCard { background:white; margin-top:30px; padding:30px; border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,0.2); }
        .contentCard h3 { color: red; margin-top:20px; }
        .approveCard { margin-top:30px; background:white; padding:25px; border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,0.2); }
        .checkboxRow { display:flex; gap:10px; align-items:flex-start; }
        .approveBtn { margin-top:1px; margin-left:1000px; background: red; font-weight:bold; color:white; border:none; padding:10px 30px; border-radius:6px; font-size:16px; cursor:pointer; }
        .approveBtn.active { background:darkgreen; }
      `}</style>

    </div>
  );
}