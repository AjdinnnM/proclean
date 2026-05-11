// ─── Worker & Job data ────────────────────────────────────────────────────────
// In production connect to Supabase — every helper here is a drop-in for a DB call.

export type WorkerRole = "worker" | "admin";

export type Worker = {
  id: string;
  name: string;
  firstName: string;
  /** Login username */
  username: string;
  /** Login password (plain text for demo — hash with bcrypt in production) */
  password: string;
  role: WorkerRole;
  initials: string;
  color: string;
  /** Last GPS check-in — updated by worker, read by admin map */
  lastCheckin?: {
    lat: number;
    lng: number;
    address: string;
    time: string;
    date: string;
  };
};

export type SupplyItem = {
  id: string;
  name: string;
};

export type SupplyRequest = {
  id: string;
  workerId: string;
  workerName: string;
  workerInitials: string;
  workerColor: string;
  supplyName: string;
  jobId: string;
  jobAddress: string;
  timestamp: string;
  date: string;
  handled: boolean;
};

export type JobType = "stubiste" | "garaza" | "gradnja" | "prozori";

export type Job = {
  id: string;
  type: JobType;
  typeName: string;
  address: string;
  mapUrl: string;
  clientName: string;
  /** ISO date "YYYY-MM-DD" */
  date: string;
  startTime: string;
  endTime: string;
  durationHours: number;
  tasks: string[];
  notes?: string;
  assignedTo: string[];
  supplies: SupplyItem[];
};

// ─── Workers ─────────────────────────────────────────────────────────────────

export const workers: Worker[] = [
  {
    id: "w1",
    name: "Marko Horvat",
    firstName: "Marko",
    username: "marko",
    password: "admin123",
    role: "admin",
    initials: "MH",
    color: "#0266f0",
    lastCheckin: {
      lat: 45.8104,
      lng: 15.9449,
      address: "Ilica 142, Zagreb",
      time: "08:15",
      date: "2026-04-21",
    },
  },
  {
    id: "w2",
    name: "Ana Kovač",
    firstName: "Ana",
    username: "ana",
    password: "proclean",
    role: "worker",
    initials: "AK",
    color: "#10b981",
    lastCheckin: {
      lat: 45.8163,
      lng: 16.0174,
      address: "Maksimirska 88, Zagreb",
      time: "11:05",
      date: "2026-04-21",
    },
  },
  {
    id: "w3",
    name: "Ivan Perić",
    firstName: "Ivan",
    username: "ivan",
    password: "proclean",
    role: "worker",
    initials: "IP",
    color: "#f59e0b",
    lastCheckin: {
      lat: 45.7898,
      lng: 15.9406,
      address: "Vrbani III 24, Zagreb",
      time: "15:02",
      date: "2026-04-21",
    },
  },
  {
    id: "w4",
    name: "Petra Novak",
    firstName: "Petra",
    username: "petra",
    password: "proclean",
    role: "worker",
    initials: "PN",
    color: "#8b5cf6",
    // No check-in yet
  },
];

// ─── Default tasks & supplies per type ───────────────────────────────────────

export const DEFAULT_TASKS: Record<JobType, string[]> = {
  stubiste: [
    "Metenje stubišta svih katova",
    "Brisanje prašine s rukohvata",
    "Mokro čišćenje poda",
    "Čišćenje sandučića pošte",
    "Uklanjanje paučine",
  ],
  garaza: [
    "Metenje garažnog prostora",
    "Uklanjanje paučine sa zidova i stropa",
    "Strojno pranje poda",
    "Uklanjanje mrlja od ulja",
    "Čišćenje rešetki i odvoda",
  ],
  gradnja: [
    "Skupljanje građevinskog otpada",
    "Čišćenje keramike od cementa",
    "Brisanje prašine sa svih površina",
    "Čišćenje prozora iznutra",
    "Usisavanje i mokro čišćenje poda",
  ],
  prozori: [
    "Pranje vanjskih stakala",
    "Pranje unutarnjih stakala",
    "Čišćenje okvira i prozorskih klupica",
    "Brisanje do sjaja — bez tragova",
  ],
};

