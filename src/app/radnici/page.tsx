"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authenticate } from "@/content/workers";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

export default function RadniciLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    try {
      const saved = localStorage.getItem("pc_worker");
      if (!saved) return;
      const w = JSON.parse(saved) as { role: string };
      router.replace(w.role === "admin" ? "/radnici/admin" : "/radnici/dashboard");
    } catch {}
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!username.trim() || !password) {
      setError("Upiši korisničko ime i lozinku.");
      return;
    }
    setLoading(true);

    // Simulate async (replace with Supabase auth in production)
    setTimeout(() => {
      const worker = authenticate(username, password);
      if (!worker) {
        setError("Pogrešno korisničko ime ili lozinka.");
        setLoading(false);
        return;
      }
      localStorage.setItem(
        "pc_worker",
        JSON.stringify({
          id: worker.id,
          name: worker.name,
          firstName: worker.firstName,
          initials: worker.initials,
          color: worker.color,
          role: worker.role,
        }),
      );
      router.push(worker.role === "admin" ? "/radnici/admin" : "/radnici/dashboard");
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#0266f0] flex flex-col items-center justify-center p-5">
      {/* Card */}
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Blue top strip */}
        <div className="bg-[#0266f0] px-8 pt-10 pb-8 text-white text-center">
          <Logo variant="light" className="text-3xl justify-center" />
          <p className="mt-3 text-white/70 text-sm">Radnički portal · Prijava</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-8 flex flex-col gap-5">
          {/* Username */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Korisničko ime
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => { setUsername(e.target.value); setError(null); }}
              placeholder="npr. marko"
              autoCapitalize="none"
              autoCorrect="off"
              className={cn(
                "rounded-xl border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 outline-none transition-all",
                error
                  ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                  : "border-gray-200 bg-gray-50 focus:border-[#0266f0] focus:ring-2 focus:ring-[#0266f0]/10",
              )}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Lozinka
            </label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(null); }}
                placeholder="••••••••"
                className={cn(
                  "w-full rounded-xl border px-4 py-3 pr-12 text-sm text-gray-900 placeholder:text-gray-300 outline-none transition-all",
                  error
                    ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                    : "border-gray-200 bg-gray-50 focus:border-[#0266f0] focus:ring-2 focus:ring-[#0266f0]/10",
                )}
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg"
              >
                {showPw ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm font-medium text-center -mt-2 bg-red-50 rounded-xl px-4 py-2.5">
              ⚠️ {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0266f0] text-white font-heading font-bold rounded-2xl py-4 text-base hover:bg-[#0052c9] active:scale-[0.98] disabled:opacity-60 transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <><div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Prijava…</>
            ) : (
              "Prijavi se →"
            )}
          </button>

          <p className="text-center text-xs text-gray-400">
            Zaboravio lozinku? Javi se voditelju.
          </p>
        </form>
      </div>

      {/* Demo hint */}
      <div className="mt-6 bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white/80 text-xs max-w-sm w-full">
        <p className="font-semibold text-white mb-1">Demo podatci za testiranje:</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
          <span>marko / admin123</span><span className="text-white/50">(voditelj)</span>
          <span>ana / proclean</span><span className="text-white/50">(radnica)</span>
          <span>ivan / proclean</span><span className="text-white/50">(radnik)</span>
          <span>petra / proclean</span><span className="text-white/50">(radnica)</span>
        </div>
      </div>

      <a href="/" className="mt-6 text-white/40 text-xs hover:text-white/70 transition-colors">
        ← Natrag na proclean.hr
      </a>
    </div>
  );
}
