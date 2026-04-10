import React, { useEffect, useState } from 'react';

export default function DashboardHome() {
  const [stats, setStats] = useState({});
  useEffect(() => {
    fetch('/api/admin/dashboard')
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);
  return (
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
