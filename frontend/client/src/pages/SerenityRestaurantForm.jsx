import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SerenityRestaurantImg from "./images/SerenityRestaurantImg.png";
import SerenityRestaurantArchitecture from "./images/SerenityRestaurantArchitecture.png";

export default function SerenityRestaurantForm() {
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
          projectType: "Serenity Restaurant",
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
          🌿 Serenity Restaurant – Modern Premium Dining and Relaxing Gourmet Space
        </h1>
      </div>

      {popup && (
        <div className={`popup ${popup.type}`}>
          {popup.message}
        </div>
      )}

      <div className="topCards">
        <div className="imageCard">
          <h2>Serenity Restaurant</h2>
          <img src={SerenityRestaurantImg} alt="Serenity Restaurant" />
        </div>
        <div className="imageCard">
          <h2>Architecture Plan</h2>
          <img src={SerenityRestaurantArchitecture} alt="Serenity Restaurant Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h3>🏢 About Serenity Restaurant</h3>
        <p>Serenity Restaurant is a modern two-floor fine dining restaurant designed with elegant glass architecture and luxury interiors. The building focuses on providing a peaceful and premium dining atmosphere for families, couples, and social gatherings. Large glass walls, warm lighting, and open dining spaces create a comfortable and visually attractive restaurant environment.</p>
        <h3>🏗 Ground Floor Planning</h3>
        <p>The ground floor mainly focuses on customer entry and the primary dining area. It includes a large indoor dining hall, a fully equipped kitchen, and outdoor dining spaces for guests who prefer open seating. The entrance area is designed for smooth customer movement, while the kitchen is positioned strategically for quick service to dining tables.</p>
        <h3>🏢 First Floor Planning</h3>
        <p>The first floor contains additional seating areas such as upper dining sections and terrace lounge spaces. This floor allows the restaurant to accommodate more customers and host small events or private dining experiences. It also includes restrooms, storage areas, and stair access connecting both floors.</p>
        <h3>🏛 Architecture Benefits</h3>
        <p>The architectural design of Serenity Restaurant uses modern glass façades, open spaces, and warm lighting to create a luxurious dining environment. Large windows allow natural light during the day and enhance the visual appeal at night. The two-floor design increases capacity and improves the restaurant's overall functionality.</p>
        <h3>⚙ Construction & Space Efficiency</h3>
        <p>The building layout ensures efficient use of space with clearly separated areas for dining, kitchen operations, and customer services. The kitchen is placed near the dining area to reduce food delivery time. Storage rooms and service pathways are also included to maintain smooth restaurant operations.</p>
        <h3>⭐ Advantages of Serenity Restaurant</h3>
        <p>Serenity Restaurant provides a premium dining experience with comfortable seating and elegant interiors. The two-floor design increases seating capacity and allows better customer flow. Outdoor and terrace dining options also enhance the overall guest experience and attract more visitors.</p>
        <h3>🍽 Serenity Restaurant Arrangement</h3>
        <p>The arrangement includes dining tables, lounge seating, kitchen workspace, storage rooms, and service counters. Tables are spaced properly to ensure customer comfort and easy movement for staff. The terrace lounge on the first floor provides a relaxing environment for social dining and small gatherings.</p>
        <h3>📐 Space Occupied</h3>
        <p>Based on the architectural layout, the restaurant occupies approximately 3500 – 6000 square feet depending on the final construction scale. Ground Floor: Dining hall, kitchen, outdoor dining. First Floor: Terrace lounge, additional dining area, restrooms and storage.</p>
        <h3>🧱 Construction Method & Materials</h3>
        <p>The restaurant is typically constructed using reinforced concrete structure with steel support beams for durability. Exterior materials include glass panels, marble or stone cladding, and aluminum frames. Interior finishing uses premium flooring tiles, wooden panels, decorative lighting, and modern furniture.</p>
        <h3>💰 Estimated Construction Cost</h3>
        <p>Basic construction: ₹40 lakh – ₹70 lakh. Interior design and furniture: ₹30 lakh – ₹60 lakh. Kitchen equipment and setup: ₹20 lakh – ₹40 lakh. ✅ Total Estimated Cost: 💰 ₹90 lakh – ₹1.7 crore (approx.)</p>
      </div>

      <div className="approveCard">
        <div className="checkboxRow">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <p>I confirm that the Serenity Restaurant building plan and architectural design provided above are correct and acceptable.</p>
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