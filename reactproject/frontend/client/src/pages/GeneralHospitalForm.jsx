import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GeneralHospitalImg from "./images/GeneralHospitalImg.png";
import GeneralHospitalArchitecture from "./images/GeneralHospitalArchitecture.png";

function GeneralHospitalForm() {
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
            projectType: "General Hospital",
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
        .imageCard img { width:100%; border-radius:8px; }
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
          <h3>General Hospital Building</h3>
          <img src={GeneralHospitalImg} alt="General Hospital" />
        </div>
        <div className="imageCard">
          <h3>Hospital Architecture Layout</h3>
          <img src={GeneralHospitalArchitecture} alt="General Hospital Architecture" />
        </div>
      </div>

      <div className="card textCard">
        <h2>About General Hospital</h2>
        <p>A General Hospital is a large healthcare facility designed to provide comprehensive medical services for patients. These hospitals offer diagnosis, treatment, surgeries, emergency care and long-term medical support. The architecture of a hospital plays a major role in ensuring efficient movement of patients, doctors and medical equipment while maintaining hygiene and safety standards.</p>
        <h2>Ground Floor Planning</h2>
        <p>The Ground Floor is designed for public access and emergency services. It usually contains the main entrance, reception area, patient registration counters, waiting areas, emergency department, pharmacy, laboratory testing rooms and ambulance entry. This floor is planned in a way that patients can quickly reach emergency medical services without delay.</p>
        <h2>First Floor Planning</h2>
        <p>The First Floor is generally used for critical medical facilities such as operation theatres, MRI scanning rooms, CT scan units, ICU (Intensive Care Unit), and recovery rooms. This floor requires advanced medical infrastructure and sterile environments to ensure safe surgeries and treatments.</p>
        <h2>Second Floor Planning</h2>
        <p>The Second Floor usually contains patient wards including general wards, semi-private rooms and private patient rooms. A nurse station is centrally located on this floor so that medical staff can easily monitor patient health conditions and provide quick medical care.</p>
        <h2>Third Floor Planning</h2>
        <p>The Third Floor is mainly dedicated to inpatient departments, special treatment rooms and patient observation units. This floor also includes additional nurse stations, patient support facilities and medical equipment rooms required for specialized treatments.</p>
        <h2>Fourth Floor Planning</h2>
        <p>The Fourth Floor typically includes special wards, consultation rooms, specialist doctor cabins and administrative areas. These departments support advanced medical consultation and hospital management functions.</p>
        <h2>Fifth Floor Planning</h2>
        <p>The Fifth Floor may contain VIP patient rooms, meeting rooms, hospital administration offices and staff facilities. It may also include training rooms or conference halls for medical staff development programs.</p>
        <h2>Architecture Benefits</h2>
        <p>Modern hospital architecture improves efficiency by organizing departments based on medical functions. It ensures better ventilation, patient comfort, safety standards and quick movement for doctors and medical staff.</p>
        <h2>Construction & Space Efficiency</h2>
        <p>Hospitals are designed with wide corridors, elevators, separate service routes and emergency exits. Proper planning ensures that patient areas, treatment areas and service zones do not interfere with each other.</p>
        <h2>Estimated Construction Cost</h2>
        <p>The approximate construction cost for a medium-scale general hospital in India ranges between ₹2000 and ₹3500 per square foot depending on building materials, infrastructure and medical equipment installations.</p>
        <h2>Construction Method & Materials</h2>
        <p>Hospitals are usually built using reinforced concrete structures, steel reinforcements, fire-resistant materials, medical grade flooring and antibacterial wall coatings. Advanced HVAC systems are also installed to maintain clean air circulation.</p>
        <h2>Advantages</h2>
        <p>General hospitals provide multiple healthcare services under one roof including emergency care, surgeries, diagnostic testing, inpatient wards and specialist medical consultation.</p>
        <h2>General Hospital Arrangement</h2>
        <p>Hospital layouts are carefully organized into three zones: public areas, clinical areas and service areas. Emergency and outpatient departments are located near entrances while patient wards are placed on upper floors for privacy and quietness.</p>
        <h2>Space Occupied</h2>
        <p>A standard five-floor general hospital may occupy around 40,000 to 100,000 square feet depending on the number of beds, departments and medical facilities provided.</p>
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

export default GeneralHospitalForm;