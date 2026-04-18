import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../apiConfig";

const css = `
  .bk-wrap { font-family:'Inter',sans-serif; }
  .bk-header { display:flex; align-items:center; justify-content:space-between; margin-bottom: 28px; }
  .bk-title  { font-size: 32px; font-weight: 800; color:#111; letter-spacing: -0.5px; }

  .bk-summary {
    display:flex; align-items:center; gap:16px;
    background:#fff; border-radius:12px; border:1px solid #e5e7eb;
    padding:18px 24px; margin-bottom:24px;
    animation:bk-up 0.4s ease both;
  }
  .bk-summary-icon {
    width:48px; height:48px; border-radius:12px; background:#eff6ff;
    display:flex; align-items:center; justify-content:center; font-size:22px; flex-shrink:0;
  }
  .bk-summary-label { font-size:12px; color:#6b7280; font-weight:500; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:2px; }
  .bk-summary-val   { font-size:30px; font-weight:800; color:#1d4ed8; line-height:1; }
  .bk-summary-sub   { font-size:12px; color:#9ca3af; margin-top:2px; }
  .bk-summary-divider { width:1px; height:48px; background:#e5e7eb; margin:0 8px; }

  .bk-building-grid {
    display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-bottom:28px;
  }
  .bk-building-card {
    background:#fff; border-radius:12px; border:1px solid #e5e7eb;
    padding:16px 18px; cursor:pointer;
    animation:bk-up 0.4s ease both;
    transition:transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  }
  .bk-building-card:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,0.09); }
  .bk-building-card.selected { border-color:#1d4ed8; background:#eff6ff; }
  .bk-bc-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; }
  .bk-bc-icon { width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:20px; }
  .bk-bc-count { font-size:26px; font-weight:800; color:#111; line-height:1; }
  .bk-bc-name  { font-size:13px; font-weight:600; color:#374151; margin-bottom:4px; }
  .bk-bc-sub   { font-size:11px; color:#9ca3af; }
  .bk-bc-bar-bg { background:#f3f4f6; border-radius:4px; height:4px; margin-top:10px; overflow:hidden; }
  .bk-bc-bar    { height:4px; border-radius:4px; transition:width 0.6s ease; }

  .bk-search {
    width:100%; padding:10px 14px; border:1px solid #e5e7eb; border-radius:8px;
    font-size:14px; font-family:'Inter',sans-serif; margin-bottom:16px;
    outline:none; transition:border-color 0.2s;
  }
  .bk-search:focus { border-color:#1d4ed8; }

  .bk-filter-info { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; }
  .bk-filter-label { font-size:13px; color:#6b7280; font-weight:500; }
  .bk-clear-btn {
    font-size:12px; color:#1d4ed8; cursor:pointer; background:none; border:none;
    font-family:'Inter',sans-serif; font-weight:500; padding:0;
  }
  .bk-clear-btn:hover { text-decoration:underline; }

  .bk-table-wrap {
    background:#fff; border-radius:12px; border:1px solid #e5e7eb;
    overflow:hidden; animation:bk-up 0.4s 0.1s ease both;
  }
  @keyframes bk-up { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

  .bk-row-deleting td {
    animation: bk-row-fade 0.35s ease forwards !important;
    pointer-events: none;
  }
  @keyframes bk-row-fade {
    from { opacity:1; transform:translateX(0); background:#fef2f2 !important; }
    to   { opacity:0; transform:translateX(40px); }
  }

  .bk-table { width:100%; border-collapse:collapse; }
  .bk-table th {
    background:#004aad; padding:12px 16px; text-align:left;
    font-size:13px; font-weight:600; color:#fff; letter-spacing:0.3px;
  }
  .bk-table th:first-child { width:50px; text-align:center; }
  .bk-table td {
    padding:14px 16px; font-size:14px; color:#374151; border-bottom:1px solid #f3f4f6;
  }
  .bk-table td:first-child { text-align:center; color:#6b7280; font-weight:500; }
  .bk-table tr:nth-child(even) td { background:#f9f9f9; }
  .bk-table tr:nth-child(odd)  td { background:#fff; }
  .bk-table tr:last-child td { border-bottom:none; }
  .bk-table tr:hover td { background:#eff6ff !important; transition:background 0.15s; }

  .bk-user-cell { display:flex; align-items:center; gap:10px; }
  .bk-avatar {
    width:36px; height:36px; border-radius:50%; flex-shrink:0;
    display:flex; align-items:center; justify-content:center;
    font-size:14px; font-weight:700; color:#fff;
  }
  .bk-name  { font-weight:600; color:#111; font-size:14px; }
  .bk-email { color:#6b7280; font-size:12px; margin-top:1px; }

  .bk-building-cell { display:flex; align-items:center; gap:8px; }
  .bk-building-icon {
    width:32px; height:32px; border-radius:8px; background:#f3f4f6;
    display:flex; align-items:center; justify-content:center; font-size:16px; flex-shrink:0;
  }
  .bk-building-name { font-weight:500; color:#111; font-size:14px; }

  .bk-pill { display:inline-block; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:700; }
  .bk-pill.Approved  { background:#dcfce7; color:#15803d; }
  .bk-pill.Pending   { background:#fff7ed; color:#c2410c; }
  .bk-pill.Rejected  { background:#fef2f2; color:#dc2626; }
  .bk-pill.Completed { background:#eff6ff; color:#1d4ed8; }

  .bk-action {
    background:none; border:1px solid #e5e7eb; border-radius:6px;
    padding:5px 10px; font-size:12px; cursor:pointer;
    font-family:'Inter',sans-serif; margin-right:5px; transition:background 0.15s; white-space:nowrap;
  }
  .bk-action.approve { color:#15803d; border-color:#bbf7d0; }
  .bk-action.approve:hover { background:#dcfce7; }
  .bk-action.reject  { color:#f97316; border-color:#fed7aa; }
  .bk-action.reject:hover  { background:#fff7ed; }
  .bk-action.del     { color:#ef4444; border-color:#fca5a5; }
  .bk-action.del:hover     { background:#fef2f2; }
  .bk-action:disabled { opacity:0.4; cursor:not-allowed; }

  .bk-empty   { text-align:center; padding:40px; color:#9ca3af; font-size:15px; }
  .bk-loading { text-align:center; padding:40px; color:#6b7280; font-size:14px; }

  .bk-overlay {
    position:fixed; inset:0; background:rgba(0,0,0,0.35);
    display:flex; align-items:center; justify-content:center; z-index:1000;
  }
  .bk-confirm {
    background:#fff; border-radius:14px; padding:28px; width:380px;
    box-shadow:0 20px 60px rgba(0,0,0,0.2);
    animation:bk-pop 0.25s cubic-bezier(0.34,1.56,0.64,1); text-align:center;
  }
  @keyframes bk-pop { from{transform:scale(0.85);opacity:0} to{transform:scale(1);opacity:1} }
  .bk-confirm-icon { font-size:40px; margin-bottom:12px; }
  .bk-confirm h3   { font-size:17px; font-weight:700; color:#111; margin-bottom:8px; }
  .bk-confirm p    { font-size:14px; color:#6b7280; margin-bottom:24px; line-height:1.6; }
  .bk-confirm-btns { display:flex; gap:10px; }
  .bk-confirm-del  {
    flex:1; background:#ef4444; color:#fff; border:none; border-radius:8px;
    padding:10px; font-size:14px; font-weight:600; cursor:pointer; font-family:'Inter',sans-serif;
  }
  .bk-confirm-del:hover { background:#dc2626; }
  .bk-confirm-cancel {
    flex:1; background:#f3f4f6; color:#374151; border:1px solid #e2e8f0; border-radius:8px;
    padding:10px; font-size:14px; font-weight:600; cursor:pointer; font-family:'Inter',sans-serif;
  }

  .bk-toast {
    position:fixed; bottom:2rem; right:2rem; z-index:9999;
    background:#111; color:#fff; padding:12px 20px; border-radius:10px;
    font-size:14px; font-weight:500; display:flex; align-items:center; gap:10px;
    box-shadow:0 8px 32px rgba(0,0,0,0.2);
    animation:bk-toast-in 0.35s cubic-bezier(0.34,1.56,0.64,1) both;
  }
  .bk-toast-dot { width:8px; height:8px; border-radius:50%; background:#4ade80; flex-shrink:0; }
  @keyframes bk-toast-in { from{opacity:0;transform:translateY(20px) scale(.9)} to{opacity:1;transform:translateY(0) scale(1)} }
`;

