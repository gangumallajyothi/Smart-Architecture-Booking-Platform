import React, { useState } from "react";
import { API_BASE_URL } from "../apiConfig";
import { useNavigate } from "react-router-dom";
import EmberFlameRestaurantImg from "./images/EmberFlameRestaurantImg.png";
import EmberFlameRestaurantArchitecture from "./images/EmberFlameRestaurantArchitecture.png";

export default function EmberFlameRestaurantForm() {
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

      await fetch(`${API_BASE_URL}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: userName,
          userEmail: userEmail,
          projectType: "Ember Flame Restaurant",
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
          🔥 Ember & Flame Restaurant – Luxury Grill Restaurant with Rooftop Dining
        </h1>
      </div>

      {popup && (
        <div className={`popup ${popup.type}`}>
          {popup.message}
        </div>
      )}

      <div className="topCards">
        <div className="imageCard">
          <h2>Ember Flame Restaurant</h2>
          <img src={EmberFlameRestaurantImg} alt="Ember Flame Restaurant" />
        </div>
        <div className="imageCard">
          <h2>Architecture Plan</h2>
          <img src={EmberFlameRestaurantArchitecture} alt="Ember Flame Restaurant Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h3>About Ember Flame Restaurant</h3>
        <p>Ember Flame Restaurant is a modern grill and fine dining restaurant designed for premium dining experiences. The restaurant focuses on grilled cuisine, stylish interiors, and comfortable seating areas for customers. Its architecture combines modern wood, glass, and open terrace dining to create a luxurious atmosphere.</p>
        <h3>Ground Floor Planning</h3>
        <p>The ground floor includes the main dining area, seating sections, and a central bar counter for serving drinks and food. It is designed to allow smooth movement of customers and staff within the restaurant. The layout also ensures efficient service and comfortable seating arrangements.</p>
        <h3>First Floor Planning</h3>
        <p>The first floor mainly contains the terrace dining area and bar space, allowing customers to enjoy outdoor dining with a scenic view. This level provides a relaxed atmosphere for social gatherings and evening dining. The terrace layout increases seating capacity and enhances the restaurant's overall experience.</p>
        <h3>Architecture Benefits</h3>
        <p>The architectural design gives the restaurant a modern and premium appearance that attracts customers. Large glass panels and open terrace spaces improve ventilation and natural lighting. The wooden exterior design adds elegance and warmth to the building.</p>
        <h3>Construction & Space Efficiency</h3>
        <p>The building layout efficiently separates dining, bar, and service areas to improve restaurant operations. This arrangement allows staff to manage orders, serving, and cleaning efficiently. Proper planning ensures maximum usage of available space without overcrowding.</p>
        <h3>Advantages</h3>
        <p>Ember Flame Restaurant offers a comfortable dining experience with both indoor and terrace seating options. The bar area and open terrace attract customers for social events and evening gatherings. The modern architectural design also increases brand visibility and customer attraction.</p>
        <h3>Ember Flame Restaurant Arrangement</h3>
        <p>The restaurant arrangement includes indoor seating, bar counters, terrace dining areas, and service pathways for staff. Tables are arranged to maintain privacy and comfortable movement. Storage and service areas are placed strategically to support restaurant operations.</p>
        <h3>Space Occupied</h3>
        <p>A restaurant building like Ember Flame may occupy approximately 2500 to 6000 square feet depending on seating capacity and terrace area. The space includes dining areas, bar sections, terrace seating, service areas, and restrooms. Proper planning ensures efficient use of the total building space.</p>
        <h3>Construction Method & Materials</h3>
        <p>The construction generally uses reinforced concrete structure with steel framing for strength and durability. Exterior design often includes wooden panels, glass walls, metal railings, and decorative lighting. Interior spaces use durable flooring, premium furniture, and modern kitchen equipment.</p>
        <h3>Estimated Construction Cost</h3>
        <p>The construction cost depends on size, materials, and interior design quality. A medium-sized Ember Flame Restaurant may cost approximately ₹80 lakh to ₹3 crore including building construction, terrace setup, kitchen equipment, furniture, and interior decoration. Premium rooftop designs and luxury interiors may increase the cost further.</p>
      </div>

      <div className="approveCard">
        <div className="checkboxRow">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <p>I confirm that the Ember Flame Restaurant building plan and architectural design provided above are correct and acceptable.</p>
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

    </div>
  );
}