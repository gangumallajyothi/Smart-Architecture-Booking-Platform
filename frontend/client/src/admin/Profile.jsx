import { useState, useRef } from "react";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

:root {
  --pri:#4f46e5; --pri2:#6366f1; --pri3:#818cf8; --pril:#eef2ff;
  --grn:#10b981; --grnl:#d1fae5;
  --amb:#f59e0b; --ambl:#fef3c7;
  --red:#ef4444; --redl:#fee2e2;
  --ink:#0f172a; --ink2:#334155; --ink3:#64748b;
  --bdr:#e2e8f0; --bg:#f1f5f9; --bg2:#f8fafc; --card:#ffffff;
  --r8:8px; --r12:12px; --r16:16px; --r99:999px;
  --sh:0 1px 3px rgba(0,0,0,.06),0 1px 2px rgba(0,0,0,.04);
  --sh2:0 4px 16px rgba(0,0,0,.08);
  --sh3:0 8px 32px rgba(0,0,0,.10);
}

.pf*,.pf*::before,.pf*::after{margin:0;padding:0;box-sizing:border-box}
.pf{font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--ink);min-height:100vh;padding:2rem}

.pf-page-title{font-size:1.5rem;font-weight:700;color:var(--ink);margin-bottom:1.8rem;display:flex;align-items:center;gap:10px}
.pf-page-title::before{content:'';width:4px;height:24px;background:linear-gradient(180deg,var(--pri),var(--pri3));border-radius:4px}

.pf-cover-card{background:var(--card);border-radius:var(--r16);box-shadow:var(--sh2);overflow:hidden;margin-bottom:1.5rem;animation:pfFadeUp .5s ease both}
.pf-cover-band{height:160px;background:linear-gradient(135deg,#1e1b4b 0%,#312e81 25%,#4f46e5 55%,#7c3aed 80%,#a855f7 100%);position:relative;overflow:hidden}
.pf-cover-band::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,rgba(255,255,255,0.06) 1.5px,transparent 1.5px);background-size:24px 24px}
.pf-cover-band::after{content:'';position:absolute;width:320px;height:320px;border-radius:50%;background:radial-gradient(circle,rgba(167,139,250,0.35) 0%,transparent 65%);top:-120px;right:-80px}
.pf-cover-shine{position:absolute;inset:0;background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.04) 50%,transparent 70%);pointer-events:none}

.pf-cover-logo{position:absolute;left:2rem;top:50%;transform:translateY(-50%);display:flex;align-items:center;gap:14px;z-index:3}
.pf-logo-ring{width:64px;height:64px;border-radius:18px;background:rgba(255,255,255,0.1);border:2px solid rgba(255,255,255,0.25);backdrop-filter:blur(12px);display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 8px 24px rgba(0,0,0,0.25),inset 0 1px 0 rgba(255,255,255,0.2);animation:pfLogoFloat 4s ease-in-out infinite}
.pf-logo-svg{width:38px;height:38px;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.3))}
.pf-logo-text{display:flex;flex-direction:column;gap:2px}
.pf-logo-name{font-size:1.15rem;font-weight:800;color:#fff;letter-spacing:0.02em;text-shadow:0 2px 8px rgba(0,0,0,0.3);line-height:1}
.pf-logo-name span{color:#c4b5fd}
.pf-logo-tag{font-size:0.65rem;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.55)}

.pf-band-deco{position:absolute;bottom:14px;right:1.5rem;display:flex;gap:8px;z-index:2}
.pf-band-ico{width:34px;height:34px;border-radius:var(--r8);background:rgba(255,255,255,0.12);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.18);display:flex;align-items:center;justify-content:center;font-size:0.9rem;transition:transform .3s,background .3s}
.pf-band-ico:hover{transform:translateY(-3px);background:rgba(255,255,255,0.22)}

