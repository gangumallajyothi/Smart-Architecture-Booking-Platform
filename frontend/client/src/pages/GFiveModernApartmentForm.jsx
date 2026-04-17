import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GFiveModernResidentialApartmentImg from "./images/GFiveModernResidentialApartmentImg.png";
import GFiveModernResidentialApartmentArchitecture from "./images/GFiveModernResidentialApartmentArchitecture.png";

function GFiveModernApartmentForm() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const handleApprove = async () => {
    if (!checked) {
      window.alert("Checkbox not selected.");
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
          projectType: "Ground Floor + 5 Floors Modern Residential Apartment",
          status: "Approved",
          date: new Date().toISOString()
        })
      });

      navigate("/thank-you");
    } catch (err) {
      alert("Failed to save booking. Check server.");
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="container">

      <button className="backButton" onClick={goBack}>← Back</button>

      <div className="titleCard">
        🏢 Ground Floor + 5 Floors Modern Residential Apartment
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={GFiveModernResidentialApartmentImg} alt="Ground Floor + 5 Floors Modern Residential Apartment" />
        </div>
        <div className="card">
          <img src={GFiveModernResidentialApartmentArchitecture} alt="Ground Floor + 5 Floors Modern Residential Apartment Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>🏢 About Ground Floor + 5 Floors Modern Residential Apartment</h2>
        <p>This building is a Ground Floor + 5 Floors modern residential apartment designed for comfortable and efficient urban housing. The structure includes stilt parking, multiple residential flats, lift access, and open balconies for ventilation. Its modern façade with glass railings and decorative panels improves the visual appeal and functionality of the building.</p>
        <h3>🏠 Ground Floor Planning</h3>
        <p>The ground floor is mainly used for car parking, lobby, staircase, and lift access for residents. It also includes service areas like security room, toilets, and garden/setback spaces. This level ensures smooth vehicle movement and easy entry to the residential floors.</p>
        <h3>🏠 First Floor Planning</h3>
        <p>The first floor contains well-designed residential flats arranged around a central corridor and lift lobby. Each flat includes living area, bedrooms, kitchen, toilets, and utility space. Proper balcony placement provides good ventilation and natural lighting.</p>
        <h3>🏠 Second Floor Planning</h3>
        <p>The second floor follows a similar layout as the first floor, maintaining symmetry in apartment arrangement. Each flat provides comfortable living spaces with bedrooms, kitchen, bathrooms, and balcony areas. The design ensures privacy and efficient space utilization.</p>
        <h3>🏠 Third Floor Planning</h3>
        <p>The third floor includes residential units connected by staircase and lift through a common lobby. Each apartment contains living area, master bedroom, additional bedroom, kitchen, and toilets. This layout provides comfortable living for families.</p>
        <h3>🏠 Fourth Floor Planning</h3>
        <p>The fourth floor also contains similar residential flats with proper circulation and balcony spaces. Large windows and balconies improve air circulation and natural lighting. This level continues the same structural pattern as other floors.</p>
        <h3>🏠 Fifth Floor Planning</h3>
        <p>The fifth floor is the top residential level with well-ventilated apartments and balcony spaces. It follows the same layout with living room, bedrooms, kitchen, toilets, and utility areas. Being the uppermost floor, it provides better views and fresh air circulation.</p>
        <h3>🏛 Architecture Benefits</h3>
        <p>The building features a modern architectural façade with glass balconies, decorative vertical panels, and stylish exterior lighting. The symmetrical design improves structural balance and aesthetic appearance. Open balconies and windows enhance natural ventilation and daylight.</p>
        <h3>⚙ Construction & Space Efficiency</h3>
        <p>The apartment uses RCC framed construction with reinforced columns, beams, and slabs for strong structural stability. Efficient planning maximizes the usable residential space while maintaining corridors and circulation areas. This improves durability and long-term building performance.</p>
        <h3>⭐ Advantages of the Residential Apartment Design</h3>
        <p>This apartment design provides organized parking, modern living spaces, and convenient vertical circulation through lift and staircase. The layout ensures privacy, safety, and comfortable living for multiple families. The modern architecture also increases property value and aesthetic appeal.</p>
        <h3>🏠 Apartment Arrangement</h3>
        <p>Each residential floor contains two symmetrical flats positioned on both sides of a central corridor and lift lobby. Every flat includes living area, bedrooms, kitchen, toilets, utility area, and balcony. This arrangement allows equal space distribution and easy access to common facilities.</p>
        <h3>📐 Space Occupied</h3>
        <p>The approximate plot size is around 40 ft × 60 ft (about 2400 sq.ft) including setback areas. Each residential floor occupies approximately 1800 – 2000 sq.ft built-up area. The total built-up area for the G+5 building is about 11,000 – 12,000 sq.ft.</p>
        <h3>🧱 Construction Method & Materials</h3>
        <p>The apartment is constructed using a Reinforced Cement Concrete (RCC) frame structure for strength and durability. Brick or concrete block walls, cement plastering, vitrified tile flooring, aluminum windows, and glass balcony railings are used for finishing. Weather-resistant exterior paint and quality materials ensure long-lasting building performance.</p>
        <h3>💰 Estimated Construction Cost</h3>
        <p>The average residential construction cost in India is approximately ₹1800 – ₹2200 per sq.ft. For a 12,000 sq.ft G+5 apartment building, the estimated construction cost is about ₹2.1 Crore – ₹2.6 Crore, depending on material quality and finishing standards.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Ground Floor + 5 Floors Modern Residential Apartment design is OK for me
          </span>
        </div>
        <button className="approveButton" onClick={handleApprove}>Book Now</button>
      </div>

      <style>{`
        .container { font-family: Arial; padding: 30px; background:#f5f7fa; }
        .backButton { background: brown; position: fixed; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; margin-bottom: 20px; position: absolute; left: 45px; top: 60px; }
        .backButton:hover { background: purple; }
        .titleCard { width:100%; background: linear-gradient(135deg, #6a0dad, #8b4513); color:white; height:9vh; padding:25px; border-radius:6px; text-align:center; font-size: 28px; margin-bottom:20px; }
        .imageSection { display:flex; gap:20px; margin-bottom:25px; }
        .card { flex:1; min-width: 100%; max-width: 300px; background:white; padding:15px; border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,0.2); }
        .card img { width:100%; border-radius:8px; }
        .contentCard { background:white; padding:25px; border-radius:10px; margin-bottom:25px; box-shadow:0 3px 10px rgba(0,0,0,0.2); }
        .contentCard h2 { color: purple; }
        .contentCard h3 { color: purple; }
        .declarationCard { background:white; padding:20px; border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,0.2); display:flex; justify-content:space-between; align-items:center; flex-wrap: wrap; gap: 15px; }
        .checkboxSection { display:flex; align-items:center; gap:12px; }
        .bigCheckbox { width:22px; height:22px; cursor:pointer; }
        .checkboxText { font-size:18px; }
        .approveButton { background: purple; color:white; border:none; padding:10px 22px; border-radius:6px; cursor:pointer; }
        .approveButton:hover { background: brown; }
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

export default GFiveModernApartmentForm;