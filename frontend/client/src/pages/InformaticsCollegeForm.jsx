import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InformaticsCollegeImg from "./images/InformaticsCollegeImg.png";
import InformaticsCollegeArchitecture from "./images/InformaticsCollegeArchitecture.png";

function InformaticsCollegeForm() {
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
          projectType: "Informatics College",
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
        🤖 Informatics College – Institute for Technology & Digital Innovation
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={InformaticsCollegeImg} alt="Informatics College" />
        </div>
        <div className="card">
          <img src={InformaticsCollegeArchitecture} alt="Informatics College Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>💻 About Informatics College</h2>
        <p>Informatics College is a modern educational institution focused on computer science, information technology, and digital innovation. The building includes Ground Floor, First Floor, Second Floor, and Third Floor, designed with classrooms, laboratories, and academic spaces for students and faculty. The architecture follows a modern campus style with large glass windows, open spaces, and organized academic zones.</p>
        <h3>🏢 Ground Floor Planning</h3>
        <p>The ground floor mainly includes public and administrative areas. It has a Lobby/Reception, Auditorium, and Administrative Office for college management. Toilets and staircases are also provided, allowing easy access to upper floors and smooth movement for students and visitors.</p>
        <h3>🏫 First Floor Planning</h3>
        <p>The first floor is mainly designed for academic teaching and faculty activities. It includes several classrooms, a library, a faculty room, and a staff room. Lift and staircase access connects the floor to the rest of the building, making movement easy for students and teachers.</p>
        <h3>🖥 Second Floor Planning</h3>
        <p>The second floor focuses on technical learning and practical training. It includes a Computer Lab, multiple classrooms, and a seminar hall where workshops, presentations, and academic discussions are conducted.</p>
        <h3>⚙ Third Floor Planning</h3>
        <p>The third floor is designed for advanced technology learning and innovation. It includes a Project Lab, Innovation Lab, meeting room, and additional classrooms. These spaces support research, development projects, and collaborative learning.</p>
        <h3>🏛 Architecture Benefits</h3>
        <p>The architecture of Informatics College is modern and functional. Large glass windows allow natural lighting and ventilation, creating a comfortable learning environment. The building design also provides a professional campus appearance suitable for a technology-focused institution.</p>
        <h3>⚙ Construction & Space Efficiency</h3>
        <p>The building layout is organized around central corridors that connect classrooms and laboratories efficiently. Academic spaces are separated by function, ensuring quiet study areas and active laboratory spaces do not interfere with each other. Staircases and lifts improve accessibility and movement.</p>
        <h3>⭐ Advantages of Informatics College</h3>
        <p>The design supports modern digital education by including computer labs, innovation labs, and project development areas. Spacious classrooms allow comfortable learning, while seminar halls support workshops and technology events. The multi-floor structure also increases student capacity and academic flexibility.</p>
        <h3>🏫 Informatics College Arrangement</h3>
        <p>The arrangement of spaces includes classrooms, computer laboratories, project and innovation labs, faculty rooms, administrative offices, and meeting rooms. It also includes seminar halls, reception areas, and essential facilities such as toilets, staircases, and lifts. This arrangement creates an organized academic environment for students and staff.</p>
        <h3>📐 Space Occupied</h3>
        <p>Approximate building size: Length: about 60 meters, Width: about 30 meters. Area per floor: 1500 – 1800 square meters. Total built-up area (4 floors): 6000 – 7200 square meters. This area supports classrooms, laboratories, offices, and academic facilities.</p>
        <h3>🧱 Construction Method & Materials</h3>
        <p>The building is constructed using Reinforced Cement Concrete (RCC) structural framework. Common materials include: RCC columns, beams, and slabs, Brick or concrete block walls, Glass curtain windows, Granite or tile flooring, Steel staircases and railings, Aluminum window frames. These materials ensure structural stability and modern architectural appearance.</p>
        <h3>💰 Estimated Construction Cost</h3>
        <p>Basic building construction: ₹2500 – ₹3500 per sq ft. Interior finishing and furniture: ₹800 – ₹1200 per sq ft. Computer labs and technology infrastructure: ₹2 – ₹4 crore. Estimated Total Cost: 💰 ₹18 crore – ₹28 crore (approx.) This includes building construction, classrooms, computer labs, and technology infrastructure.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Informatics College design is OK for me
          </span>
        </div>
        <button className="approveButton" onClick={handleApprove}>Book Now</button>
      </div>

      <style>{`
        .container { font-family: Arial; padding: 30px; background:#f5f7fa; }
        .backButton { background: green; position: fixed; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; margin-bottom: 20px; position: absolute; left: 45px; top: 60px; }
        .backButton:hover { background: darkblue; }
        .titleCard { width:100%; background: linear-gradient(135deg, #064e3b 70%, #1e3a8a 30%); color:white; height:9vh; padding:25px; border-radius:6px; text-align:center; font-size: 28px; margin-bottom:20px; }
        .imageSection { display:flex; gap:20px; margin-bottom:25px; }
        .card { flex:1; min-width: 100%; max-width: 300px; background:white; padding:15px; border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,0.2); }
        .card img { width:100%; border-radius:8px; }
        .contentCard { background:white; padding:25px; border-radius:10px; margin-bottom:25px; box-shadow:0 3px 10px rgba(0,0,0,0.2); }
        .contentCard h2 { color: darkgreen; }
        .contentCard h3 { color: darkgreen; }
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

export default InformaticsCollegeForm;