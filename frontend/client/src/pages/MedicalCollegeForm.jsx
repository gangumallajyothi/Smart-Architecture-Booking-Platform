import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MedicalCollegeImg from "./images/MedicalCollegeImg.png";
import MedicalCollegeArchitecture from "./images/MedicalCollegeArchitecture.png";

function MedicalCollegeForm() {
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
          projectType: "Medical College",
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
        🏥 Medical College – Center for Medical Education & Healthcare
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={MedicalCollegeImg} alt="Medical College" />
        </div>
        <div className="card">
          <img src={MedicalCollegeArchitecture} alt="Medical College Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>🏥 About Medical College</h2>
        <p>A Medical College is an educational institution designed to train future doctors, medical professionals, and healthcare researchers. The building combines lecture halls, laboratories, classrooms, libraries, and administrative areas to support both theoretical and practical medical education. The architecture focuses on functionality, accessibility, and creating a professional learning environment for students and faculty.</p>
        <h3>🏢 Ground Floor Planning</h3>
        <p>The ground floor is mainly designed for public access and core academic activities. Main spaces include: Large Lecture Hall for medical lectures and seminars, Classrooms for teaching medical subjects, Laboratory (Lab-1) for practical medical training, Administrative Office for college management, Conference Hall for meetings and academic discussions, Library for research and study, Lobby/Reception as the main entry area, Common Room for students, Male & Female Toilets, Store Rooms and Lift Access. This floor allows easy access for students, visitors, and staff.</p>
        <h3>🧑‍🎓 First Floor Planning</h3>
        <p>The first floor is designed mainly for advanced academic learning and specialized study areas. Main spaces include: Lecture Theatre for large medical presentations, Multiple Classrooms for academic teaching, Laboratories (Lab-3 and Lab-4) for practical medical experiments, Administrative Office for faculty management, Seminar Hall for workshops and medical conferences, Atrium/Lobby Area with Balcony for circulation and open interaction, Lift and Staircases connecting all floors, Toilets and service spaces.</p>
        <h3>🏛 Architecture Benefits</h3>
        <p>The architecture of this Medical College is designed to provide a professional healthcare learning environment. Large windows allow natural lighting and ventilation, which improves comfort for students and staff. The symmetrical building design with a central entrance and dome enhances the visual identity of the institution. The layout separates teaching areas, laboratories, and administrative offices, improving functionality and organization.</p>
        <h3>⚙ Construction & Space Efficiency</h3>
        <p>The building layout ensures efficient use of space by organizing rooms along central corridors and placing key facilities around a central lobby. Lecture halls and laboratories are positioned strategically to handle large numbers of students while maintaining accessibility. The lift and staircases ensure smooth vertical movement between floors, while open lobby spaces improve circulation and reduce congestion.</p>
        <h3>⭐ Advantages of Medical College</h3>
        <p>This Medical College design provides many advantages: Large lecture halls support teaching for many students, Dedicated laboratories allow practical medical training, Separate classrooms improve subject-specific learning, Central lobby improves building navigation, Conference halls support academic meetings and seminars, Library spaces encourage research and study. Overall, the building supports modern medical education and training needs.</p>
        <h3>🏥 Medical College Arrangement</h3>
        <p>The Medical College building includes lecture halls, classrooms, medical laboratories, administrative offices, and library areas for teaching and research. It also provides seminar halls, reception lobby, and essential facilities like toilets and service rooms for students and staff. Lifts and staircases connect all floors, creating a well-organized and efficient academic environment.</p>
        <h3>📐 Space Occupied</h3>
        <p>Approximate building size: Length: about 60 meters, Width: about 30–35 meters. Area per floor approximately: 1800 – 2000 square meters. Total building area (2 floors): 3600 – 4000 square meters. This space accommodates lecture halls, laboratories, classrooms, and student facilities.</p>
        <h3>🧱 Construction Method & Materials</h3>
        <p>The Medical College building is constructed using Reinforced Cement Concrete (RCC) frame structure. Common construction materials include: RCC columns, beams, and slabs, Brick or concrete block walls, Glass windows and aluminum frames, Granite or tile flooring, Gypsum ceilings, Steel railings and staircases.</p>
        <h3>💰 Estimated Construction Cost</h3>
        <p>Building construction: ₹3000 – ₹4000 per sq ft. Interior finishing and furniture: ₹1000 – ₹1500 per sq ft. Laboratory and medical equipment: ₹5 – ₹10 crore. Estimated Total Cost: 💰 ₹15 crore – ₹25 crore (approx.) This includes construction, interior design, and medical laboratory setup.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Medical College design is OK for me
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

export default MedicalCollegeForm;