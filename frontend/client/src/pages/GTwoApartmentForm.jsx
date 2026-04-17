import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GTwoResidentialApartmentImg from "./images/GTwoResidentialApartmentImg.png";
import GTwoResidentialApartmentArchitecture from "./images/GTwoResidentialApartmentArchitecture.png";

function GTwoApartmentForm() {
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
          projectType: "Ground Floor + 2 Floors Residential Apartment",
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
        🏢 Ground Floor + 2 Floors Residential Apartment
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={GTwoResidentialApartmentImg} alt="Ground Floor + 2 Floors Residential Apartment" />
        </div>
        <div className="card">
          <img src={GTwoResidentialApartmentArchitecture} alt="Ground Floor + 2 Floors Residential Apartment Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>🏢 About Ground Floor + 2 Floors Residential Apartment</h2>
        <p>A Ground Floor + 2 Floors Residential Apartment is a modern housing building designed to accommodate multiple families in separate living units. The structure includes parking space on the ground floor and residential apartments on the first and second floors. The architecture focuses on comfortable living, efficient use of space, and modern design suitable for urban residential areas.</p>
        <h3>🏠 Ground Floor Planning</h3>
        <p>The ground floor is mainly designed for vehicle parking and building access. It includes multiple car parking spaces, an entrance lobby, staircases, and a lift for easy access to upper floors. This layout ensures smooth vehicle movement and safe entry for residents.</p>
        <h3>🏠 First Floor Planning</h3>
        <p>The first floor contains residential apartments with living and dining areas, bedrooms, kitchens, and toilets. Each apartment also includes balconies that provide ventilation and natural lighting. The central staircase and lift connect all floors efficiently.</p>
        <h3>🏠 Second Floor Planning</h3>
        <p>The second floor has a layout similar to the first floor, providing multiple residential units. Each apartment includes bedrooms, bathrooms, kitchen spaces, and living areas. Balconies enhance air circulation and improve the overall living experience.</p>
        <h3>🏛 Architecture Benefits</h3>
        <p>The architecture of the residential apartment focuses on modern design with symmetrical structure and large windows. This allows natural lighting and ventilation throughout the building. Balconies and open spaces enhance the comfort and aesthetic appearance of the apartments.</p>
        <h3>⚙ Construction & Space Efficiency</h3>
        <p>The building layout efficiently uses space by separating parking areas from residential areas. Apartments are arranged symmetrically on each floor to maximize usable space. Central staircases and lifts improve accessibility while maintaining privacy between units.</p>
        <h3>⭐ Advantages of the Residential Apartment Design</h3>
        <p>This apartment design provides comfortable living spaces with proper ventilation and natural light. Parking facilities on the ground floor ensure convenient vehicle storage. Multiple floors allow accommodation for several families while maintaining organized residential spaces.</p>
        <h3>🏠 Apartment Arrangement</h3>
        <p>The arrangement of spaces includes car parking areas, entrance lobby, staircases, lift, living and dining areas, bedrooms, kitchens, bathrooms, and balconies. This arrangement ensures convenient movement and comfortable living conditions for residents.</p>
        <h3>📐 Space Occupied</h3>
        <p>Approximate building dimensions: Length: about 20–25 meters, Width: about 15–18 meters. Area per floor approximately: 300 – 400 square meters. Total built-up area (3 floors): 900 – 1200 square meters. This space accommodates parking and multiple residential apartments.</p>
        <h3>🧱 Construction Method & Materials</h3>
        <p>The apartment is constructed using Reinforced Cement Concrete (RCC) structural framework. Common materials include: RCC columns, beams, and slabs, Brick or concrete block walls, Cement plaster and exterior paint, Aluminum window frames with glass panels, Granite or tile flooring, Steel railings for balconies and staircases.</p>
        <h3>💰 Estimated Construction Cost</h3>
        <p>Approximate cost in India: Basic construction: ₹2200 – ₹3200 per sq ft. Interior finishing: ₹600 – ₹1000 per sq ft. Estimated Total Cost: 💰 ₹1.5 crore – ₹2.5 crore (approx.) This includes structure, interior finishing, parking area, and residential facilities.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Ground Floor + 2 Floors Residential Apartment design is OK for me
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
        .contentCard h2 { color: darkgreen; }
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

export default GTwoApartmentForm;