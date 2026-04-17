import React from 'react';

export default function Profile() {
  return (
    <style>{`
        @media (max-width: 600px) {
          .card-container {
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
      <h2>Admin Profile</h2>
      <div>👤 gangumallajyothi@gmail.com</div>
      <button style={{ marginTop: 20 }}>Change Password</button>
    </div>
  );
}
