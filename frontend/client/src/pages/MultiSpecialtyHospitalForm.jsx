import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MultiSpecialtyHospitalImg from "./images/MultiSpecialtyHospitalImg.png";
import MultiSpecialtyArchitecture from "./images/MultiSpecialtyArchitecture.png";

function MultiSpecialtyHospitalForm() {
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
            projectType: "Multi Specialty Hospital",
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
        .backBtn { background:green; color:white; border:none; padding:10px 18px; border-radius:6px; font-size:16px; cursor:pointer; margin-bottom:20px; }
        .backBtn:hover { background:darkred; }
        .card { background:white; padding:20px; margin-bottom:25px; border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1); }
        .imageRow { display:flex; gap:20px; }
        .imageCard { flex:1; min-width: 300px; text-align:center; }
        .imageCard img { width:100%; border-radius:8px; }
        .textCard h2 { color:#004aad; margin-top:15px; }
        .textCard p { line-height:1.7; font-size:15px; }
        .approveCard { display:flex; align-items:center; justify-content:space-between; }
        .checkboxArea { display:flex; align-items:center; gap:10px; font-size:18px; }
        .checkboxArea input { width:25px; height:25px; }
        .approveBtn { background:#004aad; color:white; border:none; padding:12px 20px; border-radius:6px; cursor:pointer; font-size:16px; }
        .approveBtn:hover { background:#002f6c; }
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

      <button className="backBtn" onClick={goBack}>← Back</button>

      <div className="card imageRow">
        <div className="imageCard">
          <h3>Multi Specialty Hospital Building</h3>
          <img src={MultiSpecialtyHospitalImg} alt="Multi Specialty Hospital" />
        </div>
        <div className="imageCard">
          <h3>Hospital Layout Plan</h3>
          <img src={MultiSpecialtyArchitecture} alt="Multi Specialty Architecture" />
        </div>
      </div>

      <div className="card textCard">
        <h2>About Multi Specialty Hospital</h2>
        <p>A Multi Specialty Hospital is a healthcare facility that provides treatment for multiple medical departments in one location. These hospitals offer specialized services such as cardiology, orthopedics, neurology, pediatrics, emergency medicine and diagnostic imaging. The architecture of a multi specialty hospital focuses on efficient patient movement, proper zoning of departments and advanced medical infrastructure.</p>
        <h2>Ground Floor Planning</h2>
        <p>The Ground Floor is designed mainly for patient access and emergency services. It includes the main entrance, reception area, waiting lounge, outpatient department (OPD), triage section, pharmacy and diagnostic areas such as X-ray and laboratory testing rooms. Emergency treatment rooms are also located on this floor to provide quick medical attention for critical patients.</p>
        <h2>First Floor Planning</h2>
        <p>The First Floor contains specialized treatment areas including doctor consultation cabins, MRI scanning rooms, operation theatres, diagnostic laboratories and intensive medical equipment rooms. This floor is designed for advanced medical procedures and diagnostic testing with controlled medical environments.</p>
        <h2>Second Floor Planning</h2>
        <p>The Second Floor is generally dedicated to inpatient services. This floor contains patient wards, semi-private rooms, private rooms and nurse stations. The layout ensures that doctors and nurses can easily monitor patients and provide continuous care. Support areas for patient attendants and waiting zones are also included on this floor.</p>
        <h2>Architecture Benefits</h2>
        <p>Hospital architecture improves treatment efficiency by organizing medical departments logically. Proper planning ensures better ventilation, natural lighting, infection control and quick patient movement throughout the hospital.</p>
        <h2>Construction & Space Efficiency</h2>
        <p>Multi specialty hospitals require efficient space planning to accommodate different departments. Wide corridors, elevators, emergency exits and service zones help ensure smooth hospital operations.</p>
        <h2>Estimated Construction Cost</h2>
        <p>The estimated construction cost of a multi specialty hospital generally ranges between ₹2200 and ₹4000 per square foot depending on the quality of materials, infrastructure systems and medical equipment installations.</p>
        <h2>Construction Method & Materials</h2>
        <p>Hospitals are built using reinforced concrete structures, steel reinforcement, fire-resistant construction materials, medical-grade flooring and antibacterial wall coatings. Advanced ventilation and HVAC systems are installed to maintain clean air circulation.</p>
        <h2>Advantages</h2>
        <p>Multi specialty hospitals provide multiple healthcare services under one roof. This reduces patient travel time and allows doctors from different departments to collaborate for better diagnosis and treatment.</p>
        <h2>Multi Specialty Hospital Arrangement</h2>
        <p>Hospital departments are arranged into three main zones: public areas, clinical areas and service areas. Emergency and outpatient services are placed on the ground floor while inpatient wards are located on upper floors for better patient comfort and privacy.</p>
        <h2>Space Occupied</h2>
        <p>A typical three-floor multi specialty hospital building may occupy approximately 40,000 to 80,000 square feet depending on the number of beds, departments and medical facilities.</p>
      </div>

      <div className="card approveCard">
        <div className="checkboxArea">
          <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
          <span>This entire Multi Specialty Hospital design is OK for me</span>
        </div>
        <button className="approveBtn" onClick={handleApprove}>Book Now</button>
      </div>

    </div>
  );
}

export default MultiSpecialtyHospitalForm;