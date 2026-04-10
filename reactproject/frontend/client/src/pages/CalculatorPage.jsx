import React, { useState } from "react";
import CalculatorBgImg from "./images/CalculatorBgImg.jpg";


function SmartDesignCalculator(){

const [form,setForm] = useState({
project:"",
area:"",
floors:"",
cost:"",
parking:"",
interior:"",
rooms:"",
bathrooms:"",
lift:""
})

const [result,setResult] = useState(null)

function handleChange(e){
setForm({...form,[e.target.name]:e.target.value})
}

function calculate(){

const construction = form.area * form.floors * form.cost
const parkingCost = form.parking * 400
const interiorCost = construction * (form.interior/100)

const roomCost = form.rooms * 50000
const bathroomCost = form.bathrooms * 30000
const liftCost = form.lift * 800000

const total =
construction +
parkingCost +
interiorCost +
roomCost +
bathroomCost +
liftCost

setResult({
construction,
parkingCost,
interiorCost,
roomCost,
bathroomCost,
liftCost,
total
})

}

const styles={

container:{
height:"100vh",
display:"flex",
justifyContent: result ? "space-evenly" : "center",
alignItems:"center",
backgroundImage:`url(${CalculatorBgImg})`,
backgroundSize:"cover",
backgroundPosition:"center",
fontFamily:"Arial",
transition:"0.5s"
},


calculator:{
background:"rgba(255,255,255,0.9)",
padding:"30px",
borderRadius:"10px",
width:"360px",
boxShadow:"0 0 20px rgba(0,0,0,0.4)"
},

resultBox:{
background:"rgba(255,255,255,0.9)",
padding:"30px",
borderRadius:"10px",
width:"360px",
boxShadow:"0 0 20px rgba(0,0,0,0.4)"
},

title:{
textAlign:"center",
fontSize:"28px",
marginBottom:"15px",
fontweight:"bold",
color: "darkred"
},

input:{
width:"100%",
padding:"10px",
marginBottom:"10px",
borderRadius:"5px",
border:"1px solid #ccc"
},

button:{
width:"100%",
padding:"10px",
background:"darkred",
color:"white",
border:"none",
borderRadius:"5px",
cursor:"pointer"
}

}

return(

<div style={styles.container}>

<div style={styles.calculator}>

<div style={styles.title}>Design Calculator</div>

<select style={styles.input} name="project" onChange={handleChange}>
<option value="">Select Project</option>
<option>Home</option>
<option>Hospital</option>
<option>Shopping Mall</option>
<option>Restaurant</option>
<option>Apartment</option>
<option>College</option>
</select>

<input style={styles.input} type="number" name="area" placeholder="Total Area (sq ft)" onChange={handleChange}/>

<input style={styles.input} type="number" name="floors" placeholder="Floors" onChange={handleChange}/>

<input style={styles.input} type="number" name="cost" placeholder="Cost per sq ft" onChange={handleChange}/>

<input style={styles.input} type="number" name="parking" placeholder="Parking Area (sq ft)" onChange={handleChange}/>

<input style={styles.input} type="number" name="interior" placeholder="Interior Cost %" onChange={handleChange}/>

<input style={styles.input} type="number" name="rooms" placeholder="Number of Rooms" onChange={handleChange}/>

<input style={styles.input} type="number" name="bathrooms" placeholder="Bathrooms" onChange={handleChange}/>

<input style={styles.input} type="number" name="lift" placeholder="Number of Lifts" onChange={handleChange}/>

<button style={styles.button} onClick={calculate}>
Calculate
</button>

</div>

{result && (

<div style={styles.resultBox}>

<div style={styles.title}>Result</div>

<p><b>Construction :</b> ₹{result.construction}</p>

<p><b>Parking Cost :</b> ₹{result.parkingCost}</p>

<p><b>Interior :</b> ₹{result.interiorCost}</p>

<p><b>Room Cost :</b> ₹{result.roomCost}</p>

<p><b>Bathroom Cost :</b> ₹{result.bathroomCost}</p>

<p><b>Lift Cost :</b> ₹{result.liftCost}</p>

<hr/>

<h3>Total Budget : ₹{result.total}</h3>

</div>

)}

</div>

)

}

export default SmartDesignCalculator;