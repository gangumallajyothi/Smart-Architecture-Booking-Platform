import React, { useState, useEffect } from 'react';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');

  .pr-wrap { font-family:'DM Sans',sans-serif; }
  .pr-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:28px; }
  .pr-title  { font-size:22px; font-weight:800; color:#111; font-family:'Syne',sans-serif; letter-spacing:-0.5px; }
  .pr-add-btn {
    background:#111; color:#fff; border:none; border-radius:10px;
    padding:10px 20px; font-size:14px; font-weight:600; cursor:pointer;
    font-family:'DM Sans',sans-serif; transition:background 0.2s,transform 0.15s;
    letter-spacing:0.2px;
  }
  .pr-add-btn:hover { background:#333; transform:translateY(-1px); }

  .pr-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }

  .pr-card {
    background:#fff; border-radius:16px; border:1px solid #ebebeb;
    overflow:hidden; cursor:pointer;
    animation:pr-up 0.4s ease both;
    transition:box-shadow 0.25s, transform 0.25s;
  }
  .pr-card:nth-child(1){animation-delay:0.05s} .pr-card:nth-child(2){animation-delay:0.10s}
  .pr-card:nth-child(3){animation-delay:0.15s} .pr-card:nth-child(4){animation-delay:0.20s}
  .pr-card:nth-child(5){animation-delay:0.25s} .pr-card:nth-child(6){animation-delay:0.30s}
  @keyframes pr-up { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
  .pr-card:hover { box-shadow:0 12px 36px rgba(0,0,0,0.10); transform:translateY(-4px); }

  .pr-img-wrap { width:100%; height:185px; overflow:hidden; position:relative; }
  .pr-img-wrap img { width:100%; height:100%; object-fit:cover; transition:transform 0.4s ease; }
  .pr-card:hover .pr-img-wrap img { transform:scale(1.06); }
  .pr-no-img {
    width:100%; height:185px; display:flex; align-items:center; justify-content:center;
    font-size:48px; background:#f7f7f7;
  }

  .pr-body { padding:16px 18px 18px; }
  .pr-card-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; }
  .pr-card-name { font-size:15px; font-weight:700; color:#111; font-family:'Syne',sans-serif; }
  .pr-badge { padding:3px 11px; border-radius:20px; font-size:11px; font-weight:600; text-transform:capitalize; }
  .pr-badge.active    { background:#dcfce7; color:#15803d; }
  .pr-badge.planning  { background:#fff7ed; color:#c2410c; }
  .pr-badge.completed { background:#eff6ff; color:#1d4ed8; }
  .pr-badge.on-hold   { background:#f3f4f6; color:#6b7280; }

  .pr-desc { font-size:13px; color:#777; margin-bottom:14px; line-height:1.55; }

  .pr-progress-label { display:flex; justify-content:space-between; font-size:12px; color:#888; margin-bottom:5px; font-weight:500; }
  .pr-bar-bg { background:#f0f0f0; border-radius:4px; height:6px; overflow:hidden; margin-bottom:14px; }
  .pr-bar    { height:6px; border-radius:4px; transition:width 0.6s ease; }

  .pr-card-footer { display:flex; align-items:center; justify-content:space-between; }
  .pr-team { font-size:12px; color:#888; }
  .pr-actions { display:flex; gap:6px; }
  .pr-action {
    background:none; border:1px solid #e5e7eb; border-radius:7px;
    padding:5px 12px; font-size:12px; cursor:pointer; font-family:'DM Sans',sans-serif;
    transition:background 0.15s; font-weight:500;
  }
  .pr-action:hover { background:#f5f5f5; }
  .pr-action.del { color:#ef4444; }
  .pr-action.del:hover { background:#fef2f2; border-color:#fca5a5; }

  .pr-view-btn {
    width:100%; margin-top:14px; padding:9px; background:#111; color:#fff;
    border:none; border-radius:9px; font-size:13px; font-weight:600; cursor:pointer;
    font-family:'DM Sans',sans-serif; transition:background 0.2s;
  }
  .pr-view-btn:hover { background:#333; }

  .pr-overlay {
    position:fixed; inset:0; background:rgba(0,0,0,0.45);
    display:flex; align-items:center; justify-content:center; z-index:1000;
    backdrop-filter:blur(3px);
  }
  .pr-modal {
    background:#fff; border-radius:16px; padding:30px; width:460px;
    max-height:90vh; overflow-y:auto;
    box-shadow:0 24px 64px rgba(0,0,0,0.18);
    animation:pr-pop 0.25s cubic-bezier(0.34,1.56,0.64,1);
  }
  @keyframes pr-pop { from{transform:scale(0.85);opacity:0} to{transform:scale(1);opacity:1} }
  .pr-modal h3 { font-size:18px; font-weight:800; margin-bottom:22px; color:#111; font-family:'Syne',sans-serif; }
  .pr-field { margin-bottom:15px; }
  .pr-field label { display:block; font-size:13px; font-weight:600; color:#444; margin-bottom:5px; }
  .pr-field input, .pr-field select, .pr-field textarea {
    width:100%; padding:10px 13px; border:1.5px solid #e5e7eb; border-radius:8px;
    font-size:14px; font-family:'DM Sans',sans-serif; outline:none;
    transition:border-color 0.2s; box-sizing:border-box; color:#111;
  }
  .pr-field input:focus, .pr-field select:focus, .pr-field textarea:focus { border-color:#111; }
  .pr-field textarea { resize:vertical; min-height:72px; }
  .pr-range-wrap { display:flex; align-items:center; gap:10px; }
  .pr-range-wrap input[type=range] { flex:1; accent-color:#111; }
  .pr-range-val { font-size:13px; font-weight:700; color:#111; min-width:36px; }
  .pr-modal-btns { display:flex; gap:10px; margin-top:22px; }
  .pr-btn-save {
    flex:1; background:#111; color:#fff; border:none; border-radius:9px;
    padding:11px; font-size:14px; font-weight:700; cursor:pointer;
    font-family:'DM Sans',sans-serif; transition:background 0.2s;
  }
  .pr-btn-save:hover { background:#333; }
  .pr-btn-cancel {
    flex:1; background:#f5f5f5; color:#333; border:1.5px solid #e5e7eb; border-radius:9px;
    padding:11px; font-size:14px; font-weight:600; cursor:pointer;
    font-family:'DM Sans',sans-serif; transition:background 0.15s;
  }
  .pr-btn-cancel:hover { background:#ebebeb; }

  .pr-view-modal {
    background:#fff; border-radius:16px; width:560px; max-height:90vh; overflow-y:auto;
    box-shadow:0 24px 64px rgba(0,0,0,0.18);
    animation:pr-pop 0.25s cubic-bezier(0.34,1.56,0.64,1);
  }
  .pr-view-modal img { width:100%; height:260px; object-fit:cover; border-radius:16px 16px 0 0; }
  .pr-view-body { padding:26px; }
  .pr-view-body h2 { font-size:22px; font-weight:800; color:#111; margin-bottom:8px; font-family:'Syne',sans-serif; }
  .pr-view-body p  { font-size:14px; color:#777; line-height:1.65; margin-bottom:16px; }
  .pr-close-btn {
    width:100%; padding:11px; background:#f5f5f5; border:1.5px solid #e5e7eb; border-radius:9px;
    font-size:14px; font-weight:600; cursor:pointer; font-family:'DM Sans',sans-serif;
    transition:background 0.15s;
  }
  .pr-close-btn:hover { background:#ebebeb; }
  .pr-empty { text-align:center; padding:60px 20px; color:#aaa; font-size:15px; }
`;

const BAR_COLORS = {
  active:    '#22c55e',
  planning:  '#f97316',
  completed: '#3b82f6',
  'on-hold': '#9ca3af',
};

const BUILDING_PLANS = [
  {
    id: 'b1', name: 'Home Design',
    desc: 'Modern residential building designs.',
    status: 'active', progress: 80, team: '3 members',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
  },
  {
    id: 'b2', name: 'Hospital Design',
    desc: 'Medical standard hospital layouts.',
    status: 'active', progress: 60, team: '5 members',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
  },
  {
    id: 'b3', name: 'Shopping Mall',
    desc: 'Commercial mall infrastructure plans.',
    status: 'planning', progress: 35, team: '6 members',
    img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80',
  },
  {
    id: 'b4', name: 'Restaurant Design',
    desc: 'Premium dining space architecture.',
    status: 'active', progress: 70, team: '4 members',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
  },
  {
    id: 'b5', name: 'Apartment Design',
    desc: 'Multi-floor residential apartment plans.',
    status: 'planning', progress: 20, team: '4 members',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
  },
  {
    id: 'b6', name: 'College Design',
    desc: 'Modern educational campus layouts.',
    status: 'completed', progress: 100, team: '7 members',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80',
  },
];

const EMPTY_FORM = { name: '', desc: '', status: 'planning', progress: 0, team: '', img: '' };

export default function Projects() {

  
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem('building_projects');
      return saved ? JSON.parse(saved) : BUILDING_PLANS;
    } catch {
      return BUILDING_PLANS;
    }
  });

  const [modal, setModal]         = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [viewItem, setViewItem]   = useState(null);
  const [form, setForm]           = useState(EMPTY_FORM);

  
  useEffect(() => {
    localStorage.setItem('building_projects', JSON.stringify(projects));
  }, [projects]);

  function openAdd() {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setModal(true);
  }

  function openEdit(p, e) {
    e.stopPropagation();
    setEditingId(p.id);
    setForm({
      name:     p.name     || '',
      desc:     p.desc     || '',
      status:   p.status   || 'planning',
      progress: p.progress ?? 0,
      team:     p.team     || '',
      img:      p.img      || '',
    });
    setModal(true);
  }

  function save() {
    if (!form.name.trim()) return;
    const progress = Number(form.progress);

    if (editingId) {
      setProjects(prev =>
        prev.map(p =>
          p.id === editingId
            ? { ...p, name: form.name, desc: form.desc, status: form.status, progress, team: form.team, img: form.img }
            : p
        )
      );
      setViewItem(prev =>
        prev && prev.id === editingId
          ? { ...prev, name: form.name, desc: form.desc, status: form.status, progress, team: form.team, img: form.img }
          : prev
      );
    } else {
      setProjects(prev => [
        ...prev,
        { id: Date.now(), name: form.name, desc: form.desc, status: form.status, progress, team: form.team, img: form.img },
      ]);
    }

    setModal(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
  }

  function del(id, e) {
    e.stopPropagation();
    setProjects(prev => prev.filter(p => p.id !== id));
    setViewItem(prev => (prev && prev.id === id ? null : prev));
  }

  const setField = (key, val) => setForm(f => ({ ...f, [key]: val }));

  return (
    <>
      <style>{css}</style>
      <div className="pr-wrap">

        <div className="pr-header">
          <div className="pr-title">Plans / Projects</div>
          <button className="pr-add-btn" onClick={openAdd}>+ New Project</button>
        </div>

        {projects.length === 0
          ? <div className="pr-empty">No projects yet. Click "+ New Project" to add one.</div>
          : (
            <div className="pr-grid">
              {projects.map(p => (
                <div className="pr-card" key={p.id}>
                  {p.img
                    ? <div className="pr-img-wrap"><img src={p.img} alt={p.name} /></div>
                    : <div className="pr-no-img">📁</div>
                  }
                  <div className="pr-body">
                    <div className="pr-card-top">
                      <div className="pr-card-name">{p.name}</div>
                      <span className={`pr-badge ${p.status}`}>{p.status}</span>
                    </div>
                    <div className="pr-desc">{p.desc}</div>
                    <div className="pr-progress-label">
                      <span>Progress</span><span>{p.progress}%</span>
                    </div>
                    <div className="pr-bar-bg">
                      <div className="pr-bar" style={{ width: `${p.progress}%`, background: BAR_COLORS[p.status] || '#3b82f6' }} />
                    </div>
                    <div className="pr-card-footer">
                      <span className="pr-team">👥 {p.team}</span>
                      <div className="pr-actions">
                        <button className="pr-action"     onClick={e => openEdit(p, e)}>Edit</button>
                        <button className="pr-action del" onClick={e => del(p.id, e)}>Delete</button>
                      </div>
                    </div>
                    <button className="pr-view-btn" onClick={() => setViewItem(p)}>View Plan</button>
                  </div>
                </div>
              ))}
            </div>
          )
        }
      </div>

      {/* Add / Edit Modal */}
      {modal && (
        <div className="pr-overlay" onClick={e => { if (e.target.className === 'pr-overlay') { setModal(false); setEditingId(null); } }}>
          <div className="pr-modal">
            <h3>{editingId ? 'Edit Project' : 'New Project'}</h3>

            <div className="pr-field">
              <label>Project Name *</label>
              <input value={form.name} onChange={e => setField('name', e.target.value)} placeholder="Enter project name" />
            </div>

            <div className="pr-field">
              <label>Description</label>
              <textarea value={form.desc} onChange={e => setField('desc', e.target.value)} placeholder="Brief description" />
            </div>

            <div className="pr-field">
              <label>Image URL (optional)</label>
              <input value={form.img} onChange={e => setField('img', e.target.value)} placeholder="https://..." />
            </div>

            <div className="pr-field">
              <label>Status</label>
              <select value={form.status} onChange={e => setField('status', e.target.value)}>
                {['planning', 'active', 'completed', 'on-hold'].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="pr-field">
              <label>Progress</label>
              <div className="pr-range-wrap">
                <input type="range" min="0" max="100" value={form.progress} onChange={e => setField('progress', e.target.value)} />
                <span className="pr-range-val">{form.progress}%</span>
              </div>
            </div>

            <div className="pr-field">
              <label>Team</label>
              <input value={form.team} onChange={e => setField('team', e.target.value)} placeholder="e.g. 3 members" />
            </div>

            <div className="pr-modal-btns">
              <button className="pr-btn-cancel" onClick={() => { setModal(false); setEditingId(null); }}>Cancel</button>
              <button className="pr-btn-save" onClick={save}>{editingId ? 'Update' : 'Create'}</button>
            </div>
          </div>
        </div>
      )}

      {/* View Plan Modal */}
      {viewItem && (
        <div className="pr-overlay" onClick={e => { if (e.target.className === 'pr-overlay') setViewItem(null); }}>
          <div className="pr-view-modal">
            {viewItem.img
              ? <img src={viewItem.img} alt={viewItem.name} />
              : <div className="pr-no-img" style={{ height: 260, borderRadius: '16px 16px 0 0' }}>📁</div>
            }
            <div className="pr-view-body">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <h2 style={{ margin: 0 }}>{viewItem.name}</h2>
                <span className={`pr-badge ${viewItem.status}`}>{viewItem.status}</span>
              </div>
              <p>{viewItem.desc}</p>
              <div className="pr-progress-label"><span>Progress</span><span>{viewItem.progress}%</span></div>
              <div className="pr-bar-bg" style={{ marginBottom: 16 }}>
                <div className="pr-bar" style={{ width: `${viewItem.progress}%`, background: BAR_COLORS[viewItem.status] || '#3b82f6' }} />
              </div>
              <p style={{ marginBottom: 20 }}>👥 Team: {viewItem.team}</p>
              <button className="pr-close-btn" onClick={() => setViewItem(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}