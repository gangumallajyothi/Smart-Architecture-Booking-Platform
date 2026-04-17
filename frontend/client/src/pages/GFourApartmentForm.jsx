import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GFourResidentialApartmentImg from "./images/GFourResidentialApartmentImg.png";
import GFourResidentialApartmentArchitecture from "./images/GFourResidentialApartmentArchitecture.png";

function GFourApartmentForm() {
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
          projectType: "Ground Floor + 4 Floors Residential Apartment",
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
        🏢 Ground Floor + 4 Floors Residential Apartment
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={GFourResidentialApartmentImg} alt="Ground Floor + 4 Floors Residential Apartment" />
        </div>
        <div className="card">
          <img src={GFourResidentialApartmentArchitecture} alt="Ground Floor + 4 Floors Residential Apartment Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>🏢 About Ground Floor + 4 Floors Residential Apartment</h2>
        <p>This residential apartment building consists of Ground Floor + 4 Upper Floors (G+4) designed for modern urban living. The structure provides multiple residential units with proper ventilation, balconies, and common facilities like lift and parking. The design ensures comfortable living space, safety, and efficient use of land in urban areas.</p>
        <h3>🏠 Ground Floor Planning</h3>
        <p>The ground floor is mainly used for car parking, lobby area, lift, and staircase access for residents. It also includes electrical meter rooms, water tank area, and driver room for building services. Proper setback and landscaping improve ventilation and aesthetic appearance.</p>
        <h3>🏠 First Floor Planning</h3>
        <p>The first floor contains two well-planned residential flats with living/dining area, bedrooms, kitchen, toilets, and balconies. A central corridor connects the flats with lift and staircase access. This floor ensures comfortable circulation and natural lighting.</p>
        <h3>🏠 Second Floor Planning</h3>
        <p>The second floor follows the same layout as the first floor, maintaining symmetry and efficient space usage. Each flat includes living room, bedrooms, kitchen, bathrooms, and balcony spaces. The design provides privacy while maintaining proper airflow.</p>
        <h3>🏠 Third Floor Planning</h3>
        <p>The third floor also contains two residential flats connected through a common lobby and corridor. Each unit is designed with functional spaces like master bedroom, living/dining, kitchen, and balcony areas. This layout ensures convenient movement and comfortable living.</p>
        <h3>🏠 Fourth Floor Planning</h3>
        <p>The fourth floor continues the same structural layout and includes well-ventilated residential flats with balcony views and open surroundings. The upper floor also benefits from better natural lighting and ventilation compared to lower floors.</p>
        <h3>🏛 Architecture Benefits</h3>
        <p>The architectural design focuses on modern aesthetics, balanced structure, and efficient floor distribution. Large windows, balconies, and open spaces enhance natural light and airflow. The building façade provides a clean, modern, and attractive appearance.</p>
        <h3>⚙ Construction & Space Efficiency</h3>
        <p>The structure is typically built using RCC framed construction with brick/block walls and reinforced columns for durability. Efficient floor planning minimizes unused space and allows maximum residential area utilization. This improves both structural strength and functional efficiency.</p>
        <h3>⭐ Advantages of the Residential Apartment Design</h3>
        <p>This apartment design provides organized parking, secure residential units, and easy vertical movement through lift and staircase. The layout supports privacy, safety, and comfortable living for multiple families. Landscaping and open spaces improve the overall residential environment.</p>
        <h3>🏠 Apartment Arrangement</h3>
        <p>Each residential floor contains two flats arranged symmetrically on either side of a central corridor. Every flat includes living room, bedrooms, kitchen, toilets, and balconies. This arrangement ensures equal space distribution and easy access to common facilities.</p>
        <h3>📐 Space Occupied</h3>
        <p>The approximate building size is around 40 ft × 60 ft (2400 sq.ft plot area) including setbacks. Each residential floor occupies about 1800 – 2000 sq.ft built-up area after circulation spaces. Total built-up area for G+4 floors is approximately 9000 – 10000 sq.ft.</p>
        <h3>🧱 Construction Method & Materials</h3>
        <p>The residential apartment is constructed using a Reinforced Cement Concrete (RCC) framed structure, which provides high strength and durability for multi-storey buildings. Brick or concrete block walls are used for partitions, while cement plastering, vitrified tiles, and weather-resistant exterior paint are applied for finishing. High-quality materials like steel reinforcement, cement concrete, glass railings, and aluminum windows ensure safety, stability, and long-term performance.</p>
        <h3>💰 Estimated Construction Cost</h3>
        <p>The estimated construction cost depends on materials and location. In India, the average cost is approximately ₹1800 – ₹2200 per sq.ft for standard residential construction. For a 10,000 sq.ft G+4 apartment, the total estimated construction cost is roughly ₹1.8 Crore – ₹2.2 Crore.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Ground Floor + 4 Floors Residential Apartment design is OK for me
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

export default GFourApartmentForm;