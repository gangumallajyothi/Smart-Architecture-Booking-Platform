import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrthopedicHospitalImg from "./images/OrthopedicHospitalImg.png";
import OrthopedicArchitecture from "./images/OrthopedicArchitecture.png";

function OrthopedicHospitalForm() {
  const navigate = useNavigate();
  const [approved, setApproved] = useState(false);

  const goBack = () => {
    window.history.back();
  };

  const handleApprove = async () => {
    if (!approved) {
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
            projectType: "Orthopedic Hospital",
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
        body { margin:0; font-family:Arial, Helvetica, sans-serif; background:#f5f6fa; }
        .container { padding:20px; }
        .backBtn { background:green; color:white; border:none; padding:10px 20px; font-size:16px; border-radius:6px; cursor:pointer; margin-bottom:20px; }
        .backBtn:hover { background:darkred; }
        .card { background:white; padding:20px; margin-bottom:25px; border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1); }
        .imageRow { display:flex; gap:20px; }
        .imageCard { flex:1; min-width: 300px; text-align:center; }
        .imageCard img { width:90%; height:680px; border-radius:8px; }
        .textCard h2 { color:#003d99; margin-top:15px; }
        .textCard p { line-height:1.7; font-size:15px; }
        .approveCard { display:flex; align-items:center; justify-content:space-between; }
        .checkboxArea { display:flex; align-items:center; gap:10px; font-size:18px; }
        .checkboxArea input { width:25px; height:25px; }
        .approveBtn { background:#003d99; color:white; border:none; padding:12px 20px; border-radius:6px; cursor:pointer; font-size:16px; }
        .approveBtn:hover { background:#001f4d; }
      `}</style>

      <button className="backBtn" onClick={goBack}>← Back</button>

      <div className="card imageRow">
        <div className="imageCard">
          <h3>Orthopedic Hospital Building</h3>
          <img src={OrthopedicHospitalImg} alt="Orthopedic Hospital" />
        </div>
        <div className="imageCard">
          <h3>Orthopedic Hospital Layout</h3>
          <img src={OrthopedicArchitecture} alt="Orthopedic Architecture" />
        </div>
      </div>

      <div className="card textCard">
        <h2>About Orthopedic Hospital</h2>
        <p>An Orthopedic Hospital specializes in diagnosing and treating disorders related to bones, joints, ligaments, muscles and the skeletal system. These hospitals provide advanced medical care for fractures, arthritis, sports injuries, spinal disorders and joint replacement surgeries. The architectural design of an orthopedic hospital focuses on efficient patient movement, surgical precision areas and rehabilitation facilities.</p>
        <h2>Ground Floor Planning</h2>
        <p>The Ground Floor is designed for easy patient access and emergency care. It typically includes the main entrance, reception area, waiting lounge, triage section, emergency department, X-ray rooms, pharmacy and diagnostic laboratories. Outpatient consultation rooms are also located on this floor to allow patients to quickly consult orthopedic specialists.</p>
        <h2>First Floor Planning</h2>
        <p>The First Floor mainly contains specialist consultation rooms, diagnostic laboratories, MRI scanning rooms and physiotherapy units. Doctor cabins and imaging facilities are organized together to improve diagnosis and treatment coordination.</p>
        <h2>Second Floor Planning</h2>
        <p>The Second Floor includes orthopedic wards, advanced diagnostic labs, ICU units and nurse stations. Patients requiring close observation or post-surgical care are monitored on this floor.</p>
        <h2>Third Floor Planning</h2>
        <p>The Third Floor usually contains orthopedic operation theatres, recovery rooms, intensive care units and surgical preparation areas. This floor is designed with strict sterilization zones and controlled environment systems for surgical procedures.</p>
        <h2>Fourth Floor Planning</h2>
        <p>The Fourth Floor is typically dedicated to inpatient wards, private patient rooms and doctor lounge areas. This floor provides a comfortable and quiet environment for patient recovery and long-term orthopedic treatments.</p>
        <h2>Architecture Benefits</h2>
        <p>Orthopedic hospital architecture improves treatment efficiency by separating diagnostic, surgical and recovery zones. Proper planning ensures patient safety, better ventilation, infection control and faster emergency response.</p>
        <h2>Construction & Space Efficiency</h2>
        <p>Hospitals require efficient circulation corridors, elevators, wheelchair accessibility and emergency exits. Space planning ensures smooth movement of patients, doctors and medical equipment.</p>
        <h2>Estimated Construction Cost</h2>
        <p>The estimated construction cost for an orthopedic hospital generally ranges from ₹2500 to ₹4500 per square foot depending on building design, medical infrastructure and equipment installation.</p>
        <h2>Construction Method & Materials</h2>
        <p>Hospitals are built using reinforced concrete structures, steel reinforcement, medical-grade flooring, fire-resistant materials and antibacterial wall finishes. HVAC systems are installed to maintain clean air circulation.</p>
        <h2>Advantages</h2>
        <p>Orthopedic hospitals provide specialized treatment for bone and joint disorders. Advanced surgical facilities, physiotherapy units and rehabilitation services help patients recover faster.</p>
        <h2>Orthopedic Hospital Arrangement</h2>
        <p>Departments are arranged into public zones, clinical zones and surgical zones. Emergency services and outpatient areas are located on lower floors while surgical theatres and wards are placed on upper floors.</p>
        <h2>Space Occupied</h2>
        <p>A typical five-floor orthopedic hospital may occupy between 50,000 and 90,000 square feet depending on the number of beds, departments and surgical facilities available.</p>
      </div>

      <div className="card approveCard">
        <div className="checkboxArea">
          <input type="checkbox" checked={approved} onChange={(e) => setApproved(e.target.checked)} />
          <span>This entire Orthopedic Hospital design is OK for me</span>
        </div>
        <button className="approveBtn" onClick={handleApprove}>Book Now</button>
      </div>

    </div>
  );
}

export default OrthopedicHospitalForm;