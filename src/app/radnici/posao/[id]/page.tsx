"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  getJobById,
  getAllWorkers,
  JOB_TYPE_META,
  saveSupplyRequest,
  saveCheckin,
  addNotification,
  saveLocationNeed,
  LOCATION_NEEDS_OPTIONS,
  type SupplyItem,
} from "@/content/workers";
import { cn } from "@/lib/utils";

// ── Types ────────────────────────────────────────────────────────────────────

type SessionWorker = {
  id: string;
  firstName: string;
  initials: string;
  color: string;
};

type CheckInData = {
  time: string;
  lat?: number;
  lng?: number;
};

type PhotoEntry = {
  id: string;
  url: string;
  phase: "prije" | "poslije";
  timestamp: string;
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function now(): string {
  return new Date().toLocaleTimeString("hr-HR", { hour: "2-digit", minute: "2-digit" });
}

function Toast({ msg, onClose }: { msg: string; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 animate-[fadeInDown_0.3s_ease]">
      ✅ {msg}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params.id as string;
  const job = getJobById(jobId);

  const [worker, setWorker] = useState<SessionWorker | null>(null);
  const [checkIn, setCheckIn] = useState<CheckInData | null>(null);
  const [checkedTasks, setCheckedTasks] = useState<Record<number, boolean>>({});
  const [missingSupplies, setMissingSupplies] = useState<Record<string, boolean>>({});
  const [photos, setPhotos] = useState<PhotoEntry[]>([]);
  const [photoPhase, setPhotoPhase] = useState<"prije" | "poslije">("prije");
  const [finished, setFinished] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [gpsLoading, setGpsLoading] = useState(false);
  const [locationNeeds, setLocationNeeds] = useState<string[]>([]);
  const [locationNote, setLocationNote] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("pc_worker");
      if (!saved) { router.replace("/radnici"); return; }
      setWorker(JSON.parse(saved) as SessionWorker);

      // Restore state from sessionStorage
      const savedState = sessionStorage.getItem(`job_${jobId}`);
      if (savedState) {
        const s = JSON.parse(savedState);
        if (s.checkIn) setCheckIn(s.checkIn);
        if (s.checkedTasks) setCheckedTasks(s.checkedTasks);
        if (s.missingSupplies) setMissingSupplies(s.missingSupplies);
        if (s.finished) setFinished(s.finished);
        if (s.locationNeeds) setLocationNeeds(s.locationNeeds);
        if (s.locationNote) setLocationNote(s.locationNote);
      }
    } catch {
      router.replace("/radnici");
    }
  }, [router, jobId]);

  // Persist state
  useEffect(() => {
    sessionStorage.setItem(`job_${jobId}`, JSON.stringify({ checkIn, checkedTasks, missingSupplies, finished, locationNeeds, locationNote }));
  }, [jobId, checkIn, checkedTasks, missingSupplies, finished, locationNeeds, locationNote]);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4 text-gray-500 p-8">
        <span className="text-5xl">🔍</span>
        <p className="font-semibold text-gray-700">Posao nije pronađen</p>
        <button onClick={() => router.back()} className="text-[#0266f0] text-sm font-semibold">
          ← Natrag
        </button>
      </div>
    );
  }

  const meta = JOB_TYPE_META[job.type];
  const allWorkers = getAllWorkers();
  const assignedWorkers = allWorkers.filter((w) => job.assignedTo.includes(w.id));
  const allTasksDone = job.tasks.every((_, i) => checkedTasks[i]);
  const completedCount = Object.values(checkedTasks).filter(Boolean).length;
  const missingList = job.supplies.filter((s) => missingSupplies[s.id]);

  const handleCheckIn = () => {
    setGpsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const ci = { time: now(), lat: pos.coords.latitude, lng: pos.coords.longitude };
          setCheckIn(ci);
          setGpsLoading(false);
          setToast("Dolazak prijavljen! Voditelju je poslana obavijest.");
          if (worker) {
            const today = new Date().toISOString().split("T")[0];
            saveCheckin({ workerId: worker.id, lat: ci.lat!, lng: ci.lng!, address: job.address, time: ci.time, date: today });
            addNotification({ type: "checkin", title: `${worker.id} se prijavio/la`, body: `${job.address} · ${ci.time}`, workerInitials: worker.initials, workerColor: worker.color, timestamp: ci.time, date: today, read: false });
          }
        },
        () => {
          // GPS denied — still allow check-in
          setCheckIn({ time: now() });
          setGpsLoading(false);
          setToast("Dolazak prijavljen!");
        },
        { timeout: 5000 },
      );
    } else {
      setCheckIn({ time: now() });
      setGpsLoading(false);
      setToast("Dolazak prijavljen!");
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const url = ev.target?.result as string;
      setPhotos((prev) => [
        ...prev,
        { id: Date.now().toString(), url, phase: photoPhase, timestamp: now() },
      ]);
      setToast(`Fotografija (${photoPhase}) dodana!`);
    };
    reader.readAsDataURL(file);
    // Reset input so same file can be re-selected
    e.target.value = "";
  };

  const handleMissingSupply = (supply: SupplyItem) => {
    setMissingSupplies((prev) => {
      const next = { ...prev, [supply.id]: !prev[supply.id] };
      if (next[supply.id] && worker) {
        const workerData = getAllWorkers().find(w => w.id === worker.id);
        const workerFullName = workerData?.name ?? worker.id;
        const today = new Date().toISOString().split("T")[0];
        const t = now();
        saveSupplyRequest({ workerId: worker.id, workerName: workerFullName, workerInitials: worker.initials, workerColor: worker.color, supplyName: supply.name, jobId: job.id, jobAddress: job.address, timestamp: t, date: today, handled: false });
        addNotification({ type: "supply_request", title: `Nedostaje: ${supply.name}`, body: `${workerFullName} · ${job.address} · ${t}`, workerInitials: worker.initials, workerColor: worker.color, timestamp: t, date: today, read: false });
        setToast(`"${supply.name}" — zabilježeno!`);
      }
      return next;
    });
  };

  const handleFinish = () => {
    setFinished(true);
    setToast("Posao završen! Zabilježeno. ✨");
    if (worker) {
      const today = new Date().toISOString().split("T")[0];
      const t = now();
      addNotification({ type: "job_done", title: `Posao završen`, body: `${job.address} — ${worker.id} · ${t}`, workerInitials: worker.initials, workerColor: worker.color, timestamp: t, date: today, read: false });
    }
  };

  const handleToggleNeed = (need: string) => {
    if (finished) return;
    setLocationNeeds((prev) => {
      const next = prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need];
      // Persist to localStorage immediately so admin can see it in daily summary
      if (job) {
        const today = new Date().toISOString().split("T")[0];
        saveLocationNeed({
          jobId: job.id,
          address: job.address,
          clientName: job.clientName,
          date: today,
          needs: next,
          customNote: locationNote || undefined,
        });
      }
      return next;
    });
    setToast("Potreba zabilježena za dnevno izvješće!");
  };

  const handleNoteBlur = () => {
    if (!job) return;
    const today = new Date().toISOString().split("T")[0];
    saveLocationNeed({
      jobId: job.id,
      address: job.address,
      clientName: job.clientName,
      date: today,
      needs: locationNeeds,
      customNote: locationNote || undefined,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}

      {/* ── Header ── */}
      <div className="bg-[#0266f0] px-5 pt-12 pb-6">
        <button
          onClick={() => router.back()}
          className="text-white/65 hover:text-white text-sm flex items-center gap-1 mb-4"
        >
          <span className="text-lg leading-none">←</span> Raspored
        </button>

        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <span
              className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold mb-2"
              style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}
            >
              {meta.emoji} {meta.label}
            </span>
            <h1 className="font-heading font-bold text-white text-2xl leading-tight">
              {job.address}
            </h1>
            <p className="text-white/65 text-sm mt-1">{job.clientName}</p>
          </div>
        </div>

        {/* Time row */}
        <div className="mt-4 flex items-center gap-4 text-white">
          <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
            <span className="text-lg">🕐</span>
            <div>
              <p className="font-heading font-bold text-sm">
                {job.startTime} → {job.endTime}
              </p>
              <p className="text-white/60 text-xs">{job.durationHours}h posla</p>
            </div>
          </div>
          {/* Map link */}
          <a
            href={job.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 hover:bg-white/20 transition-colors"
          >
            <span className="text-lg">📍</span>
            <div>
              <p className="font-heading font-bold text-sm">Karta</p>
              <p className="text-white/60 text-xs">Otvori navigaciju</p>
            </div>
          </a>
        </div>
      </div>

      <div className="px-5 mt-5 flex flex-col gap-5">
        {/* ── Check-in ── */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <h2 className="font-heading font-bold text-gray-900 mb-3">📍 Prijava dolaska</h2>
          {checkIn ? (
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-xl">✅</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Prijavljen u {checkIn.time}</p>
                {checkIn.lat && (
                  <p className="text-xs text-gray-400">
                    GPS: {checkIn.lat.toFixed(4)}, {checkIn.lng?.toFixed(4)}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <button
              onClick={handleCheckIn}
              disabled={gpsLoading || finished}
              className="w-full flex items-center justify-center gap-2 bg-[#0266f0] text-white font-semibold rounded-xl py-3.5 hover:bg-[#0052c9] active:scale-[0.98] disabled:opacity-60 transition-all"
            >
              {gpsLoading ? (
                <><div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Tražim GPS...</>
              ) : (
                <><span className="text-lg">📍</span> Stigao sam na adresu</>
              )}
            </button>
          )}
        </div>

        {/* ── Team ── */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <h2 className="font-heading font-bold text-gray-900 mb-3">👥 Ekipa</h2>
          <div className="flex flex-col gap-2.5">
            {assignedWorkers.map((w) => (
              <div key={w.id} className="flex items-center gap-3">
                <div
                  className="h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                  style={{ backgroundColor: w.color }}
                >
                  {w.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{w.name}</p>
                  <p className="text-xs text-gray-400">{w.role === "admin" ? "Voditelj" : "Radnik"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tasks ── */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-heading font-bold text-gray-900">✅ Zadaci</h2>
            <span className="text-xs font-semibold text-[#0266f0] bg-[#e0efff] px-2.5 py-1 rounded-full">
              {completedCount}/{job.tasks.length}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-gray-100 rounded-full mb-4 overflow-hidden">
            <div
              className="h-full bg-[#0266f0] rounded-full transition-all duration-500"
              style={{ width: `${(completedCount / job.tasks.length) * 100}%` }}
            />
          </div>

          <div className="flex flex-col gap-2">
            {job.tasks.map((task, i) => (
              <button
                key={i}
                onClick={() => !finished && setCheckedTasks((prev) => ({ ...prev, [i]: !prev[i] }))}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-xl text-left transition-all",
                  checkedTasks[i] ? "bg-emerald-50" : "bg-gray-50 hover:bg-gray-100",
                  finished && "cursor-default",
                )}
              >
                <div
                  className={cn(
                    "h-6 w-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all",
                    checkedTasks[i]
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : "border-gray-300",
                  )}
                >
                  {checkedTasks[i] && <span className="text-xs leading-none">✓</span>}
                </div>
                <span
                  className={cn(
                    "text-sm",
                    checkedTasks[i] ? "line-through text-gray-400" : "text-gray-800 font-medium",
                  )}
                >
                  {task}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Notes ── */}
        {job.notes && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <h2 className="font-heading font-bold text-amber-800 mb-2">📝 Bilješka</h2>
            <p className="text-sm text-amber-700 leading-relaxed">{job.notes}</p>
          </div>
        )}

        {/* ── Supplies / Sredstva ── */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <h2 className="font-heading font-bold text-gray-900 mb-1">🧹 Sredstva</h2>
          <p className="text-xs text-gray-400 mb-3">
            Klikni na sredstvo ako nedostaje — voditelju stigne obavijest.
          </p>
          <div className="flex flex-wrap gap-2">
            {job.supplies.map((supply) => (
              <button
                key={supply.id}
                onClick={() => !finished && handleMissingSupply(supply)}
                className={cn(
                  "px-3 py-2 rounded-xl text-sm font-medium border transition-all active:scale-95",
                  missingSupplies[supply.id]
                    ? "bg-red-100 border-red-300 text-red-700 line-through"
                    : "bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-300",
                  finished && "cursor-default",
                )}
              >
                {missingSupplies[supply.id] ? "❌ " : "✅ "}
                {supply.name}
              </button>
            ))}
          </div>
          {missingList.length > 0 && (
            <p className="mt-3 text-xs text-red-500 font-medium">
              {missingList.length} sredstvo/a označeno kao nedostaje · obavijest poslana
            </p>
          )}
        </div>

        {/* ── Photos ── */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <h2 className="font-heading font-bold text-gray-900 mb-3">📷 Fotografije</h2>

          {/* Phase toggle */}
          <div className="flex rounded-xl border border-gray-200 overflow-hidden mb-4">
            {(["prije", "poslije"] as const).map((phase) => (
              <button
                key={phase}
                onClick={() => setPhotoPhase(phase)}
                className={cn(
                  "flex-1 py-2.5 text-sm font-semibold transition-all",
                  photoPhase === phase
                    ? "bg-[#0266f0] text-white"
                    : "text-gray-500 hover:bg-gray-50",
                )}
              >
                {phase === "prije" ? "📸 Prije" : "✨ Poslije"}
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-3 gap-2">
            {photos
              .filter((p) => p.phase === photoPhase)
              .map((p) => (
                <div key={p.id} className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.url} alt="Fotografija" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[9px] px-1.5 py-0.5 text-center">
                    {p.timestamp}
                  </div>
                </div>
              ))}

            {/* Add button */}
            {!finished && (
              <button
                onClick={() => fileRef.current?.click()}
                className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-1 text-gray-400 hover:border-[#0266f0] hover:text-[#0266f0] active:scale-95 transition-all"
              >
                <span className="text-2xl leading-none">+</span>
                <span className="text-[10px] font-semibold">Dodaj</span>
              </button>
            )}
          </div>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handlePhotoUpload}
          />

          <p className="text-xs text-gray-400 mt-3 text-center">
            {photos.filter((p) => p.phase === "prije").length} prije ·{" "}
            {photos.filter((p) => p.phase === "poslije").length} poslije
          </p>
        </div>

        {/* ── Location Needs ── */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <h2 className="font-heading font-bold text-gray-900 mb-1">📋 Potrebe na lokaciji</h2>
          <p className="text-xs text-gray-400 mb-3">
            Uoči nešto što treba napraviti? Označi — dolazi u dnevno izvješće voditelju.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {(LOCATION_NEEDS_OPTIONS as readonly string[]).map((need) => {
              const active = locationNeeds.includes(need);
              return (
                <button
                  key={need}
                  onClick={() => handleToggleNeed(need)}
                  disabled={finished}
                  className={cn(
                    "px-3 py-2 rounded-xl text-sm font-medium border transition-all active:scale-95",
                    active
                      ? "bg-[#0266f0] border-[#0266f0] text-white"
                      : "bg-gray-50 border-gray-200 text-gray-700 hover:border-[#0266f0] hover:text-[#0266f0]",
                    finished && "cursor-default opacity-70",
                  )}
                >
                  {active ? "✓ " : ""}{need}
                </button>
              );
            })}
          </div>

          <textarea
            value={locationNote}
            onChange={(e) => setLocationNote(e.target.value)}
            onBlur={handleNoteBlur}
            disabled={finished}
            placeholder="Dodatna napomena za voditelja (opcionalno)..."
            rows={3}
            className="w-full text-sm text-gray-800 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-[#0266f0] disabled:opacity-60"
          />

          {locationNeeds.length > 0 && (
            <p className="mt-2 text-xs text-[#0266f0] font-medium">
              {locationNeeds.length} potreba/e zabilježeno · ide u dnevno izvješće
            </p>
          )}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        {finished ? (
          <div className="flex items-center justify-center gap-3 py-2">
            <span className="text-2xl">🎉</span>
            <div>
              <p className="font-heading font-bold text-emerald-700">Posao završen!</p>
              <p className="text-xs text-gray-500">Voditelju je poslana potvrda.</p>
            </div>
          </div>
        ) : checkIn ? (
          <button
            onClick={handleFinish}
            disabled={!allTasksDone}
            className={cn(
              "w-full flex items-center justify-center gap-2 font-heading font-bold rounded-2xl py-4 text-base transition-all active:scale-[0.98]",
              allTasksDone
                ? "bg-emerald-500 text-white hover:bg-emerald-600"
                : "bg-gray-100 text-gray-400 cursor-not-allowed",
            )}
          >
            {allTasksDone ? (
              <><span className="text-xl">✅</span> Završi posao</>
            ) : (
              <>Dovrši sve zadatke ({completedCount}/{job.tasks.length})</>
            )}
          </button>
        ) : (
          <p className="text-center text-sm text-gray-400 font-medium py-2">
            Prijavi dolazak da počneš s poslom
          </p>
        )}
      </div>
    </div>
  );
}
