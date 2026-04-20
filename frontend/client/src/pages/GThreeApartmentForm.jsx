import React, { useState } from "react";
import { API_BASE_URL } from "../apiConfig";
import { useNavigate } from "react-router-dom";
import GThreeResidentialApartmentImg from "./images/GThreeResidentialApartmentImg.png";
import GThreeResidentialApartmentArchitecture from "./images/GThreeResidentialApartmentArchitecture.png";

function GThreeApartmentForm() {
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

      await fetch(`${API_BASE_URL}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: userName,
          userEmail: userEmail,
          projectType: "Ground Floor + 3 Floors Residential Apartment",
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
        🏢 Ground Floor + 3 Floors Residential Apartment
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={GThreeResidentialApartmentImg} alt="Ground Floor + 3 Floors Residential Apartment" />
        </div>
        <div className="card">
          <img src={GThreeResidentialApartmentArchitecture} alt="Ground Floor + 3 Floors Residential Apartment Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>🏢 About Ground Floor + 3 Floors Residential Apartment</h2>
        <p>A Ground Floor + 3 Floors Residential Apartment is a modern multi-family housing building designed to accommodate several families in separate living units. The building consists of one ground floor and three residential floors, providing comfortable apartments with good ventilation, natural lighting, and efficient space utilization. This type of apartment is suitable for urban residential areas where multiple families can live in one organized building.</p>
        <h3>🏠 Ground Floor Planning</h3>
        <p>The ground floor is mainly designed for car parking and building access. It includes multiple parking spaces, entrance lobby, staircase, lift, and service areas. The ground floor may also include small residential units or utility rooms depending on the layout. This design ensures safe parking and easy access to upper floors for residents.</p>
        <h3>🏠 First Floor Planning</h3>
        <p>The first floor consists of residential apartments arranged around the central staircase and lift. Each apartment contains living and dining areas, bedrooms, kitchen, toilets, and balconies. The design allows natural light and proper ventilation.</p>
        <h3>🏠 Second Floor Planning</h3>
        <p>The second floor follows a layout similar to the first floor. Apartments are organized symmetrically on both sides of the corridor with bedrooms, living rooms, kitchens, bathrooms, and balconies. This arrangement ensures privacy and comfortable living spaces.</p>
        <h3>🏠 Third Floor Planning</h3>
        <p>The third floor contains additional residential units with the same functional layout. Balconies and windows provide good airflow, natural lighting, and outdoor views, improving the overall living environment.</p>
        <h3>🏛 Architecture Benefits</h3>
        <p>The architecture of this apartment building focuses on modern design, symmetry, and functional space planning. Large windows and balconies allow natural light and ventilation throughout the building. The vertical glass element in the center enhances the building's aesthetic appearance and improves lighting in staircases.</p>
        <h3>⚙ Construction & Space Efficiency</h3>
        <p>The building design efficiently utilizes the available land by creating multiple residential units in a vertical structure. Central staircases and lifts provide convenient access while maintaining efficient circulation space. The layout ensures maximum usable living space with minimal wasted area.</p>
        <h3>⭐ Advantages of the Residential Apartment Design</h3>
        <p>This residential apartment design offers comfortable living spaces for multiple families. Parking facilities on the ground floor ensure safe vehicle storage while upper floors provide private residential units. The organized layout improves convenience, safety, and community living.</p>
        <h3>🏠 Apartment Arrangement</h3>
        <p>The arrangement of spaces includes: Car parking areas, Entrance lobby, Staircase and lift, Living and dining rooms, Bedrooms, Kitchen, Bathrooms, Balconies. This arrangement ensures efficient circulation and comfortable living for residents.</p>
        <h3>📐 Space Occupied</h3>
        <p>Approximate building dimensions: Length: about 22 – 26 meters, Width: about 16 – 20 meters. Approximate floor area: Per floor: 350 – 450 sq meters, Total built-up area: 1400 – 1800 sq meters. This allows multiple residential apartments within the building.</p>
        <h3>🧱 Construction Method & Materials</h3>
        <p>The apartment is constructed using Reinforced Cement Concrete (RCC) frame structure, which provides high strength and durability. Common construction materials include: RCC columns, beams, and slabs, Brick or concrete block walls, Cement plaster and exterior paint, Aluminum or UPVC windows with glass, Granite, marble, or tile flooring, Steel railings for balconies and staircases.</p>
        <h3>💰 Estimated Construction Cost</h3>
        <p>Average construction cost in India: ₹2200 – ₹3500 per sq ft. Estimated total cost for this apartment: 💰 ₹2.5 Crore – ₹4 Crore (approx.) This includes structural construction, finishing works, electrical systems, plumbing, and parking area development.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Ground Floor + 3 Floors Residential Apartment design is OK for me
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
        // .card { flex:1; min-width: 100%; max-width: 300px; background:white; padding:15px; border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,0.2); }
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

export default GThreeApartmentForm;