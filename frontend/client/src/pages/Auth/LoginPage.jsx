import React, { useState } from "react";
import { API_BASE_URL } from "../../apiConfig";
import { useNavigate } from "react-router-dom";
import LoginBgImg from "./images/LoginBgImg.png";

function LoginPage() {

  const navigate = useNavigate();

  const [form, setForm]       = useState({ email: "", password: "" });
  const [error, setError]     = useState("");
  const [showPwd, setShowPwd] = useState(false);

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
      const res = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password
        })
      });

      const data = await res.json();

      if (res.ok) {
        // Backend returns: { token, user: { name, email, role } }
        const userName = data.user?.name || data.name || "User";
        const userRole = data.user?.role || data.role || "user";

        localStorage.setItem("userName", userName);
        localStorage.setItem("userEmail", form.email);

        if (userRole === "admin") {
          alert(`Welcome Admin ${userName} ✅`);
          navigate("/admin");
        } else {
          alert(`Welcome ${userName} ✅`);
          navigate("/home");
        }

      } else {
        setError(data.message || data.error || "Login Failed");
      }

    } catch (err) {
      setError("Server error. Check whether the backend is running.");
    }
  }

  const styles = {
    container: {
      height: "100vh", width: "100%", position: "relative", fontFamily: "Arial"
    },
    bg: {
      height: "100%", width: "100%", objectFit: "cover",
      position: "absolute", zIndex: "-1"
    },
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
    title: {
      textAlign: "center", fontSize: "clamp(20px, 6vw, 28px)",
      fontWeight: "bold", marginBottom: "20px", color: "darkorange"
    },
    input: {
      padding: "12px", marginBottom: "12px", width: "100%",
      borderRadius: "6px", border: "1px solid #ccc",
      fontSize: "14px", boxSizing: "border-box", outline: "none"
    },
    pwdWrap: {
      position: "relative", marginBottom: "12px"
    },
    pwdInput: {
      padding: "12px 42px 12px 12px", width: "100%",
      borderRadius: "6px", border: "1px solid #ccc",
      fontSize: "14px", boxSizing: "border-box", outline: "none"
    },
    eyeBtn: {
      position: "absolute", right: "12px", top: "50%",
      transform: "translateY(-50%)", background: "none",
      border: "none", cursor: "pointer", fontSize: "16px",
      color: "#888", padding: 0
    },
    button: {
      padding: "12px", width: "100%", background: "darkorange",
      color: "white", border: "none", borderRadius: "6px",
      fontSize: "16px", cursor: "pointer"
    },
    error: { color: "red", textAlign: "center", marginBottom: "10px" },
    register: {
      textAlign: "center", marginTop: "10px",
      fontSize: "14px", cursor: "pointer", color: "blue"
    }
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

          {/* Password with show/hide toggle */}
          <div style={styles.pwdWrap}>
            <input
              style={styles.pwdInput}
              type={showPwd ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              style={styles.eyeBtn}
              onClick={() => setShowPwd(p => !p)}
            >
              {showPwd ? "🙈" : "👁️"}
            </button>
          </div>

          <button style={styles.button} type="submit">Login</button>
        </form>

        <div style={styles.register} onClick={() => navigate("/register")}>
          Don't have an account? Register
        </div>

      </div>
    </div>
  );
}

export default LoginPage;