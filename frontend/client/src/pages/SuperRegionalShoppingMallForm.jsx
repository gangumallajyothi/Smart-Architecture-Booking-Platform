import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuperRegionalShoppingMallImg from "./images/SuperRegionalShoppingMallImg.png";
import SuperRegionalShoppingMallArchitecture from "./images/SuperRegionalShoppingMallArchitecture.png";

function SuperRegionalShoppingMallForm() {
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
          projectType: "Super Regional Shopping Mall",
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
        Super Regional Shopping Mall – Mega Retail & Lifestyle Destination for the Region 🏬✨
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={SuperRegionalShoppingMallImg} alt="Super Regional Shopping Mall" />
        </div>
        <div className="card">
          <img src={SuperRegionalShoppingMallArchitecture} alt="Super Regional Shopping Mall Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>Super Regional Shopping Mall</h2>
        <p>A Super Regional Shopping Mall is a very large retail complex designed to serve people from multiple cities or regions. It contains hundreds of stores, large anchor shops, restaurants, entertainment zones, and multiplex cinemas. These malls provide a complete shopping, dining, and leisure experience in one location.</p>
        <h3>Ground Floor Planning</h3>
        <p>The ground floor mainly includes large anchor stores, supermarkets, and major retail outlets that attract the highest number of visitors. It also contains the main entrance lobby, elevators, escalators, and wide circulation corridors. This floor is designed to provide easy access to essential stores and ensure smooth customer movement throughout the mall.</p>
        <h3>First Floor Planning</h3>
        <p>The first floor typically contains fashion outlets, clothing stores, accessories shops, and lifestyle retail stores. Shops are arranged around central corridors or atrium spaces so customers can easily explore multiple stores. Proper lighting, signage, and store displays improve the shopping experience on this floor.</p>
        <h3>Second Floor Planning</h3>
        <p>The second floor often includes food courts, entertainment zones, gaming areas, and specialty retail shops. Visitors can enjoy dining areas, cafes, and leisure spaces along with shopping. This floor helps increase visitor engagement and encourages customers to spend more time inside the mall.</p>
        <h3>Architecture Benefits</h3>
        <p>The architecture of a super regional shopping mall focuses on modern design, spacious interiors, and attractive facades. Large glass panels allow natural light to enter and create a visually appealing structure. Wide corridors, open atriums, and organized layouts improve comfort and customer circulation.</p>
        <h3>Construction & Space Efficiency</h3>
        <p>Efficient structural planning ensures maximum utilization of available commercial space. Columns, beams, and service areas are placed strategically to create large retail spaces. This design approach allows more stores to be accommodated while maintaining safety and accessibility.</p>
        <h3>Advantages</h3>
        <p>Super regional shopping malls provide a wide variety of retail brands, restaurants, and entertainment facilities in one location. They attract visitors from multiple cities or regions, increasing business opportunities. These malls also create employment opportunities and contribute significantly to local economic growth.</p>
        <h3>Super Regional Shopping Mall Arrangement</h3>
        <p>The internal arrangement usually follows a central atrium or corridor layout with stores located on both sides. Anchor stores are positioned at strategic locations to distribute customer traffic evenly across all floors. This arrangement encourages visitors to explore the entire mall.</p>
        <h3>Space Occupied</h3>
        <p>A typical super regional shopping mall occupies a very large commercial area, usually between 500,000 and 1,500,000 square feet depending on the number of floors and stores. The space includes retail outlets, food courts, entertainment areas, parking zones, and service facilities. Proper planning ensures efficient use of the entire building area.</p>
        <h3>Construction Method & Materials</h3>
        <p>Super regional shopping malls are generally constructed using reinforced concrete frame structures combined with steel supports for strength and durability. Materials such as glass facades, aluminum composite panels, and high-quality flooring are used for aesthetics and functionality. Modern HVAC systems, elevators, and safety installations are also integrated during construction.</p>
        <h3>Estimated Construction Cost</h3>
        <p>The construction cost of a super regional shopping mall depends on its size, design complexity, and location. Costs include land acquisition, structural construction, interior finishing, electrical systems, elevators, and safety installations. A large super regional mall may cost approximately ₹500 crore to ₹1500 crore or more depending on the total built-up area and facilities.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Super Regional Shopping Mall design is OK for me
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
      `}</style>

    </div>
  );
}

export default SuperRegionalShoppingMallForm;