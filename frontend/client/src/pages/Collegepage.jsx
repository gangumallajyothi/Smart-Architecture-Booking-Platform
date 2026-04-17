import React from "react";
import { useNavigate } from "react-router-dom";

import AgricultureCollegeImg from "./images/AgricultureCollegeImg.png";
import EngineeringCollegeImg from "./images/EngineeringCollegeImg.png";
import MedicalCollegeImg from "./images/MedicalCollegeImg.png";
import SpringdaleArtsScienceCollegeImg from "./images/SpringdaleArtsScienceCollegeImg.png";
import InformaticsCollegeImg from "./images/InformaticsCollegeImg.png";
import LawCollegeImg from "./images/LawCollegeImg.png";

function CollegeDesigns() {

const navigate = useNavigate();

return (
<>
<style>{`

body{
margin:0;
font-family:Arial, sans-serif;
background:#eef2f7;
}

/* Heading */

h1{
text-align:center;
margin:20px 0;
color:#2c3e50;
font-weight:bold;
}

/* Back Button */

.back-btn{
position:fixed;
font-weight: bold;
top:15px;
left:15px;
padding:10px 16px;
background: green;
color:white;
border:none;
border-radius:5px;
cursor:pointer;
transition:0.3s;
}

.back-btn:hover{
background:#e74c3c;
}

/* Cards Grid */

.card-container{
display:grid;
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
gap:25px;
padding:30px 50px 60px;
justify-items:center;
}

/* Card */

.card {
width: 100%; max-width: 100%; max-width: 100%; max-width: 320px;
height: auto; min-height: 270px;
background:white;
border-radius:10px;
box-shadow:0 8px 20px rgba(0,0,0,0.2);
text-align:center;
overflow:hidden;
transition:transform 0.3s;
}

.card:hover{
transform:scale(1.05);
}

/* Image */

.card img{
width:100%;
height:165px;
object-fit:cover;
}

/* Title */

.card h3{
margin:10px 0 5px;
color:#2c3e50;
}

/* Button */

.card button{
margin-top:8px;
padding:7px 14px;
border:none;
background:#3498db;
color:white;
border-radius:5px;
cursor:pointer;
transition:0.3s;
}

.card button:hover{
background:#2c80b4;
}

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

<button className="back-btn" onClick={() => navigate(-1)}>
← Back
</button>

<h1>College Designs</h1>

<div className="card-container">

<div className="card">
<img src={AgricultureCollegeImg} alt="Agriculture College"/>
<h3>Agriculture College</h3>
<button onClick={() => navigate("/agriculturecollege-form")}>
  View
</button>
</div>

<div className="card">
<img src={EngineeringCollegeImg} alt="Engineering College"/>
<h3>Engineering College</h3>
<button onClick={() => navigate("/engineeringcollege-form")}>
  View
</button>
</div>

<div className="card">
<img src={MedicalCollegeImg} alt="Medical College"/>
<h3>Medical College</h3>
<button onClick={() => navigate("/medicalcollege-form")}>
  View
</button>
</div>

<div className="card">
<img src={SpringdaleArtsScienceCollegeImg} alt="Springdale Arts & Science College"/>
<h3>Springdale Arts & Science College</h3>
<button onClick={() => navigate("/springdaleartssciencecollege-form")}>
  View
</button>
</div>

<div className="card">
<img src={InformaticsCollegeImg} alt="Informatics College"/>
<h3>Informatics College</h3>
<button onClick={() => navigate("/informaticscollege-form")}>
  View
</button>
</div>

<div className="card">
<img src={LawCollegeImg} alt="Law College"/>
<h3>Law College</h3>
<button onClick={() => navigate("/lawcollege-form")}>
  View
</button>
</div>

</div>

</>
);
}

export default CollegeDesigns;