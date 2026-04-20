import React, { useState } from "react";
import { API_BASE_URL } from "../apiConfig";
import { useNavigate } from "react-router-dom";
import LifestyleShoppingMallImg from "./images/LifestyleShoppingMallImg.png";
import LifestyleShoppingMallArchitecture from "./images/LifestyleShoppingMallArchitecture.png";

function LifestyleShoppingMallForm() {
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
          projectType: "Lifestyle Shopping Mall",
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
        Lifestyle Shopping Mall – Modern Shopping, Dining & Entertainment Hub 🏬🍽️🎬
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={LifestyleShoppingMallImg} alt="Lifestyle Shopping Mall" />
        </div>
        <div className="card">
          <img src={LifestyleShoppingMallArchitecture} alt="Lifestyle Shopping Mall Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>Lifestyle Shopping Mall</h2>
        <p>A Lifestyle Shopping Mall is a modern retail complex designed to provide shopping, dining, and entertainment in one place. It usually includes fashion stores, restaurants, cafes, and entertainment areas for visitors. These malls focus on comfort, modern architecture, and an enjoyable lifestyle experience for customers.</p>
        <h3>Ground Floor Planning</h3>
        <p>The ground floor usually contains anchor stores, large retail outlets, and the main entrance lobby of the mall. It also includes elevators, escalators, and wide corridors to manage heavy visitor movement. This floor is designed to attract customers immediately when they enter the shopping mall.</p>
        <h3>First Floor Planning</h3>
        <p>The first floor mainly includes fashion stores, clothing brands, accessories shops, and lifestyle retail outlets. Shops are arranged along open corridors around the central atrium to improve store visibility. Proper lighting and spacious walkways create a comfortable shopping environment.</p>
        <h3>Second Floor Planning</h3>
        <p>The second floor generally includes food courts, restaurants, entertainment zones, and specialty retail shops. This level provides leisure and dining spaces for visitors after shopping. The design encourages people to spend more time inside the mall.</p>
        <h3>Architecture Benefits</h3>
        <p>Lifestyle malls are designed with modern architecture that focuses on aesthetics and comfort. Large glass facades, open atriums, and balcony corridors improve natural lighting and ventilation. These features make the mall visually attractive and enjoyable for visitors.</p>
        <h3>Construction & Space Efficiency</h3>
        <p>Efficient construction planning ensures maximum use of commercial space inside the building. Structural elements like columns and beams are arranged to create larger retail areas. Elevators, staircases, and service areas are placed strategically for smooth movement.</p>
        <h3>Advantages</h3>
        <p>Lifestyle shopping malls provide a complete shopping and entertainment experience in one location. They attract many visitors and support multiple retail brands and businesses. These malls also create employment opportunities and boost local economic growth.</p>
        <h3>Lifestyle Shopping Mall Arrangement</h3>
        <p>The internal arrangement usually follows an open atrium layout with shops on multiple levels. Retail outlets are placed along corridors so customers can easily move from one store to another. Anchor stores and entertainment areas are placed strategically to distribute visitor traffic.</p>
        <h3>Space Occupied</h3>
        <p>A typical lifestyle shopping mall occupies around 100,000 to 400,000 square feet depending on the number of floors and facilities. The space includes retail areas, food courts, entertainment zones, service rooms, and parking areas. Proper planning ensures efficient use of the available land.</p>
        <h3>Construction Method & Materials</h3>
        <p>Lifestyle shopping malls are constructed using reinforced concrete structures combined with steel frameworks for durability. Glass panels, aluminum composite cladding, and modern lighting systems enhance the building's appearance. High-quality flooring materials like granite or tiles are used for interior areas.</p>
        <h3>Estimated Construction Cost</h3>
        <p>The estimated cost of building a lifestyle shopping mall depends on the building size, location, and design complexity. Construction costs include structural work, interiors, electrical systems, elevators, and safety equipment. A medium-size lifestyle mall may cost approximately ₹80 crore to ₹300 crore depending on the facilities and total built-up area.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Lifestyle Shopping Mall design is OK for me
          </span>
        </div>
        <button className="approveButton" onClick={handleApprove}>Book Now</button>
      </div>

      <style>{`
        .container { font-family: Arial; padding: 30px; background:#f5f7fa; }
        .backButton { background: green; position: fixed; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; margin-bottom: 20px; position: absolute; left: 45px; top: 60px; }
        .backButton:hover { background: red; }
        .titleCard { width:100%; background: darkblue; color:white; height:9vh; padding:25px; border-radius:6px; text-align:center; font-size: 28px; margin-bottom:20px; }
        .imageSection { display:flex; gap:20px; margin-bottom:25px; }
        .card img { width:100%; height:80vh; border-radius:8px; }
        .contentCard { background:white; padding:25px; border-radius:10px; margin-bottom:25px; box-shadow:0 3px 10px rgba(0,0,0,0.2); }
        .contentCard h2 { color: darkblue; }
        .contentCard h3 { color: darkblue; }
        .declarationCard { background:white; padding:20px; border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,0.2); display:flex; justify-content:space-between; align-items:center; flex-wrap: wrap; gap: 15px; }
        .checkboxSection { display:flex; align-items:center; gap:12px; }
        .bigCheckbox { width:22px; height:22px; cursor:pointer; }
        .checkboxText { font-size:18px; }
        .approveButton { background:green; color:white; border:none; padding:10px 22px; border-radius:6px; cursor:pointer; }
        .approveButton:hover { background:darkgreen; }
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

export default LifestyleShoppingMallForm;