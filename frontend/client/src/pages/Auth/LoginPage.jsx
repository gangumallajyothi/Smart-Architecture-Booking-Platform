import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginBgImg from "./images/LoginBgImg.png";

function LoginPage() {

  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (form.email === "" || form.password === "") {
      setError("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://13.235.24.233:5000/api/login",
       {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password
        })
      });

      const data = await res.json();

      if (res.ok) {
        console.log("DATA:", data);
        console.log("ROLE:", data.role);

        localStorage.setItem("userName", data.name);
        localStorage.setItem("userEmail", form.email);

        if (data.role === "admin") {
          alert(`Welcome Admin ${data.name} ✅`);
          navigate("/admin");
        } else {
          alert(`Welcome ${data.name} ✅`);
          navigate("/home");
        }

      } else {
        setError(data.error || "Login Failed");
      }

    } catch (err) {
      setError("Server error. Check whether the backend is running.");
    }
  }

  const styles = {
    container: { height: "100vh", width: "100%", position: "relative", fontFamily: "Arial" },
    bg: { height: "100%", width: "100%", objectFit: "cover", position: "absolute", zIndex: "-1" },
    formBox: { 
      position: "absolute", 
      top: "50%", 
      left: "50%", 
      transform: "translate(-50%,-50%)", 
      background: "rgba(255,255,255,0.95)", 
      padding: "clamp(20px, 5vw, 40px)", 
      borderRadius: "12px", 
      width: "min(92%, 400px)", 
      boxShadow: "0 0 20px rgba(0,0,0,0.4)",
      boxSizing: "border-box"
    },
    title: { textAlign: "center", fontSize: "clamp(20px, 6vw, 28px)", fontWeight: "bold", marginBottom: "20px", color: "darkorange" },
    input: { padding: "12px", marginBottom: "12px", width: "100%", borderRadius: "6px", border: "1px solid #ccc", fontSize: "14px", boxSizing: "border-box" },
    button: { padding: "12px", width: "100%", background: "darkorange", color: "white", border: "none", borderRadius: "6px", fontSize: "16px", cursor: "pointer" },
    error: { color: "red", textAlign: "center", marginBottom: "10px" },
    register: { textAlign: "center", marginTop: "10px", fontSize: "14px", cursor: "pointer", color: "blue" }
  };

  return (
    <div style={styles.container}>
      <img src={LoginBgImg} alt="Login Background" style={styles.bg} />
      <div style={styles.formBox}>

        <div style={styles.title}>Login</div>

        <form onSubmit={handleSubmit}>
          {error && <div style={styles.error}>{error}</div>}

          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button style={styles.button}>Login</button>
        </form>

        <div style={styles.register} onClick={() => navigate("/register")}>
          Don't have an account? Register
        </div>

      </div>
    </div>
  );
}

export default LoginPage;