export const DEFAULT_SUPPLIES: Record<JobType, SupplyItem[]> = {
  stubiste: [
    { id: "s1", name: "Sredstvo za pod" },
    { id: "s2", name: "Krpe za brisanje" },
    { id: "s3", name: "Metla i lopatica" },
    { id: "s4", name: "Kanta i mop" },
  ],
  garaza: [
    { id: "s1", name: "Stroj za pranje poda" },
    { id: "s2", name: "Sredstvo za odmašćivanje" },
    { id: "s3", name: "Industrijske rukavice" },
  ],
  gradnja: [
    { id: "s1", name: "Sredstvo za cement (kiselo)" },
    { id: "s2", name: "Industrijski usisavač" },
    { id: "s3", name: "Zaštitne naočale" },
    { id: "s4", name: "Zaštitne rukavice" },
  ],
  prozori: [
    { id: "s1", name: "Sredstvo za staklo" },
    { id: "s2", name: "Gumeni brisač (squeegee)" },
    { id: "s3", name: "Teleskopska motka" },
    { id: "s4", name: "Mikrofiber krpe" },
  ],
};

// ─── Default jobs ─────────────────────────────────────────────────────────────

const DEFAULT_JOBS: Job[] = [
  {
    id: "j1",
    type: "stubiste",
    typeName: "Čišćenje stubišta",
    address: "Ilica 142, Zagreb",
    mapUrl: "https://maps.google.com/?q=Ilica+142,Zagreb",
    clientName: "HOK d.o.o.",
    date: "2026-04-21",
    startTime: "08:00",
    endTime: "10:00",
    durationHours: 2,
    assignedTo: ["w1", "w2"],
    tasks: DEFAULT_TASKS.stubiste,
    notes: "Ključ kod stanara na 3. katu, Stan 12. Pozvoni na interfon.",
    supplies: DEFAULT_SUPPLIES.stubiste,
  },
  {
    id: "j2",
    type: "garaza",
    typeName: "Čišćenje garaže",
    address: "Maksimirska 88, Zagreb",
    mapUrl: "https://maps.google.com/?q=Maksimirska+88,Zagreb",
    clientName: "Oprema doma d.o.o.",
    date: "2026-04-21",
    startTime: "11:00",
    endTime: "14:00",
    durationHours: 3,
    assignedTo: ["w1", "w3"],
    tasks: DEFAULT_TASKS.garaza,
    notes: "Parkirati ispred garaže. Garda otvara ulaz.",
    supplies: DEFAULT_SUPPLIES.garaza,
  },
  {
    id: "j3",
    type: "gradnja",
    typeName: "Post-gradnja čišćenje",
    address: "Vrbani III 24, Zagreb",
    mapUrl: "https://maps.google.com/?q=Vrbani+III+24,Zagreb",
    clientName: "Stanari Vrbani",
    date: "2026-04-21",
    startTime: "15:00",
    endTime: "17:00",
    durationHours: 2,
    assignedTo: ["w1", "w4"],
    tasks: DEFAULT_TASKS.gradnja,
    notes: "Stan na 2. katu. Lift radi.",
    supplies: DEFAULT_SUPPLIES.gradnja,
  },
  {
    id: "j4",
    type: "prozori",
    typeName: "Pranje prozora",
    address: "Pantovčak 15, Zagreb",
    mapUrl: "https://maps.google.com/?q=Pantovčak+15,Zagreb",
    clientName: "Obiteljska kuća",
    date: "2026-04-22",
    startTime: "09:00",
    endTime: "12:00",
    durationHours: 3,
    assignedTo: ["w2", "w3"],
    tasks: DEFAULT_TASKS.prozori,
    notes: "Kuća ima visoke prozore na 1. katu. Donijeti teleskopsku motku.",
    supplies: DEFAULT_SUPPLIES.prozori,
  },
  {
    id: "j5",
    type: "stubiste",
    typeName: "Čišćenje stubišta",
    address: "Savska cesta 56, Zagreb",
    mapUrl: "https://maps.google.com/?q=Savska+cesta+56,Zagreb",
    clientName: "Savska invest d.o.o.",
    date: "2026-04-22",
    startTime: "14:00",
    endTime: "16:00",
    durationHours: 2,
    assignedTo: ["w1", "w4"],
    tasks: DEFAULT_TASKS.stubiste,
    supplies: DEFAULT_SUPPLIES.stubiste,
  },
];

// ─── localStorage keys ────────────────────────────────────────────────────────

const KEY_JOBS = "pc_jobs";
const KEY_SUPPLY_REQUESTS = "pc_supply_requests";
const KEY_WORKER_CHECKINS = "pc_checkins";