const STORAGE_KEY = "bk_deleted_ids";

const BUILDING_ICONS = {
  'home':'🏠','house':'🏠','residential':'🏠',
  'hospital':'🏥','medical':'🏥','clinic':'🏥','dental':'🏥','eye':'🏥','orthopedic':'🏥',
  'mall':'🏬','shopping':'🏬','commercial':'🏬',
  'restaurant':'🍽️','dining':'🍽️','serenity':'🍽️',
  'apartment':'🏢','flat':'🏢','building':'🏢',
  'college':'🎓','school':'🎓','university':'🎓','agriculture':'🎓',
  'office':'🏗️',
};

const CARD_COLORS = [
  { bg:'#eff6ff', bar:'#3b82f6', icon:'#dbeafe' },
  { bg:'#f0fdf4', bar:'#22c55e', icon:'#dcfce7' },
  { bg:'#fff7ed', bar:'#f97316', icon:'#fed7aa' },
  { bg:'#fdf4ff', bar:'#a855f7', icon:'#f3e8ff' },
  { bg:'#fef2f2', bar:'#ef4444', icon:'#fee2e2' },
  { bg:'#f0fdfa', bar:'#14b8a6', icon:'#ccfbf1' },
  { bg:'#fefce8', bar:'#eab308', icon:'#fef9c3' },
  { bg:'#f5f3ff', bar:'#6366f1', icon:'#ede9fe' },
];

