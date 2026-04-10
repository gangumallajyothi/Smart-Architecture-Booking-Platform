import React, { useState } from 'react';
import DashboardHome from './DashboardHome';
import Users from './Users';
import Projects from './Projects';
import Bookings from './Bookings';
import Profile from './Profile';

const sections = [
  { key: 'dashboard', label: 'Dashboard',       icon: '🏠' },
  { key: 'users',     label: 'Users',            icon: '👥' },
  { key: 'projects',  label: 'Plans / Projects', icon: '📁' },
  { key: 'bookings',  label: 'Bookings',         icon: '📅' },
  { key: 'profile',   label: 'Profile',          icon: '👤' },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Inter', sans-serif; background: #f0f2f5; }
  .ad-wrap { display: flex; min-height: 100vh; font-family: 'Inter', sans-serif; }
  .ad-sidebar {
    width: 220px; background: #fff; border-right: 1px solid #e5e7eb;
    display: flex; flex-direction: column; padding: 24px 12px;
    flex-shrink: 0; position: sticky; top: 0; height: 100vh;
    animation: ad-slideIn 0.4s ease both;
  }
  @keyframes ad-slideIn {
    from { transform: translateX(-220px); opacity: 0; }
    to   { transform: translateX(0); opacity: 1; }
  }
  .ad-logo {
    font-size: 16px; font-weight: 700; color: #111;
    padding: 0 10px 20px; border-bottom: 1px solid #e5e7eb; margin-bottom: 14px;
  }
  .ad-nav {
    display: flex; align-items: center; gap: 10px;
    width: 100%; text-align: left; background: transparent;
    border: 1px solid transparent; border-radius: 8px;
    padding: 10px 12px; font-size: 14px; font-weight: 500; color: #374151;
    cursor: pointer; margin-bottom: 4px; font-family: 'Inter', sans-serif;
    transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.18s;
    animation: ad-navFade 0.4s both;
  }
  .ad-nav:nth-child(1){ animation-delay:0.05s; }
  .ad-nav:nth-child(2){ animation-delay:0.10s; }
  .ad-nav:nth-child(3){ animation-delay:0.15s; }
  .ad-nav:nth-child(4){ animation-delay:0.20s; }
  .ad-nav:nth-child(5){ animation-delay:0.25s; }
  @keyframes ad-navFade {
    from { opacity: 0; transform: translateX(-16px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  .ad-nav:hover  { background: #f3f4f6; border-color: #e5e7eb; transform: translateX(3px); }
  .ad-nav.active { background: #eff6ff; color: #1d4ed8; border-color: #bfdbfe; font-weight: 600; }
  .ad-nav-icon   { font-size: 16px; }
  .ad-main {
    flex: 1; padding: 32px 36px; background: #f0f2f5;
    animation: ad-fadeIn 0.4s 0.1s both;
  }
  @keyframes ad-fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

export default function AdminDashboard() {
  const [section, setSection] = useState('dashboard');

  const [users,    setUsers]    = useState([]);
  const [bookings, setBookings] = useState([]);

  // ── Live counts for DashboardHome ──────────────────────────
  const [liveBookingCount, setLiveBookingCount] = useState(undefined);
  const [liveUserCount,    setLiveUserCount]    = useState(undefined);

  function handleNavigate(title) {
    const map = {
      'Users':    'users',
      'Projects': 'projects',
      'Bookings': 'bookings',
    };
    const key = map[title];
    if (key) setSection(key);
  }

  const recentBookings = [...bookings]
    .sort((a, b) => new Date(b.date || b.createdAt || 0) - new Date(a.date || a.createdAt || 0))
    .slice(0, 5)
    .map(b => ({
      id:           b._id || b.id || b.bookingId || `#BK-${Math.random().toString(36).substr(2,4).toUpperCase()}`,
      buildingType: b.buildingType || b.type || "Home",
      buildingName: b.buildingName || b.name || b.buildingType || "Building",
      date:         b.date || b.createdAt || "",
      status:       b.status || "Confirmed",
    }));

  return (
    <>
      <style>{css}</style>
      <div className="ad-wrap">

        <aside className="ad-sidebar">
          <div className="ad-logo">⚡ Admin Dashboard</div>
          {sections.map(s => (
            <button
              key={s.key}
              className={`ad-nav${section === s.key ? ' active' : ''}`}
              onClick={() => setSection(s.key)}
            >
              <span className="ad-nav-icon">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </aside>

        <main className="ad-main">

          {section === 'dashboard' && (
            <DashboardHome
              onNavigate={handleNavigate}
              liveBookingCount={liveBookingCount}
              liveUserCount={liveUserCount}
            />
          )}

          {section === 'users' && (
            <Users onDataChange={list => {
              setUsers(list);
              setLiveUserCount(list.length);
            }} />
          )}

          {section === 'projects' && <Projects />}

          {section === 'bookings' && (
            <Bookings onDataChange={list => {
              setBookings(list);
              setLiveBookingCount(list.length);
            }} />
          )}

          {section === 'profile' && (
            <Profile
              totalUsers={users.length}
              totalBookings={bookings.length}
              recentBookings={recentBookings}
            />
          )}

        </main>
      </div>
    </>
  );
}