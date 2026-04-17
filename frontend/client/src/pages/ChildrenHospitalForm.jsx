import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChildrenHospitalImg from "./images/ChildrenHospitalImg.png";
import ChildrenHospitalArchitecture from "./images/ChildrenHospitalArchitecture.png";

function ChildrenHospitalForm() {
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
            projectType: "Children Hospital",
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
        body { margin:0; font-family:Arial, Helvetica, sans-serif; background:#f5f7fb; }
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
        .checkboxArea input { width:24px; height:24px; }
        .approveBtn { background:#004aad; color:white; border:none; padding:12px 20px; border-radius:6px; cursor:pointer; font-size:16px; }
        .approveBtn:hover { background:#002f6c; }
      `}</style>

      <button className="backBtn" onClick={goBack}>← Back</button>

      <div className="card imageRow">
        <div className="imageCard">
          <h3>Children Hospital Building</h3>
          <img src={ChildrenHospitalImg} alt="Children Hospital" />
        </div>
        <div className="imageCard">
          <h3>Children Hospital Layout</h3>
          <img src={ChildrenHospitalArchitecture} alt="Hospital Layout" />
        </div>
      </div>

      <div className="card textCard">
        <h2>About Children Hospital</h2>
        <p>A Children Hospital is a specialized healthcare facility designed to provide medical care exclusively for infants, children and adolescents. These hospitals are equipped with pediatric specialists, child-friendly infrastructure and advanced diagnostic facilities. The architecture of children hospitals focuses on safety, comfort, infection control and efficient movement of patients, doctors and caregivers.</p>
        <h2>Ground Floor Planning</h2>
        <p>The Ground Floor usually includes the main entrance, reception area, registration counters, waiting area, emergency department and ambulance entry. Pediatric outpatient departments (OPD), pharmacy, laboratory testing rooms and triage areas are also located on this floor so that children can receive quick medical attention.</p>
        <h2>First Floor Planning</h2>
        <p>The First Floor generally contains advanced medical treatment areas such as pediatric ICU units, pediatric operating rooms, recovery rooms, MRI scanning, CT scan facilities and ultrasound rooms. This floor is designed with controlled environments and modern medical equipment required for critical pediatric care.</p>
        <h2>Second Floor Planning</h2>
        <p>The Second Floor mainly consists of pediatric wards including general wards, private rooms and semi-private rooms. Nurse stations are placed centrally so medical staff can easily monitor children and respond quickly in emergencies. Waiting areas and support rooms are also included for patient attendants.</p>
        <h2>Architecture Benefits</h2>
        <p>Modern children hospital architecture improves patient safety, infection control and treatment efficiency. Bright colors, open spaces and child-friendly design help reduce stress for children and their families while improving the overall hospital environment.</p>
        <h2>Construction & Space Efficiency</h2>
        <p>Hospitals are designed with wide corridors, elevators, emergency exits and separate service areas. Efficient planning ensures smooth patient movement and proper separation of treatment areas, service areas and visitor zones.</p>
        <h2>Estimated Construction Cost</h2>
        <p>The estimated construction cost for a medium size children hospital in India generally ranges between ₹2000 and ₹3500 per square foot depending on construction materials, infrastructure systems and medical equipment.</p>
        <h2>Construction Method & Materials</h2>
        <p>Children hospitals are constructed using reinforced concrete structures, steel reinforcement, fire-resistant materials, antibacterial flooring, medical-grade wall coatings and advanced ventilation systems to maintain clean air quality.</p>
        <h2>Advantages</h2>
        <p>Children hospitals provide specialized pediatric healthcare services under one roof including emergency treatment, surgeries, diagnostic imaging, pediatric wards and intensive care units for infants and children.</p>
        <h2>Children Hospital Arrangement</h2>
        <p>Hospital departments are arranged in separate zones such as emergency areas, treatment areas and inpatient wards. Emergency and outpatient services are located on the ground floor while inpatient wards are located on upper floors for better patient comfort.</p>
        <h2>Space Occupied</h2>
        <p>A standard three-floor children hospital may occupy approximately 30,000 to 70,000 square feet depending on the number of beds, medical departments and treatment facilities.</p>
      </div>

      <div className="card approveCard">
        <div className="checkboxArea">
          <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
          <span>This entire Children Hospital design is OK for me</span>
        </div>
        <button className="approveBtn" onClick={handleApprove}>Book Now</button>
      </div>

    </div>
  );
}

export default ChildrenHospitalForm;