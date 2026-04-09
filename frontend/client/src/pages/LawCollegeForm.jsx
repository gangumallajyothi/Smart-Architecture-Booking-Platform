import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LawCollegeImg from "./images/LawCollegeImg.png";
import LawCollegeArchitecture from "./images/LawCollegeArchitecture.png";

function LawCollegeForm() {
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
          projectType: "Law College",
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
        📜 Law College – Future Leaders in Law & Justice
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={LawCollegeImg} alt="Law College" />
        </div>
        <div className="card">
          <img src={LawCollegeArchitecture} alt="Law College Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>⚖️ About Law College</h2>
        <p>Law College is an educational institution designed for teaching law, legal studies, and judicial practice. The building consists of Ground Floor, First Floor, Second Floor, and Third Floor, including classrooms, moot court, lecture halls, study rooms, and legal offices. The architecture is designed to create a professional academic environment that reflects the discipline and structure of the legal profession.</p>
        <h3>🏢 Ground Floor Planning</h3>
        <p>The ground floor mainly includes basic academic and administrative facilities. It contains classrooms for lectures, a Moot Court for practical legal training, a dean or administrative office, and essential facilities like staircases, lift access, and toilets. This floor provides easy access for students and visitors.</p>
        <h3>🏫 First Floor Planning</h3>
        <p>The first floor includes multiple classrooms and faculty rooms where teaching and academic discussions take place. It also includes a laboratory or practical training room for legal research and documentation work. Staircases and lifts connect the floor with the rest of the building.</p>
        <h3>📚 Second Floor Planning</h3>
        <p>The second floor mainly includes additional classrooms, a laboratory space, and a legal office. This floor supports academic activities such as research work, student consultations, and administrative legal functions.</p>
        <h3>📖 Third Floor Planning</h3>
        <p>The third floor includes a lecture hall, study rooms, and archive spaces. The lecture hall is used for seminars and large academic sessions, while study rooms provide quiet spaces for students to prepare for legal studies and case research.</p>
        <h3>🏛 Architecture Benefits</h3>
        <p>The architecture of the Law College building creates a formal and professional learning environment suitable for legal education. Large windows provide natural light and ventilation, while the symmetrical structure enhances the institutional appearance. The central entrance and modern façade give the building a strong academic identity.</p>
        <h3>⚙ Construction & Space Efficiency</h3>
        <p>The building layout is designed with central corridors and evenly distributed classrooms, ensuring efficient use of space. Administrative and academic areas are placed strategically to avoid congestion. Staircases and lifts provide smooth vertical circulation between floors.</p>
        <h3>⭐ Advantages of Law College</h3>
        <p>This design supports both theoretical and practical legal education. The presence of a moot court allows students to practice courtroom procedures, while lecture halls and classrooms support academic learning. Study rooms and archives help students conduct legal research effectively.</p>
        <h3>🏫 Law College Arrangement</h3>
        <p>The arrangement of spaces includes classrooms, moot court hall, lecture hall, study rooms, legal offices, faculty rooms, laboratories, and archive rooms. It also includes staircases, lifts, corridors, and essential service areas. This arrangement creates an organized academic environment for law students and faculty.</p>
        <h3>📐 Space Occupied</h3>
        <p>Approximate building dimensions: Length: about 60 meters, Width: about 30 meters. Area per floor: 1500 – 1800 square meters. Total built-up area (4 floors): 6000 – 7200 square meters. This space accommodates classrooms, legal training rooms, and administrative facilities.</p>
        <h3>🧱 Construction Method & Materials</h3>
        <p>The Law College building is constructed using Reinforced Cement Concrete (RCC) frame structure. Common materials include: RCC columns, beams, and slabs, Brick or concrete block walls, Glass windows with aluminum frames, Granite or ceramic tile flooring, Steel staircases and railings, Cement plaster and exterior paint finishes.</p>
        <h3>💰 Estimated Construction Cost</h3>
        <p>Basic building construction: ₹2500 – ₹3500 per sq ft. Interior finishing and furniture: ₹800 – ₹1200 per sq ft. Estimated Total Cost: 💰 ₹15 crore – ₹25 crore (approx.) This includes building construction, classrooms, moot court setup, and interior facilities.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Law College design is OK for me
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

export default LawCollegeForm;