.pf-band-top-right{position:absolute;top:14px;right:1.5rem;display:flex;align-items:center;gap:8px;z-index:4}
.pf-band-stat{display:flex;align-items:center;gap:6px;background:rgba(0,0,0,0.25);border:1px solid rgba(255,255,255,0.12);backdrop-filter:blur(8px);border-radius:var(--r99);padding:0.3rem 0.85rem}
.pf-band-stat-n{font-size:0.82rem;font-weight:700;color:#fff}
.pf-band-stat-l{font-size:0.65rem;color:rgba(255,255,255,0.55);letter-spacing:0.06em}

.pf-logout-btn{display:inline-flex;align-items:center;gap:6px;background:#2563eb;color:#fff;font-size:0.78rem;font-weight:700;padding:0.4rem 1.1rem;border-radius:var(--r99);border:none;cursor:pointer;box-shadow:0 4px 14px rgba(37,99,235,0.45);transition:all .25s;letter-spacing:0.04em;white-space:nowrap}
.pf-logout-btn:hover{background:#1d4ed8;transform:translateY(-1px);box-shadow:0 6px 20px rgba(37,99,235,0.55)}
.pf-logout-btn svg{width:14px;height:14px;flex-shrink:0}

.pf-cover-body{padding:0 2rem 2rem}
.pf-avatar-wrap{display:flex;align-items:flex-end;justify-content:space-between;margin-top:-40px;margin-bottom:1.2rem}
.pf-avatar{width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#ef4444,#f97316);border:4px solid var(--card);box-shadow:var(--sh2);display:flex;align-items:center;justify-content:center;font-size:1.8rem;font-weight:700;color:#fff;position:relative;transition:transform .3s;cursor:pointer}
.pf-avatar:hover{transform:scale(1.06)}
.pf-avatar-status{position:absolute;bottom:4px;right:4px;width:14px;height:14px;border-radius:50%;background:var(--grn);border:2px solid var(--card)}
.pf-edit-photo-btn{position:absolute;inset:0;border-radius:50%;background:rgba(0,0,0,0.45);display:flex;align-items:center;justify-content:center;font-size:1.1rem;color:#fff;opacity:0;transition:opacity .25s}
.pf-avatar:hover .pf-edit-photo-btn{opacity:1}
.pf-btn-primary{display:inline-flex;align-items:center;gap:7px;background:var(--pri);color:#fff;font-size:0.82rem;font-weight:600;padding:0.55rem 1.3rem;border-radius:var(--r99);border:none;cursor:pointer;box-shadow:0 4px 14px rgba(79,70,229,0.35);transition:all .25s}
.pf-btn-primary:hover{background:#4338ca;transform:translateY(-1px);box-shadow:0 6px 20px rgba(79,70,229,0.45)}
.pf-name{font-size:1.25rem;font-weight:700;color:var(--ink);margin-bottom:0.2rem}
.pf-role-badge{display:inline-flex;align-items:center;gap:5px;background:var(--pril);color:var(--pri);font-size:0.72rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;padding:0.28rem 0.8rem;border-radius:var(--r99);margin-bottom:1.2rem}
.pf-info-row{display:flex;gap:2.5rem;flex-wrap:wrap;padding-top:1.2rem;border-top:1px solid var(--bdr)}
.pf-info-item{display:flex;align-items:center;gap:10px}
.pf-info-icon{width:36px;height:36px;border-radius:var(--r8);display:flex;align-items:center;justify-content:center;font-size:0.95rem;flex-shrink:0}
.pf-info-icon-pri{background:var(--pril)}
.pf-info-icon-grn{background:var(--grnl)}
.pf-info-icon-amb{background:var(--ambl)}
.pf-info-val{font-size:0.88rem;font-weight:600;color:var(--ink2)}
.pf-info-lbl{font-size:0.72rem;color:var(--ink3);margin-top:1px}

.pf-stats-row{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;margin-bottom:1.5rem;animation:pfFadeUp .5s .1s ease both}
.pf-stat{background:var(--card);border-radius:var(--r12);padding:1.4rem 1.5rem;box-shadow:var(--sh);border:1px solid var(--bdr);display:flex;align-items:center;gap:1rem;transition:transform .25s,box-shadow .25s}
.pf-stat:hover{transform:translateY(-3px);box-shadow:var(--sh2)}
.pf-stat-icon{width:48px;height:48px;border-radius:var(--r12);display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0}
.pf-stat-n{font-size:1.5rem;font-weight:700;color:var(--ink);line-height:1}
.pf-stat-l{font-size:0.75rem;color:var(--ink3);margin-top:3px}
.pf-stat-badge{margin-left:auto;font-size:0.72rem;font-weight:600;padding:0.2rem 0.55rem;border-radius:var(--r99);background:var(--grnl);color:#065f46}
.pf-stat-badge-gray{margin-left:auto;font-size:0.72rem;font-weight:600;padding:0.2rem 0.55rem;border-radius:var(--r99);background:#f1f5f9;color:var(--ink3)}

.pf-cols{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem}
.pf-card{background:var(--card);border-radius:var(--r16);box-shadow:var(--sh);border:1px solid var(--bdr);overflow:hidden;animation:pfFadeUp .5s .2s ease both}
.pf-card-full{grid-column:span 2}
.pf-card-head{display:flex;align-items:center;justify-content:space-between;padding:1.2rem 1.5rem;border-bottom:1px solid var(--bdr)}
.pf-card-title{font-size:0.95rem;font-weight:700;color:var(--ink);display:flex;align-items:center;gap:8px}
.pf-card-title-dot{width:8px;height:8px;border-radius:50%;background:linear-gradient(135deg,var(--pri),var(--pri3))}
.pf-card-body{padding:1.5rem}

.pf-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.2rem}
.pf-form-group{display:flex;flex-direction:column;gap:6px}
.pf-form-group.full{grid-column:span 2}
.pf-label{font-size:0.78rem;font-weight:600;color:var(--ink2);letter-spacing:0.04em;text-transform:uppercase}
.pf-input{width:100%;padding:0.65rem 1rem;background:var(--bg2);border:1.5px solid var(--bdr);border-radius:var(--r8);font-size:0.9rem;color:var(--ink);font-family:inherit;transition:border-color .25s,box-shadow .25s;outline:none}
.pf-input:focus{border-color:var(--pri);box-shadow:0 0 0 3px rgba(79,70,229,0.12);background:#fff}
.pf-input::placeholder{color:var(--ink3)}
.pf-select{width:100%;padding:0.65rem 1rem;background:var(--bg2);border:1.5px solid var(--bdr);border-radius:var(--r8);font-size:0.9rem;color:var(--ink);font-family:inherit;cursor:pointer;outline:none;transition:border-color .25s;appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 7L11 1' stroke='%2364748b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center}
.pf-select:focus{border-color:var(--pri)}
.pf-form-actions{display:flex;align-items:center;justify-content:flex-end;gap:0.75rem;padding-top:1.2rem;border-top:1px solid var(--bdr);margin-top:1rem}
.pf-save-btn{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,var(--pri),var(--pri2));color:#fff;font-size:0.88rem;font-weight:600;padding:0.7rem 1.8rem;border-radius:var(--r99);border:none;cursor:pointer;box-shadow:0 4px 14px rgba(79,70,229,0.3);transition:all .25s}
.pf-save-btn:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(79,70,229,0.4)}
.pf-cancel-btn{background:transparent;color:var(--ink3);font-size:0.88rem;font-weight:500;padding:0.7rem 1.4rem;border-radius:var(--r99);border:1.5px solid var(--bdr);cursor:pointer;transition:all .25s}
.pf-cancel-btn:hover{border-color:var(--red);color:var(--red)}

.pf-pwd-rules{display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;margin-top:0.75rem}
.pf-pwd-rule{display:flex;align-items:center;gap:6px;font-size:0.75rem;color:var(--ink3)}
.pf-pwd-rule-dot{width:6px;height:6px;border-radius:50%;background:var(--bdr);flex-shrink:0;transition:background .3s}
.pf-pwd-rule.ok .pf-pwd-rule-dot{background:var(--grn)}
.pf-pwd-rule.ok{color:var(--grn)}

.pf-toast{position:fixed;bottom:2rem;right:2rem;z-index:999;background:var(--ink);color:#fff;padding:0.9rem 1.5rem;border-radius:var(--r12);font-size:0.88rem;font-weight:500;display:flex;align-items:center;gap:10px;box-shadow:var(--sh3);animation:pfToast .4s cubic-bezier(.34,1.56,.64,1) both}
.pf-toast-dot{width:8px;height:8px;border-radius:50%;background:var(--grn)}

@keyframes pfFadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
@keyframes pfToast{from{opacity:0;transform:translateY(20px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes pfLogoFloat{0%,100%{transform:translateY(-50%)}50%{transform:translateY(calc(-50% - 5px))}}

@media(max-width:900px){
  .pf-cols{grid-template-columns:1fr}
  .pf-card-full{grid-column:span 1}
  .pf-stats-row{grid-template-columns:1fr 1fr}
  .pf-form-grid{grid-template-columns:1fr}
  .pf-form-group.full{grid-column:span 1}
  .pf-info-row{flex-direction:column;gap:1rem}
  .pf-cover-logo{left:1rem}
  .pf-band-top-right{gap:6px}
  .pf-band-stat{display:none}
}
@media(max-width:580px){
  .pf{padding:1rem}
  .pf-pwd-rules{grid-template-columns:1fr}
  .pf-logo-text{display:none}
  .pf-band-deco{display:none}
  .pf-logout-btn span.logout-label{display:none}
}
`;

const STORAGE_KEY = 'admin_profile_data';

const DEFAULT_FORM = {
  firstName: "Admin", lastName: "User",
  email: "admin@example.com", phone: "+91 98765 43210",
  location: "Hyderabad, India", role: "Super Admin", bio: "",
};

function loadProfile() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch { return null; }
}

function saveToStorage(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

function ArchLogo({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className="pf-logo-svg">
      <rect x="6" y="20" width="36" height="22" rx="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
      <path d="M4 22 L24 6 L44 22" stroke="rgba(255,255,255,0.9)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(255,255,255,0.08)"/>
      <rect x="20" y="32" width="8" height="10" rx="4" fill="rgba(255,255,255,0.7)"/>
      <rect x="9" y="26" width="7" height="6" rx="1.5" fill="rgba(255,255,255,0.5)"/>
      <rect x="32" y="26" width="7" height="6" rx="1.5" fill="rgba(255,255,255,0.5)"/>
      <path d="M20 32 Q24 27 28 32" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none"/>
      <rect x="30" y="11" width="4" height="8" rx="1" fill="rgba(255,255,255,0.35)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <circle cx="24" cy="5" r="2" fill="#fbbf24"/>
      <path d="M24 2 L24 0 M24 8 L24 10 M21 5 L19 5 M27 5 L29 5" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}


function LogoutIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  );
}

export default function AdminProfile({
  totalUsers    = 0,
  totalBookings = 0,
  onLogout,           
}) {

  const [form, setForm] = useState(() => loadProfile() || DEFAULT_FORM);
  const [pwd,  setPwd]  = useState({ current: "", newpwd: "", confirm: "" });
  const [toast, setToast] = useState("");
  const editRef = useRef(null);

  const set   = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const setPw = (k, v) => setPwd(p => ({ ...p, [k]: v }));

  const scrollToEdit = () => editRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  
  const handleLogout = () => {
    showToast("👋 Logging out...");
    setTimeout(() => {
      if (onLogout) {
        onLogout();
      } else {
        
        window.location.href = "/";
      }
    }, 800);
  };

  const saveProfileData = () => {
    saveToStorage(form);
    showToast("✅ Profile updated successfully!");
  };

  const cancelProfile = () => {
    const saved = loadProfile() || DEFAULT_FORM;
    setForm(saved);
    showToast("↩️ Changes reverted!");
  };

  const savePassword = () => {
    if (!pwd.current) { showToast("⚠️ Enter current password!"); return; }
    if (!pwdRules.every(r => r.ok)) { showToast("⚠️ Meet all password requirements!"); return; }
    setPwd({ current: "", newpwd: "", confirm: "" });
    showToast("🔒 Password updated successfully!");
  };

  const pwdRules = [
    { label: "Min 8 characters", ok: pwd.newpwd.length >= 8 },
    { label: "One uppercase",    ok: /[A-Z]/.test(pwd.newpwd) },
    { label: "One number",       ok: /\d/.test(pwd.newpwd) },
    { label: "Passwords match",  ok: pwd.newpwd && pwd.newpwd === pwd.confirm },
  ];

  
  const STATS = [
    {
      ico: "👥", bg: "#eef2ff",
      n: totalUsers,
      l: "Total Users",
      badge: totalUsers > 0 ? `${totalUsers} user${totalUsers !== 1 ? "s" : ""}` : "No data",
      badgeGreen: totalUsers > 0,
    },
    {
      ico: "🏗️", bg: "#fef3c7",
      n: 6,
      l: "Building Types",
      badge: "All 6 active",
      badgeGreen: true,
    },
  ];

  return (
    <>
      <style>{css}</style>
      <div className="pf">

        <div className="pf-page-title">Profile</div>

        {/* COVER */}
        <div className="pf-cover-card">
          <div className="pf-cover-band">
            <div className="pf-cover-shine" />
            <div className="pf-cover-logo">
              <div className="pf-logo-ring"><ArchLogo size={38} /></div>
              <div className="pf-logo-text">
                <div className="pf-logo-name">Arch<span>Vista</span></div>
                <div className="pf-logo-tag">Smart Architecture Platform</div>
              </div>
            </div>

            
            <div className="pf-band-top-right">
              <div className="pf-band-stat">
                <div className="pf-band-stat-n">{totalUsers}</div>
                <div className="pf-band-stat-l">Users</div>
              </div>
              <div className="pf-band-stat">
                <div className="pf-band-stat-n">6</div>
                <div className="pf-band-stat-l">Buildings</div>
              </div>
              
              <button className="pf-logout-btn" onClick={handleLogout}>
                <LogoutIcon />
                <span className="logout-label">Logout</span>
              </button>
            </div>

            <div className="pf-band-deco">
              {["🏠","🏥","🛍️","🏢","🎓"].map(ico => (
                <div className="pf-band-ico" key={ico}>{ico}</div>
              ))}
            </div>
          </div>

          <div className="pf-cover-body">
            <div className="pf-avatar-wrap">
              <div className="pf-avatar" onClick={scrollToEdit}>
                {form.firstName ? form.firstName.charAt(0).toUpperCase() : "A"}
                <div className="pf-avatar-status" />
                <div className="pf-edit-photo-btn">✏️</div>
              </div>
              <button className="pf-btn-primary" onClick={scrollToEdit}>
                ✏️ Edit Profile
              </button>
            </div>

            <div className="pf-name">{form.firstName} {form.lastName}</div>
            <div className="pf-role-badge">⚡ {form.role}</div>

            <div className="pf-info-row">
              <div className="pf-info-item">
                <div className="pf-info-icon pf-info-icon-pri">📧</div>
                <div>
                  <div className="pf-info-val">{form.email}</div>
                  <div className="pf-info-lbl">Email</div>
                </div>
              </div>
              <div className="pf-info-item">
                <div className="pf-info-icon pf-info-icon-grn">📍</div>
                <div>
                  <div className="pf-info-val">{form.location}</div>
                  <div className="pf-info-lbl">Location</div>
                </div>
              </div>
              <div className="pf-info-item">
                <div className="pf-info-icon pf-info-icon-amb">📞</div>
                <div>
                  <div className="pf-info-val">{form.phone}</div>
                  <div className="pf-info-lbl">Phone</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="pf-stats-row">
          {STATS.map(s => (
            <div className="pf-stat" key={s.l}>
              <div className="pf-stat-icon" style={{ background: s.bg }}>{s.ico}</div>
              <div>
                <div className="pf-stat-n">{s.n}</div>
                <div className="pf-stat-l">{s.l}</div>
              </div>
              <span className={s.badgeGreen ? "pf-stat-badge" : "pf-stat-badge-gray"}>
                {s.badge}
              </span>
            </div>
          ))}
        </div>

        
        <div ref={editRef} style={{ scrollMarginTop: "1rem" }}>
          <div className="pf-cols">

           
            <div className="pf-card pf-card-full">
              <div className="pf-card-head">
                <div className="pf-card-title">
                  <div className="pf-card-title-dot" />Edit Profile
                </div>
              </div>
              <div className="pf-card-body">
                <div className="pf-form-grid">
                  <div className="pf-form-group">
                    <label className="pf-label">First Name</label>
                    <input className="pf-input" value={form.firstName}
                      onChange={e => set("firstName", e.target.value)} />
                  </div>
                  <div className="pf-form-group">
                    <label className="pf-label">Last Name</label>
                    <input className="pf-input" value={form.lastName}
                      onChange={e => set("lastName", e.target.value)} />
                  </div>
                  <div className="pf-form-group">
                    <label className="pf-label">Email</label>
                    <input className="pf-input" type="email" value={form.email}
                      onChange={e => set("email", e.target.value)} />
                  </div>
                  <div className="pf-form-group">
                    <label className="pf-label">Phone</label>
                    <input className="pf-input" value={form.phone}
                      onChange={e => set("phone", e.target.value)} />
                  </div>
                  <div className="pf-form-group">
                    <label className="pf-label">Location</label>
                    <input className="pf-input" value={form.location}
                      onChange={e => set("location", e.target.value)} />
                  </div>
                  <div className="pf-form-group">
                    <label className="pf-label">Role</label>
                    <select className="pf-select" value={form.role}
                      onChange={e => set("role", e.target.value)}>
                      <option>Super Admin</option>
                      <option>Admin</option>
                      <option>Manager</option>
                      <option>Editor</option>
                    </select>
                  </div>
                  <div className="pf-form-group full">
                    <label className="pf-label">Bio</label>
                    <textarea className="pf-input" rows={3} placeholder="Write a short bio..."
                      value={form.bio} onChange={e => set("bio", e.target.value)}
                      style={{ resize: "vertical" }} />
                  </div>
                </div>
                <div className="pf-form-actions">
                  <button className="pf-cancel-btn" onClick={cancelProfile}>Cancel</button>
                  <button className="pf-save-btn" onClick={saveProfileData}>💾 Save Changes</button>
                </div>
              </div>
            </div>

            
            <div className="pf-card pf-card-full">
              <div className="pf-card-head">
                <div className="pf-card-title">
                  <div className="pf-card-title-dot" />Change Password
                </div>
              </div>
              <div className="pf-card-body">
                <div className="pf-form-grid">
                  <div className="pf-form-group">
                    <label className="pf-label">Current Password</label>
                    <input className="pf-input" type="password" placeholder="••••••••"
                      value={pwd.current} onChange={e => setPw("current", e.target.value)} />
                  </div>
                  <div className="pf-form-group" />
                  <div className="pf-form-group">
                    <label className="pf-label">New Password</label>
                    <input className="pf-input" type="password" placeholder="••••••••"
                      value={pwd.newpwd} onChange={e => setPw("newpwd", e.target.value)} />
                  </div>
                  <div className="pf-form-group">
                    <label className="pf-label">Confirm Password</label>
                    <input className="pf-input" type="password" placeholder="••••••••"
                      value={pwd.confirm} onChange={e => setPw("confirm", e.target.value)} />
                  </div>
                  <div className="pf-form-group full">
                    <div className="pf-pwd-rules">
                      {pwdRules.map(r => (
                        <div key={r.label} className={`pf-pwd-rule ${r.ok ? "ok" : ""}`}>
                          <div className="pf-pwd-rule-dot" />{r.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pf-form-actions">
                  <button className="pf-cancel-btn"
                    onClick={() => setPwd({ current: "", newpwd: "", confirm: "" })}>
                    Cancel
                  </button>
                  <button className="pf-save-btn" onClick={savePassword}>🔒 Update Password</button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {toast && (
          <div className="pf-toast">
            <div className="pf-toast-dot" />
            {toast}
          </div>
        )}

      </div>
    </>
  );
}