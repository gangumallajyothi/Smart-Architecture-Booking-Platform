import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HouseImage from "./images/HouseImage.jpg";
import HospitalImage from "./images/HospitalImage.png";
import ShoppingMallImage from "./images/ShoppingMallImage.png";
import RestaurantImage from "./images/RestaurantImage.png";
import CollegeImage from "./images/CollegeImage.png";
import ApartmentImage from "./images/ApartmentImage.png";
import calculator from "./images/calculator.png"; // ✅ calculator image import

function Homepage() {
  const navigate = useNavigate();

  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f6f8;
          margin: 0;
          padding: 0;
        }

        h1 {
          text-align: center;
          margin: 20px 0;
          color: #2c3e50;
        }

        .back-btn {
          position: fixed;
          top: 15px;
          left: 15px;
          padding: 10px 18px;
          background-color: #2ecc71;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          z-index: 1000;
        }

        /* ✅ Calculator icon - top RIGHT corner */
        .calculator-icon {
          position: fixed;
          top: 12px;
          right: 15px;
          height: 40px;
          cursor: pointer;
          z-index: 1000;
        }

        /* ✅ Menu - top right below icon */
        .calculator-menu {
          position: fixed;
          top: 60px;
          right: 15px;
          background: white;
          padding: 10px 20px;
          border-radius: 6px;
          box-shadow: 0 0 10px gray;
          cursor: pointer;
          font-weight: bold;
          z-index: 1000;
        }

        .calculator-menu:hover {
          background-color: #f0f0f0;
        }

        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 40px;
          padding: 20px 10px;
          justify-content: center;
        }

        .card {
          background: #ffffff;
          border-radius: 10px;
          height: auto; min-height: 330px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 10px 10px 0 0;
        }

        .card h3 {
          margin: 10px 0;
          color: #34495e;
        }

        .card p {
          padding: 0 12px;
          color: #555;
          font-size: 14px;
        }

        .card button {
          margin: 15px 0;
          padding: 8px 16px;
          border: none;
          background-color: #3498db;
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }

        .card button:hover {
          background-color: #2980b9;
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

      {/* BACK - top left */}
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      {/* ✅ Calculator Icon - top RIGHT corner */}
      <img
        src={calculator}
        alt="calculator"
        className="calculator-icon"
        onClick={() => setShowCalculator(!showCalculator)}
      />

      {/* ✅ Design Cost Analyzer Menu - below calculator icon */}
      {showCalculator && (
        <div
          className="calculator-menu"
          onClick={() => navigate("/calculator")}
        >
          Design Cost Analyzer
        </div>
      )}

      <h1>Digital Building Plan Design & Execution System</h1>

      <div className="card-container">
        <div className="card">
          <img src={HouseImage} alt="Home" />
          <h3>Home Design</h3>
          <p>Modern residential building designs.</p>
          <button onClick={() => navigate("/house")}>View Plan</button>
        </div>

        <div className="card">
          <img src={HospitalImage} alt="Hospital" />
          <h3>Hospital Design</h3>
          <p>Medical standard hospital layouts.</p>
          <button onClick={() => navigate("/hospital")}>View Plan</button>
        </div>

        <div className="card">
          <img src={ShoppingMallImage} alt="Shopping Mall" />
          <h3>Shopping Mall</h3>
          <p>Commercial mall infrastructure plans.</p>
          <button onClick={() => navigate("/shoppingmall")}>View Plan</button>
        </div>

        <div className="card">
          <img src={RestaurantImage} alt="Restaurant" />
          <h3>Restaurant Design</h3>
          <p>Modern Restaurant Interior & Exterior Design</p>
          <button onClick={() => navigate("/restaurant")}>View Plan</button>
        </div>

        <div className="card">
          <img src={ApartmentImage} alt="Apartment" />
          <h3>Apartment Design</h3>
          <p>Multi-floor apartment layouts.</p>
          <button onClick={() => navigate("/apartment")}>View Plan</button>
        </div>

        <div className="card">
          <img src={CollegeImage} alt="College" />
          <h3>College Design</h3>
          <p>Campus buildings & labs planning.</p>
          <button onClick={() => navigate("/college")}>View Plan</button>
        </div>
      </div>

    </>
  );
}

export default Homepage;