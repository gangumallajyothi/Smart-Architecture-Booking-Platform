import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThreeStoreyHouseImg from "./images/ThreeStoreyHouseImg.jpg";
import ThreeStoreyArchitecture from "./images/ThreeStoreyArchitecture.png";

function ThreeStoreyHouse() {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);

  const handleApprove = async () => {
    if (!agree) {
      alert("Please agree before approving the design.");
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
          projectType: "Three Storey House",
          status: "Approved",
          date: new Date().toISOString()
        })
      });

      navigate("/thank-you");
    } catch (error) {
      alert("Failed to save booking. Check server.");
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <style>{`
        body { margin:0; font-family:Arial, Helvetica, sans-serif; background:#eef2f6; }
        .header { background:#3f556b; color:white; text-align:center; padding:15px; position:relative; }
        .backBtn { position:absolute; left:20px; top:12px; background:#2c3e50; color:white; border:none; padding:8px 14px; border-radius:6px; cursor:pointer; }
        .container { padding:20px; }
        .imageRow { display:flex; gap:20px; margin-bottom:20px; }
        .card { background:white; padding:15px; border-radius:10px; flex:1; min-width: 100%; max-width: 300px; box-shadow:0px 2px 6px rgba(0,0,0,0.1); }
        .card img { width:100%; border-radius:6px; margin-top:10px; }
        .contentBox { background:white; padding:20px; border-radius:10px; box-shadow:0px 2px 6px rgba(0,0,0,0.1); margin-bottom:20px; }
        .contentBox h2 { color:#2c3e50; }
        .approveBox { background:white; padding:20px; border-radius:10px; display:flex; justify-content:space-between; align-items:center; flex-wrap: wrap; gap: 15px; box-shadow:0px 2px 6px rgba(0,0,0,0.1); }
        .approveBtn { background:green; color:white; border:none; padding:10px 25px; font-size:16px; border-radius:6px; cursor:pointer; }
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

      <div className="header">
        <button className="backBtn" onClick={goBack}>← Back</button>
        <h2>Three Storey House – Three-Floor Family Residence</h2>
      </div>

      <div className="container">

        <div className="imageRow">
          <div className="card">
            <h3>Three Storey House Exterior</h3>
            <img src={ThreeStoreyHouseImg} alt="Three Storey House" />
          </div>
          <div className="card">
            <h3>Architecture Layout (G+2)</h3>
            <img src={ThreeStoreyArchitecture} alt="Three Storey Layout" />
          </div>
        </div>

        <div className="contentBox">
          <h2>About Three Storey House</h2>
          <p>A three-storey house is a modern residential structure built across three vertical levels, typically consisting of a ground floor, first floor, and second floor connected internally through a staircase. This type of home is designed for large families who require separate private zones along with spacious common areas. Compared to single or duplex houses, a triple storey home offers better space utilization, future expansion opportunities, and a premium architectural appearance.</p>
          <h2>Space Occupied</h2>
          <p>Three-floor family residences are usually constructed on 30×40, 40×60, or larger plots depending on city regulations. The total built-up area generally ranges between 2400 sq.ft to 3600 sq.ft. Each floor is planned to maximize functional usage without creating congestion. Vertical stacking allows homeowners to maintain privacy while still keeping family members connected through internal circulation.</p>
          <h2>Room Arrangement</h2>
          <p>The ground floor usually includes a spacious living room, dining area, modular kitchen with utility space, guest bedroom, and a common washroom. The first floor is designed for family bedrooms with attached bathrooms, a lounge or family hall, and balconies for outdoor relaxation. The second floor can be customized with additional bedrooms, a home office, gym room, or entertainment area depending on family needs.</p>
          <h2>Benefits of Three Storey House</h2>
          <p>Three-storey houses provide excellent privacy because each level can function independently while still being part of one home. They offer higher resale value due to increased floor area and modern architectural appeal. Families can allocate different floors for elders, guests, or children, improving lifestyle flexibility.</p>
          <h2>Estimated Construction Cost</h2>
          <p>The construction cost of a three-storey residence depends on material quality, architectural complexity, and city location. On average, construction may range between ₹2,000 and ₹3,200 per square foot for standard to premium finishes. For a 3000 sq.ft triple storey house, the estimated construction cost may range between ₹60 lakhs to ₹95 lakhs excluding land cost and registration charges.</p>
        </div>

        <div className="approveBox">
          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            {" "}I have read the details and I agree to approve this Three Storey House design.
          </label>
          <button className="approveBtn" onClick={handleApprove}>Book Now</button>
        </div>

      </div>
    </>
  );
}

export default ThreeStoreyHouse;