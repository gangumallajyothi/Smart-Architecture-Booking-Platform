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
          background-color: #f0f4f8;
          margin: 0;
          padding: 0;
        }

        h1 {
          text-align: center;
          margin: 40px 0 20px;
          color: #2c3e50;
          font-size: 32px;
          font-weight: bold;
        }

        .back-btn {
          position: fixed;
          top: 15px;
          left: 15px;
          padding: 10px 20px;
          background-color: #27ae60;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          z-index: 1000;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .back-btn:hover {
          background-color: #219150;
        }

        /* ✅ Calculator icon - top RIGHT corner */
        .calculator-icon {
          position: fixed;
          top: 12px;
          right: 15px;
          height: 40px;
          cursor: pointer;
          z-index: 1000;
          background: white;
          padding: 4px;
          border-radius: 6px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          border: 1px solid #ddd;
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
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          padding: 20px 40px 80px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        .card {
          width: 100%;
          max-width: 100%;
          background: #ffffff;
          border-radius: 15px;
          height: auto;
          min-height: 350px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
          overflow: hidden;
          box-sizing: border-box;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }

        .card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
        }

        .card h3 {
          margin: 15px 0 8px;
          color: #2c3e50;
          font-size: 18px;
          padding: 0 10px;
        }

        .card p {
          padding: 0 15px;
          color: #666;
          font-size: 14px;
          line-height: 1.4;
          margin-bottom: 15px;
        }

        .card button {
          margin-bottom: 20px;
          padding: 10px 25px;
          border: none;
          background-color: #3498db;
          color: white;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
          transition: background 0.3s;
        }

        .card button:hover {
          background-color: #2980b9;
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
          .card img {
            height: 160px;
          }
          h1 {
            font-size: 20px !important;
            padding: 0 15px;
            margin-top: 70px;
            margin-bottom: 10px;
          }
        }
      `}</style>

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