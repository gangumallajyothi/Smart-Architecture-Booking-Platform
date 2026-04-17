import React from "react";
import { useNavigate } from "react-router-dom";
import IndependentHouseImg from "./images/IndependentHouseImg.jpg";
import DuplexHouseImg from "./images/DuplexHouseImg.jpg";
import VillaHouseImg from "./images/VillaHouseImg.jpeg";
import TriplexHouseImg from "./images/TriplexHouseImg.avif";
import SemiDetachedHouseImg from "./images/SemiDetachedHouseImg.jpg";
import ThreeStoreyHouseImg from "./images/ThreeStoreyHouseImg.jpg";



function HomeDesigns() {
  const navigate = useNavigate();   


  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f2f4f7;
        }

        h1 {
          text-align: center;
          margin: 20px 0;
          color: #2c3e50;
          font-weight: bold;
        }

        .back-btn {
          position: fixed;
          top: 15px;
          left: 15px;
          padding: 10px 16px;
          background-color: #27ae60;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 25px;
          padding: 20px 10px 80px;
          justify-items: center;
        }

        .card {
          width: 100%; max-width: 100%; max-width: 100%; max-width: 320px;
          height: auto; min-height: 280px;
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          text-align: center;
          transition: transform 0.3s;
          overflow: hidden;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .card img {
          width: 100%;
          height: 165px;
          object-fit: cover;
        }

        .card h3 {
          margin: 10px 0 5px;
          color: #2c3e50;
        }

        .card p {
          font-size: 13px;
          color: #555;
          padding: 0 10px;
        }

        .card button {
          margin-top: 8px;
          padding: 7px 14px;
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

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>Home Designs</h1>

      <div className="card-container">

        <div className="card">
          <img src={IndependentHouseImg} alt="Independent House" />
          <h3>Independent House</h3>
          <p>Standalone family residential home</p> 
          <button onClick={() => navigate("/independent")}>
           View
          </button>
        </div>
        

        <div className="card">
          <img src={DuplexHouseImg} alt="House" />
          <h3>Duplex House</h3>
          <p>Two-floor family house design</p>
           <button onClick={() => navigate("/duplex")}>
           View
          </button>
        </div>

        <div className="card">
          <img src={VillaHouseImg} alt="House" />
          <h3>Villa</h3>
          <p>Luxury independent villa for families</p>
          <button onClick={() => navigate("/villa")}>
           View
          </button>
        </div>

      

        <div className="card">
          <img src={TriplexHouseImg} alt="House" />
          <h3>Triplex House</h3>
          <p>Three-level residential house</p>
          <button onClick={() => navigate("/triplex-house")}>
           View
          </button>
        </div>

        <div className="card">
          <img src={SemiDetachedHouseImg} alt="" />
          <h3>Semi-Detached House</h3>
          <p>Two houses sharing one wall</p>
          <button onClick={() => navigate("/semidetached-house")}>
           View
          </button>
        </div>

        <div className="card">
          <img src={ThreeStoreyHouseImg} alt="" />
          <h3>Three Storey House</h3>
          <p>Three-floor family residence</p>
          <button onClick={() => navigate("/threestorey")}>
           View
          </button>
        </div>

    

      </div>

      
    </>
  );
}

export default HomeDesigns;