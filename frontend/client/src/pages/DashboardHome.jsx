import React, { useEffect, useState } from 'react';

export default function DashboardHome() {
  const [stats, setStats] = useState({});
  useEffect(() => {
    fetch('/api/admin/dashboard')
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);
  return (
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
    <div>
      <h2>Dashboard Overview</h2>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <div>📊 Total Users: {stats.users ?? '...'}</div>
        <div>📅 Total Bookings: {stats.bookings ?? '...'}</div>
        <div>🏗 Total Projects: {stats.projects ?? '...'}</div>
        <div>💰 Revenue: {stats.revenue ?? '...'}</div>
        <div>🟢 Active Projects: {stats.activeProjects ?? '...'}</div>
        <div>🔔 Notifications: {stats.notifications ?? '...'}</div>
      </div>
    </div>
  );
}
