"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  workers,
  getAllJobs,
  JOB_TYPE_META,
  getJobsForWorker,
  getUpcomingJobsForWorker,
  getWeeklyHours,
  type Job,
} from "@/content/workers";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

// ── Types ────────────────────────────────────────────────────────────────────

type SessionWorker = {
  id: string;
  name: string;
  firstName: string;
  initials: string;
  color: string;
  role: string;
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function todayStr(): string {
  return new Date().toISOString().split("T")[0];
}

function getMondayOfWeek(dateStr: string): string {
  const d = new Date(dateStr);
  const day = d.getDay(); // 0=Sun
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d.toISOString().split("T")[0];
}

const HR_DAYS = ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"];
const HR_MONTHS = ["siječnja", "veljače", "ožujka", "travnja", "svibnja", "lipnja", "srpnja", "kolovoza", "rujna", "listopada", "studenog", "prosinca"];

function formatDateHr(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return `${HR_DAYS[d.getDay()]}, ${d.getDate()}. ${HR_MONTHS[d.getMonth()]}`;
}

// ── Job card ─────────────────────────────────────────────────────────────────

function JobCard({ job, onClick }: { job: Job; onClick: () => void }) {
  const meta = JOB_TYPE_META[job.type];
  const assignedWorkers = workers.filter((w) => job.assignedTo.includes(w.id));

  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md active:scale-[0.98] transition-all"
    >
      {/* Colour strip */}
      <div className="h-1.5 w-full" style={{ backgroundColor: meta.color }} />

      <div className="p-4">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                style={{ backgroundColor: meta.bg, color: meta.color }}
              >
                {meta.emoji} {meta.label}
              </span>
            </div>
            <p className="font-heading font-bold text-gray-900 text-[15px] leading-tight truncate">
              {job.address}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">{job.clientName}</p>
          </div>

          {/* Time */}
          <div className="text-right shrink-0">
            <p className="font-heading font-bold text-gray-900 text-sm">
              {job.startTime}
            </p>
            <p className="text-xs text-gray-400">{job.durationHours}h</p>
          </div>
        </div>

        {/* Footer row */}
        <div className="mt-3 flex items-center justify-between">
          {/* Team avatars */}
          <div className="flex -space-x-2">
            {assignedWorkers.map((w) => (
              <div
                key={w.id}
                title={w.firstName}
                className="h-7 w-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                style={{ backgroundColor: w.color }}
              >
                {w.initials}
              </div>
            ))}
          </div>
          <span className="text-xs font-medium text-[#0266f0] flex items-center gap-1">
            Otvori <span className="text-base leading-none">→</span>
          </span>
        </div>
      </div>
    </button>
  );
}

