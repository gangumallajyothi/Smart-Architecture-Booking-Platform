import React, { useEffect, useState } from 'react';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch('/api/admin/bookings')
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const handleApprove = (id) => {
    fetch(`/api/admin/bookings/${id}/approve`, { method: 'POST' })
      .then(res => res.json())
      .then(() => setBookings(bookings => bookings.map(b => b._id === id ? { ...b, status: 'Approved' } : b)));
  };

  const handleCancel = (id) => {
    fetch(`/api/admin/bookings/${id}/cancel`, { method: 'POST' })
      .then(res => res.json())
      .then(() => setBookings(bookings => bookings.map(b => b._id === id ? { ...b, status: 'Cancelled' } : b)));
  };

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
      <h2>Bookings</h2>
      <ul>
        {bookings.map(b => (
          <li key={b._id}>
            📅 {b.user?.username || 'Unknown'} booked {b.project?.name || 'Unknown'} - {b.status}
            <button style={{ marginLeft: 10 }} onClick={() => handleApprove(b._id)}>Approve</button>
            <button style={{ marginLeft: 10 }} onClick={() => handleCancel(b._id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
