import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EngineeringCollegeImg from "./images/EngineeringCollegeImg.png";
import EngineeringCollegeArchitecture from "./images/EngineeringCollegeArchitecture.png";

function EngineeringCollegeForm() {
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
          projectType: "Engineering College",
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
        💡 Engineering College – Modern Institute for Engineering & Technology
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={EngineeringCollegeImg} alt="Engineering College" />
        </div>
        <div className="card">
          <img src={EngineeringCollegeArchitecture} alt="Engineering College Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>🏫 About Engineering College</h2>
        <p>Engineering College is a modern academic institution designed to provide technical education, research facilities, and practical learning environments for engineering students. The building consists of Ground Floor + 3 Floors, including classrooms, laboratories, staff rooms, libraries, and administrative spaces. The architecture focuses on functionality, spacious academic areas, and modern educational infrastructure.</p>
        <h3>🏢 Ground Floor Planning</h3>
        <p>The ground floor is mainly designed for student entry and academic classrooms. It includes classrooms for lectures, an entry lobby, administrative offices, and staff rooms. Staircases and corridors are placed centrally to allow easy movement between different sections of the building.</p>
        <h3>🧑‍🎓 First Floor Planning</h3>
        <p>The first floor includes classrooms, meeting rooms, staff rooms, and library facilities. This floor provides space for teaching activities, faculty discussions, and student study areas. Lift and staircase access ensures smooth movement between floors.</p>
        <h3>🔬 Second Floor Planning</h3>
        <p>The second floor is designed mainly for engineering laboratories and additional classrooms. These laboratories support practical training for engineering subjects such as mechanical, electrical, and computer engineering. Toilets and service areas are also included for student convenience.</p>
        <h3>⚙ Third Floor Planning</h3>
        <p>The third floor contains specialized laboratories, classrooms, and technical workspaces. These areas are used for advanced practical training and research activities. Proper corridor design allows students and faculty to access laboratories easily.</p>
        <h3>🏛 Architecture Benefits</h3>
        <p>The architecture of the Engineering College building focuses on modern educational design with large windows, strong structural layout, and spacious classrooms. Natural lighting and ventilation improve the study environment. The multi-floor structure allows the college to accommodate many students and multiple engineering departments efficiently.</p>
        <h3>⚙ Construction & Space Efficiency</h3>
        <p>The building layout uses space efficiently by separating classroom areas, laboratories, faculty rooms, and administrative sections. Central corridors, staircases, and lifts make movement easy and organized. The structure allows flexible usage of classrooms and labs for different engineering departments.</p>
        <h3>⭐ Advantages of Engineering College</h3>
        <p>This engineering college building provides a well-organized academic environment with modern infrastructure. The presence of laboratories supports practical engineering education, while classrooms and libraries help students focus on theoretical learning. Multiple floors increase the capacity of the institution and allow expansion of different engineering branches.</p>
        <h3>🏫 Engineering College Arrangement</h3>
        <p>The arrangement includes lecture classrooms, engineering laboratories, staff rooms, meeting rooms, libraries, corridors, and student facilities. Staircases and lift systems connect all floors, making movement easy for students, faculty, and staff.</p>
        <h3>📐 Space Occupied</h3>
        <p>Approximate building footprint: 50 m × 30 m. Area per floor: 1500 – 1800 square meters. Total floors: 4 (Ground + 3). Total built-up area approximately 6000 – 7000 square meters. This space accommodates classrooms, labs, corridors, offices, and student facilities.</p>
        <h3>🧱 Construction Method & Materials</h3>
        <p>The Engineering College building is constructed using Reinforced Cement Concrete (RCC) structural framework with steel reinforcement for strength and durability. Exterior walls use brick masonry or concrete panels with modern cladding materials. Interior finishes include tiled flooring, plastered walls, acoustic ceilings, and modern classroom furniture with laboratory equipment.</p>
        <h3>💰 Estimated Construction Cost</h3>
        <p>Basic building construction: ₹2500 – ₹3500 per sq ft. Interior finishing and furniture: ₹800 – ₹1200 per sq ft. Laboratory equipment and installations: ₹1.5 – ₹4 crore. Estimated Total Cost: 💰 ₹18 crore – ₹30 crore (approx.) This includes building construction, academic interiors, and laboratory infrastructure.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Engineering College design is OK for me
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
        .card { flex:1; background:white; padding:15px; border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,0.2); }
        .card img { width:100%; border-radius:8px; }
        .contentCard { background:white; padding:25px; border-radius:10px; margin-bottom:25px; box-shadow:0 3px 10px rgba(0,0,0,0.2); }
        .contentCard h2 { color: darkgreen; }
        .contentCard h3 { color: darkgreen; }
        .declarationCard { background:white; padding:20px; border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,0.2); display:flex; justify-content:space-between; align-items:center; }
        .checkboxSection { display:flex; align-items:center; gap:12px; }
        .bigCheckbox { width:22px; height:22px; cursor:pointer; }
        .checkboxText { font-size:18px; }
        .approveButton { background:green; color:white; border:none; padding:10px 22px; border-radius:6px; cursor:pointer; }
        .approveButton:hover { background:darkgreen; }
      `}</style>

    </div>
  );
}

export default EngineeringCollegeForm;