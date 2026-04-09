import React, { useEffect, useState } from "react";

const css = `
  .u-wrap { font-family:'Inter',sans-serif; }
  .u-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:24px; }
  .u-title  { font-size:20px; font-weight:700; color:#111; }

  .u-search {
    width:100%; padding:10px 14px; border:1px solid #e5e7eb; border-radius:8px;
    font-size:14px; font-family:'Inter',sans-serif; margin-bottom:20px;
    outline:none; transition:border-color 0.2s; background:#fff;
  }
  .u-search:focus { border-color:#1d4ed8; }

  .u-table-wrap {
    background:#fff; border-radius:12px; border:1px solid #e5e7eb;
    overflow:hidden; animation:u-fadeUp 0.4s ease both;
  }
  @keyframes u-fadeUp {
    from { opacity:0; transform:translateY(16px); }
    to   { opacity:1; transform:translateY(0); }
  }

  .u-table { width:100%; border-collapse:collapse; }
  .u-table th {
    background:#f9fafb; padding:12px 16px; text-align:left;
    font-size:12px; font-weight:600; color:#6b7280;
    text-transform:uppercase; letter-spacing:0.5px;
    border-bottom:1px solid #e5e7eb;
  }
  .u-table td {
    padding:14px 16px; font-size:14px; color:#374151;
    border-bottom:1px solid #f3f4f6;
  }
  .u-table tr:last-child td { border-bottom:none; }
  .u-table tr:hover td { background:#f9fafb; transition:background 0.15s; }

  .u-user-cell { display:flex; align-items:center; gap:12px; }
  .u-avatar {
    width:38px; height:38px; border-radius:50%; flex-shrink:0;
    display:flex; align-items:center; justify-content:center;
    font-size:15px; font-weight:700; color:#fff;
  }
  .u-name  { font-weight:600; color:#111; font-size:14px; }

  .u-pill { display:inline-block; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; }
  .u-pill.active   { background:#dcfce7; color:#15803d; }
  .u-pill.inactive { background:#f3f4f6; color:#6b7280; }
  .u-pill.pending  { background:#fff7ed; color:#c2410c; }

  .u-action {
    background:none; border:1px solid #e5e7eb; border-radius:6px;
    padding:5px 14px; font-size:13px; font-weight:500; cursor:pointer;
    font-family:'Inter',sans-serif; margin-right:6px; transition:background 0.15s;
  }
  .u-action:hover     { background:#f3f4f6; }
  .u-action.del       { color:#ef4444; border-color:#fca5a5; }
  .u-action.del:hover { background:#fef2f2; }

  .u-empty   { text-align:center; padding:40px; color:#9ca3af; font-size:15px; }
  .u-loading { text-align:center; padding:40px; color:#6b7280; font-size:14px; }

  .u-overlay {
    position:fixed; inset:0; background:rgba(0,0,0,0.35);
    display:flex; align-items:center; justify-content:center; z-index:1000;
    animation:u-fadeIn 0.2s ease;
  }
  @keyframes u-fadeIn { from{opacity:0} to{opacity:1} }

  .u-confirm {
    background:#fff; border-radius:14px; padding:28px; width:380px;
    box-shadow:0 20px 60px rgba(0,0,0,0.2);
    animation:u-popIn 0.25s cubic-bezier(0.34,1.56,0.64,1);
    text-align:center;
  }
  @keyframes u-popIn {
    from { transform:scale(0.85); opacity:0; }
    to   { transform:scale(1);    opacity:1; }
  }
  .u-confirm-icon { font-size:40px; margin-bottom:12px; }
  .u-confirm h3   { font-size:17px; font-weight:700; color:#111; margin-bottom:8px; }
  .u-confirm p    { font-size:14px; color:#6b7280; margin-bottom:24px; line-height:1.6; }
  .u-confirm-btns { display:flex; gap:10px; }
  .u-confirm-del  {
    flex:1; background:#ef4444; color:#fff; border:none; border-radius:8px;
    padding:10px; font-size:14px; font-weight:600; cursor:pointer;
    font-family:'Inter',sans-serif;
  }
  .u-confirm-del:hover { background:#dc2626; }
  .u-confirm-cancel {
    flex:1; background:#f3f4f6; color:#374151; border:1px solid #e5e7eb;
    border-radius:8px; padding:10px; font-size:14px; font-weight:600;
    cursor:pointer; font-family:'Inter',sans-serif;
  }
`;

