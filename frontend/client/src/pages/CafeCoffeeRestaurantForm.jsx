import React, { useState } from "react";
import { API_BASE_URL } from "../apiConfig";
import { useNavigate } from "react-router-dom";
import CafeCoffeeRestaurantImg from "./images/CafeCoffeeRestaurantImg.png";
import CafeCoffeeRestaurantArchitecture from "./images/CafeCoffeeRestaurantArchitecture.png";

export default function CafeCoffeeRestaurantForm() {
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
          projectType: "Cafe Coffee Restaurant",
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
          Cafe Coffee Restaurant – Modern Coffee and Casual Dining Space
        </h1>
      </div>

      {popup && (
        <div className={`popup ${popup.type}`}>
          {popup.message}
        </div>
      )}

      <div className="topCards">
        <div className="imageCard">
          <h2>Cafe Coffee Restaurant</h2>
          <img src={CafeCoffeeRestaurantImg} alt="Cafe Coffee Restaurant" />
        </div>
        <div className="imageCard">
          <h2>Architecture Plan</h2>
          <img src={CafeCoffeeRestaurantArchitecture} alt="Cafe Coffee Restaurant Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h3>About Cafe Coffee Restaurant</h3>
        <p>A cafe coffee restaurant is a modern dining space that combines coffee culture with casual restaurant services. It provides a relaxing environment where customers can enjoy beverages, snacks, and meals. Such spaces are designed to create comfort, social interaction, and a pleasant dining experience.</p>
        <h3>Ground Floor Planning</h3>
        <p>The ground floor includes the main customer entry, dining area, and service counter. It also contains kitchen spaces, employee rooms, and storage areas. The layout is designed to allow smooth customer movement and efficient service operations.</p>
        <h3>First Floor Planning</h3>
        <p>The first floor usually contains lounge seating areas and additional dining space for customers. It may also include balcony seating and private relaxation zones. This level enhances customer comfort and increases seating capacity.</p>
        <h3>Architecture Benefits</h3>
        <p>Modern cafe architecture focuses on open space, glass walls, and attractive lighting. These elements improve natural light and create a welcoming atmosphere. The design enhances the visual appeal and customer experience.</p>
        <h3>Construction & Space Efficiency</h3>
        <p>Efficient construction planning ensures proper use of available floor space. Kitchen areas, storage rooms, and seating areas are organized carefully. This allows better workflow for employees and comfortable seating for customers.</p>
        <h3>Advantages</h3>
        <p>Cafe coffee restaurants attract customers looking for relaxation, social meetings, and casual dining. They generate consistent revenue through beverages, snacks, and meals. Such spaces also become popular community gathering points.</p>
        <h3>Cafe Coffee Restaurant Arrangement</h3>
        <p>Seating arrangements usually include lounge chairs, tables, and open social areas. Dining spaces are organized to maintain privacy and comfort. Proper arrangement ensures smooth movement of customers and staff.</p>
        <h3>Space Occupied</h3>
        <p>A typical cafe coffee restaurant may occupy around 2000 to 6000 square feet depending on its size. This includes kitchen space, seating area, service counter, and storage rooms. Proper planning ensures maximum usage of the available space.</p>
        <h3>Construction Method & Materials</h3>
        <p>The building is generally constructed using reinforced concrete and steel structures. Glass walls, wooden panels, and decorative lighting are used for interior aesthetics. High quality tiles and furniture improve durability and appearance.</p>
        <h3>Estimated Construction Cost</h3>
        <p>The estimated cost of constructing a cafe coffee restaurant depends on size, materials, and interior design. A medium sized cafe building may cost approximately ₹30 lakh to ₹1.5 crore including interiors, kitchen setup, and furniture.</p>
      </div>

      <div className="approveCard">
        <div className="checkboxRow">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <p>I confirm that the Cafe Coffee Restaurant building plan and architectural design provided above are correct and acceptable.</p>
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