import React from "react";
import { useNavigate } from "react-router-dom";

import CafeCoffeeRestaurantImg from "./images/CafeCoffeeRestaurantImg.png";
import EmberFlameRestaurantImg from "./images/EmberFlameRestaurantImg.png";
import GrillzRestaurantImg from "./images/GrillzRestaurantImg.png";
import PalatePlaceRestaurantImg from "./images/PalatePlaceRestaurantImg.png";
import BuffetRestaurantImg from "./images/BuffetRestaurantImg.png";
import SerenityRestaurantImg from "./images/SerenityRestaurantImg.png";

function RestaurantDesigns() {

const navigate = useNavigate();

return (
<>
<style>{`

body{
margin:0;
font-family:Arial, sans-serif;
background:#f0f4f8;
}

/* Heading */

h1{
text-align:center;
margin:40px 0 20px;
color:#2c3e50;
font-size: 32px;
font-weight:bold;
}

/* Back Button */

.back-btn{
position:fixed;
font-weight: bold;
top:15px;
left:15px;
padding:10px 20px;
background: #27ae60;
color:white;
border:none;
border-radius:5px;
cursor:pointer;
transition:0.3s;
z-index: 1000;
box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.back-btn:hover{
background:#219150;
}

/* Cards Grid */

.card-container{
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap:40px;
padding: 20px 15px 80px;
justify-items:center;
}

/* Card */

.card {
width: 100%; 
max-width: 100%;
height: auto; 
min-height: 320px;
background:white;
border-radius:15px;
box-shadow:0 8px 25px rgba(0,0,0,0.1);
text-align:center;
overflow:hidden;
transition:transform 0.3s;
}

.card:hover{
transform:translateY(-5px);
box-shadow: 0 12px 30px rgba(0,0,0,0.15);
}

/* Image */

.card img{
width:100%;
height:200px;
object-fit:cover;
}

/* Title */

.card h3{
margin:20px 0 10px;
color:#2c3e50;
font-size: 20px;
}

/* Button */

.card button{
margin-bottom:25px;
padding:10px 25px;
border:none;
background:#3498db;
color:white;
border-radius:6px;
cursor:pointer;
font-weight: bold;
font-size: 14px;
transition:0.3s;
}

.card button:hover{
background:#2980b9;
}

        @media (max-width: 600px) {
          .card-container {
            grid-template-columns: 1fr !important;
            padding: 15px 12px 80px !important;
            gap: 20px !important;
          }
          .card {
            max-width: 100% !important;
          }
          h1 {
            font-size: 22px !important;
            margin-top: 70px;
          }
        }
          h1 {
            font-size: 26px;
            margin-top: 80px;
          }
        }
      `}</style>

<button className="back-btn" onClick={() => navigate(-1)}>
← Back
</button>

<h1>Restaurant Designs</h1>

<div className="card-container">

<div className="card">
<img src={CafeCoffeeRestaurantImg} alt="Cafe Coffee"/>
<h3>Cafe Coffee Restaurant</h3>
<button onClick={() => navigate("/cafecoffeerestaurant-form")}>
  View
</button>
</div>

<div className="card">
<img src={EmberFlameRestaurantImg} alt="Ember Flame"/>
<h3>Ember Flame Restaurant</h3>
<button onClick={() => navigate("/emberFlamerestaurant-form")}>
  View
</button>
</div>

<div className="card">
<img src={GrillzRestaurantImg} alt="Grillz"/>
<h3>Grillz Restaurant</h3>
<button onClick={() => navigate("/grillz-restaurant-form")}>
  View
</button>
</div>

<div className="card">
<img src={PalatePlaceRestaurantImg} alt="Palate Place Restaurant"/>
<h3>Palate Place Restaurant</h3>
<button onClick={() => navigate("/palate-place-restaurant-form")}>
  View
</button>
</div>

<div className="card">
<img src={BuffetRestaurantImg} alt="Buffet Restaurant"/>
<h3>Buffet Restaurant</h3>
<button onClick={() => navigate("/buffetrestaurant-form")}>
  View
</button>
</div>

<div className="card">
<img src={SerenityRestaurantImg} alt="Serenity"/>
<h3>Serenity Restaurant</h3>
<button onClick={() => navigate("/serenity-restaurant-form")}>
  View
</button>
</div>

</div>

</>
);
}

export default RestaurantDesigns;