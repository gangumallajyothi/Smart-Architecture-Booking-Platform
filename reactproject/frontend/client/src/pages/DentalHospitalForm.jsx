import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DentalHospitalImg from "./images/DentalHospitalImg.png";
import DentalArchitecture from "./images/DentalArchitecture.png";

function DentalHospitalForm() {
  const navigate = useNavigate();
  const [approved, setApproved] = useState(false);

  const handleApprove = async () => {
    if (!approved) {
      alert("You did not tick the approval checkbox");
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
            projectType: "Dental Hospital",
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
    <>
      <style>{`
        body { margin:0; font-family:Arial; background:#f4f6f9; }
        .container { width:95%; margin:auto; }
        .backBtn { background:green; color:white; border:none; padding:10px 20px; font-size:16px; border-radius:6px; cursor:pointer; margin:20px 0; }
        .backBtn:hover { background:darkred; }
        .cards { display:flex; gap:20px; }
        .card { background:white; padding:20px; border-radius:10px; box-shadow:0 0 10px rgba(0,0,0,0.2); flex:1; }
        .card img { width:100%; border-radius:8px; }
        .infoCard { background:white; margin-top:20px; padding:25px; border-radius:10px; box-shadow:0 0 10px rgba(0,0,0,0.2); line-height:1.7; }
         .approveCard { margin-top:30px; background:white; padding:25px; border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,0.2); }
        .approveBtn { margin-top:1px; margin-left:1000px; background: blue; font-weight:bold; color:white; border:none; padding:10px 30px; border-radius:6px; font-size:16px; cursor:pointer; }
        .approveBtn:hover { background:darkblue; }
        .infoCard h3 { color: darkblue; margin-top:20px; }
        .card h2 { color: darkblue; margin-top:20px; }
        .infoCard h2 { color: darkblue; margin-top:20px; }
      
      `}</style>

      <div className="container">

        <button className="backBtn" onClick={() => navigate("/hospital")}>⬅ Back</button>

        <div className="cards">
          <div className="card">
            <h2>Dental Hospital Building</h2>
            <img src={DentalHospitalImg} alt="Dental Hospital" />
          </div>
          <div className="card">
            <h2>Dental Hospital Layout</h2>
            <img src={DentalArchitecture} alt="Dental Architecture" />
          </div>
        </div>

        <div className="infoCard">
          <h2>About Dental Hospital Architecture</h2>
          <p>A Dental Hospital is a specialized healthcare facility designed to provide complete oral health care including dental treatments, surgeries, diagnostic imaging and preventive care. The architecture of a dental hospital must focus on efficient patient movement, proper hygiene control, accessibility and comfort for both patients and doctors.</p>
          <p>This hospital building consists of five floors including Ground Floor, First Floor, Second Floor, Third Floor and Fourth Floor. Each floor is designed to support specific medical services and operational requirements. The layout ensures smooth workflow between departments and reduces patient waiting time.</p>
          <h3>Ground Floor Planning</h3>
          <p>The Ground Floor serves as the main entry point for patients and visitors. It includes essential facilities such as reception, registration, waiting areas and emergency dental care. This floor also contains X-ray rooms, pharmacy, administrative office, consultation OPD rooms and patient waiting areas.</p>
          <p>The ambulance entry is located near the emergency department so that emergency dental cases can be handled quickly. The reception desk manages patient records, appointment scheduling and patient guidance.</p>
          <h3>First Floor Planning</h3>
          <p>The First Floor mainly contains treatment rooms and dental consultation chambers. Multiple treatment rooms allow dentists to perform procedures like fillings, root canal treatments, tooth cleaning and general dental care.</p>
          <p>This floor also includes sterilization utility rooms to maintain hygiene standards. A central waiting area allows patients to wait comfortably before their treatment sessions. Doctors' private rooms and records rooms are also located here.</p>
          <h3>Second Floor Planning</h3>
          <p>The Second Floor is mainly used for diagnostic and advanced dental testing services. This floor includes dental laboratories, CBCT scan rooms, ultrasound imaging and recovery observation rooms.</p>
          <p>Sterilization areas are placed close to laboratories to maintain cleanliness and infection control. Doctors' lounges are also located on this floor to provide rest areas for medical staff.</p>
          <h3>Third Floor Planning</h3>
          <p>The Third Floor contains minor surgery rooms and implant treatment facilities. Advanced procedures such as dental implants, prosthodontic treatments and orthodontic corrections are performed here.</p>
          <p>Minor surgery recovery rooms allow patients to rest after surgical procedures. CSSD sterilization units ensure that all surgical instruments are properly sterilized before use.</p>
          <h3>Fourth Floor Planning</h3>
          <p>The Fourth Floor contains administrative and research spaces including dental laboratories, doctor offices, meeting rooms and hospital administration offices. Human resource departments and storage rooms are also located here.</p>
          <p>This floor is used for hospital management, planning meetings and dental research activities.</p>
          <h3>Architecture Benefits</h3>
          <p>The architectural design of the dental hospital improves patient movement, reduces congestion and increases treatment efficiency. Separate diagnostic areas, treatment rooms and administrative spaces ensure smooth workflow inside the hospital.</p>
          <h3>Construction and Space Efficiency</h3>
          <p>The hospital building uses reinforced concrete structural systems to support multiple floors and medical equipment. Wide corridors, elevators and staircases are included to support patient mobility and emergency evacuation.</p>
          <p>Space planning is optimized to ensure that every department is connected logically, reducing unnecessary movement between departments.</p>
          <h3>Estimated Construction Cost</h3>
          <p>The approximate construction cost for a modern dental hospital building ranges between ₹2000 to ₹3500 per square foot depending on materials, medical equipment and architectural finishes.</p>
          <p>Advanced imaging equipment, dental machines and surgical infrastructure increase the total project cost but improve medical service quality.</p>
          <h3>Construction Methods and Materials</h3>
          <p>The hospital structure is typically constructed using reinforced cement concrete (RCC), steel reinforcement and high-quality concrete foundations. Exterior walls often use glass curtain walls or aluminum panels to improve natural lighting and aesthetics.</p>
          <p>Interior spaces use hygienic materials such as antibacterial flooring, ceramic tiles and stainless steel medical fittings.</p>
          <h3>Advantages of Dental Hospital Architecture</h3>
          <ul>
            <li>Efficient patient flow management</li>
            <li>Separate treatment and diagnostic zones</li>
            <li>Advanced sterilization and hygiene control</li>
            <li>Improved staff working environment</li>
            <li>Better patient comfort and accessibility</li>
          </ul>
          <h3>Dental Hospital Arrangement</h3>
          <p>The hospital arrangement ensures that emergency services are located close to the entrance, diagnostic facilities are centrally located and treatment rooms are arranged in clusters for better supervision by doctors and nurses.</p>
          <h3>Space Occupied</h3>
          <p>A typical multi-floor dental hospital building occupies approximately 25,000 to 60,000 square feet depending on the number of treatment rooms, laboratories and administrative facilities. Proper zoning ensures maximum utilization of available space.</p>
        </div>

        <div className="approveCard">
          <label>
            <input
              type="checkbox"
              checked={approved}
              onChange={() => setApproved(!approved)}
            />
            &nbsp; I approve the complete Dental Hospital plan
          </label>
          <button className="approveBtn" onClick={handleApprove}>Book Now</button>
        </div>

      </div>
    </>
  );
}

export default DentalHospitalForm;