import React, { useEffect, useState } from 'react';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch('/api/admin/messages')
      .then(res => res.json())
      .then(data => setMessages(data));
  }, []);

  return (
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
