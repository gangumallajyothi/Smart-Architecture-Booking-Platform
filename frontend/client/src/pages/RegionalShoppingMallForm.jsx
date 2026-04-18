import React, { useState } from "react";
import { API_BASE_URL } from "../apiConfig";
import { useNavigate } from "react-router-dom";
import RegionalShoppingMallImg from "./images/RegionalShoppingMallImg.png";
import RegionalShoppingMallArchitecture from "./images/RegionalShoppingMallArchitecture.png";

function RegionalShoppingMallForm() {
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
          projectType: "Regional Shopping Mall",
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
        Regional Shopping Mall – Large Scale Shopping & Entertainment Complex 🏬🛍️
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={RegionalShoppingMallImg} alt="Regional Shopping Mall" />
        </div>
        <div className="card">
          <img src={RegionalShoppingMallArchitecture} alt="Regional Shopping Mall Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>Regional Shopping Mall</h2>
        <p>A Regional Shopping Mall is a large retail complex that serves customers from a wide geographic area. It usually includes many retail stores, supermarkets, restaurants, and entertainment facilities like cinemas. These malls provide a complete shopping and leisure experience for families and visitors.</p>
        <h3>Ground Floor Planning</h3>
        <p>The ground floor usually contains anchor stores, supermarkets, and large retail outlets that attract most visitors. It also includes the main entrance lobby, elevators, escalators, and wide walkways for smooth customer movement. This floor is designed to create strong first impressions and high customer traffic.</p>
        <h3>First Floor Planning</h3>
        <p>The first floor mainly consists of fashion stores, brand showrooms, electronics shops, and lifestyle retail outlets. Shops are arranged along corridors surrounding the open atrium so customers can easily see multiple stores. Escalators and elevators connect this floor with other levels for convenient access.</p>
        <h3>Second Floor Planning</h3>
        <p>The second floor generally includes entertainment zones such as multiplex cinemas, food courts, restaurants, and gaming areas. This level focuses on leisure and social activities after shopping. The design encourages visitors to spend more time inside the mall.</p>
        <h3>Architecture Benefits</h3>
        <p>Regional malls use modern architecture with large glass facades and spacious interiors. Open atriums allow natural light to enter and improve the visual experience of the building. This design makes the mall attractive, comfortable, and easy to navigate.</p>
        <h3>Construction & Space Efficiency</h3>
        <p>Efficient structural planning ensures maximum use of available commercial space. Columns, beams, and corridors are designed to support large open retail areas. Proper placement of lifts, stairs, and service rooms improves building efficiency.</p>
        <h3>Advantages</h3>
        <p>Regional shopping malls provide a complete shopping, dining, and entertainment experience. They attract visitors from multiple nearby towns and communities. These malls also create employment and increase local business opportunities.</p>
        <h3>Regional Shopping Mall Arrangement</h3>
        <p>Stores are arranged along long corridors surrounding a central atrium space. Anchor stores, cinemas, and large outlets are placed at strategic ends of the building to balance customer flow. This arrangement helps distribute visitors evenly across all floors.</p>
        <h3>Space Occupied</h3>
        <p>A regional shopping mall usually occupies around 400,000 to 800,000 square feet of built-up area. The space includes retail stores, entertainment zones, food courts, service areas, and parking facilities. Large open areas ensure comfortable movement for visitors.</p>
        <h3>Construction Method & Materials</h3>
        <p>Regional shopping malls are generally constructed using reinforced concrete structures and steel frameworks. Exterior walls often use glass panels, aluminum composite cladding, and modern facade materials. Interior areas use durable flooring materials such as granite, marble, or vitrified tiles.</p>
        <h3>Estimated Construction Cost</h3>
        <p>The construction cost of a regional shopping mall depends on its size, location, and facilities. Costs include structural construction, interiors, electrical systems, elevators, HVAC, and safety systems. A typical regional mall may cost approximately ₹200 crore to ₹800 crore depending on the project scale.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Regional Shopping Mall design is OK for me
          </span>
        </div>
        <button className="approveButton" onClick={handleApprove}>Book Now</button>
      </div>

      <style>{`
        .container { font-family: Arial; padding: 30px; background:#f5f7fa; }
        .backButton { background: green; position: fixed; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; margin-bottom: 20px; position: absolute; left: 45px; top: 60px; }
        .backButton:hover { background: red; }
        .titleCard { width:100%; background: linear-gradient(to right, #0b2a5b, #0b4d4d); color:white; height:9vh; padding:25px; border-radius:6px; text-align:center; font-size: 28px; margin-bottom:20px; }
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

export default RegionalShoppingMallForm;