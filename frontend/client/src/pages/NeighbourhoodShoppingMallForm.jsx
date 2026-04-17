import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NeighbourhoodShoppingMallImg from "./images/NeighbourhoodShoppingMallImg.png";
import NeighbourhoodShoppingMallArchitecture from "./images/NeighbourhoodShoppingMallArchitecture.png";

function NeighbourhoodShoppingMallForm() {
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
          projectType: "Neighbourhood Shopping Mall",
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
        Neighbourhood Shopping Mall – Convenient Retail Center for Local Residents 🏬🛍️
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={NeighbourhoodShoppingMallImg} alt="Neighbourhood Shopping Mall" />
        </div>
        <div className="card">
          <img src={NeighbourhoodShoppingMallArchitecture} alt="Neighbourhood Shopping Mall Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>Neighbourhood Shopping Mall</h2>
        <p>A Neighbourhood Shopping Mall is a medium-sized retail complex designed to serve people living in nearby residential areas. It includes supermarkets, clothing stores, electronics shops, and small restaurants. These malls provide convenient access to daily shopping and entertainment for the local community.</p>
        <h3>Ground Floor Planning</h3>
        <p>The ground floor mainly contains anchor stores such as supermarkets and large retail shops. It also includes the entrance lobby, central atrium, elevators, and staircases for easy movement. This floor is designed to attract maximum visitors and provide quick access to frequently used stores.</p>
        <h3>First Floor Planning</h3>
        <p>The first floor usually includes fashion stores, clothing outlets, and electronics shops. Shops are arranged along wide corridors around the central atrium for easy navigation. Proper lighting and store display areas help attract customers.</p>
        <h3>Second Floor Planning</h3>
        <p>The second floor is often used for food courts, restaurants, and entertainment areas. Visitors can enjoy dining, gaming zones, and kids' play areas on this level. This floor increases the time customers spend inside the mall.</p>
        <h3>Architecture Benefits</h3>
        <p>Modern mall architecture improves both appearance and functionality of the building. Large glass facades allow natural lighting and enhance the visual appeal. Spacious corridors and open atriums create a comfortable environment for shoppers.</p>
        <h3>Construction & Space Efficiency</h3>
        <p>Efficient construction planning ensures maximum use of available land and interior space. Structural elements like columns and beams are placed strategically to increase shop areas. Proper placement of elevators and staircases improves customer movement.</p>
        <h3>Advantages</h3>
        <p>Neighbourhood shopping malls provide convenient shopping facilities close to residential areas. They support local businesses and create employment opportunities. These malls also act as social spaces where people can shop, dine, and relax.</p>
        <h3>Neighbourhood Shopping Mall Arrangement</h3>
        <p>The internal layout usually follows a central atrium arrangement with shops placed along corridors. Anchor stores are located at important points to attract visitors across the mall. This layout helps increase visibility for all stores.</p>
        <h3>Space Occupied</h3>
        <p>A neighbourhood shopping mall generally occupies 40,000 to 120,000 square feet depending on the number of floors and shops. The area includes retail spaces, corridors, food courts, and parking areas. Proper planning ensures efficient use of the available space.</p>
        <h3>Construction Method & Materials</h3>
        <p>Neighbourhood shopping malls are typically built using reinforced concrete structures for strength and durability. Materials like steel reinforcement, glass panels, aluminum cladding, and ceramic tiles are commonly used. These materials provide both structural stability and modern appearance.</p>
        <h3>Estimated Construction Cost</h3>
        <p>The cost of building a neighbourhood shopping mall depends on its size, location, and design. Construction expenses include structural work, interior finishing, electrical systems, and elevators. A medium-sized mall may cost around ₹30 crore to ₹120 crore depending on facilities and materials.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Neighbourhood Shopping Mall design is OK for me
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

export default NeighbourhoodShoppingMallForm;