import React, { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [newName, setNewName] = useState('');
  useEffect(() => {
    fetch('/api/admin/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`/api/admin/projects/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(() => setProjects(projects => projects.filter(p => p._id !== id)));
  };

  const handleAdd = () => {
    fetch('/api/admin/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName, status: 'active', type: 'General', revenue: 0 })
    })
      .then(res => res.json())
      .then(project => {
        setProjects(projects => [...projects, project]);
        setNewName('');
      });
  };

  return (
    <div>
      <h2>Plans / Projects</h2>
      <ul>
        {projects.map(p => (
          <li key={p._id}>
            🏢 {p.name}
            <button style={{ marginLeft: 10 }} onClick={() => handleDelete(p._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input value={newName} onChange={e => setNewName(e.target.value)} placeholder="New Plan Name" />
      <button style={{ marginTop: 20 }} onClick={handleAdd}>Add Plan</button>
    </div>
  );
}
