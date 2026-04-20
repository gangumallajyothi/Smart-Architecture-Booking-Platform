import React, { useState } from "react";
import { API_BASE_URL } from "../apiConfig";
import { useNavigate } from "react-router-dom";
import AgricultureCollegeImg from "./images/AgricultureCollegeImg.png";
import AgricultureCollegeArchitecture from "./images/AgricultureCollegeArchitecture.png";

function AgricultureCollegeForm() {
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
          projectType: "Agriculture College",
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
        🌾 Agriculture College – Advanced Learning Hub for Agriculture & Farming
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={AgricultureCollegeImg} alt="Agriculture College" />
        </div>
        <div className="card">
          <img src={AgricultureCollegeArchitecture} alt="Agriculture College Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>🌾 About Agriculture College</h2>
        <p>Agriculture College is a modern educational institution designed to provide advanced education, research, and practical training in agriculture and related sciences. The building has Ground Floor + Five Floors, offering classrooms, laboratories, lecture halls, and administrative facilities for students and faculty. Its architecture focuses on spacious learning environments, modern infrastructure, and efficient academic space planning.</p>
        <h3>🏢 Ground Floor Planning</h3>
        <p>The ground floor mainly focuses on public access and administrative services. It includes classrooms, laboratories, administrative offices, library, reception area, entry lobby, and auditorium for academic activities and events. Additional facilities such as cafeteria, toilets, parking area, staircase, and lift ensure easy access and comfortable movement for students, staff, and visitors.</p>
        <h3>🏫 First Floor Planning</h3>
        <p>The first floor is designed for academic activities such as classrooms, laboratories, lecture halls, and staff offices. A central corridor connects all rooms for easy movement between departments. Restrooms, staircases, and lift access are placed strategically to support daily academic operations.</p>
        <h3>🧑‍🎓 Second Floor Planning</h3>
        <p>The second floor includes additional classrooms and laboratory spaces for specialized agricultural studies. This floor may be used for subjects such as crop science, soil science, agricultural engineering, and plant protection. The design supports both theoretical learning and practical training.</p>
        <h3>🌱 Third Floor Planning</h3>
        <p>The third floor provides advanced lecture halls, research laboratories, and faculty offices. This level can be used for postgraduate education and academic research programs. The layout ensures sufficient workspace for both students and researchers.</p>
        <h3>🔬 Fourth Floor Planning</h3>
        <p>The fourth floor focuses on specialized laboratories and research centers related to agricultural innovation. These areas support scientific research, experiments, and agricultural technology development. Additional offices and study areas are also included.</p>
        <h3>🌿 Fifth Floor Planning</h3>
        <p>The fifth floor is designed for additional classrooms, faculty offices, meeting rooms, and academic research spaces. It may also include seminar halls or training centers for workshops and conferences related to agricultural education.</p>
        <h3>🏛 Architecture Benefits</h3>
        <p>The architecture of the Agriculture College building emphasizes modern educational design with large windows, open corridors, and spacious classrooms. Natural lighting and ventilation improve the learning environment for students. The multi-floor structure allows the institution to accommodate large numbers of students and different academic departments efficiently.</p>
        <h3>⚙ Construction & Space Efficiency</h3>
        <p>The building layout is designed to use space efficiently by separating academic zones, administrative sections, and student facilities. Central staircases and lift systems provide easy access to all floors. Corridors connect classrooms and laboratories, ensuring smooth movement throughout the building.</p>
        <h3>⭐ Advantages of Agriculture College</h3>
        <p>This building provides a well-organized learning environment with advanced infrastructure for agricultural education. Laboratories allow students to gain practical experience, while lecture halls support theoretical learning. The large multi-floor structure enables the college to support many departments, research activities, and student facilities.</p>
        <h3>📚 Agriculture College Arrangement</h3>
        <p>The arrangement includes classrooms for lectures, laboratories for experiments, lecture halls for large student groups, administrative offices, library facilities, cafeteria, and auditorium. Parking areas and reception spaces are also included for better campus management.</p>
        <h3>📐 Space Occupied</h3>
        <p>Building dimension approximately 60 m × 44 m. Area per floor around 2600–2700 square meters. Total floors: 6 (Ground + 5). Total built-up area approximately 15,000 – 16,000 square meters. This space accommodates classrooms, labs, corridors, offices, and student facilities.</p>
        <h3>🧱 Construction Method & Materials</h3>
        <p>The Agriculture College building is constructed using Reinforced Cement Concrete (RCC) structural framework with steel reinforcement for strength and durability. Exterior walls use brick or concrete blocks with modern cladding materials. Interior finishes include durable flooring tiles, plastered walls, acoustic ceilings, modern classroom furniture, and laboratory equipment.</p>
        <h3>💰 Estimated Construction Cost</h3>
        <p>Basic building construction: ₹2500 – ₹3500 per sq ft. Interior finishing and furniture: ₹800 – ₹1500 per sq ft. Laboratory equipment and facilities: ₹2 – ₹6 crore. Estimated Total Cost: 💰 ₹40 crore – ₹75 crore (approx.) This includes building construction, interiors, laboratories, and educational infrastructure.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Agriculture College design is OK for me
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
        // .card { flex:1; min-width: 100%; max-width: 300px; background:white; padding:15px; border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,0.2); }
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

export default AgricultureCollegeForm;