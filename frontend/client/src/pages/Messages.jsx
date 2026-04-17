import React, { useEffect, useState } from 'react';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch('/api/admin/messages')
      .then(res => res.json())
      .then(data => setMessages(data));
  }, []);

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
      <h2>Messages / Contact Requests</h2>
      <ul>
        {messages.map(m => (
          <li key={m._id}>
            📩 {m.from?.username || 'Unknown'}: {m.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
