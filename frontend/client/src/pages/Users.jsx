import React, { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/api/admin/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`/api/admin/users/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(() => setUsers(users => users.filter(u => u._id !== id)));
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
      <h2>Users</h2>
      <ul>
        {users.map(u => (
          <li key={u._id}>
            👤 {u.username} ({u.email})
            <button style={{ marginLeft: 10 }} onClick={() => handleDelete(u._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
