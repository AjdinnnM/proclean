"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getAllWorkers,
  saveAllWorkers,
  addWorker,
  updateWorker,
  deleteWorker,
  getAllJobs,
  saveAllJobs,
  getSupplyRequests,
  markRequestHandled,
  getAllCheckins,
  getNotifications,
  addNotification,
  markNotificationsRead,
  getUnreadCount,
  getLocationNeedsByDate,
  JOB_TYPE_META,
  DEFAULT_TASKS,
  DEFAULT_SUPPLIES,
  type Job,
  type JobType,
  type ManagedWorker,
  type AppNotification,
  type CheckinRecord,
} from "@/content/workers";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

// ─── Leaflet types ────────────────────────────────────────────────────────────
type LMarker = { addTo: (m: LMap) => LMarker; bindPopup: (s: string) => LMarker; openPopup: () => LMarker };
type LLayer  = { addTo: (m: LMap) => void };
type LMap    = { setView: (c: [number, number], z: number) => LMap; remove: () => void; flyTo: (c: [number, number], z: number) => void };
type LeafletLib = {
  map: (el: HTMLElement, o?: object) => LMap;
  tileLayer: (url: string, o?: object) => LLayer;
  marker: (ll: [number, number], o?: object) => LMarker;
  divIcon: (o: object) => object;
};
declare global { interface Window { L?: LeafletLib; XLSX?: XLSXLib } }

// ─── SheetJS types ───────────────────────────────────────────────────────────
type XLSXLib = {
  utils: {
    book_new: () => object;
    json_to_sheet: (data: object[]) => object;
    book_append_sheet: (wb: object, ws: object, name: string) => void;
    sheet_add_aoa: (ws: object, data: unknown[][], opts?: object) => void;
  };
  writeFile: (wb: object, filename: string) => void;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
type AdminTab = "karta" | "obavijesti" | "raspored" | "radnici" | "zgrade";
type SessionWorker = { id: string; name: string; firstName: string; initials: string; color: string; role: string };

const HR_DAYS   = ["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"];
const HR_MONTHS = ["siječnja","veljače","ožujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenog","prosinca"];
function formatDateHr(s: string) { const d = new Date(s + "T00:00:00"); return `${HR_DAYS[d.getDay()]}, ${d.getDate()}. ${HR_MONTHS[d.getMonth()]} ${d.getFullYear()}`; }
function todayStr() { return new Date().toISOString().split("T")[0]; }
function nowStr() { return new Date().toLocaleTimeString("hr-HR", { hour: "2-digit", minute: "2-digit" }); }
function getMondayOfWeek(s: string) { const d = new Date(s); const day = d.getDay(); d.setDate(d.getDate() + (day === 0 ? -6 : 1 - day)); return d.toISOString().split("T")[0]; }

// ─── Toast ────────────────────────────────────────────────────────────────────
function Toast({ msg, onClose }: { msg: string; onClose: () => void }) {
  useEffect(() => { const t = setTimeout(onClose, 3500); return () => clearTimeout(t); }, [onClose]);
  return <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-2xl shadow-xl animate-[fadeInDown_0.3s_ease] whitespace-nowrap">{msg}</div>;
}

// ─── Input helper ─────────────────────────────────────────────────────────────
const inputCls = "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#0266f0] focus:ring-2 focus:ring-[#0266f0]/10 transition-all";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="flex flex-col gap-1.5"><label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{label}</label>{children}</div>;
}

// ═══════════════════════════════════════════════════════════════════════════════
// TAB 1 — KARTA
// ═══════════════════════════════════════════════════════════════════════════════

type MapMarker = { id: string; name: string; initials: string; color: string; lat: number; lng: number; address: string; time: string };

