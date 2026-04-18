import React, { useRef, useState, useEffect } from 'react';
import { API_BASE_URL } from "../apiConfig";
import Users from './Users';
import Projects from './Projects';
import Bookings from './Bookings';

const STORAGE_KEY = "bk_deleted_ids";

function getDeletedIds() {
  try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')); }
  catch { return new Set(); }
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

  .dh-wrap { font-family:'DM Sans',sans-serif; padding:4px 0; }
  .dh-greeting { margin-bottom: 28px; animation:dh-fadeDown 0.5s ease both; }
  .dh-greeting h1 { font-family: 'Syne', sans-serif; font-size: 32px; font-weight: 800; color: #111; letter-spacing: -0.5px; }
  @keyframes dh-fadeDown {
    from{opacity:0;transform:translateY(-14px)}
    to  {opacity:1;transform:translateY(0)}
  }
  .dh-greeting-sub {
    font-size:14px; color:#6b7280; font-weight:600;
    margin-bottom:6px; letter-spacing:0.5px;
  }
  .dh-greeting-title {
    font-family:'Syne',sans-serif; font-size:28px;
    font-weight:800; color:#111; line-height:1.2;
  }
  .dh-greeting-title span { color:#1d4ed8; }

  .dh-stats { display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:32px; }
  .dh-stat {
    background:#fff; border-radius:14px; border:1px solid #e5e7eb;
    padding:18px 20px; display:flex; align-items:center; gap:14px;
    animation:dh-up 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
    transition:transform 0.2s, box-shadow 0.2s; cursor:default;
  }
  .dh-stat:nth-child(1){animation-delay:0.10s}
  .dh-stat:nth-child(2){animation-delay:0.18s}
  .dh-stat:nth-child(3){animation-delay:0.26s}
  .dh-stat:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,0.08); }
  @keyframes dh-up {
    from{opacity:0;transform:scale(0.85) translateY(20px)}
    to  {opacity:1;transform:scale(1) translateY(0)}
  }
  .dh-stat-icon  { width:46px;height:46px;border-radius:12px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:22px; }
  .dh-stat-label { font-size:12px;color:#6b7280;font-weight:500;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:2px; }
  .dh-stat-val   { font-family:'Syne',sans-serif;font-size:26px;font-weight:800;color:#111;line-height:1; }
  .dh-stat-sub   { font-size:11px;color:#9ca3af;margin-top:2px; }

  .dh-section-label {
    font-size:11px; font-weight:600; color:#9ca3af; text-transform:uppercase;
    letter-spacing:1.2px; margin-bottom:14px;
    animation:dh-fadeDown 0.4s 0.2s both;
  }

  .dh-cards { display:grid;grid-template-columns:repeat(3,1fr);gap:18px; }
  .dh-card {
    border-radius:20px; padding:0; overflow:hidden; cursor:pointer;
    position:relative; border:1px solid #e5e7eb;
    animation:dh-up 0.55s cubic-bezier(0.34,1.56,0.64,1) both;
    transition:transform 0.32s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.32s ease;
    user-select:none;
  }
  .dh-card:nth-child(1){animation-delay:0.15s}
  .dh-card:nth-child(2){animation-delay:0.22s}
  .dh-card:nth-child(3){animation-delay:0.29s}
  .dh-card:hover { transform:translateY(-10px) scale(1.03); }
  .dh-card:hover.c1 { box-shadow:0 20px 48px rgba(249,115,22,0.20); }
  .dh-card:hover.c2 { box-shadow:0 20px 48px rgba(59,130,246,0.20); }
  .dh-card:hover.c3 { box-shadow:0 20px 48px rgba(34,197,94,0.20); }

  .dh-card-bar  { height:5px; width:100%; }
  .dh-card-body { background:#fff; padding:22px 22px 20px; display:flex; flex-direction:column; gap:14px; }
  .dh-card-top  { display:flex; align-items:flex-start; justify-content:space-between; }
  .dh-card-icon-wrap {
    width:52px; height:52px; border-radius:14px;
    display:flex; align-items:center; justify-content:center; font-size:26px;
    transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
  }
  .dh-card:hover .dh-card-icon-wrap { transform:scale(1.2) rotate(-8deg); }
  .dh-card-arrow {
    width:30px; height:30px; border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    font-size:14px; transition:transform 0.2s;
  }
  .dh-card:hover .dh-card-arrow { transform:translate(3px,-3px); }
  .dh-card-title { font-family:'Syne',sans-serif; font-size:20px; font-weight:800; color:#111; }
  .dh-card-desc  { font-size:13px; color:#6b7280; line-height:1.55; }
  .dh-card-footer {
    display:flex; align-items:center; justify-content:space-between;
    padding-top:14px; border-top:1px solid #f3f4f6;
    font-size:12px; color:#9ca3af; font-weight:500;
  }
  .dh-card-count { font-family:'Syne',sans-serif; font-size:22px; font-weight:800; }

  .dh-card::after {
    content:''; position:absolute; top:-60%; left:-60%;
    width:50%; height:220%; background:rgba(255,255,255,0.15);
    transform:skewX(-20deg) translateX(-100%);
    transition:transform 0.7s ease; pointer-events:none;
  }
  .dh-card:hover::after { transform:skewX(-20deg) translateX(500%); }

  .dh-ripple {
    position:absolute; border-radius:50%;
    background:rgba(0,0,0,0.06); transform:scale(0); pointer-events:none;
    animation:dh-rippleAnim 0.65s linear forwards;
  }
  @keyframes dh-rippleAnim { to{transform:scale(5);opacity:0} }

  .dh-skeleton {
    background:linear-gradient(90deg,#f3f4f6 25%,#e5e7eb 50%,#f3f4f6 75%);
    background-size:200% 100%;
    animation:dh-shimmer 1.2s infinite;
    border-radius:6px;
  }
  @keyframes dh-shimmer {
    from{background-position:200% 0}
    to  {background-position:-200% 0}
  }

  .dh-back-btn {
    display:inline-flex; align-items:center; gap:8px;
    background:#fff; border:1px solid #e5e7eb; border-radius:8px;
    padding:8px 16px; font-size:14px; font-weight:600; color:#374151;
    cursor:pointer; margin-bottom:24px; font-family:'DM Sans',sans-serif;
    transition:background 0.2s, transform 0.15s;
    animation:dh-fadeDown 0.3s ease both;
  }
  .dh-back-btn:hover { background:#f3f4f6; transform:translateX(-3px); }
`;

function Card({ data, count, onClick }) {
  const ref = useRef(null);
  function handleClick(e) {
    const el   = ref.current;
    const span = document.createElement('span');
    span.className = 'dh-ripple';
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    span.style.width  = span.style.height = size + 'px';
    span.style.left   = e.clientX - rect.left - size / 2 + 'px';
    span.style.top    = e.clientY - rect.top  - size / 2 + 'px';
    el.appendChild(span);
    setTimeout(() => span.remove(), 700);
    onClick && onClick(data.title);
  }
  return (
    <div ref={ref} className={`dh-card ${data.cls}`} onClick={handleClick}>
      <div className="dh-card-bar" style={{ background: data.bar }} />
      <div className="dh-card-body">
        <div className="dh-card-top">
          <div className="dh-card-icon-wrap" style={{ background: data.iconBg }}>
            {data.icon}
          </div>
          <div className="dh-card-arrow" style={{ background: data.arrowBg, color: data.arrowColor }}>
            ↗
          </div>
        </div>
        <div>
          <div className="dh-card-title">{data.title}</div>
          <div className="dh-card-desc">{data.desc}</div>
        </div>
        <div className="dh-card-footer">
          <span>{data.countLabel}</span>
          {count === null
            ? <span className="dh-skeleton" style={{width:40,height:24,display:'inline-block'}}/>
            : <span className="dh-card-count" style={{ color: data.countColor }}>{count}</span>
          }
        </div>
      </div>
    </div>
  );
}

// API Helper

export default function DashboardHome({ onNavigate, liveBookingCount, liveUserCount }) {
  const [time, setTime]                 = useState(new Date());
  const [userCount, setUserCount]       = useState(null);
  const [bookingCount, setBookingCount] = useState(null);
  const [currentPage, setCurrentPage]   = useState(null);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    fetch(`${API_BASE_URL}/users`)
      .then(res => res.json())
      .then(data => setUserCount(Array.isArray(data) ? data.length : 0))
      .catch(() => setUserCount(0));
  }, []);

  
  useEffect(() => {
    fetch(`${API_BASE_URL}/bookings`)
      .then(res => res.json())
      .then(data => {
        const deletedIds = getDeletedIds();
        const active = data.filter(b => !deletedIds.has(String(b._id || b.id)));
        setBookingCount(active.length);
      })
      .catch(() => setBookingCount(0));
  }, []);

  const displayBookingCount = liveBookingCount !== undefined ? liveBookingCount : bookingCount;
  const displayUserCount    = liveUserCount    !== undefined ? liveUserCount    : userCount;

  const hour = time.getHours();
  const greeting =
    hour >= 5  && hour < 12 ? 'Good Morning 🌅' :
    hour >= 12 && hour < 17 ? 'Good Afternoon ☀️' :
    hour >= 17 && hour < 21 ? 'Good Evening 🌙' :
                               'Good Night 🌟';

  function handleCardClick(title) {
    const map = { 'Users': 'users', 'Projects': 'projects', 'Bookings': 'bookings' };
    if (onNavigate) {
      onNavigate(title);
    } else {
      setCurrentPage(map[title] || null);
    }
  }

  const CARD_DATA = [
    {
      cls:'c1', title:'Users',
      desc:'Manage all registered users, roles and permissions.',
      icon:'👥', bar:'#f97316',
      iconBg:'#fff7ed', arrowBg:'#fff7ed', arrowColor:'#f97316',
      countLabel:'Total users', countColor:'#f97316',
      count: displayUserCount,
    },
    {
      cls:'c2', title:'Projects',
      desc:'View and track all plans and building projects.',
      icon:'📁', bar:'#3b82f6',
      iconBg:'#eff6ff', arrowBg:'#eff6ff', arrowColor:'#3b82f6',
      countLabel:'Active projects', countColor:'#3b82f6',
      count: 6,
    },
    {
      cls:'c3', title:'Bookings',
      desc:'Review pending and approved booking requests.',
      icon:'📅', bar:'#22c55e',
      iconBg:'#f0fdf4', arrowBg:'#f0fdf4', arrowColor:'#22c55e',
      countLabel:'Total bookings', countColor:'#22c55e',
      count: displayBookingCount,
    },
  ];

  const STATS = [
    { icon:'👥', bg:'#fff7ed', label:'Total Users',    val: displayUserCount,    sub:'Registered accounts' },
    { icon:'📅', bg:'#eff6ff', label:'Total Bookings', val: displayBookingCount, sub:'All time bookings'   },
    { icon:'📁', bg:'#fdf6ec', label:'Total Projects',  val: 6,                  sub:'Building projects'   },
  ];

  if (!onNavigate) {
    if (currentPage === 'users') return (
      <>
        <style>{css}</style>
        <button className="dh-back-btn" onClick={() => setCurrentPage(null)}>← Back to Dashboard</button>
        <Users onDataChange={list => setUserCount(list.length)} />
      </>
    );
    if (currentPage === 'projects') return (
      <>
        <style>{css}</style>
        <button className="dh-back-btn" onClick={() => setCurrentPage(null)}>← Back to Dashboard</button>
        <Projects />
      </>
    );
    if (currentPage === 'bookings') return (
      <>
        <style>{css}</style>
        <button className="dh-back-btn" onClick={() => setCurrentPage(null)}>← Back to Dashboard</button>
        <Bookings onDataChange={list => setBookingCount(list.length)} />
      </>
    );
  }

  return (
    <>
      <style>{css}</style>
      <div className="dh-wrap">

        <div className="dh-greeting">
          <div className="dh-greeting-sub">{greeting}</div>
          <div className="dh-greeting-title">
            Welcome to <span>Admin</span> Dashboard
          </div>
        </div>

        <div className="dh-stats">
          {STATS.map((s, i) => (
            <div className="dh-stat" key={i}>
              <div className="dh-stat-icon" style={{ background: s.bg }}>{s.icon}</div>
              <div>
                <div className="dh-stat-label">{s.label}</div>
                {s.val === null
                  ? <div className="dh-skeleton" style={{width:48,height:26,marginBottom:4}}/>
                  : <div className="dh-stat-val">{s.val}</div>
                }
                <div className="dh-stat-sub">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="dh-section-label">Quick Access</div>
        <div className="dh-cards">
          {CARD_DATA.map(c => (
            <Card key={c.title} data={c} count={c.count} onClick={handleCardClick} />
          ))}
        </div>

      </div>
    </>
  );
}