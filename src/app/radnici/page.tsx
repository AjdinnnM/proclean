"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const ADMIN_USER = "admin";
const ADMIN_PASS = "proclean2024";

export default function RadniciPortalPage() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const passRef = useRef<HTMLInputElement>(null);

  // Always start locked — no persistence
  useEffect(() => { setLoggedIn(false); }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (username.trim() === ADMIN_USER && password === ADMIN_PASS) {
      setError(false);
      setLoggedIn(true);
    } else {
      setError(true);
      setShake(true);
      setPassword("");
      setTimeout(() => setShake(false), 500);
      passRef.current?.focus();
    }
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-5">
        <div
          className="w-full max-w-sm"
          style={shake ? { animation: "lock-shake 0.45s ease-in-out" } : {}}
        >
          {/* Logo / title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-[18px] bg-[#3B82F6]/15 mb-5">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h1 className="text-white font-semibold text-xl tracking-tight">Portal za radnike</h1>
            <p className="text-white/40 text-sm mt-1.5">Pro Clean Zagreb</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-3">
            <div>
              <input
                type="text"
                placeholder="Korisničko ime"
                value={username}
                onChange={(e) => { setUsername(e.target.value); setError(false); }}
                autoComplete="username"
                autoCapitalize="none"
                className="w-full bg-white/8 border border-white/12 rounded-[14px] px-4 py-3.5 text-white placeholder-white/30 text-[15px] outline-none focus:border-[#3B82F6]/60 focus:bg-white/10 transition-all"
              />
            </div>
            <div>
              <input
                ref={passRef}
                type="password"
                placeholder="Lozinka"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                autoComplete="current-password"
                className="w-full bg-white/8 border border-white/12 rounded-[14px] px-4 py-3.5 text-white placeholder-white/30 text-[15px] outline-none focus:border-[#3B82F6]/60 focus:bg-white/10 transition-all"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center pt-1">
                Pogrešno korisničko ime ili lozinka.
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] active:scale-[0.98] text-white font-medium py-3.5 rounded-[14px] text-[15px] transition-all mt-1 shadow-[0_0_30px_-8px_rgba(59,130,246,0.6)]"
            >
              Prijavi se
            </button>
          </form>

          <button
            onClick={() => router.push("/")}
            className="mt-8 w-full text-center text-white/30 hover:text-white/60 text-sm transition-colors"
          >
            ← Natrag na stranicu
          </button>
        </div>

        <style>{`
          @keyframes lock-shake {
            0%,100% { transform: translateX(0) }
            15%      { transform: translateX(-8px) }
            30%      { transform: translateX(7px) }
            45%      { transform: translateX(-5px) }
            60%      { transform: translateX(4px) }
            75%      { transform: translateX(-2px) }
          }
          input::placeholder { color: rgba(255,255,255,0.28); }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col">
      {/* Top bar */}
      <div className="bg-[#0A0A0A] text-white px-5 py-3 flex items-center justify-between shadow-md border-b border-white/10">
        <button
          onClick={() => { setLoggedIn(false); router.push("/"); }}
          className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
          aria-label="Natrag na početnu"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Početna
        </button>
        <span className="font-semibold text-[13px] tracking-wide">Portal za radnike</span>
        <button
          onClick={() => router.push("/radnici/ponuda")}
          className="inline-flex items-center gap-1.5 text-xs font-medium bg-[#3B82F6] text-white px-3 py-1.5 rounded-full hover:bg-[#2563EB] transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          Ponuda
        </button>
      </div>

      {/* Iframe sa mapom zgrada */}
      <iframe
        src="/radnici-portal/index.html"
        title="Portal za radnike — Mapa zgrada"
        className="flex-1 w-full border-0 bg-white"
        style={{ minHeight: "calc(100vh - 52px)" }}
        allow="geolocation; clipboard-read; clipboard-write"
      />
    </div>
  );
}
