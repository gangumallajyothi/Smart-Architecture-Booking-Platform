import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterBgImg from "./images/RegisterBgImg.png";

function RegisterPage() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    projectType: ""
  })

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // ✅ Block letters and special characters — allow only digits
  function handlePhoneKeyDown(e) {
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
    if (allowedKeys.includes(e.key)) return;
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()

    // ✅ Phone number must be exactly 10 digits
    if (!/^\d{10}$/.test(form.phone)) {
      setError("Phone number must be exactly 10 digits (numbers only).")
      return
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setError("")

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          phone: form.phone,
          projectType: form.projectType
        })
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true)
        setTimeout(() => {
          navigate("/login")
        }, 2000)
      } else {
        setError(data.error || "Registration Failed")
      }

    } catch (err) {
      setError("Server error. Please check if the backend is running.")
    }
  }

  const styles = {
    container: { height: "100vh", width: "100%", position: "relative", fontFamily: "Arial" },
    bg: { height: "100%", width: "100%", objectFit: "cover", position: "absolute", zIndex: "-1" },
    formBox: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "rgba(255,255,255,0.95)", padding: "40px", borderRadius: "12px", width: "400px", boxShadow: "0 0 20px rgba(0,0,0,0.4)" },
    title: { textAlign: "center", fontSize: "28px", fontWeight: "bold", marginBottom: "20px", color: "darkorange" },
    input: { padding: "12px", marginBottom: "12px", width: "100%", borderRadius: "6px", border: "1px solid #ccc", fontSize: "14px" },
    button: { padding: "12px", width: "100%", background: "darkorange", color: "white", border: "none", borderRadius: "6px", fontSize: "16px", cursor: "pointer" },
    success: { color: "green", textAlign: "center", marginTop: "10px", fontWeight: "bold" },
    error: { color: "red", textAlign: "center", marginBottom: "10px" }
  }

  return (
    <div style={styles.container}>
      <img src={RegisterBgImg} alt="Register Background" style={styles.bg} />
      <div style={styles.formBox}>
        <div style={styles.title}>Create Account</div>

        <form onSubmit={handleSubmit}>
          {error && <div style={styles.error}>{error}</div>}

          <input style={styles.input} type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input style={styles.input} type="email" name="email" placeholder="Email Address" onChange={handleChange} required />

          {/* ✅ Phone: numbers only, max 10 digits */}
          <input
            style={styles.input}
            type="tel"
            name="phone"
            placeholder="Phone Number (10 digits)"
            onChange={handleChange}
            onKeyDown={handlePhoneKeyDown}
            maxLength={10}
            required
          />

          <select style={styles.input} name="projectType" onChange={handleChange} required>
            <option value="">Select Project Type</option>
            <option>House</option>
            <option>Hospital</option>
            <option>Restaurant</option>
            <option>College</option>
            <option>Shopping Mall</option>
            <option>Apartment</option>
          </select>

          <input style={styles.input} type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input style={styles.input} type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />

          <button style={styles.button}>Create Account</button>
        </form>

        {success && <div style={styles.success}>Account Created Successfully ✅ Redirecting...</div>}
      </div>
    </div>
  )
}

export default RegisterPage;