import React, { useState } from "react";
import { API_BASE_URL } from "../../apiConfig";
import { useNavigate } from "react-router-dom";
import RegisterBgImg from "./images/RegisterBgImg.png";

function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "", email: "", password: "",
    confirmPassword: "", phone: "", projectType: ""
  });
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [showCpwd, setShowCpwd] = useState(false);

  const pwdRules = [
    { label: "Min 8 characters",      ok: form.password.length >= 8 },
    { label: "One uppercase (A-Z)",   ok: /[A-Z]/.test(form.password) },
    { label: "One lowercase (a-z)",   ok: /[a-z]/.test(form.password) },
    { label: "One number (0-9)",      ok: /\d/.test(form.password) },
    { label: "One special (!@#$...)", ok: /[!@#$%^&*(),.?":{}|<>]/.test(form.password) },
  ];
  const passedCount = pwdRules.filter(r => r.ok).length;
  const pwdStrong   = passedCount === 5;

  const strengthLabel = ["", "Weak", "Weak", "Fair", "Good", "Strong"][passedCount];
  const strengthColor = ["", "#ef4444","#ef4444","#f59e0b","#3b82f6","#10b981"][passedCount];

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handlePhoneKeyDown(e) {
    const allowed = ["Backspace","Delete","ArrowLeft","ArrowRight","Tab"];
    if (allowed.includes(e.key)) return;
    if (!/^[0-9]$/.test(e.key)) e.preventDefault();
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!/^\d{10}$/.test(form.phone)) {
      setError("Phone number must be exactly 10 digits."); return;
    }
    if (!pwdStrong) {
      setError("Password does not meet all requirements."); return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match."); return;
    }
    setError("");

    try {
      const res = await fetch(`${API_BASE_URL}/register`, {
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
        setSuccess(true);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(data.error || "Registration Failed");
      }
    } catch (err) {
      setError(`Network Error: ${err.message}. (Hard refresh your browser)`);
    }
  }

  const s = {
    container:  { height:"100vh", width:"100%", position:"relative", fontFamily:"Arial" },
    bg:         { height:"100%", width:"100%", objectFit:"cover", position:"absolute", zIndex:"-1" },
    formBox:    {
      position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)",
      background:"rgba(255,255,255,0.97)", padding:"36px 40px", borderRadius:"14px",
      width:"430px", boxShadow:"0 0 30px rgba(0,0,0,0.35)",
      maxHeight:"92vh", overflowY:"auto"
    },
    title:      {
      textAlign:"center", fontSize:"26px", fontWeight:"bold",
      marginBottom:"20px", color:"darkorange"
    },
    input:      {
      padding:"11px 12px", marginBottom:"12px", width:"100%", borderRadius:"7px",
      border:"1px solid #ccc", fontSize:"14px", boxSizing:"border-box", outline:"none"
    },
    pwdWrap:    { position:"relative", marginBottom:"12px" },
    pwdInput:   {
      padding:"11px 42px 11px 12px", width:"100%", borderRadius:"7px",
      border:"1px solid #ccc", fontSize:"14px", boxSizing:"border-box", outline:"none"
    },
    eyeBtn:     {
      position:"absolute", right:"12px", top:"50%", transform:"translateY(-50%)",
      background:"none", border:"none", cursor:"pointer",
      fontSize:"16px", color:"#888", padding:0
    },
    button:     {
      padding:"12px", width:"100%", background:"darkorange", color:"white",
      border:"none", borderRadius:"7px", fontSize:"16px",
      cursor:"pointer", marginTop:"6px"
    },
    success:    { color:"green", textAlign:"center", marginTop:"10px", fontWeight:"bold" },
    error:      { color:"red", textAlign:"center", marginBottom:"10px", fontSize:"13px" },

    barWrap:    {
      height:"5px", background:"#e2e8f0", borderRadius:"99px",
      marginBottom:"8px", overflow:"hidden"
    },
    barFill:    {
      height:"100%", borderRadius:"99px", transition:"width .4s, background .4s",
      width:`${(passedCount/5)*100}%`, background: strengthColor
    },
    barLabel:   {
      fontSize:"12px", fontWeight:"600", color: strengthColor,
      textAlign:"right", marginBottom:"8px"
    },

    rulesBox:   {
      background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:"8px",
      padding:"10px 14px", marginBottom:"12px"
    },
    rulesTitle: {
      fontSize:"11px", fontWeight:"700", color:"#64748b", marginBottom:"6px",
      textTransform:"uppercase", letterSpacing:"0.06em"
    },
    rulesGrid:  { display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5px" },
    ruleRow:    (ok) => ({
      display:"flex", alignItems:"center", gap:"6px",
      fontSize:"12px", color: ok ? "#10b981" : "#94a3b8",
      fontWeight: ok ? "600" : "400"
    }),
    ruleDot:    (ok) => ({
      width:"7px", height:"7px", borderRadius:"50%",
      background: ok ? "#10b981" : "#cbd5e1", flexShrink:0,
      transition:"background .3s"
    }),
  };

  return (
    <>
      <style>{`
        @media (max-width: 600px) {
          .card-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
            grid-template-columns: 1fr !important;
            padding: 15px !important;
            gap: 20px !important;
          }
          .card {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
      <div style={s.container}>
        <img src={RegisterBgImg} alt="bg" style={s.bg} />
        <div style={s.formBox}>
          <div style={s.title}>Create Account</div>

          <form onSubmit={handleSubmit}>
            {error && <div style={s.error}>{error}</div>}

            <input
              style={s.input}
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              style={s.input}
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              style={s.input}
              type="tel"
              name="phone"
              placeholder="Phone Number (10 digits)"
              value={form.phone}
              onChange={handleChange}
              onKeyDown={handlePhoneKeyDown}
              maxLength={10}
              required
            />

            {/* ✅ Controlled select — value bound to form.projectType */}
            <select
              style={s.input}
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              required
            >
              <option value="">Select Project Type</option>
              <option>House</option>
              <option>Hospital</option>
              <option>Restaurant</option>
              <option>College</option>
              <option>Shopping Mall</option>
              <option>Apartment</option>
            </select>

            {/* Password with show/hide */}
            <div style={s.pwdWrap}>
              <input
                style={s.pwdInput}
                name="password"
                type={showPwd ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button type="button" style={s.eyeBtn}
                onClick={() => setShowPwd(p => !p)}>
                {showPwd ? "🙈" : "👁️"}
              </button>
            </div>

            {/* Strength bar + rules — only when user starts typing */}
            {form.password.length > 0 && (
              <>
                <div style={s.barWrap}><div style={s.barFill} /></div>
                <div style={s.barLabel}>{strengthLabel}</div>
                <div style={s.rulesBox}>
                  <div style={s.rulesTitle}>Password must have:</div>
                  <div style={s.rulesGrid}>
                    {pwdRules.map(r => (
                      <div key={r.label} style={s.ruleRow(r.ok)}>
                        <div style={s.ruleDot(r.ok)} />
                        {r.label}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Confirm Password with show/hide */}
            <div style={s.pwdWrap}>
              <input
                style={s.pwdInput}
                name="confirmPassword"
                type={showCpwd ? "text" : "password"}
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
              <button type="button" style={s.eyeBtn}
                onClick={() => setShowCpwd(p => !p)}>
                {showCpwd ? "🙈" : "👁️"}
              </button>
            </div>

            <button style={s.button} type="submit">Create Account</button>
          </form>

          {success && (
            <div style={s.success}>Account Created ✅ Redirecting to Login...</div>
          )}
        </div>
      </div>
    </>
  );
}

export default RegisterPage;