import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../apiConfig";

const css = `
  .u-wrap { font-family:'Inter',sans-serif; }
  .u-header { display:flex; align-items:center; justify-content:space-between; margin-bottom: 28px; }
  .u-title  { font-size: 32px; font-weight: 800; color:#111; letter-spacing: -0.5px; }

  .u-search {
    width:100%; padding: 14px 20px; border: 1px solid #e2e8f0; border-radius: 12px;
    font-size: 15px; font-family:'Inter',sans-serif; margin-bottom: 28px;
    outline:none; transition: all 0.2s; background:#fff;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  }
  .u-search:focus { border-color:#3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }

  .u-table-wrap {
    background:#fff; border-radius: 12px; border: 1px solid #e2e8f0;
    overflow:hidden; animation:u-fadeUp 0.4s ease both;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  }
  @keyframes u-fadeUp {
    from { opacity:0; transform:translateY(16px); }
    to   { opacity:1; transform:translateY(0); }
  }

  .u-table { width:100%; border-collapse:collapse; table-layout: fixed; }
  .u-table th {
    background:#f8fafc; padding: 18px 20px; text-align:left;
    font-size: 13px; font-weight: 700; color: #64748b;
    text-transform:uppercase; letter-spacing:0.06em;
    border-bottom:1px solid #e2e8f0;
  }
  .u-table th:nth-child(1) { width: 22%; }
  .u-table th:nth-child(2) { width: 22%; }
  .u-table th:nth-child(3) { width: 14%; }
  .u-table th:nth-child(4) { width: 14%; }
  .u-table th:nth-child(5) { width: 10%; }
  .u-table th:nth-child(6) { width: 10%; }
  .u-table th:nth-child(7) { width: 8%; }

  .u-table td {
    padding: 22px 20px; font-size:14px; color:#334155;
    border-bottom: 1px solid #f1f5f9;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .u-table tr:last-child td { border-bottom:none; }
  .u-table tr:hover td { background:#fbfcfe; transition:background 0.15s; }

  .u-user-cell { display:flex; align-items:center; gap: 24px; }
  .u-avatar {
    width: 48px; height: 48px; border-radius:50%; flex-shrink:0;
    display:flex; align-items:center; justify-content:center;
    font-size:18px; font-weight:700; color:#fff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  .u-name { font-weight: 800; color:#1e293b; font-size: 14.5px; text-transform: uppercase; line-height: 1.4; display: block; }

  .u-pill {
    display:inline-block; padding: 6px 16px; border-radius:20px;
    font-size: 12.5px; font-weight: 700; letter-spacing: 0.03em;
  }
  .u-pill.active   { background:#dcfce7; color:#16a34a; }
  .u-pill.inactive { background:#f3f4f6; color:#64748b; }
  .u-pill.pending  { background:#fff7ed; color:#ea580c; }

  .u-action {
    background: #fff; border: 1.5px solid #fecaca; border-radius: 8px;
    padding: 8px 18px; font-size: 13px; font-weight: 700; cursor: pointer;
    font-family:'Inter',sans-serif; transition: all 0.2s; color: #ef4444;
  }
  .u-action.del:hover { background: #fef2f2; border-color: #ef4444; transform: translateY(-1px); }

  .u-empty   { text-align:center; padding:60px; color:#94a3b8; font-size:15px; }
  .u-loading { text-align:center; padding:60px; color:#64748b; font-size:14px; }

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
    fetch(`${API_BASE_URL}/users`)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        onDataChange?.(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Fetch error:", err);
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

  // ✅ FIX: doDelete now has its own closing brace
  function doDelete() {
    const newList = users.filter(u => (u._id || u.id) !== confirmId);
    updateUsers(newList);
    setConfirmId(null);
  }

  // ✅ FIX: confirmUser declared outside doDelete, inside component
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
                  <th>USER</th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th>PROJECT TYPE</th>
                  <th>ROLE</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
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
        <div
          className="u-overlay"
          onClick={e => e.target.className === 'u-overlay' && setConfirmId(null)}
        >
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