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
          background-color: #f0f4f8;
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
          height: auto;
          min-height: 320px;
          background-color: #ffffff;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s;
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
          font-size: 14px;
          color: #666;
          padding: 0 15px;
          margin-bottom: 15px;
          line-height: 1.4;
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
            font-size: 22px !important;
            margin-top: 70px;
          }
        }
      `}</style>

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
          <img src={ThreeStoreyHouseImg} alt="" />
          <h3>Three Storey House</h3>
          <p>Three-floor family residence</p>
          <button onClick={() => navigate("/threestorey")}>
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
          <img src={VillaHouseImg} alt="House" />
          <h3>Villa</h3>
          <p>Luxury independent villa for families</p>
          <button onClick={() => navigate("/villa")}>
           View
          </button>
        </div>

    

      </div>

      
    </>
  );
}

export default HomeDesigns;