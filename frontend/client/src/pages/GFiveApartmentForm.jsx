import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GFiveResidentialApartmentImg from "./images/GFiveResidentialApartmentImg.png";
import GFiveResidentialApartmentArchitecture from "./images/GFiveResidentialApartmentArchitecture.png";

function GFiveApartmentForm() {
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
          projectType: "Ground Floor + 5 Floors Residential Apartment",
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
        🏢 Ground Floor + 5 Floors Residential Apartment
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={GFiveResidentialApartmentImg} alt="Ground Floor + 5 Floors Residential Apartment" />
        </div>
        <div className="card">
          <img src={GFiveResidentialApartmentArchitecture} alt="Ground Floor + 5 Floors Residential Apartment Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>🏢 About Ground Floor + 5 Floors Residential Apartment</h2>
        <p>This building is a Ground Floor + 5 Floors (G+5) residential apartment designed for comfortable urban living. The structure provides multiple residential units with parking, lift access, and common facilities. The design ensures good ventilation, natural lighting, and efficient land utilization for modern families.</p>
        <h3>🏠 Ground Floor Planning</h3>
        <p>The ground floor is mainly allocated for car parking, reception area, lobby, staircase, and lift access. Service spaces like electrical room, generator room, and entrance ramp are also included. Landscaping and setback areas improve the building appearance and ventilation.</p>
        <h3>🏠 First Floor Planning</h3>
        <p>The first floor includes two well-designed residential flats connected through a central corridor and lift lobby. Each flat contains living/dining room, bedrooms, kitchen, toilets, utility, and balcony spaces. The layout ensures comfortable circulation and privacy.</p>
        <h3>🏠 Second Floor Planning</h3>
        <p>The second floor follows the same floor layout as the first floor, maintaining symmetry in apartment arrangement. Each unit provides spacious living areas, bedrooms, kitchen, and balcony space. This design supports proper airflow and natural light.</p>
        <h3>🏠 Third Floor Planning</h3>
        <p>The third floor contains similar residential flats connected through common corridor and staircase access. The apartments are designed with functional spaces such as master bedroom, living room, kitchen, and toilets. This layout ensures convenient movement and comfortable living.</p>
        <h3>🏠 Fourth Floor Planning</h3>
        <p>The fourth floor continues the same apartment structure with two residential flats and shared circulation areas. Each flat includes living/dining area, bedrooms, kitchen, bathrooms, and balcony. Upper floors receive better lighting and fresh air circulation.</p>
        <h3>🏠 Fifth Floor Planning</h3>
        <p>The fifth floor follows the same layout as the lower residential floors, containing well-planned flats connected through a central corridor, lift, and staircase. Each flat includes living/dining area, bedrooms, kitchen, toilets, utility space, and balcony for comfortable living. Being the top residential floor, it provides better natural lighting, ventilation, and open views.</p>
        <h3>🏛 Architecture Benefits</h3>
        <p>The architecture provides modern façade design with balconies, glass railings, and large windows for natural light. The symmetrical floor layout improves structural balance and aesthetic appeal. Open spaces and landscaping enhance the overall residential environment.</p>
        <h3>⚙ Construction & Space Efficiency</h3>
        <p>The building uses RCC framed construction with reinforced columns, beams, and slabs for strong structural support. Efficient floor planning maximizes the usable residential area while maintaining circulation spaces. This improves durability and long-term building performance.</p>
        <h3>⭐ Advantages of the Residential Apartment Design</h3>
        <p>This apartment design offers organized parking, secure residential units, lift access, and well-planned living spaces. The layout supports privacy, comfort, and safety for multiple families. Modern architecture and ventilation make it suitable for urban housing.</p>
        <h3>🏠 Apartment Arrangement</h3>
        <p>Each residential floor consists of two flats positioned on either side of a central corridor with lift and staircase access. Every flat contains living/dining room, bedrooms, kitchen, utility, toilets, and balcony spaces. This arrangement provides equal space distribution and easy accessibility.</p>
        <h3>📐 Space Occupied</h3>
        <p>The approximate plot size for this apartment is around 40 ft × 60 ft (2400 sq.ft) including setbacks. Each residential floor occupies nearly 1800 – 2000 sq.ft built-up area. The total built-up area for the G+5 building is about 11,000 – 12,000 sq.ft.</p>
        <h3>🧱 Construction Method & Materials</h3>
        <p>The apartment is constructed using a Reinforced Cement Concrete (RCC) frame structure for strength and stability in multi-storey buildings. Brick or concrete block walls, cement plastering, vitrified flooring tiles, and weather-resistant exterior paints are used for finishing. Materials such as steel reinforcement, glass railings, and aluminum windows improve durability and modern appearance.</p>
        <h3>💰 Estimated Construction Cost</h3>
        <p>The average construction cost in India is approximately ₹1800 – ₹2200 per sq.ft for residential apartments. For a 12,000 sq.ft G+5 building, the estimated total construction cost is around ₹2.1 Crore – ₹2.6 Crore depending on materials and finishing quality.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Ground Floor + 5 Floors Residential Apartment design is OK for me
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
        .card { flex:1; min-width: 300px; background:white; padding:15px; border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,0.2); }
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
      `}</style>

    </div>
  );
}

export default GFiveApartmentForm;