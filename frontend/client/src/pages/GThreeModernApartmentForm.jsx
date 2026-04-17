import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GThreeModernResidentialApartmentImg from "./images/GThreeModernResidentialApartmentImg.png";
import GThreeModernResidentialApartmentArchitecture from "./images/GThreeModernResidentialApartmentArchitecture.png";

function GThreeModernApartmentForm() {
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
          projectType: "Ground Floor + 3 Floors Modern Residential Apartment",
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
        🏢 Ground Floor + 3 Floors Modern Residential Apartment
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={GThreeModernResidentialApartmentImg} alt="Ground Floor + 3 Floors Modern Residential Apartment" />
        </div>
        <div className="card">
          <img src={GThreeModernResidentialApartmentArchitecture} alt="Ground Floor + 3 Floors Modern Residential Apartment Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>🏢 About Ground Floor + 3 Floors Residential Apartment</h2>
        <p>A Ground Floor + 3 Floors Modern Residential Apartment is a contemporary multi-family housing building designed to provide comfortable and organized living spaces for several families within a single structure. The architecture focuses on modern aesthetics, efficient space planning, natural lighting, and proper ventilation. This type of residential building is commonly used in urban areas because it allows multiple apartments to be constructed on a limited land area while maintaining good living standards.</p>
        <h3>🏠 Ground Floor Planning</h3>
        <p>The ground floor of the apartment is mainly designed for parking and building entry facilities. According to the architectural plan, the ground floor includes car parking spaces for multiple vehicles, a main entrance gate, landscaped open spaces, lobby and reception area, staircase, and lift facilities. Additional service areas such as electrical meter rooms, generator rooms, driver rooms, toilets, and water tank facilities are also included. The layout ensures smooth vehicle circulation and convenient access to the upper residential floors.</p>
        <h3>🏠 First Floor Planning</h3>
        <p>The first floor contains multiple residential flats arranged around a central corridor, staircase, and lift system. Each apartment includes a living and dining area, bedroom, kitchen, bathroom, and balcony. The layout is designed so that each unit receives natural light and cross ventilation. Balconies extend the living space and provide outdoor relaxation areas for residents.</p>
        <h3>🏠 Second Floor Planning</h3>
        <p>The second floor has a similar layout to the first floor and contains additional residential units. Each flat is designed with functional spaces such as bedrooms, bathrooms, kitchen areas, living rooms, and balconies. This floor continues the same architectural pattern, ensuring uniformity in design and efficient use of space.</p>
        <h3>🏠 Third Floor Planning</h3>
        <p>The third floor contains residential apartments similar to the lower floors. Each apartment includes comfortable living areas, bedrooms, kitchens, and balconies, providing sufficient space for families. The upper floors provide better views and increased natural lighting, enhancing the overall residential experience.</p>
        <h3>🏛 Architecture Benefits</h3>
        <p>The architecture of this modern apartment building combines contemporary design elements, geometric façade patterns, and balcony projections. The building façade uses a combination of concrete, glass panels, wood-textured cladding, and decorative elements, which enhances the visual appeal of the structure. Large windows and balconies improve airflow and daylight inside the apartments.</p>
        <h3>⚙ Construction & Space Efficiency</h3>
        <p>This apartment building demonstrates efficient land utilization through vertical development. Instead of spreading houses across large plots, multiple apartments are stacked vertically within a single building. The central staircase and lift system minimizes circulation space while ensuring easy accessibility for residents.</p>
        <h3>⭐ Advantages of the Residential Apartment Design</h3>
        <p>This modern residential apartment offers many advantages such as organized living spaces, improved security, shared infrastructure, and efficient land usage. Residents benefit from dedicated parking areas, proper ventilation, and well-planned apartment layouts. The inclusion of landscaped spaces, balconies, and modern architectural features enhances both comfort and property value.</p>
        <h3>🏠 Apartment Arrangement</h3>
        <p>The arrangement of spaces within the building includes: Car parking areas, Main entrance and lobby, Reception and corridor areas, Staircase and lift facilities, Living and dining rooms, Bedrooms, Kitchen areas, Bathrooms and toilets, Balconies and utility areas, Electrical and service rooms.</p>
        <h3>📐 Space Occupied</h3>
        <p>Plot size: 40 m × 30 m = 1200 sq meters. Total floors: Ground + First + Second + Third. Approximate built-up area per floor: 750 – 900 sq meters. Total built-up area: 3000 – 3600 sq meters. Parking capacity: Around 10–12 cars. Number of residential units: 6 apartments.</p>
        <h3>🧱 Construction Method & Materials</h3>
        <p>The building is constructed using a Reinforced Cement Concrete (RCC) frame structure. Common construction materials include: RCC concrete structure, Brick or concrete block walls, Cement plaster and exterior paint, Aluminum or UPVC framed windows, Glass balcony railings, Granite or ceramic tile flooring, Steel stair railings, Waterproof roof layers, Electrical and plumbing systems.</p>
        <h3>💰 Estimated Construction Cost</h3>
        <p>Average cost: ₹2500 – ₹4000 per sq ft. Estimated built-up area: 32,000 – 38,000 sq ft. Estimated total construction cost: 💰 ₹8 Crore – ₹12 Crore (approximately). This cost includes structural construction, finishing works, electrical systems, plumbing, lifts, landscaping, and parking facilities.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Ground Floor + 3 Floors Modern Residential Apartment design is OK for me
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

export default GThreeModernApartmentForm;