import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EyeHospitalImg from "./images/EyeHospitalImg.jpg";
import EyeHospitalArchitecture from "./images/EyeHospitalArchitecture.png";

function EyeHospitalForm() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const goBack = () => {
    window.history.back();
  };

  const handleApprove = async () => {
    if (!checked) {
      alert("You did not tick the checkbox");
    } else {
      try {
        const userName = localStorage.getItem("userName") || "Unknown";
        const userEmail = localStorage.getItem("userEmail") || "Unknown";

        await fetch("http://localhost:5000/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userName: userName,
            userEmail: userEmail,
            projectType: "Eye Hospital",
            status: "Approved",
            date: new Date().toISOString()
          })
        });

        navigate("/thank-you");
      } catch (err) {
        alert("Failed to save booking. Check server.");
      }
    }
  };

  return (
    <div className="container">
      <style>{`
        body { margin:0; font-family:Arial, Helvetica, sans-serif; background:#f4f6fb; }
        .container { padding:20px; }
        .backBtn { background:green; color:white; border:none; padding:10px 18px; font-size:16px; border-radius:6px; cursor:pointer; margin-bottom:20px; }
        .backBtn:hover { background:darkred; }
        .card { background:white; padding:20px; margin-bottom:25px; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1); }
        .imageRow { display:flex; gap:20px; }
        .imageCard { flex:1; text-align:center; }
        .imageCard img { width:100%; height:500px; border-radius:8px; }
        .textCard h2 { color:#004aad; margin-top:15px; }
        .textCard p { line-height:1.7; font-size:15px; }
        .approveCard { display:flex; align-items:center; justify-content:space-between; }
        .checkboxArea { display:flex; align-items:center; gap:12px; font-size:18px; }
        .checkboxArea input { width:24px; height:24px; }
        .approveBtn { background:#004aad; color:white; border:none; padding:12px 20px; border-radius:6px; cursor:pointer; font-size:16px; }
        .approveBtn:hover { background:#002c6b; }
      `}</style>

      <button className="backBtn" onClick={goBack}>← Back</button>

      <div className="card imageRow">
        <div className="imageCard">
          <h3>Eye Hospital Building</h3>
          <img src={EyeHospitalImg} alt="Eye Hospital" />
        </div>
        <div className="imageCard">
          <h3>Hospital Architecture Layout</h3>
          <img src={EyeHospitalArchitecture} alt="Eye Hospital Architecture" />
        </div>
      </div>

      <div className="card textCard">
        <h2>🏥 About Eye Hospital</h2>
        <p>An Eye Hospital is a specialized medical facility designed for diagnosis, treatment, and surgery of eye-related diseases. It includes areas such as consultation rooms, diagnostic labs, operation theatres, and patient wards. The hospital layout is planned to provide efficient patient care, easy movement, and hygienic treatment spaces.</p>
        <h2>🏢 Ground Floor Planning</h2>
        <p>The ground floor contains the main entrance lobby, reception, registration counter, waiting area, pharmacy, and consultation rooms. Patients first visit this floor for registration, eye check-up, and initial diagnosis. Support areas such as records room, stores, and staff rooms are also arranged here for smooth hospital operations.</p>
        <h2>🏬 First Floor Planning</h2>
        <p>The first floor mainly includes advanced consultation rooms, diagnostic testing rooms, and waiting areas. Patients undergo detailed eye examinations such as vision testing, retina scans, and eye pressure tests. This floor helps manage large outpatient (OPD) patient flow efficiently.</p>
        <h2>🏥 Second Floor Planning</h2>
        <p>The second floor is dedicated to operation theatres and surgical departments. Facilities include sterilization rooms, preparation rooms, recovery areas, and surgical equipment spaces. Eye surgeries such as cataract surgery, LASIK, corneal transplant, and retinal procedures are performed here.</p>
        <h2>🛏 Third Floor Planning</h2>
        <p>The third floor mainly contains patient wards, private rooms, nursing stations, and recovery units. Patients stay here for post-surgery observation and recovery. This floor provides a quiet environment for patient care and medical monitoring.</p>
        <h2>🏗 Architecture Benefits</h2>
        <p>✔ Multi-floor design separates OPD, surgery, and recovery areas. ✔ Large windows and open corridors provide natural light and ventilation. ✔ The modern design improves hospital functionality and patient comfort.</p>
        <h2>📐 Construction & Space Efficiency</h2>
        <p>The building uses central corridor planning, which allows easy movement of patients and staff. Each floor is arranged according to specific medical functions, improving efficiency. The design ensures maximum use of available space while maintaining safety standards.</p>
        <h2>💰 Estimated Construction Cost</h2>
        <p>💰 Construction Cost per sq ft: ₹2200 – ₹3000. 🏥 Estimated Built-up Area: 28,000 – 35,000 sq ft. 💵 Estimated Total Construction Cost: ₹6 Crore – ₹10 Crore. Medical equipment and interiors may cost an additional ₹2–₹3 Crore.</p>
        <h2>🧱 Construction Method & Materials</h2>
        <p>The hospital building is generally constructed using RCC (Reinforced Cement Concrete) frame structure. Materials include cement, steel reinforcement, bricks, glass panels, aluminum frames, tiles, and plaster. Special hospital materials such as anti-bacterial flooring and sterile wall coatings are used in surgical areas.</p>
        <h2>⭐ Advantages</h2>
        <p>✔ Provides complete eye care services in one building. ✔ Separate floors ensure better hospital management and patient safety. ✔ Modern architecture supports efficient treatment, hygiene, and accessibility.</p>
        <h2>🏥 Eye Hospital Arrangement</h2>
        <p>🏢 Ground Floor: Reception, OPD, pharmacy, records. 🏬 First Floor: Eye testing labs and consultation rooms. 🏥 Second Floor: Operation theatres and surgical units. 🛏 Third Floor: Patient wards and recovery rooms. This arrangement improves patient flow and hospital efficiency.</p>
        <h2>📏 Space Occupied</h2>
        <p>📐 Plot Area: 20,000 – 25,000 sq ft. 🏢 Built-up Area: 28,000 – 35,000 sq ft. 🏥 Floors: Ground + 3 Floors. Additional open space is used for parking, ambulance access, and landscaping.</p>
      </div>

      <div className="card approveCard">
        <div className="checkboxArea">
          <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
          <span>This entire hospital design is OK for me</span>
        </div>
        <button className="approveBtn" onClick={handleApprove}>Book Now</button>
      </div>

    </div>
  );
}

export default EyeHospitalForm;