// ─── Jobs helpers ─────────────────────────────────────────────────────────────

export function getAllJobs(): Job[] {
  if (typeof window === "undefined") return DEFAULT_JOBS;
  try {
    const saved = localStorage.getItem(KEY_JOBS);
    if (saved) return JSON.parse(saved) as Job[];
  } catch {}
  return DEFAULT_JOBS;
}

export function saveAllJobs(updated: Job[]): void {
  try {
    localStorage.setItem(KEY_JOBS, JSON.stringify(updated));
  } catch {}
}

export function getJobById(id: string): Job | undefined {
  return getAllJobs().find((j) => j.id === id);
}

export function getJobsForWorker(workerId: string, date: string): Job[] {
  return getAllJobs().filter(
    (j) => j.date === date && j.assignedTo.includes(workerId),
  );
}

export function getUpcomingJobsForWorker(workerId: string, date: string): Job[] {
  return getAllJobs().filter(
    (j) => j.date > date && j.assignedTo.includes(workerId),
  );
}

export function getWeeklyHours(workerId: string, weekStart: string): number {
  const start = new Date(weekStart);
  const end = new Date(weekStart);
  end.setDate(end.getDate() + 6);
  return getAllJobs()
    .filter((j) => {
      const d = new Date(j.date);
      return j.assignedTo.includes(workerId) && d >= start && d <= end;
    })
    .reduce((acc, j) => acc + j.durationHours, 0);
}

// ─── Supply request helpers ───────────────────────────────────────────────────

export function getSupplyRequests(): SupplyRequest[] {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem(KEY_SUPPLY_REQUESTS);
    return saved ? (JSON.parse(saved) as SupplyRequest[]) : [];
  } catch {
    return [];
  }
}

export function saveSupplyRequest(req: Omit<SupplyRequest, "id">): void {
  try {
    const existing = getSupplyRequests();
    existing.push({ ...req, id: Date.now().toString() });
    localStorage.setItem(KEY_SUPPLY_REQUESTS, JSON.stringify(existing));
  } catch {}
}

export function markRequestHandled(id: string): void {
  try {
    const updated = getSupplyRequests().map((r) =>
      r.id === id ? { ...r, handled: true } : r,
    );
    localStorage.setItem(KEY_SUPPLY_REQUESTS, JSON.stringify(updated));
  } catch {}
}

// ─── Location needs (what else a building needs) ─────────────────────────────

const KEY_LOCATION_NEEDS = "pc_location_needs";

export const LOCATION_NEEDS_OPTIONS = [
  "Strojno čišćenje poda",
  "Pranje prozora",
  "Čišćenje garaže",
  "Dubinsko čišćenje",
  "Čišćenje nakon gradnje",
  "Čišćenje fasade",
  "Uklanjanje grafita",
  "Dezinfekcija prostora",
  "Čišćenje tepiha",
] as const;

export type LocationNeed = {
  jobId: string;
  address: string;
  clientName: string;
  date: string;
  needs: string[];
  customNote?: string;
};

export function saveLocationNeed(need: LocationNeed): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getAllLocationNeeds();
    // Replace if same job+date already exists
    const filtered = existing.filter(
      (n) => !(n.jobId === need.jobId && n.date === need.date),
    );
    if (need.needs.length > 0 || need.customNote) {
      filtered.push(need);
    }
    localStorage.setItem(KEY_LOCATION_NEEDS, JSON.stringify(filtered));
  } catch {}
}

export function getAllLocationNeeds(): LocationNeed[] {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem(KEY_LOCATION_NEEDS);
    return saved ? (JSON.parse(saved) as LocationNeed[]) : [];
  } catch { return []; }
}

export function getLocationNeedsByDate(date: string): LocationNeed[] {
  return getAllLocationNeeds().filter((n) => n.date === date);
}

// ─── Worker check-in helpers ──────────────────────────────────────────────────

export type CheckinRecord = {
  workerId: string;
  lat: number;
  lng: number;
  address: string;
  time: string;
  date: string;
};

export function saveCheckin(record: CheckinRecord): void {
  try {
    const existing = getAllCheckins();
    // Replace existing for same worker+date
    const filtered = existing.filter(
      (c) => !(c.workerId === record.workerId && c.date === record.date),
    );
    filtered.push(record);
    localStorage.setItem(KEY_WORKER_CHECKINS, JSON.stringify(filtered));
  } catch {}
}

