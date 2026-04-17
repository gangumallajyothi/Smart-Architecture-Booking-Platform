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

  @media (max-width: 768px) {
    .ad-wrap { flex-direction: column; }
    .ad-sidebar { 
      width: 100%; height: auto; position: relative; 
      flex-direction: row; flex-wrap: wrap; 
      padding: 10px; border-bottom: 3px solid #e5e7eb;
    }
    .ad-logo { width: 100%; border-bottom: none; padding: 5px; margin-bottom: 5px; }
    .ad-nav { width: auto; flex: 1; min-width: 100px; padding: 6px 10px; font-size: 12px; }
    .ad-main { padding: 15px; }
  }
  .ad-logout {
    margin-top: auto;
    background: #fee2e2;
    color: #dc2626;
    border-color: #fecaca;
  }
  .ad-logout:hover {
    background: #fecaca;
    transform: none;
  }
`;

export default function AdminDashboard() {
  const [section, setSection] = useState('dashboard');

  function handleLogout() {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      window.location.href = "/";
    }
  }

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
          <button className="ad-nav ad-logout" onClick={handleLogout}>
            <span className="ad-nav-icon">🚪</span>
            Logout
          </button>
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