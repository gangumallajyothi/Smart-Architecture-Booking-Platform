import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpringdaleArtsScienceCollegeImg from "./images/SpringdaleArtsScienceCollegeImg.png";
import SpringdaleArtsScienceCollegeArchitecture from "./images/SpringdaleArtsScienceCollegeArchitecture.png";

function SpringdaleArtsScienceCollegeForm() {
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
          projectType: "Springdale Arts & Science College",
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
        🎓 Springdale Arts & Science College – Center for Arts, Science & Knowledge
      </div>

      <div className="imageSection">
        <div className="card">
          <img src={SpringdaleArtsScienceCollegeImg} alt="Springdale ArtsScience College" />
        </div>
        <div className="card">
          <img src={SpringdaleArtsScienceCollegeArchitecture} alt="Springdale ArtsScience College Architecture" />
        </div>
      </div>

      <div className="contentCard">
        <h2>🎓 About Springdale Arts & Science College</h2>
        <p>Springdale Arts & Science College is an educational institution designed to provide higher education in arts, science, and academic research. The building consists of Ground Floor, First Floor, and Second Floor, including classrooms, seminar halls, staff rooms, administrative offices, and academic spaces. The architecture focuses on a clean academic environment with spacious corridors and well-organized classrooms for students and faculty.</p>
        <h3>🏢 Ground Floor Planning</h3>
        <p>The ground floor mainly contains administrative and academic facilities. It includes the Principal's Room, Office Rooms, Accounts Hall, Staff Room, and several Classrooms for teaching. A central corridor connects all rooms and provides smooth movement across the floor. This floor handles administration and basic academic activities.</p>
        <h3>🏫 First Floor Planning</h3>
        <p>The first floor is designed mainly for teaching and academic interaction. It includes multiple classrooms, staff rooms, and seminar halls where students attend lectures and academic discussions. The seminar rooms allow presentations, workshops, and academic meetings for students and faculty.</p>
        <h3>🏫 Second Floor Planning</h3>
        <p>The second floor focuses on additional classrooms and seminar halls to support higher student capacity. The layout is similar to the first floor with classrooms arranged along a long corridor and staff rooms at the ends. This design ensures easy access and smooth student movement.</p>
        <h3>🏛 Architecture Benefits</h3>
        <p>The architecture of Springdale Arts & Science College provides a balanced academic structure with symmetrical design and large windows that allow natural lighting and ventilation. Wide corridors improve student circulation and reduce crowding. The simple rectangular layout makes the building easy to navigate.</p>
        <h3>⚙ Construction & Space Efficiency</h3>
        <p>The building layout is designed for efficient use of space by placing classrooms along a central corridor. Administrative offices are located on the ground floor for easy access, while teaching spaces are distributed across upper floors. This arrangement ensures that academic and administrative functions work smoothly without disturbance.</p>
        <h3>⭐ Advantages of Springdale Arts & Science College</h3>
        <p>This college design offers several advantages. It supports a large number of students with multiple classrooms and seminar halls. The presence of staff rooms allows faculty members to manage academic activities efficiently. The organized layout improves accessibility and helps maintain a structured educational environment.</p>
        <h3>🏫 Springdale College Arrangement</h3>
        <p>The Springdale Arts & Science College building includes classrooms, seminar halls, staff rooms, and principal and administrative offices to support academic and management activities. It also has an accounts office, central corridors, and staircases that connect all floors for easy movement. This arrangement creates a comfortable and well-organized academic environment for both students and faculty.</p>
        <h3>📐 Space Occupied</h3>
        <p>Approximate building dimensions: Length: about 60 meters, Width: about 18–20 meters. Area per floor: 1000 – 1200 square meters. Total built-up area (3 floors): 3000 – 3600 square meters. This space is sufficient for classrooms, seminar halls, and administrative areas.</p>
        <h3>🧱 Construction Method & Materials</h3>
        <p>The building is typically constructed using Reinforced Cement Concrete (RCC) frame structure with brick masonry walls. Common materials used include: RCC columns, beams, and slabs, Brick or concrete block walls, Cement plaster and paint finish, Glass windows with aluminum frames, Tile or granite flooring, Steel staircases and railings.</p>
        <h3>💰 Estimated Construction Cost</h3>
        <p>Basic construction: ₹2500 – ₹3500 per sq ft. Interior finishing and furniture: ₹700 – ₹1200 per sq ft. Estimated Total Cost: 💰 ₹8 crore – ₹12 crore (approx.) This includes building construction, classrooms, seminar halls, furniture, and interior finishing.</p>
      </div>

      <div className="declarationCard">
        <div className="checkboxSection">
          <input
            type="checkbox"
            className="bigCheckbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="checkboxText">
            This entire Springdale Arts & Science College design is OK for me
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
        .card { flex:1; min-width: 100%; max-width: 300px; background:white; padding:15px; border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,0.2); }
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
      `}</style>

    </div>
  );
}

export default SpringdaleArtsScienceCollegeForm;