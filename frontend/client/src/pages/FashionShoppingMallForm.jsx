import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FashionShoppingMallImg from "./images/FashionShoppingMallImg.png";
import FashionShoppingMallArchitecture from "./images/FashionShoppingMallArchitecture.png";

function FashionShoppingMallForm() {
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
          projectType: "Fashion Shopping Mall",
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
        Fashion Shopping Mall – Modern Fashion & Lifestyle Shopping Destination 👗✨
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={FashionShoppingMallImg} alt="Fashion Shopping Mall" />
        </div>
        <div className="card">
          <img src={FashionShoppingMallArchitecture} alt="Fashion Shopping Mall Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>Fashion Shopping Mall</h2>
        <p>A Fashion Shopping Mall is a modern retail complex designed mainly for fashion brands, clothing stores, accessories, and lifestyle products. These malls provide a comfortable environment where people can shop, relax, and explore different fashion trends in one place. They also act as social and commercial hubs for the surrounding community.</p>
        <h3>Ground Floor Planning</h3>
        <p>The ground floor is designed to attract the maximum number of visitors and usually contains large anchor stores, entrance lobbies, and customer service areas. It also includes elevators, escalators, and wide corridors for easy movement of shoppers. This floor creates the first impression of the mall.</p>
        <h3>First Floor Planning</h3>
        <p>The first floor mainly contains fashion outlets, clothing showrooms, footwear stores, and accessory shops. Stores are arranged along wide corridors so that customers can easily move between shops. Proper lighting and display areas help attract shoppers.</p>
        <h3>Second Floor Planning</h3>
        <p>The second floor provides additional retail space for medium-sized fashion stores and specialty shops. It ensures balanced customer distribution throughout the mall. This floor may also include beauty stores and lifestyle brand outlets.</p>
        <h3>Third Floor Planning</h3>
        <p>The third floor often includes entertainment zones, specialty fashion stores, and recreational areas. This level enhances the shopping experience by combining leisure activities with retail shopping. It helps increase the time visitors spend inside the mall.</p>
        <h3>Architecture Benefits</h3>
        <p>Modern mall architecture improves customer comfort and building appearance. Large glass facades provide natural lighting while spacious corridors allow easy movement. Attractive exterior designs also help attract more visitors to the mall.</p>
        <h3>Construction & Space Efficiency</h3>
        <p>Efficient construction planning ensures proper use of available land and interior space. Structural elements such as columns, beams, and elevators are placed strategically to maximize retail area. This improves both functionality and safety of the building.</p>
        <h3>Advantages</h3>
        <p>Fashion shopping malls provide many benefits including convenient shopping, employment opportunities, and business growth. They bring multiple fashion brands together in one location. Customers can shop, dine, and enjoy entertainment without traveling far.</p>
        <h3>Fashion Shopping Mall Arrangement</h3>
        <p>The internal layout of the mall usually follows a corridor-based arrangement where shops are placed on both sides. Anchor stores are positioned at strategic locations to attract customer movement across all floors. This arrangement increases visibility for every store.</p>
        <h3>Space Occupied</h3>
        <p>A fashion shopping mall occupies a large commercial space depending on the number of floors and stores. The area includes retail shops, corridors, food courts, parking spaces, and service areas. Proper planning ensures comfortable shopping and efficient use of space.</p>
        <h3>Construction Method & Materials</h3>
        <p>Fashion shopping malls are typically built using reinforced concrete structures for strength and durability. Materials such as glass panels, steel frames, aluminum cladding, and high-quality flooring are commonly used. These materials improve both safety and aesthetic appearance.</p>
        <h3>Estimated Construction Cost</h3>
        <p>The construction cost of a fashion shopping mall depends on factors such as building size, location, number of floors, and construction materials. Costs include structural work, interior finishing, electrical systems, elevators, and safety installations. Large malls usually require significant investment due to their complex design.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Fashion Shopping Mall design is OK for me
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

export default FashionShoppingMallForm;