import React from "react";
import { useNavigate } from "react-router-dom";

import RegionalShoppingMallImg from "./images/RegionalShoppingMallImg.png";
import LifestyleShoppingMallImg from "./images/LifestyleShoppingMallImg.png";
import NeighbourhoodShoppingMallImg from "./images/NeighbourhoodShoppingMallImg.png";
import CommunityShoppingMallImg from "./images/CommunityShoppingMallImg.png";
import FashionShoppingMallImg from "./images/FashionShoppingMallImg.png";
import SuperRegionalShoppingMallImg from "./images/SuperRegionalShoppingMallImg.png";

function ShoppingMallDesigns() {

const navigate = useNavigate();

return (
<>
<style>{`

// body{
// margin:0;
// font-family:Arial, sans-serif;
// background: #f5f7fa;
// }
body{
margin:0;
font-family:Arial, sans-serif;

background: linear-gradient(-45deg,
#fef9f9,
#f8fbff,
#f0fff4,
#fffaf0,
#f9f0ff,
#f0f8ff,
#fdf6ec,
#f3fff9,
#fff0f6,
#f5faff);

background-size:500% 500%;
animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG{

0%{
background-position:0% 50%;
}

50%{
background-position:100% 50%;
}

100%{
background-position:0% 50%;
}
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

<h1>Shopping Mall Designs</h1>

<div className="card-container">

<div className="card">
<img src={RegionalShoppingMallImg} alt="Regional Shopping Mall"/>
<h3>Regional Shopping Mall</h3>
<button onClick={() => navigate("/regionalshoppingmall-form")}>
  View
</button>
</div>

<div className="card">
<img src={LifestyleShoppingMallImg} alt="Lifestyle Shopping Mall"/>
<h3>Lifestyle Shopping Mall</h3>
<button onClick={() => navigate("/lifestyleshoppingmall-form")}>
  View
</button>
</div>

<div className="card">
<img src={NeighbourhoodShoppingMallImg} alt="Neighbourhood Shopping Mall"/>
<h3>Neighbourhood Shopping Mall</h3>
<button onClick={() => navigate("/neighbourhoodshoppingmall-form")}>
  View
</button>
</div>

<div className="card">
<img src={CommunityShoppingMallImg} alt="Community Shopping Mall"/>
<h3>Community Shopping Mall</h3>
<button onClick={() => navigate("/communityshoppingmall-form")}>
  View
</button>
</div>

<div className="card">
<img src={FashionShoppingMallImg} alt="Fashion Shopping Mall"/>
<h3>Fashion Shopping Mall</h3>
<button onClick={() => navigate("/fashionshoppingmall-form")}>
View
</button>
</div>

<div className="card">
<img src={SuperRegionalShoppingMallImg} alt="SuperRegional Shopping Mall"/>
<h3>Super Regional Shopping Mall</h3>
<button onClick={() => navigate("/superregionalshoppingmall-form")}>
  View
</button>
</div>

</div>

</>
);
}

export default ShoppingMallDesigns;