// ── Dashboard page ────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const router = useRouter();
  const [worker, setWorker] = useState<SessionWorker | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("pc_worker");
      if (!saved) {
        router.replace("/radnici");
        return;
      }
      setWorker(JSON.parse(saved) as SessionWorker);
    } catch {
      router.replace("/radnici");
    } finally {
      setLoading(false);
    }
  }, [router]);

  if (loading || !worker) {
    return (
      <div className="min-h-screen bg-[#0266f0] flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border-4 border-white/30 border-t-white animate-spin" />
      </div>
    );
  }

  const today = todayStr();
  // Force refresh jobs from localStorage (admin may have edited them)
  getAllJobs();
  const todayJobs = getJobsForWorker(worker.id, today);
  const upcomingJobs = getUpcomingJobsForWorker(worker.id, today);
  const weeklyHours = getWeeklyHours(worker.id, getMondayOfWeek(today));

  // Group upcoming by date
  const upcomingByDate: Record<string, Job[]> = {};
  for (const j of upcomingJobs) {
    if (!upcomingByDate[j.date]) upcomingByDate[j.date] = [];
    upcomingByDate[j.date].push(j);
  }

  const logout = () => {
    localStorage.removeItem("pc_worker");
    router.replace("/radnici");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* ── Top bar ── */}
      <div className="bg-[#0266f0] px-5 pt-12 pb-6">
        <div className="flex items-center justify-between">
          <Logo variant="light" className="text-xl" />
          {/* Avatar */}
          <div
            className="h-10 w-10 rounded-full border-2 border-white/40 flex items-center justify-center font-heading font-bold text-sm text-white"
            style={{ backgroundColor: worker.color }}
          >
            {worker.initials}
          </div>
        </div>

        {/* Greeting */}
        <div className="mt-5">
          <p className="text-white/65 text-sm">{formatDateHr(today)}</p>
          <h1 className="text-2xl font-heading font-bold text-white mt-0.5">
            Bok, {worker.firstName} 👋
          </h1>
        </div>

        {/* Stats card */}
        <div className="mt-5 bg-[#082352] rounded-2xl p-4 flex items-center gap-6">
          <div>
            <p className="text-white/50 text-xs font-medium uppercase tracking-wide">Danas</p>
            <p className="text-white font-heading font-bold text-3xl leading-none mt-1">
              {todayJobs.length}
            </p>
            <p className="text-white/60 text-xs mt-0.5">
              {todayJobs.length === 1 ? "posao" : todayJobs.length < 5 ? "posla" : "poslova"}
            </p>
          </div>
          <div className="w-px h-10 bg-white/15" />
          <div>
            <p className="text-white/50 text-xs font-medium uppercase tracking-wide">Ovaj tjedan</p>
            <p className="text-white font-heading font-bold text-3xl leading-none mt-1">
              {weeklyHours}h
            </p>
            <p className="text-white/60 text-xs mt-0.5">ukupno</p>
          </div>
          <div className="ml-auto">
            <div className="text-3xl">📋</div>
          </div>
        </div>
      </div>

      {/* ── Job list ── */}
      <div className="px-5 mt-6">
        {/* Today */}
        <h2 className="font-heading font-bold text-gray-900 text-sm uppercase tracking-wider mb-3">
          Danas
        </h2>

        {todayJobs.length === 0 ? (
          <div className="text-center py-10 text-gray-400 text-sm">
            <span className="text-4xl block mb-3">🎉</span>
            Nema više poslova za danas!
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {todayJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onClick={() => router.push(`/radnici/posao/${job.id}`)}
              />
            ))}
          </div>
        )}

        {/* Upcoming */}
        {Object.keys(upcomingByDate).length > 0 && (
          <div className="mt-8">
            {Object.entries(upcomingByDate).map(([date, dateJobs]) => (
              <div key={date} className="mb-6">
                <h2 className="font-heading font-bold text-gray-900 text-sm uppercase tracking-wider mb-3">
                  {formatDateHr(date)}
                </h2>
                <div className="flex flex-col gap-3">
                  {dateJobs.map((job) => (
                    <JobCard
                      key={job.id}
                      job={job}
                      onClick={() => router.push(`/radnici/posao/${job.id}`)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Bottom nav ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-around items-center safe-area-inset-bottom shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <NavItem icon="🏠" label="Raspored" active />
        <NavItem
          icon="🗺️"
          label="Karta"
          onClick={() => {
            const firstJob = todayJobs[0];
            if (firstJob) window.open(firstJob.mapUrl, "_blank");
          }}
        />
        {worker.role === "admin" && (
          <NavItem icon="⚙️" label="Admin" onClick={() => router.push("/radnici/admin")} />
        )}
        <NavItem icon="🚪" label="Odjava" onClick={logout} />
      </div>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-all",
        active ? "text-[#0266f0]" : "text-gray-400 hover:text-gray-600",
      )}
    >
      <span className="text-2xl leading-none">{icon}</span>
      <span className={cn("text-[10px] font-semibold", active ? "text-[#0266f0]" : "text-gray-400")}>
        {label}
      </span>
    </button>
  );
}
