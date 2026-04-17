import React from "react";
import { useNavigate } from "react-router-dom";

import GeneralHospitalImg from "./images/GeneralHospitalImg.png";
import MultiSpecialtyHospitalImg from "./images/MultiSpecialtyHospitalImg.png";
import ChildrenHospitalImg from "./images/ChildrenHospitalImg.png";
import OrthopedicHospitalImg from "./images/OrthopedicHospitalImg.png";
import EyeHospitalImg from "./images/EyeHospitalImg.jpg";
import DentalHospitalImg from "./images/DentalHospitalImg.png";

function HospitalDesigns() {

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
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap:25px;
padding:30px 50px 60px;
justify-items:center;
}

/* Card */

.card {
width: 100%; max-width: 320px;
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

`}</style>

<button className="back-btn" onClick={() => navigate(-1)}>
← Back
</button>

<h1>Hospital Designs</h1>

<div className="card-container">

<div className="card">
<img src={GeneralHospitalImg} alt="General Hospital"/>
<h3>General Hospital</h3>
<button onClick={() => navigate("/generalhospital-form")}>
  View
</button>
</div>

<div className="card">
<img src={ChildrenHospitalImg} alt="Children Hospital"/>
<h3>Children Hospital</h3>
<button onClick={() => navigate("/childrenhospital-form")}>
  View
</button>
</div>

<div className="card">
<img src={MultiSpecialtyHospitalImg} alt="Multi Specialty Hospital"/>
<h3>Multi Specialty Hospital</h3>
<button onClick={() => navigate("/multispecialtyhospital-form")}>
  View
</button>
</div>

<div className="card">
<img src={OrthopedicHospitalImg} alt="Orthopedic Hospital"/>
<h3>Orthopedic Hospital</h3>
<button onClick={() => navigate("/orthopedichospital-form")}>
  View
</button>
</div>

<div className="card">
<img src={EyeHospitalImg} alt="Eye Hospital"/>
<h3>Eye Hospital</h3>
<button onClick={() => navigate("/eyehospital-form")}>
View
</button>
</div>

<div className="card">
<img src={DentalHospitalImg} alt="Dental Hospital"/>
<h3>Dental Hospital</h3>
<button onClick={() => navigate("/dentalhospital-form")}>
  View
</button>
</div>

</div>

</>
);
}

export default HospitalDesigns;