const AVATAR_COLORS = ['#f97316','#3b82f6','#22c55e','#a855f7','#ec4899','#14b8a6','#f59e0b','#6366f1'];

function getBuildingIcon(name = '') {
  const lower = name.toLowerCase();
  for (const key of Object.keys(BUILDING_ICONS)) {
    if (lower.includes(key)) return BUILDING_ICONS[key];
  }
  return '📐';
}

function getAvatarColor(name = '') {
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return AVATAR_COLORS[sum % AVATAR_COLORS.length];
}

function getDeletedIds() {
  try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')); }
  catch { return new Set(); }
}
function saveDeletedId(id) {
  const ids = getDeletedIds();
  ids.add(String(id));
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
}

function Bookings({ onDataChange }) {
  const [bookings,         setBookings]     = useState([]);
  const [loading,          setLoading]      = useState(true);
  const [search,           setSearch]       = useState('');
  const [selectedBuilding, setSelected]     = useState(null);
  const [confirmId,        setConfirmId]    = useState(null);
  const [deletingId,       setDeletingId]   = useState(null);
  const [toast,            setToast]        = useState('');

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(''), 2500);
  }

  useEffect(() => {
    fetch(`${API_BASE_URL}/bookings`)
      .then(res => res.json())
      .then(data => {
        const deletedIds = getDeletedIds();
        const active = data.filter(b => !deletedIds.has(String(b._id || b.id)));
        setBookings(active);
        onDataChange?.(active);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function updateBookings(newList) {
    setBookings(newList);
    onDataChange?.(newList);
  }

  function updateStatus(id, newStatus) {
    updateBookings(bookings.map(b =>
      (b._id === id || b.id === id) ? { ...b, status: newStatus } : b
    ));
  }

  function doDelete() {
    if (!confirmId) return;
    const id = confirmId;
    setConfirmId(null);
    setDeletingId(id);
    setTimeout(() => {
      saveDeletedId(id);
      const newList = bookings.filter(b => (b._id || b.id) !== id);
      updateBookings(newList);
      setDeletingId(null);
      showToast('Booking deleted successfully');
    }, 350);
  }

  const buildingMap = {};
  bookings.forEach(b => {
    const name = b.projectType || 'Unknown';
    if (!buildingMap[name]) buildingMap[name] = 0;
    buildingMap[name]++;
  });
  const buildingStats = Object.entries(buildingMap).sort((a, b) => b[1] - a[1]);
  const total       = bookings.length;
  const uniqueUsers = [...new Set(bookings.map(b => b.userEmail))].length;
  const maxCount    = buildingStats.length ? buildingStats[0][1] : 1;

  const visible = bookings.filter(b => {
    const s = search.toLowerCase();
    const matchSearch =
      (b.userName    || '').toLowerCase().includes(s) ||
      (b.userEmail   || '').toLowerCase().includes(s) ||
      (b.projectType || '').toLowerCase().includes(s);
    const matchBuilding = !selectedBuilding || b.projectType === selectedBuilding;
    return matchSearch && matchBuilding;
  });

  const confirmBooking = bookings.find(b => (b._id || b.id) === confirmId);

  return (
    <>
      <style>{css}</style>
      <div className="bk-wrap">

        <div className="bk-header">
          <div className="bk-title">Bookings</div>
        </div>

        <div className="bk-summary">
          <div className="bk-summary-icon">📋</div>
          <div>
            <div className="bk-summary-label">Total Bookings</div>
            <div className="bk-summary-val">{total}</div>
            <div className="bk-summary-sub">{uniqueUsers} unique user{uniqueUsers !== 1 ? 's' : ''}</div>
          </div>
          <div className="bk-summary-divider"/>
          <div className="bk-summary-icon" style={{background:'#f0fdf4'}}>🏗️</div>
          <div>
            <div className="bk-summary-label">Building Types</div>
            <div className="bk-summary-val" style={{color:'#15803d'}}>{buildingStats.length}</div>
            <div className="bk-summary-sub">different projects</div>
          </div>
        </div>

        <div style={{marginBottom:10, fontSize:13, fontWeight:600, color:'#374151'}}>
          Applications per Building — click to filter
        </div>
        <div className="bk-building-grid">
          {buildingStats.map(([name, count], i) => {
            const clr = CARD_COLORS[i % CARD_COLORS.length];
            const pct = Math.round((count / maxCount) * 100);
            const isSelected = selectedBuilding === name;
            return (
              <div
                key={name}
                className={`bk-building-card${isSelected ? ' selected' : ''}`}
                style={{ animationDelay:`${i * 0.05}s` }}
                onClick={() => setSelected(isSelected ? null : name)}
              >
                <div className="bk-bc-top">
                  <div className="bk-bc-icon" style={{background:clr.icon}}>{getBuildingIcon(name)}</div>
                  <div className="bk-bc-count" style={{color:clr.bar}}>{count}</div>
                </div>
                <div className="bk-bc-name">{name}</div>
                <div className="bk-bc-sub">{count} application{count !== 1 ? 's' : ''}</div>
                <div className="bk-bc-bar-bg">
                  <div className="bk-bc-bar" style={{width:`${pct}%`, background:clr.bar}}/>
                </div>
              </div>
            );
          })}
        </div>

        <input
          className="bk-search"
          placeholder="Search by name, email or building..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {selectedBuilding && (
          <div className="bk-filter-info">
            <div className="bk-filter-label">
              Showing: <strong>{selectedBuilding}</strong> ({visible.length} result{visible.length !== 1 ? 's' : ''})
            </div>
            <button className="bk-clear-btn" onClick={() => setSelected(null)}>Clear filter ✕</button>
          </div>
        )}

        <div className="bk-table-wrap">
          {loading ? (
            <div className="bk-loading">Loading bookings...</div>
          ) : (
            <table className="bk-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Building / Project</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {visible.length === 0 ? (
                  <tr><td colSpan={6} className="bk-empty">No bookings found</td></tr>
                ) : (
                  visible.map((b, index) => {
                    const id = b._id || b.id;
                    const isDeleting = deletingId === id;
                    return (
                      <tr key={id || index} className={isDeleting ? 'bk-row-deleting' : ''}>
                        <td>{index + 1}</td>
                        <td>
                          <div className="bk-user-cell">
                            <div className="bk-avatar" style={{background:getAvatarColor(b.userName||'')}}>
                              {(b.userName||'U').charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div className="bk-name">{b.userName}</div>
                              <div className="bk-email">{b.userEmail}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="bk-building-cell">
                            <div className="bk-building-icon">{getBuildingIcon(b.projectType)}</div>
                            <div className="bk-building-name">{b.projectType}</div>
                          </div>
                        </td>
                        <td><span className={`bk-pill ${b.status}`}>{b.status}</span></td>
                        <td style={{fontSize:'13px',color:'#6b7280'}}>
                          {new Date(b.date).toLocaleString()}
                        </td>
                        <td>
                          {b.status === 'Pending' && (
                            <>
                              <button className="bk-action approve" onClick={() => updateStatus(id,'Approved')}>Approve</button>
                              <button className="bk-action reject"  onClick={() => updateStatus(id,'Rejected')}>Reject</button>
                            </>
                          )}
                          <button
                            className="bk-action del"
                            disabled={isDeleting}
                            onClick={() => setConfirmId(id)}
                          >
                            {isDeleting ? '...' : 'Delete'}
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {confirmId && (
        <div className="bk-overlay" onClick={e => e.target.className==='bk-overlay' && setConfirmId(null)}>
          <div className="bk-confirm">
            <div className="bk-confirm-icon">🗑️</div>
            <h3>Delete Booking?</h3>
            <p>
              <strong>{confirmBooking?.userName}</strong>'s booking for<br/>
              <strong>{confirmBooking?.projectType}</strong> will be permanently deleted.<br/>
              This action cannot be undone!
            </p>
            <div className="bk-confirm-btns">
              <button className="bk-confirm-cancel" onClick={() => setConfirmId(null)}>Cancel</button>
              <button className="bk-confirm-del" onClick={doDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="bk-toast">
          <div className="bk-toast-dot" />
          {toast}
        </div>
      )}
    </>
  );
}

export default Bookings;