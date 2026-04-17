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