export function getAllCheckins(): CheckinRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem(KEY_WORKER_CHECKINS);
    return saved ? (JSON.parse(saved) as CheckinRecord[]) : [];
  } catch {
    return [];
  }
}

export function getWorkerCheckin(
  workerId: string,
  date: string,
): CheckinRecord | undefined {
  return getAllCheckins().find(
    (c) => c.workerId === workerId && c.date === date,
  );
}

// ─── Worker management (admin CRUD) ──────────────────────────────────────────

const KEY_WORKERS = "pc_workers";

export type ManagedWorker = Worker & { isCustom?: boolean };

/** Returns all workers: localStorage overrides merged over defaults. */
export function getAllWorkers(): ManagedWorker[] {
  if (typeof window === "undefined") return workers;
  try {
    const saved = localStorage.getItem(KEY_WORKERS);
    if (saved) return JSON.parse(saved) as ManagedWorker[];
  } catch {}
  // First time: seed localStorage with defaults
  const defaults: ManagedWorker[] = workers.map((w) => ({ ...w, isCustom: false }));
  localStorage.setItem(KEY_WORKERS, JSON.stringify(defaults));
  return defaults;
}

export function saveAllWorkers(updated: ManagedWorker[]): void {
  try {
    localStorage.setItem(KEY_WORKERS, JSON.stringify(updated));
  } catch {}
}

export function addWorker(w: Omit<Worker, "id" | "lastCheckin">): ManagedWorker {
  const all = getAllWorkers();
  const newWorker: ManagedWorker = {
    ...w,
    id: "w" + Date.now(),
    isCustom: true,
  };
  saveAllWorkers([...all, newWorker]);
  return newWorker;
}

export function updateWorker(id: string, changes: Partial<Worker>): void {
  const all = getAllWorkers().map((w) => (w.id === id ? { ...w, ...changes } : w));
  saveAllWorkers(all);
}

export function deleteWorker(id: string): void {
  saveAllWorkers(getAllWorkers().filter((w) => w.id !== id));
}

// ─── Notifications feed ───────────────────────────────────────────────────────

const KEY_NOTIFICATIONS = "pc_notifications";

export type AppNotification = {
  id: string;
  type: "checkin" | "supply_request" | "job_done" | "contact_form";
  title: string;
  body: string;
  workerInitials?: string;
  workerColor?: string;
  timestamp: string;
  date: string;
  read: boolean;
};

export function getNotifications(): AppNotification[] {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem(KEY_NOTIFICATIONS);
    return saved ? (JSON.parse(saved) as AppNotification[]) : [];
  } catch {
    return [];
  }
}

export function addNotification(n: Omit<AppNotification, "id">): void {
  try {
    const existing = getNotifications();
    existing.unshift({ ...n, id: Date.now().toString() });
    // Keep last 100
    localStorage.setItem(KEY_NOTIFICATIONS, JSON.stringify(existing.slice(0, 100)));
  } catch {}
}

export function markNotificationsRead(): void {
  try {
    const updated = getNotifications().map((n) => ({ ...n, read: true }));
    localStorage.setItem(KEY_NOTIFICATIONS, JSON.stringify(updated));
  } catch {}
}

export function getUnreadCount(): number {
  return getNotifications().filter((n) => !n.read).length;
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

export function authenticate(
  username: string,
  password: string,
): Worker | null {
  // Check localStorage workers first (includes custom ones + password changes)
  const all = getAllWorkers();
  return (
    all.find(
      (w) =>
        w.username.toLowerCase() === username.toLowerCase().trim() &&
        w.password === password,
    ) ?? null
  );
}

// ─── Misc ─────────────────────────────────────────────────────────────────────

export const JOB_TYPE_META: Record<
  JobType,
  { label: string; color: string; bg: string; emoji: string }
> = {
  stubiste: { label: "Stubište",     color: "#0266f0", bg: "#e0efff", emoji: "🏢" },
  garaza:   { label: "Garaža",       color: "#10b981", bg: "#d1fae5", emoji: "🚗" },
  gradnja:  { label: "Post-gradnja", color: "#f59e0b", bg: "#fef3c7", emoji: "🏗️" },
  prozori:  { label: "Prozori",      color: "#8b5cf6", bg: "#ede9fe", emoji: "🪟" },
};

export function getWorkerById(id: string): Worker | undefined {
  return workers.find((w) => w.id === id);
}
