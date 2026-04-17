import React from "react";
import { useNavigate } from "react-router-dom";

import GTwoResidentialApartmentImg from "./images/GTwoResidentialApartmentImg.png";
import GThreeResidentialApartmentImg from "./images/GThreeResidentialApartmentImg.png";
import GThreeModernResidentialApartmentImg from "./images/GThreeModernResidentialApartmentImg.png";
import GFourResidentialApartmentImg from "./images/GFourResidentialApartmentImg.png";
import GFiveResidentialApartmentImg from "./images/GFiveResidentialApartmentImg.png";
import GFiveModernResidentialApartmentImg from "./images/GFiveModernResidentialApartmentImg.png";

function ApartmentDesigns() {

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

.card{
width:320px;
height:270px;
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

<h1>Apartment Designs</h1>

<div className="card-container">

<div className="card">
<img src={GTwoResidentialApartmentImg} alt="GTwoResidentialApartment"/>
<h3>Ground Floor + 2 Floors Residential Apartment</h3>
<button onClick={() => navigate("/gtwoapartment-form")}>
  View
</button>
</div>

<div className="card">
<img src={GThreeResidentialApartmentImg} alt="GThreeResidentialApartment"/>
<h3>Ground Floor + 3 Floors Residential Apartment</h3>
<button onClick={() => navigate("/gthreeresidentialapartment-form")}>
  View
</button>
</div>

<div className="card">
<img src={GThreeModernResidentialApartmentImg} alt="GThreeModernResidentialApartment"/>
<h3>Ground Floor + 3 Floors Modern Residential Apartment</h3>
<button onClick={() => navigate("/gthreemodernresidentialapartment-form")}>
  View
</button>
</div>

<div className="card">
<img src={GFourResidentialApartmentImg} alt="GFourResidentialApartment"/>
<h3>Ground Floor + 4 Floors Residential Apartment</h3>
<button onClick={() => navigate("/gfourapartment-form")}>
  View
</button>
</div>

<div className="card">
<img src={GFiveResidentialApartmentImg} alt="GFiveResidentialApartment"/>
<h3>Ground Floor + 5 Floors Residential Apartment</h3>
<button onClick={() => navigate("/gfiveapartment-form")}>
  View
</button>
</div>

<div className="card">
<img src={GFiveModernResidentialApartmentImg} alt="GFiveModernResidentialApartment"/>
<h3>Ground Floor + 5 Floors Modern Residential Apartment</h3>
<button onClick={() => navigate("/gfivemodernapartment-form")}>
  View
</button>
</div>

</div>

</>
);
}

export default ApartmentDesigns;