const AVATAR_COLORS = [
  '#f97316','#3b82f6','#22c55e','#a855f7',
  '#ec4899','#14b8a6','#f59e0b','#6366f1'
];

function getAvatarColor(name = '') {
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return AVATAR_COLORS[sum % AVATAR_COLORS.length];
}

export default function Users({ onDataChange }) {

  const [users,     setUsers]     = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [query,     setQuery]     = useState('');
  const [confirmId, setConfirmId] = useState(null);

  function updateUsers(newList) {
    setUsers(newList);
    onDataChange?.(newList);
  }

  // ── Fetch users ─────────────────────────────────────────────
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        onDataChange?.(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // ── Search filter ───────────────────────────────────────────
  const filtered = users.filter(u => {
    const s = query.toLowerCase();
    return (
      (u.name        || '').toLowerCase().includes(s) ||
      (u.email       || '').toLowerCase().includes(s) ||
      (u.phone       || '').toLowerCase().includes(s) ||
      (u.projectType || '').toLowerCase().includes(s) ||
      (u.role        || '').toLowerCase().includes(s)
    );
  });

  // ── Delete ──────────────────────────────────────────────────
  function doDelete() {
    const newList = users.filter(u => (u._id || u.id) !== confirmId);
    updateUsers(newList);
    setConfirmId(null);
    // fetch(`http://localhost:5000/api/users/${confirmId}`, { method:'DELETE' });
  }

  const confirmUser = users.find(u => (u._id || u.id) === confirmId);

  return (
    <>
      <style>{css}</style>
      <div className="u-wrap">

        {/* Header */}
        <div className="u-header">
          <div className="u-title">Users</div>
        </div>

        {/* Search */}
        <input
          className="u-search"
          placeholder="Search users..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />

        {/* Table */}
        <div className="u-table-wrap">
          {loading ? (
            <div className="u-loading">Loading users...</div>
          ) : (
            <table className="u-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Project Type</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="u-empty">No users found</td>
                  </tr>
                ) : (
                  filtered.map((u, i) => (
                    <tr key={u._id || u.id || i}>
                      <td>
                        <div className="u-user-cell">
                          <div
                            className="u-avatar"
                            style={{ background: getAvatarColor(u.name || '') }}
                          >
                            {(u.name || 'U').charAt(0).toUpperCase()}
                          </div>
                          <div className="u-name">{u.name}</div>
                        </div>
                      </td>
                      <td>{u.email}</td>
                      <td>{u.phone || '—'}</td>
                      <td>{u.projectType || '—'}</td>
                      <td>{u.role}</td>
                      <td>
                        <span className={`u-pill ${(u.status || 'active').toLowerCase()}`}>
                          {u.status || 'active'}
                        </span>
                      </td>
                      <td>
                        <button
                          className="u-action del"
                          onClick={() => setConfirmId(u._id || u.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Delete Confirm Modal */}
      {confirmId && (
        <div className="u-overlay" onClick={e => e.target.className === 'u-overlay' && setConfirmId(null)}>
          <div className="u-confirm">
            <div className="u-confirm-icon">🗑️</div>
            <h3>Delete User?</h3>
            <p>
              <strong>{confirmUser?.name}</strong> will be permanently deleted.<br />
              This action cannot be undone!
            </p>
            <div className="u-confirm-btns">
              <button className="u-confirm-cancel" onClick={() => setConfirmId(null)}>Cancel</button>
              <button className="u-confirm-del"    onClick={doDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}