import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Building from "./images/Building.png";
import Person from "./images/Person.png";
import Downarrow from "./images/Downarrow.png";
import calculator from "./images/calculator.png";
import call from "./images/call.png";
import Gmail from "./images/Gmail.png";

import BuildingImage from "./images/BuildingImage.jpg";
import DentalHospitalImg from "./images/DentalHospitalImg.png";
import SuperRegionalShoppingMallImg from "./images/SuperRegionalShoppingMallImg.png";
import CafeCoffeeRestaurantImg from "./images/CafeCoffeeRestaurantImg.png";
import ApartmentImg from "./images/ApartmentImg.png";
import EngineeringCollegeImg from "./images/EngineeringCollegeImg.png";

function FirstPage() {

  const navigate = useNavigate();

  const images = [
    BuildingImage,
    DentalHospitalImg,
    SuperRegionalShoppingMallImg,
    CafeCoffeeRestaurantImg,
    ApartmentImg,
    EngineeringCollegeImg
  ]

  const [index, setIndex] = useState(0)
  const [logout, setLogout] = useState(false)
  const [contact, setContact] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)

  const [showNumber, setShowNumber] = useState(false)
  const [showEmail, setShowEmail] = useState(false)

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(slider)
  }, [images.length])

  const handleLogout = () => {
    window.location.href = "https://www.google.com"
  }

  const styles = {

    container: {
      height: "100vh",
      width: "100%",
      position: "relative",
      fontFamily: "Arial",
      overflow: "hidden"
    },

    bg: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      objectPosition: "center",
      position: "absolute",
      zIndex: "-1"
    },

    navbar: {
      position: "absolute",
      top: "15px",
      right: "15px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "15px",
      border: "3px solid #FFC107",
      padding: "10px 20px",
      borderRadius: "10px",
      background: "rgba(255,255,255,0.9)",
      zIndex: "100"
    },

    link: {
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "14px",
      whiteSpace: "nowrap"
    },

    person: {
      height: "25px",
      cursor: "pointer"
    },

    arrow: {
      height: "12px",
      cursor: "pointer"
    },

    logoutBox: {
      position: "absolute",
      top: "60px",
      right: "10px",
      background: "white",
      padding: "10px",
      borderRadius: "6px",
      boxShadow: "0 0 10px gray",
      cursor: "pointer",
      zIndex: "101"
    },

    contactBox: {
      position: "absolute",
      top: "60px",
      right: "10px",
      background: "white",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0 0 10px gray",
      zIndex: "101",
      minWidth: "200px"
    },

    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      margin: "8px",
      cursor: "pointer",
      fontSize: "14px"
    },

    icon: {
      height: "20px"
    },

    marquee: {
      position: "absolute",
      top: "55%", /* Adjusted slightly lower to align with building image center-bottom */
      transform: "translateY(-50%)",
      fontSize: "24px",
      color: "darkorange",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      width: "100%",
      textAlign: "center"
    },

    buildingIcon: {
      height: "30px"
    },

    calculatorIcon: {
      position: "absolute",
      left: "15px",
      top: "15px",
      height: "45px",
      cursor: "pointer",
      zIndex: "100",
      background: "white",
      borderRadius: "6px",
      padding: "4px",
      boxShadow: "0 0 10px rgba(0,0,0,0.3)",
      border: "2px solid #333"
    },

    calculatorMenu: {
      position: "absolute",
      top: "70px",
      left: "15px",
      background: "white",
      padding: "10px 20px",
      borderRadius: "6px",
      boxShadow: "0 0 10px gray",
      cursor: "pointer",
      fontWeight: "bold",
      zIndex: "100"
    }

  }

  return (

    <div style={styles.container}>

      <img src={images[index]} alt="" style={styles.bg} />

      {/* Calculator Icon */}
      <img
        src={calculator}
        alt="calculator"
        style={styles.calculatorIcon}
        onClick={() => setShowCalculator(!showCalculator)}
      />

      {/* Calculator Menu — clicks cheste login page ki navigate avutundi ✅ */}
      {showCalculator && (
        <div
          style={styles.calculatorMenu}
          onClick={() => navigate("/login")}
        >
          Design Cost Analyzer
        </div>
      )}

      {/* Navbar */}
      <div className="responsive-navbar" style={styles.navbar}>

        <span style={styles.link} onClick={() => navigate("/register")}>
          Register
        </span>

        <span style={styles.link} onClick={() => navigate("/login")}>
          Login
        </span>

        <span style={styles.link} onClick={() => navigate("/aboutus")}>About Us</span>

        <span
          style={styles.link}
          onClick={() => setContact(!contact)}
        >
          Contact Us
        </span>

        <img src={Person} alt="" style={styles.person} />

        <img
          src={Downarrow}
          alt=""
          style={styles.arrow}
          onClick={() => setLogout(!logout)}
        />

      </div>

      {/* Logout */}
      {logout && (
        <div
          style={styles.logoutBox}
          onClick={handleLogout}
        >
          Logout
        </div>
      )}

      {/* Contact */}
      {contact && (
        <div style={styles.contactBox}>

          {/* Call */}
          <div
            style={styles.contactItem}
            onClick={() => {
              setShowNumber(!showNumber)
              setShowEmail(false)
            }}
          >
            <img src={call} alt="" style={styles.icon} />
            Contact
          </div>

          {showNumber && (
            <div style={{ marginLeft: "35px" }}>
              <a href="tel:+919876543210">+91 9876543210</a>
            </div>
          )}

          {/* Gmail */}
          <div
            style={styles.contactItem}
            onClick={() => {
              setShowEmail(!showEmail)
              setShowNumber(false)
            }}
          >
            <img src={Gmail} alt="" style={styles.icon} />
            Gmail
          </div>

          {showEmail && (
            <div style={{ marginLeft: "35px" }}>
              <a href="mailto:teja@gmail.com">teja@gmail.com</a>
            </div>
          )}

        </div>
      )}

      {/* Scrolling Heading */}
      <div className="responsive-marquee" style={{
        ...styles.marquee,
        whiteSpace: "nowrap",
        overflow: "hidden",
        width: "100%",
        animation: "scroll-left 15s linear infinite"
      }}>

        <img src={Building} alt="" style={styles.buildingIcon} />

        <span>Welcome to Smart Architecture Booking Platform</span>

      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(100%) }
          100% { transform: translateX(-100%) }
        }
        @media (max-width: 768px) {
          .responsive-navbar {
            flex-wrap: wrap !important;
            justify-content: center !important;
            right: 5px !important;
            left: 5px !important;
            top: 60px !important;
            gap: 10px !important;
          }
          .responsive-marquee {
            font-size: 24px !important;
          }
        }
      `}</style>

    </div>

  )

}

export default FirstPage;