function WorkerMap({ markers }: { markers: MapMarker[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LMap | null>(null);

  useEffect(() => {
    let cancelled = false;
    function init() {
      if (cancelled || !containerRef.current || !window.L) return;
      if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; }
      const L = window.L;
      const map = L.map(containerRef.current, { zoomControl: true });
      mapRef.current = map;
      map.setView([45.8150, 15.9819], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(map);
      markers.forEach((m) => {
        const icon = L.divIcon({
          html: `<div style="background:${m.color};color:#fff;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11px;border:3px solid #fff;box-shadow:0 2px 12px rgba(0,0,0,.3);cursor:pointer">${m.initials}</div>`,
          iconSize: [40, 40], iconAnchor: [20, 40], className: "",
        });
        L.marker([m.lat, m.lng], { icon })
          .bindPopup(`<div style="text-align:center;min-width:140px"><b style="color:#111">${m.name}</b><br><span style="color:#555;font-size:12px">${m.address}</span><br><span style="color:#0266f0;font-size:12px;font-weight:600">⏱ Prijava: ${m.time}</span></div>`)
          .addTo(map);
      });
    }
    if (window.L) { init(); } else {
      const css = document.createElement("link"); css.rel = "stylesheet"; css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"; document.head.appendChild(css);
      const js = document.createElement("script"); js.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"; js.onload = init; document.head.appendChild(js);
    }
    return () => { cancelled = true; mapRef.current?.remove(); mapRef.current = null; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={containerRef} style={{ height: 320, borderRadius: 16, overflow: "hidden", zIndex: 0 }} />;
}

function KartaTab() {
  const today = todayStr();
  const workerList = getAllWorkers();
  const checkins = getAllCheckins();
  const [selected, setSelected] = useState<string | null>(null);

  const getCI = (wid: string): CheckinRecord | undefined =>
    checkins.find((c) => c.workerId === wid && c.date === today) ??
    (workerList.find(w => w.id === wid)?.lastCheckin?.date === today ? { workerId: wid, ...workerList.find(w=>w.id===wid)!.lastCheckin! } : undefined);

  const mapMarkers: MapMarker[] = workerList
    .map((w) => { const ci = getCI(w.id); if (!ci) return null; return { id: w.id, name: w.name, initials: w.initials, color: w.color, lat: ci.lat, lng: ci.lng, address: ci.address, time: ci.time }; })
    .filter((m): m is MapMarker => m !== null);

  const todayJobs = getAllJobs().filter(j => j.date === today);
  const workerJobCount: Record<string, number> = {};
  todayJobs.forEach(j => j.assignedTo.forEach(wid => { workerJobCount[wid] = (workerJobCount[wid] ?? 0) + 1; }));

  return (
    <div className="px-4 pt-5 pb-28 flex flex-col gap-5">
      <h2 className="font-heading font-bold text-gray-800">🗺️ Karta — prijave danas</h2>
      {mapMarkers.length > 0 ? <WorkerMap markers={mapMarkers} /> : (
        <div className="h-40 rounded-2xl bg-gray-100 flex flex-col items-center justify-center gap-2 text-gray-400 text-sm">
          <span className="text-3xl">🗺️</span>Nema prijava danas.
        </div>
      )}

      <div>
        <h3 className="font-heading font-bold text-gray-700 text-sm mb-3">👥 Status radnika</h3>
        <div className="flex flex-col gap-2.5">
          {workerList.map((w) => {
            const ci = getCI(w.id);
            const jobs = workerJobCount[w.id] ?? 0;
            const isSelected = selected === w.id;
            return (
              <div key={w.id}
                className={cn("bg-white rounded-2xl border p-4 shadow-sm transition-all cursor-pointer", isSelected ? "border-[#0266f0]" : "border-gray-100 hover:border-gray-200")}
                onClick={() => setSelected(isSelected ? null : w.id)}>
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full flex items-center justify-center font-heading font-bold text-white text-sm shrink-0" style={{ backgroundColor: w.color }}>{w.initials}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-heading font-bold text-gray-900 text-sm">{w.name}</p>
                      {w.role === "admin" && <span className="text-[10px] bg-[#e0efff] text-[#0266f0] px-1.5 py-0.5 rounded font-semibold">Admin</span>}
                    </div>
                    <p className="text-xs text-gray-500">{jobs} {jobs === 1 ? "posao" : "posla"} danas</p>
                  </div>
                  {ci ? (
                    <a href={`https://maps.google.com/?q=${ci.lat},${ci.lng}`} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                      className="h-9 w-9 rounded-xl bg-[#e0efff] flex items-center justify-center text-[#0266f0] hover:bg-[#0266f0] hover:text-white transition-colors text-base shrink-0">📍</a>
                  ) : <span className="text-xl shrink-0">⏳</span>}
                </div>
                {isSelected && ci && (
                  <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-600 space-y-1">
                    <p>📍 <strong>Adresa:</strong> {ci.address}</p>
                    <p>⏱ <strong>Prijavljen:</strong> {ci.time}</p>
                    <p>📅 <strong>Datum:</strong> {ci.date}</p>
                  </div>
                )}
                {isSelected && !ci && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-400">Radnik se još nije prijavio danas.</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TAB 2 — OBAVIJESTI
// ═══════════════════════════════════════════════════════════════════════════════

const NOTIF_META: Record<AppNotification["type"], { icon: string; color: string; bg: string }> = {
  checkin:       { icon: "📍", color: "#0266f0", bg: "#e0efff" },
  supply_request:{ icon: "🔴", color: "#ef4444", bg: "#fee2e2" },
  job_done:      { icon: "✅", color: "#10b981", bg: "#d1fae5" },
  contact_form:  { icon: "📬", color: "#f59e0b", bg: "#fef3c7" },
};

function ObavijjestiTab({ onRead }: { onRead: () => void }) {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [supplyRequests] = useState(getSupplyRequests());
  const [activeFilter, setActiveFilter] = useState<"sve" | AppNotification["type"]>("sve");

  useEffect(() => {
    const notifs = getNotifications();
    setNotifications(notifs);
    if (notifs.some(n => !n.read)) { markNotificationsRead(); onRead(); }
  }, [onRead]);

  const handleHandleSupply = (id: string) => {
    markRequestHandled(id);
    // Refresh by updating state isn't needed since we read from localStorage
    window.location.reload();
  };

  const filtered = activeFilter === "sve" ? notifications : notifications.filter(n => n.type === activeFilter);

  const filterBtns: { key: "sve" | AppNotification["type"]; label: string }[] = [
    { key: "sve", label: "Sve" },
    { key: "checkin", label: "📍 Prijave" },
    { key: "supply_request", label: "🔴 Materijali" },
    { key: "job_done", label: "✅ Završeno" },
    { key: "contact_form", label: "📬 Upiti" },
  ];

  // Pending supply requests
  const pendingSupplies = supplyRequests.filter(r => !r.handled);

  return (
    <div className="px-4 pt-5 pb-28 flex flex-col gap-5">
      {/* Pending supplies banner */}
      {pendingSupplies.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
          <h3 className="font-heading font-bold text-red-700 text-sm mb-3">
            🔴 Zahtjevi za materijale ({pendingSupplies.length})
          </h3>
          <div className="flex flex-col gap-2">
            {pendingSupplies.map(r => (
              <div key={r.id} className="bg-white rounded-xl border border-red-100 p-3 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0" style={{ backgroundColor: r.workerColor }}>{r.workerInitials}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{r.workerName}</p>
                  <p className="text-xs text-red-600">❌ {r.supplyName} — {r.jobAddress}</p>
                </div>
                <button onClick={() => handleHandleSupply(r.id)} className="shrink-0 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl hover:bg-emerald-100 transition-colors">
                  ✓ Riješeno
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filter chips */}
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {filterBtns.map(btn => (
          <button key={btn.key} onClick={() => setActiveFilter(btn.key)}
            className={cn("shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all",
              activeFilter === btn.key ? "bg-[#0266f0] text-white border-[#0266f0]" : "bg-white text-gray-500 border-gray-200 hover:border-gray-300")}>
            {btn.label}
          </button>
        ))}
      </div>

      {/* Notification feed */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <span className="text-5xl block mb-3">🔔</span>
          <p className="font-semibold text-gray-600">Nema obavijesti</p>
          <p className="text-sm mt-1">Ovdje će se prikazivati sve aktivnosti radnika.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2.5">
          {filtered.map(n => {
            const meta = NOTIF_META[n.type];
            return (
              <div key={n.id} className={cn("bg-white rounded-2xl border p-4 shadow-sm flex items-start gap-3", !n.read && "border-[#0266f0]/30 bg-[#f0f7ff]")}>
                <div className="h-10 w-10 rounded-full flex items-center justify-center text-xl shrink-0" style={{ backgroundColor: meta.bg }}>{meta.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-gray-900 text-sm">{n.title}</p>
                    {!n.read && <div className="h-2 w-2 rounded-full bg-[#0266f0] shrink-0 mt-1.5" />}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{n.body}</p>
                  <p className="text-[10px] text-gray-400 mt-1">{n.date} · {n.timestamp}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TAB 3 — RASPORED (existing, keep)
// ═══════════════════════════════════════════════════════════════════════════════

type EditState = { jobId: string; date: string; startTime: string; endTime: string; assignedTo: string[]; notes: string };
type NewJobState = { type: JobType; address: string; clientName: string; date: string; startTime: string; endTime: string; assignedTo: string[]; notes: string };

function RasporedTab({ onToast }: { onToast: (msg: string) => void }) {
  const [jobList, setJobList] = useState<Job[]>([]);
  const [editState, setEditState] = useState<EditState | null>(null);
  const [showNewJob, setShowNewJob] = useState(false);
  const [workerList, setWorkerList] = useState<ManagedWorker[]>([]);
  const [newJob, setNewJob] = useState<NewJobState>({ type: "stubiste", address: "", clientName: "", date: todayStr(), startTime: "08:00", endTime: "10:00", assignedTo: [], notes: "" });

  useEffect(() => { setJobList(getAllJobs()); setWorkerList(getAllWorkers()); }, []);

  const calcDur = (s: string, e: string) => { const [sh,sm]=s.split(":").map(Number); const [eh,em]=e.split(":").map(Number); return Math.max(0.5,(eh*60+em-sh*60-sm)/60); };

  const saveEdit = () => {
    if (!editState) return;
    const updated = jobList.map((j): Job => j.id !== editState.jobId ? j : { ...j, date: editState.date, startTime: editState.startTime, endTime: editState.endTime, durationHours: calcDur(editState.startTime, editState.endTime), assignedTo: editState.assignedTo, notes: editState.notes });
    saveAllJobs(updated); setEditState(null); setJobList(getAllJobs()); onToast("✅ Raspored spremljen!");
  };

  const deleteJob = (id: string) => { if (!confirm("Obrisati ovaj posao?")) return; saveAllJobs(jobList.filter(j => j.id !== id)); setJobList(getAllJobs()); onToast("🗑️ Posao obrisan."); };

  const addNewJob = () => {
    if (!newJob.address || !newJob.clientName || newJob.assignedTo.length === 0) { onToast("⚠️ Upiši adresu, klijenta i dodijeli radnika."); return; }
    const job: Job = { id: "j"+Date.now(), type: newJob.type, typeName: JOB_TYPE_META[newJob.type].label, address: newJob.address, mapUrl: `https://maps.google.com/?q=${encodeURIComponent(newJob.address)}`, clientName: newJob.clientName, date: newJob.date, startTime: newJob.startTime, endTime: newJob.endTime, durationHours: calcDur(newJob.startTime, newJob.endTime), assignedTo: newJob.assignedTo, tasks: DEFAULT_TASKS[newJob.type], notes: newJob.notes, supplies: DEFAULT_SUPPLIES[newJob.type] };
    const updated = [...jobList, job].sort((a,b) => a.date.localeCompare(b.date)||a.startTime.localeCompare(b.startTime));
    saveAllJobs(updated); setJobList(getAllJobs()); setShowNewJob(false);
    setNewJob({ type: "stubiste", address: "", clientName: "", date: todayStr(), startTime: "08:00", endTime: "10:00", assignedTo: [], notes: "" });
    onToast("✅ Novi posao dodan!");
  };

  const grouped: Record<string, Job[]> = {};
  for (const j of jobList) { if (!grouped[j.date]) grouped[j.date]=[]; grouped[j.date].push(j); }
  const sortedDates = Object.keys(grouped).sort();

  const WorkerToggle = ({ wid, checked, onChange }: { wid: string; checked: boolean; onChange: (v: boolean) => void }) => {
    const w = workerList.find(x => x.id === wid) ?? workerList[0];
    return (
      <button type="button" onClick={() => onChange(!checked)}
        className={cn("flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all", checked ? "border-[#0266f0] bg-[#e0efff] text-[#0266f0]" : "border-gray-200 text-gray-500 hover:border-gray-300")}>
        <div className="h-4 w-4 rounded-full flex items-center justify-center text-[8px] font-bold text-white" style={{ backgroundColor: w?.color ?? "#999" }}>{w?.initials}</div>
        {w?.firstName}
      </button>
    );
  };

  return (
    <div className="px-4 pt-5 pb-28 flex flex-col gap-5">
      <button onClick={() => setShowNewJob(v => !v)} className="w-full flex items-center justify-center gap-2 bg-[#0266f0] text-white font-heading font-bold rounded-2xl py-3.5 hover:bg-[#0052c9] active:scale-[0.98] transition-all">
        {showNewJob ? "✕ Otkaži" : "+ Novi posao"}
      </button>

      {showNewJob && (
        <div className="bg-white border border-[#0266f0]/20 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
          <h3 className="font-heading font-bold text-gray-900">Novi posao</h3>
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(JOB_TYPE_META) as JobType[]).map(t => { const m = JOB_TYPE_META[t]; return (
              <button key={t} type="button" onClick={() => setNewJob(p => ({ ...p, type: t }))}
                className={cn("flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-semibold transition-all", newJob.type === t ? "border-[#0266f0] bg-[#e0efff] text-[#0266f0]" : "border-gray-200 text-gray-600 hover:border-gray-300")}>
                {m.emoji} {m.label}
              </button>);
            })}
          </div>
          {([ ["address","Adresa","Ilica 142, Zagreb"], ["clientName","Klijent","HOK d.o.o."] ] as [keyof NewJobState,string,string][]).map(([f,l,ph]) => (
            <Field key={f} label={l}><input type="text" value={newJob[f] as string} placeholder={ph} onChange={e => setNewJob(p => ({ ...p, [f]: e.target.value }))} className={inputCls} /></Field>
          ))}
          <div className="grid grid-cols-3 gap-2">
            <Field label="Datum"><input type="date" value={newJob.date} onChange={e => setNewJob(p => ({ ...p, date: e.target.value }))} className={inputCls} /></Field>
            <Field label="Od"><input type="time" value={newJob.startTime} onChange={e => setNewJob(p => ({ ...p, startTime: e.target.value }))} className={inputCls} /></Field>
            <Field label="Do"><input type="time" value={newJob.endTime} onChange={e => setNewJob(p => ({ ...p, endTime: e.target.value }))} className={inputCls} /></Field>
          </div>
          <Field label="Radnici">
            <div className="flex flex-col gap-2">
              {workerList.map(w => (
                <label key={w.id} className={cn("flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all", newJob.assignedTo.includes(w.id) ? "border-[#0266f0] bg-[#e0efff]" : "border-gray-200 hover:border-gray-300")}>
                  <input type="checkbox" checked={newJob.assignedTo.includes(w.id)} onChange={e => setNewJob(p => ({ ...p, assignedTo: e.target.checked ? [...p.assignedTo, w.id] : p.assignedTo.filter(id => id !== w.id) }))} className="accent-[#0266f0]" />
                  <div className="h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: w.color }}>{w.initials}</div>
                  <span className="text-sm font-medium text-gray-800">{w.name}</span>
                </label>
              ))}
            </div>
          </Field>
          <Field label="Bilješka (opcionalno)"><textarea rows={2} value={newJob.notes} placeholder="Pristup, ključ, napomene…" onChange={e => setNewJob(p => ({ ...p, notes: e.target.value }))} className={cn(inputCls, "resize-none")} /></Field>
          <button onClick={addNewJob} className="w-full bg-emerald-500 text-white font-heading font-bold rounded-2xl py-3.5 hover:bg-emerald-600 active:scale-[0.98] transition-all">+ Dodaj posao</button>
        </div>
      )}

      {sortedDates.map(date => (
        <div key={date}>
          <h2 className="font-heading font-bold text-gray-800 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
            {formatDateHr(date)}
            {date === todayStr() && <span className="text-[10px] bg-[#0266f0] text-white rounded-full px-2 py-0.5">DANAS</span>}
          </h2>
          <div className="flex flex-col gap-3">
            {grouped[date].map(job => {
              const meta = JOB_TYPE_META[job.type];
              const assigned = workerList.filter(w => job.assignedTo.includes(w.id));
              const isEditing = editState?.jobId === job.id;
              return (
                <div key={job.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="h-1" style={{ backgroundColor: meta.color }} />
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl leading-none mt-0.5">{meta.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-heading font-bold text-gray-900 text-sm truncate">{job.address}</p>
                        <p className="text-xs text-gray-500">{job.clientName} · {job.startTime}–{job.endTime} · {job.durationHours}h</p>
                        <div className="flex -space-x-1.5 mt-2">
                          {assigned.map(w => <div key={w.id} title={w.name} className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white" style={{ backgroundColor: w.color }}>{w.initials}</div>)}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 shrink-0">
                        <button onClick={() => setEditState(isEditing ? null : { jobId: job.id, date: job.date, startTime: job.startTime, endTime: job.endTime, assignedTo: [...job.assignedTo], notes: job.notes ?? "" })}
                          className={cn("px-3 py-1.5 rounded-xl text-xs font-semibold transition-all", isEditing ? "bg-gray-200 text-gray-700" : "bg-[#e0efff] text-[#0266f0] hover:bg-[#0266f0] hover:text-white")}>
                          {isEditing ? "✕" : "✏️ Uredi"}
                        </button>
                        <button onClick={() => deleteJob(job.id)} className="px-3 py-1.5 rounded-xl bg-red-50 text-red-500 text-xs font-semibold hover:bg-red-100 transition-all">🗑️</button>
                      </div>
                    </div>
                    {isEditing && editState && (
                      <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                        <div className="grid grid-cols-3 gap-2">
                          <Field label="Datum"><input type="date" value={editState.date} onChange={e => setEditState(p => p ? { ...p, date: e.target.value } : p)} className={inputCls} /></Field>
                          <Field label="Od"><input type="time" value={editState.startTime} onChange={e => setEditState(p => p ? { ...p, startTime: e.target.value } : p)} className={inputCls} /></Field>
                          <Field label="Do"><input type="time" value={editState.endTime} onChange={e => setEditState(p => p ? { ...p, endTime: e.target.value } : p)} className={inputCls} /></Field>
                        </div>
                        <Field label="Radnici">
                          <div className="flex flex-wrap gap-2">
                            {workerList.map(w => (
                              <WorkerToggle key={w.id} wid={w.id}
                                checked={editState.assignedTo.includes(w.id)}
                                onChange={v => setEditState(p => p ? { ...p, assignedTo: v ? [...p.assignedTo,w.id] : p.assignedTo.filter(id=>id!==w.id) } : p)} />
                            ))}
                          </div>
                        </Field>
                        <Field label="Bilješka"><textarea rows={2} value={editState.notes} onChange={e => setEditState(p => p ? { ...p, notes: e.target.value } : p)} className={cn(inputCls, "resize-none")} /></Field>
                        <button onClick={saveEdit} className="w-full bg-[#0266f0] text-white font-semibold rounded-xl py-2.5 text-sm hover:bg-[#0052c9] active:scale-[0.98] transition-all">💾 Spremi izmjene</button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TAB 4 — RADNICI (worker management)
// ═══════════════════════════════════════════════════════════════════════════════

const WORKER_COLORS = ["#0266f0","#10b981","#f59e0b","#8b5cf6","#ef4444","#06b6d4","#ec4899","#84cc16"];

function RadniciTab({ onToast }: { onToast: (msg: string) => void }) {
  const [workerList, setWorkerList] = useState<ManagedWorker[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [editForm, setEditForm] = useState<Partial<ManagedWorker>>({});
  const [newForm, setNewForm] = useState({ name: "", username: "", password: "", role: "worker" as "worker"|"admin", color: WORKER_COLORS[0] });
  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>({});

  useEffect(() => { setWorkerList(getAllWorkers()); }, []);

  const refresh = () => setWorkerList(getAllWorkers());

  const startEdit = (w: ManagedWorker) => { setEditId(w.id); setEditForm({ name: w.name, username: w.username, password: w.password, role: w.role, color: w.color }); };

  const saveEdit = () => {
    if (!editId) return;
    if (!editForm.name || !editForm.username || !editForm.password) { onToast("⚠️ Ispuni sva polja."); return; }
    const firstName = editForm.name!.split(" ")[0];
    const initials = editForm.name!.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
    updateWorker(editId, { ...editForm, firstName, initials } as Partial<ManagedWorker>);
    setEditId(null); refresh(); onToast("✅ Podaci radnika ažurirani!");
  };

  const handleDelete = (w: ManagedWorker) => {
    if (!confirm(`Obrisati profil za ${w.name}?`)) return;
    deleteWorker(w.id); refresh(); onToast(`🗑️ ${w.firstName} obrisan/a.`);
  };

  const handleAdd = () => {
    if (!newForm.name || !newForm.username || !newForm.password) { onToast("⚠️ Ispuni sva polja."); return; }
    const firstName = newForm.name.split(" ")[0];
    const initials = newForm.name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
    addWorker({ ...newForm, firstName, initials, name: newForm.name });
    setShowNew(false);
    setNewForm({ name: "", username: "", password: "", role: "worker", color: WORKER_COLORS[0] });
    refresh(); onToast("✅ Novi radnik dodan!");
  };

  return (
    <div className="px-4 pt-5 pb-28 flex flex-col gap-5">
      <button onClick={() => setShowNew(v => !v)} className="w-full flex items-center justify-center gap-2 bg-[#0266f0] text-white font-heading font-bold rounded-2xl py-3.5 hover:bg-[#0052c9] active:scale-[0.98] transition-all">
        {showNew ? "✕ Otkaži" : "+ Novi radnik"}
      </button>

      {showNew && (
        <div className="bg-white border border-[#0266f0]/20 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
          <h3 className="font-heading font-bold text-gray-900">Novi radnik / profil</h3>
          <Field label="Puno ime *"><input type="text" value={newForm.name} placeholder="Ana Horvat" onChange={e => setNewForm(p => ({ ...p, name: e.target.value }))} className={inputCls} /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Korisničko ime *"><input type="text" value={newForm.username} placeholder="ana" autoCapitalize="none" onChange={e => setNewForm(p => ({ ...p, username: e.target.value.toLowerCase() }))} className={inputCls} /></Field>
            <Field label="Lozinka *"><input type="text" value={newForm.password} placeholder="proclean" onChange={e => setNewForm(p => ({ ...p, password: e.target.value }))} className={inputCls} /></Field>
          </div>
          <Field label="Uloga">
            <div className="flex rounded-xl border border-gray-200 overflow-hidden">
              {(["worker","admin"] as const).map(r => (
                <button key={r} type="button" onClick={() => setNewForm(p => ({ ...p, role: r }))}
                  className={cn("flex-1 py-2.5 text-sm font-semibold transition-all", newForm.role === r ? "bg-[#0266f0] text-white" : "text-gray-500 hover:bg-gray-50")}>
                  {r === "admin" ? "⚙️ Voditelj" : "👷 Radnik"}
                </button>
              ))}
            </div>
          </Field>
          <Field label="Boja avatara">
            <div className="flex gap-2 flex-wrap">
              {WORKER_COLORS.map(c => (
                <button key={c} type="button" onClick={() => setNewForm(p => ({ ...p, color: c }))}
                  className={cn("h-8 w-8 rounded-full border-2 transition-all", newForm.color === c ? "border-gray-900 scale-110" : "border-transparent hover:scale-105")}
                  style={{ backgroundColor: c }} />
              ))}
            </div>
          </Field>
          <button onClick={handleAdd} className="w-full bg-emerald-500 text-white font-heading font-bold rounded-2xl py-3.5 hover:bg-emerald-600 active:scale-[0.98] transition-all">+ Dodaj radnika</button>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {workerList.map(w => {
          const isEditing = editId === w.id;
          return (
            <div key={w.id} className={cn("bg-white rounded-2xl border shadow-sm overflow-hidden", isEditing ? "border-[#0266f0]" : "border-gray-100")}>
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center font-heading font-bold text-white text-sm shrink-0" style={{ backgroundColor: w.color }}>{w.initials}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-heading font-bold text-gray-900">{w.name}</p>
                      <span className={cn("text-[10px] px-1.5 py-0.5 rounded font-semibold", w.role === "admin" ? "bg-[#e0efff] text-[#0266f0]" : "bg-gray-100 text-gray-500")}>{w.role === "admin" ? "Voditelj" : "Radnik"}</span>
                    </div>
                    <p className="text-xs text-gray-500">@{w.username} · lozinka: {showPasswords[w.id] ? w.password : "••••••"}</p>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button onClick={() => setShowPasswords(p => ({ ...p, [w.id]: !p[w.id] }))} className="h-9 w-9 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center text-base">{showPasswords[w.id] ? "🙈" : "👁️"}</button>
                    <button onClick={() => isEditing ? setEditId(null) : startEdit(w)} className={cn("px-3 py-1.5 rounded-xl text-xs font-semibold transition-all", isEditing ? "bg-gray-200 text-gray-700" : "bg-[#e0efff] text-[#0266f0] hover:bg-[#0266f0] hover:text-white")}>✏️</button>
                    <button onClick={() => handleDelete(w)} className="px-3 py-1.5 rounded-xl bg-red-50 text-red-500 text-xs font-semibold hover:bg-red-100 transition-all">🗑️</button>
                  </div>
                </div>

                {isEditing && (
                  <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                    <Field label="Puno ime"><input type="text" value={editForm.name ?? ""} onChange={e => setEditForm(p => ({ ...p, name: e.target.value }))} className={inputCls} /></Field>
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Korisničko ime"><input type="text" value={editForm.username ?? ""} autoCapitalize="none" onChange={e => setEditForm(p => ({ ...p, username: e.target.value.toLowerCase() }))} className={inputCls} /></Field>
                      <Field label="Nova lozinka"><input type="text" value={editForm.password ?? ""} onChange={e => setEditForm(p => ({ ...p, password: e.target.value }))} className={inputCls} /></Field>
                    </div>
                    <Field label="Uloga">
                      <div className="flex rounded-xl border border-gray-200 overflow-hidden">
                        {(["worker","admin"] as const).map(r => (
                          <button key={r} type="button" onClick={() => setEditForm(p => ({ ...p, role: r }))}
                            className={cn("flex-1 py-2 text-sm font-semibold transition-all", editForm.role === r ? "bg-[#0266f0] text-white" : "text-gray-500 hover:bg-gray-50")}>
                            {r === "admin" ? "⚙️ Voditelj" : "👷 Radnik"}
                          </button>
                        ))}
                      </div>
                    </Field>
                    <Field label="Boja">
                      <div className="flex gap-2 flex-wrap">
                        {WORKER_COLORS.map(c => <button key={c} type="button" onClick={() => setEditForm(p => ({ ...p, color: c }))} className={cn("h-8 w-8 rounded-full border-2 transition-all", editForm.color === c ? "border-gray-900 scale-110" : "border-transparent hover:scale-105")} style={{ backgroundColor: c }} />)}
                      </div>
                    </Field>
                    <button onClick={saveEdit} className="w-full bg-[#0266f0] text-white font-semibold rounded-xl py-2.5 text-sm hover:bg-[#0052c9] active:scale-[0.98] transition-all">💾 Spremi izmjene</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TAB 5 — ZGRADE
// ═══════════════════════════════════════════════════════════════════════════════

type Building = { address: string; price: number; freq: string; start: string };

const BUILDINGS: Building[] = [
  { address: "1. Ferencica 57, Zagreb",         price: 132.73, freq: "3x tjedno", start: "01.05.2025" },
  { address: "Aleja Blaža Jurišića 53, Zagreb", price: 100.00, freq: "1x tjedno", start: "01.05.2025" },
  { address: "Aleja Blaža Jurišića 55, Zagreb", price: 100.00, freq: "1x tjedno", start: "01.05.2025" },
  { address: "Aleja Blaža Jurišića 59, Zagreb", price: 100.00, freq: "1x tjedno", start: "01.10.2025" },
  { address: "Aleja Blaža Jurišića 65, Zagreb", price:  90.00, freq: "3x tjedno", start: "01.12.2025" },
  { address: "Aleja Blaža Jurišića 75, Zagreb", price:  91.00, freq: "1x tjedno", start: "01.05.2025" },
  { address: "Augusta Musića 30, Zagreb",        price: 150.00, freq: "1x tjedno", start: "01.05.2025" },
  { address: "Božidara Magovca 15, Zagreb",      price: 414.76, freq: "3x tjedno", start: "01.05.2025" },
  { address: "Božidara Magovca 55, Zagreb",      price: 331.81, freq: "3x tjedno", start: "01.05.2025" },
  { address: "Davora Zbiljskog 2, Zagreb",       price: 126.00, freq: "1x tjedno", start: "01.05.2025" },
  { address: "Dubrava 204, 206, 208, Zagreb",    price: 400.00, freq: "1x tjedno", start: "01.12.2025" },
  { address: "Dubrava 134, Zagreb",              price: 150.00, freq: "1x tjedno", start: "01.04.2026" },
  { address: "Čulinečka cesta 2D, Zagreb",       price: 400.00, freq: "1x tjedno", start: "01.11.2025" },
  { address: "Milovana Gavazzija 5,7,9, Zagreb", price: 300.00, freq: "1x tjedno", start: "01.05.2025" },
  { address: "Nikole Škrlca 9, Zagreb",          price:  50.00, freq: "1x tjedno", start: "01.05.2025" },
  { address: "Svibanjčica 4, Zagreb",            price: 100.00, freq: "1x tjedno", start: "01.05.2025" },
  { address: "Ulica Grada Chicaga 1, Zagreb",    price: 200.00, freq: "1x tjedno", start: "01.05.2025" },
  { address: "Ulica Grada Chicaga 3, Zagreb",    price: 165.90, freq: "1x tjedno", start: "01.05.2025" },
  { address: "Vile Velebita 1, Zagreb",          price: 100.00, freq: "1x tjedno", start: "01.05.2025" },
  { address: "Frana Alfirevića 51, Zagreb",      price:  70.00, freq: "1x tjedno", start: "01.11.2025" },
  { address: "Frana Alfirevića 59, Zagreb",      price:  70.00, freq: "1x tjedno", start: "01.11.2025" },
  { address: "Frana Alfirevića 13, Zagreb",      price:  50.00, freq: "1x tjedno", start: "06.03.2026" },
  { address: "Kriška 107, Zagreb",               price: 100.00, freq: "3x tjedno", start: "01.02.2026" },
  { address: "Kriška 105, Zagreb",               price: 100.00, freq: "3x tjedno", start: "06.03.2026" },
  { address: "Vukomerec 47, 49, 49a, Zagreb",    price: 720.00, freq: "1x tjedno", start: "01.05.2026" },
  { address: "Črešnjevec 4, Zagreb",             price:  60.00, freq: "1x tjedno", start: "01.05.2026" },
  { address: "1. Poljanice 13, Zagreb",          price: 116.13, freq: "1x tjedno", start: "01.06.2025" },
  { address: "1. Poljanice 15, Zagreb",          price: 116.13, freq: "1x tjedno", start: "01.06.2025" },
  { address: "Antolovečki put 9, Zagreb",        price: 100.00, freq: "1x tjedno", start: "15.06.2025" },
  { address: "Krotovica 14 i 16, Zagreb",        price: 300.00, freq: "1x tjedno", start: "01.06.2025" },
  { address: "Remetski Banjščak 15, Zagreb",     price: 100.00, freq: "1x tjedno", start: "15.06.2025" },
  { address: "4. Poljanice 4, Zagreb",           price: 107.84, freq: "1x tjedno", start: "01.07.2025" },
  { address: "Gomboševa 28, 30 i 34, Zagreb",    price: 215.26, freq: "1x tjedno", start: "01.07.2025" },
];

function BuildingMap({ buildings, coords }: { buildings: Building[]; coords: Record<string, [number, number]> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LMap | null>(null);

  useEffect(() => {
    let cancelled = false;
    function init() {
      if (cancelled || !containerRef.current || !window.L) return;
      if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; }
      const L = window.L;
      const map = L.map(containerRef.current, { zoomControl: true });
      mapRef.current = map;
      map.setView([45.8150, 15.9819], 12);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(map);
      buildings.forEach((b) => {
        const c = coords[b.address];
        if (!c) return;
        const icon = L.divIcon({
          html: `<div style="background:#0266f0;color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-size:14px;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.3)">🏢</div>`,
          iconSize: [32, 32], iconAnchor: [16, 32], className: "",
        });
        L.marker(c, { icon })
          .bindPopup(`<div style="min-width:160px"><b style="color:#111;font-size:13px">${b.address}</b><br><span style="color:#0266f0;font-weight:700">${b.price.toFixed(2).replace(".", ",")} €/mj</span><br><span style="color:#666;font-size:12px">${b.freq}</span></div>`)
          .addTo(map);
      });
    }
    if (window.L) { init(); } else {
      const css = document.createElement("link"); css.rel = "stylesheet"; css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"; document.head.appendChild(css);
      const js = document.createElement("script"); js.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"; js.onload = init; document.head.appendChild(js);
    }
    return () => { cancelled = true; mapRef.current?.remove(); mapRef.current = null; };
  }, [buildings, coords]);

  const hasAny = buildings.some(b => !!coords[b.address]);
  if (!hasAny) return (
    <div className="h-40 rounded-2xl bg-gray-100 flex flex-col items-center justify-center gap-2 text-gray-400 text-sm">
      <span className="text-3xl">🗺️</span>Klikni &ldquo;Učitaj na kartu&rdquo; za prikaz.
    </div>
  );
  return <div ref={containerRef} style={{ height: 280, borderRadius: 16, overflow: "hidden", zIndex: 0 }} />;
}

function ZgradeTab() {
  const [coords, setCoords] = useState<Record<string, [number, number]>>({});
  const [geocoding, setGeocoding] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const cached = localStorage.getItem("pc_building_coords");
      if (cached) setCoords(JSON.parse(cached) as Record<string, [number, number]>);
    } catch { /* ignore */ }
  }, []);

  const geocodeAll = async () => {
    setGeocoding(true);
    const newCoords: Record<string, [number, number]> = { ...coords };
    for (const b of BUILDINGS) {
      if (newCoords[b.address]) continue;
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(b.address + ", Croatia")}&format=json&limit=1`, { headers: { "Accept-Language": "hr" } });
        const data = await res.json() as { lat: string; lon: string }[];
        if (data[0]) {
          newCoords[b.address] = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
          setCoords({ ...newCoords });
          localStorage.setItem("pc_building_coords", JSON.stringify(newCoords));
        }
        await new Promise(r => setTimeout(r, 1100));
      } catch { /* skip */ }
    }
    setGeocoding(false);
  };

  const totalMonthly = BUILDINGS.reduce((s, b) => s + b.price, 0);
  const geocodedCount = BUILDINGS.filter(b => !!coords[b.address]).length;
  const filtered = search.trim() ? BUILDINGS.filter(b => b.address.toLowerCase().includes(search.toLowerCase())) : BUILDINGS;

  return (
    <div className="px-4 pt-5 pb-28 flex flex-col gap-5">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center shadow-sm">
          <div className="text-3xl font-black text-[#0266f0]">{BUILDINGS.length}</div>
          <div className="text-xs text-gray-500 mt-1">aktivnih zgrada</div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center shadow-sm">
          <div className="text-2xl font-black text-emerald-600">{totalMonthly.toFixed(0)} €</div>
          <div className="text-xs text-gray-500 mt-1">prihod / mj</div>
        </div>
      </div>

      {/* Map */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading font-bold text-gray-700 text-sm">🏢 Karta zgrada</h3>
          <button onClick={geocodeAll} disabled={geocoding}
            className="text-xs font-semibold text-[#0266f0] bg-[#e0efff] px-3 py-1.5 rounded-full disabled:opacity-60 hover:bg-[#0266f0] hover:text-white transition-colors">
            {geocoding ? `📡 ${geocodedCount}/${BUILDINGS.length}…` : geocodedCount === BUILDINGS.length ? "✅ Sve učitano" : "📡 Učitaj na kartu"}
          </button>
        </div>
        <BuildingMap buildings={BUILDINGS} coords={coords} />
      </div>

      {/* Search */}
      <input type="text" placeholder="🔍 Pretraži zgrade…" value={search} onChange={e => setSearch(e.target.value)} className={inputCls} />

      {/* List */}
      <div className="flex flex-col gap-2.5">
        {filtered.map(b => (
          <div key={b.address} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <p className="font-heading font-bold text-gray-900 text-sm">{b.address}</p>
                <p className="text-xs text-gray-500 mt-0.5">{b.freq} · od {b.start}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-heading font-bold text-[#0266f0]">{b.price.toFixed(2).replace(".", ",")} €</p>
                <p className="text-[10px] text-gray-400">/ mj</p>
              </div>
            </div>
            {coords[b.address] && (
              <a href={`https://maps.google.com/?q=${coords[b.address][0]},${coords[b.address][1]}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs text-[#0266f0] font-semibold">
                📍 Otvori na karti
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXCEL EXPORT
// ═══════════════════════════════════════════════════════════════════════════════

function loadXLSX(cb: () => void) {
  if (window.XLSX) { cb(); return; }
  const s = document.createElement("script");
  s.src = "https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js";
  s.onload = cb;
  document.head.appendChild(s);
}

function exportExcel(period: "tjedan" | "mjesec") {
  const today = new Date();
  const jobs = getAllJobs();
  const workerList = getAllWorkers();
  const checkins = getAllCheckins();
  const supplies = getSupplyRequests();

  // Filter range
  let from: Date, to: Date, label: string;
  if (period === "tjedan") {
    const mon = new Date(today); const day = mon.getDay(); mon.setDate(mon.getDate() + (day===0?-6:1-day));
    from = mon; to = new Date(mon); to.setDate(to.getDate() + 6);
    label = `Tjedan-${mon.toISOString().split("T")[0]}`;
  } else {
    from = new Date(today.getFullYear(), today.getMonth(), 1);
    to = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    label = `Mjesec-${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}`;
  }

  const inRange = (d: string) => { const dt = new Date(d); return dt >= from && dt <= to; };
  const filteredJobs = jobs.filter(j => inRange(j.date));

  const workerName = (id: string) => workerList.find(w => w.id === id)?.name ?? id;

  const XLSX = window.XLSX!;
  const wb = XLSX.utils.book_new();

  // Sheet 1: Poslovi
  const jobRows = filteredJobs.map(j => ({
    "Datum": j.date,
    "Vrsta": j.typeName,
    "Adresa": j.address,
    "Klijent": j.clientName,
    "Početak": j.startTime,
    "Kraj": j.endTime,
    "Trajanje (h)": j.durationHours,
    "Radnici": j.assignedTo.map(workerName).join(", "),
    "Bilješka": j.notes ?? "",
  }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(jobRows), "Poslovi");

  // Sheet 2: Sati po radniku
  const workerHours = workerList.map(w => {
    const myJobs = filteredJobs.filter(j => j.assignedTo.includes(w.id));
    return {
      "Radnik": w.name,
      "Broj poslova": myJobs.length,
      "Ukupno sati": myJobs.reduce((a, j) => a + j.durationHours, 0),
      "Adrese": myJobs.map(j => j.address).join("; "),
    };
  });
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(workerHours), "Radnici - sati");

  // Sheet 3: Check-ini
  const ciRows = checkins.filter(c => inRange(c.date)).map(c => ({
    "Datum": c.date,
    "Radnik": workerName(c.workerId),
    "Adresa prijave": c.address,
    "Vrijeme prijave": c.time,
    "GPS lat": c.lat,
    "GPS lng": c.lng,
  }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(ciRows.length > 0 ? ciRows : [{ "Info": "Nema podataka za odabrani period" }]), "Prijave");

  // Sheet 4: Zahtjevi za materijale
  const supplyRows = supplies.filter(s => inRange(s.date)).map(s => ({
    "Datum": s.date,
    "Radnik": s.workerName,
    "Posao": s.jobAddress,
    "Nedostaje": s.supplyName,
    "Riješeno": s.handled ? "Da" : "Ne",
    "Vrijeme": s.timestamp,
  }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(supplyRows.length > 0 ? supplyRows : [{ "Info": "Nema zahtjeva za odabrani period" }]), "Materijali");

  XLSX.writeFile(wb, `ProClean-${label}.xlsx`);
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN ADMIN PAGE
// ═══════════════════════════════════════════════════════════════════════════════

export default function AdminPage() {
  const router = useRouter();
  const [worker, setWorker] = useState<SessionWorker | null>(null);
  const [tab, setTab] = useState<AdminTab>("karta");
  const [toast, setToast] = useState<string | null>(null);
  const [unread, setUnread] = useState(0);
  const [exportLoading, setExportLoading] = useState(false);
  const [summaryLoading, setSummaryLoading] = useState(false);

  // Auth
  useEffect(() => {
    try {
      const saved = localStorage.getItem("pc_worker");
      if (!saved) { router.replace("/radnici"); return; }
      const w = JSON.parse(saved) as SessionWorker;
      if (w.role !== "admin") { router.replace("/radnici/dashboard"); return; }
      setWorker(w);
    } catch { router.replace("/radnici"); }
  }, [router]);

  // Unread count
  useEffect(() => { setUnread(getUnreadCount()); }, [tab]);

  // Browser notification permission
  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  // Poll for new notifications every 30s (for when admin has page open)
  useEffect(() => {
    const interval = setInterval(() => {
      const count = getUnreadCount();
      if (count > unread) {
        setUnread(count);
        // Browser notification
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification("Pro Clean", { body: `${count} nova obavijest`, icon: "/images/logo.svg" });
        }
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [unread]);

  const handleToast = useCallback((msg: string) => setToast(msg), []);
  const handleRead = useCallback(() => setUnread(0), []);

  const handleExport = (period: "tjedan" | "mjesec") => {
    setExportLoading(true);
    loadXLSX(() => {
      try { exportExcel(period); setToast(`✅ Excel izvještaj preuzet!`); }
      catch { setToast("❌ Greška pri izvozu."); }
      setExportLoading(false);
    });
  };

  const handleDailySummary = async () => {
    setSummaryLoading(true);
    try {
      const today = todayStr();
      const jobs = getAllJobs();
      const checkins = getAllCheckins();
      const supplies = getSupplyRequests();
      const locationNeeds = getLocationNeedsByDate(today);

      const todaysJobs = jobs.filter((j) => j.date === today);
      const todaysCheckins = checkins.filter((c) => c.date === today);
      const todaysSupplies = supplies.filter((s) => s.date === today);
      const jobsDone = todaysJobs.length;

      const res = await fetch("/api/daily-summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: today,
          supplyRequests: todaysSupplies,
          locationNeeds,
          checkins: todaysCheckins,
          jobsDone,
        }),
      });

      if (res.ok) {
        const data = (await res.json()) as { success?: boolean; note?: string };
        if (data.note === "no_api_key") {
          setToast("⚠️ RESEND_API_KEY nije postavljen — dodaj u .env.local");
        } else {
          setToast("✅ Dnevno izvješće poslano na mail!");
        }
      } else {
        setToast("❌ Greška pri slanju izvješća.");
      }
    } catch {
      setToast("❌ Greška pri slanju izvješća.");
    }
    setSummaryLoading(false);
  };

  const logout = () => { localStorage.removeItem("pc_worker"); router.replace("/radnici"); };

  if (!worker) return (
    <div className="min-h-screen bg-[#0266f0] flex items-center justify-center">
      <div className="h-10 w-10 rounded-full border-4 border-white/30 border-t-white animate-spin" />
    </div>
  );

  const tabs = [
    { id: "karta" as AdminTab,      icon: "🗺️",  label: "Karta" },
    { id: "obavijesti" as AdminTab, icon: "🔔",  label: `Obavijesti${unread > 0 ? ` (${unread})` : ""}` },
    { id: "raspored" as AdminTab,   icon: "📅",  label: "Raspored" },
    { id: "radnici" as AdminTab,    icon: "👥",  label: "Radnici" },
    { id: "zgrade" as AdminTab,     icon: "🏢",  label: "Zgrade" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}

      {/* Top bar */}
      <div className="bg-[#082352] px-4 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo variant="light" className="text-xl" />
            <span className="text-white/50 text-xs font-medium border-l border-white/20 pl-3">Admin</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Excel export buttons */}
            <div className="flex gap-1">
              <button onClick={() => handleExport("tjedan")} disabled={exportLoading}
                className="text-[11px] font-semibold text-white/70 hover:text-white bg-white/10 px-2.5 py-1.5 rounded-full transition-colors disabled:opacity-50" title="Tjedni Excel izvještaj">
                📊 Tjedan
              </button>
              <button onClick={() => handleExport("mjesec")} disabled={exportLoading}
                className="text-[11px] font-semibold text-white/70 hover:text-white bg-white/10 px-2.5 py-1.5 rounded-full transition-colors disabled:opacity-50" title="Mjesečni Excel izvještaj">
                📊 Mjesec
              </button>
              <button onClick={handleDailySummary} disabled={summaryLoading}
                className="text-[11px] font-semibold text-white/70 hover:text-white bg-white/10 px-2.5 py-1.5 rounded-full transition-colors disabled:opacity-50" title="Pošalji dnevno izvješće na mail">
                {summaryLoading ? "⏳" : "📧"} Izvješće
              </button>
            </div>
            <a href="/radnici/dashboard" className="text-[11px] font-semibold text-white/70 hover:text-white bg-white/10 px-2.5 py-1.5 rounded-full transition-colors">
              📋 Moj raspored
            </a>
            <button onClick={logout} className="text-[11px] font-semibold text-white/70 hover:text-white bg-white/10 px-2.5 py-1.5 rounded-full transition-colors">
              Odjava
            </button>
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div>
        {tab === "karta"      && <KartaTab />}
        {tab === "obavijesti" && <ObavijjestiTab onRead={handleRead} />}
        {tab === "raspored"   && <RasporedTab onToast={handleToast} />}
        {tab === "radnici"    && <RadniciTab onToast={handleToast} />}
        {tab === "zgrade"     && <ZgradeTab />}
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        {tabs.map(item => (
          <button key={item.id} onClick={() => setTab(item.id)}
            className={cn("flex-1 flex flex-col items-center gap-1 py-2.5 px-1 transition-all relative", tab === item.id ? "text-[#0266f0]" : "text-gray-400 hover:text-gray-600")}>
            {item.id === "obavijesti" && unread > 0 && (
              <div className="absolute top-2 right-[calc(50%-8px)] h-4 min-w-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center px-1">{unread}</div>
            )}
            <span className="text-xl leading-none">{item.icon}</span>
            <span className={cn("text-[9px] font-semibold leading-none", tab === item.id ? "text-[#0266f0]" : "text-gray-400")}>
              {item.id === "obavijesti" ? "Obavijesti" : item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
