import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommunityShoppingMallImg from "./images/CommunityShoppingMallImg.png";
import CommunityShoppingMallArchitecture from "./images/CommunityShoppingMallArchitecture.png";

function CommunityShoppingMallForm() {
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
          projectType: "Community Shopping Mall",
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
        Community Shopping Mall – Multi-Floor Shopping Complex for Community
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={CommunityShoppingMallImg} alt="Community Shopping Mall" />
        </div>
        <div className="card">
          <img src={CommunityShoppingMallArchitecture} alt="Community Shopping Mall Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>Community Shopping Mall</h2>
        <p>A community shopping mall is a medium-sized retail complex designed to serve the daily needs of people living in nearby residential areas. These malls provide a combination of retail stores, restaurants, service outlets and entertainment spaces in one convenient location. Community malls are planned to provide accessibility, comfort and convenience while supporting local businesses and improving the commercial value of the surrounding area.</p>
        <h3>Ground Floor Planning</h3>
        <p>The ground floor is the most important level of a shopping mall because it receives the highest visitor traffic. This floor usually contains large anchor stores, entrance lobby areas, customer service counters, elevators, escalators, staircases and cafes. Proper circulation space is provided to ensure smooth movement of customers from one shop to another. The design focuses on visibility and accessibility to attract visitors immediately when they enter the building.</p>
        <h3>First Floor Planning</h3>
        <p>The first floor generally includes fashion stores, clothing brands, electronics shops and lifestyle outlets. These stores are arranged along wide corridors so that visitors can easily explore multiple shops. Proper lighting and signage help customers navigate through different retail sections efficiently.</p>
        <h3>Second Floor Planning</h3>
        <p>The second floor provides additional retail space for medium-sized commercial outlets. It may include bookstores, service shops, beauty salons and specialty retail stores. The floor layout is designed to maintain balanced visitor distribution across all levels of the shopping mall.</p>
        <h3>Third Floor Planning</h3>
        <p>The third floor often includes entertainment-related facilities such as gaming zones, kids play areas, and specialty stores. These spaces improve the overall shopping experience by offering recreational activities along with shopping opportunities.</p>
        <h3>Fourth Floor Planning</h3>
        <p>The top floor is typically reserved for food courts, restaurants and leisure spaces. Multiple dining options allow visitors to relax and socialize after shopping. The food court layout is designed with seating areas, service counters and proper ventilation.</p>
        <h3>Architecture Benefits</h3>
        <p>Modern architectural design ensures efficient use of natural light, ventilation and customer circulation. The use of glass facades, structured layouts and open spaces enhances the visual appearance of the mall while creating a welcoming environment for visitors.</p>
        <h3>Construction & Space Efficiency</h3>
        <p>Efficient structural planning ensures optimal utilization of available land and interior space. Elevators, staircases and service areas are placed strategically to allow smooth movement of visitors and staff while maintaining safety standards.</p>
        <h3>Advantages</h3>
        <p>Community shopping malls provide convenient access to daily shopping needs for nearby residents. They also support local economic growth, create employment opportunities and provide a centralized location for shopping, dining and entertainment.</p>
        <h3>Community Shopping Mall Arrangement</h3>
        <p>Retail shops are arranged along corridors with anchor stores placed at strategic positions to increase customer movement across all floors. This arrangement helps maximize store visibility and encourages visitors to explore the entire mall.</p>
        <h3>Space Occupied</h3>
        <p>A typical community shopping mall occupies a medium-sized commercial land area which includes parking facilities, service zones, retail areas and circulation spaces. Proper planning ensures efficient use of both indoor and outdoor spaces.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Community Shopping Mall design is OK for me
          </span>
        </div>
        <button className="approveButton" onClick={handleApprove}>Book Now</button>
      </div>

      <style>{`
        .container { font-family: Arial; padding: 30px; background:#f5f7fa; }
        .backButton { background: green; position: fixed; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; margin-bottom: 20px; position: absolute; left: 45px; top: 60px; }
        .backButton:hover { background: red; }
        .titleCard { width:100%; background:#0b0b8f; color:white; height:9vh; padding:25px; border-radius:6px; text-align:center; font-size: 28px; margin-bottom:20px; }
        .imageSection { display:flex; gap:20px; margin-bottom:25px; }
        .card { flex:1; min-width: 100%; max-width: 300px; background:white; padding:15px; border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,0.2); }
        .card img { width:100%; border-radius:8px; }
        .contentCard { background:white; padding:25px; border-radius:10px; margin-bottom:25px; box-shadow:0 3px 10px rgba(0,0,0,0.2); }
        .contentCard h2 { color: darkblue; }
        .contentCard h3 { color: darkblue; }
        .declarationCard { background:white; padding:20px; border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,0.2); display:flex; justify-content:space-between; align-items:center; flex-wrap: wrap; gap: 15px; }
        .checkboxSection { display:flex; align-items:center; gap:12px; }
        .bigCheckbox { width:22px; height:22px; cursor:pointer; }
        .checkboxText { font-size:18px; }
        .approveButton { background:green; color:white; border:none; padding:10px 22px; border-radius:6px; cursor:pointer; }
        .approveButton:hover { background:darkgreen; }
      `}</style>

    </div>
  );
}

export default CommunityShoppingMallForm;