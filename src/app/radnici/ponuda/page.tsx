"use client";

import { useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { parsePonuda, enrichWithMapbox, summarizeParsed, type PonudaFill } from "@/lib/ponuda-parser";

const EXAMPLE_CHIPS = [
  "Stubište, Maksimirska 10",
  "Garaža 2 etaže, firma d.o.o.",
  "12 prozora, osoba",
  "Generalno čišćenje, Ilica 25, 800€",
  "Čišćenje nakon izgradnje, Savska cesta 5",
];

export default function PonudaPage() {
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [panelOpen, setPanelOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFill = useCallback(async () => {
    const text = inputText.trim();
    if (!text) {
      setError("Upiši opis posla da bi ispunio ponudu.");
      return;
    }

    setError(null);
    setSummary(null);
    setLoading(true);

    let parsed: PonudaFill = parsePonuda(text);
    parsed = await enrichWithMapbox(parsed);

    setLoading(false);

    iframeRef.current?.contentWindow?.postMessage({ type: "FILL_PONUDA", ...parsed }, "*");
    setSummary(summarizeParsed(parsed));
  }, [inputText]);

  const handleChip = useCallback((chip: string) => {
    setInputText(chip);
    setSummary(null);
    setError(null);
  }, []);

  const handleClose = useCallback(() => {
    setPanelOpen(false);
    setSummary(null);
    setError(null);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        void handleFill();
      }
    },
    [handleFill]
  );

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col">
      {/* Top bar */}
      <div className="bg-[#0A0A0A] text-white px-5 py-3 flex items-center justify-between shadow-md">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Natrag
        </button>
        <span className="font-semibold text-[13px]">Generator ponuda</span>
        <div className="w-12" />
      </div>

      {/* Iframe with ponuda app */}
      <div className="relative flex-1">
        <iframe
          ref={iframeRef}
          src="/ponuda/index.html"
          title="Generator ponuda"
          className="w-full border-0"
          style={{ height: "calc(100vh - 52px)" }}
        />

        {/* Floating AI chat button */}
        {!panelOpen && (
          <button
            onClick={() => setPanelOpen(true)}
            aria-label="Otvori AI asistenta za ponude"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#3B82F6] shadow-lg hover:bg-[#2563EB] active:scale-95 transition-all flex items-center justify-center"
          >
            {/* Chat bubble icon */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <path d="M8 10h.01M12 10h.01M16 10h.01" />
            </svg>
          </button>
        )}

        {/* Slide-in chat panel */}
        {panelOpen && (
          <>
            {/* Backdrop (mobile) */}
            <div
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              onClick={handleClose}
            />

            {/* Panel */}
            <div className="fixed z-50 right-0 bottom-0 md:bottom-6 md:right-6 w-full md:w-[380px] bg-[#111] text-white rounded-t-2xl md:rounded-2xl shadow-2xl flex flex-col"
              style={{ maxHeight: "calc(100vh - 80px)" }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  <span className="font-semibold text-sm">AI Asistent za ponude</span>
                </div>
                <button
                  onClick={handleClose}
                  aria-label="Zatvori panel"
                  className="text-white/50 hover:text-white transition-colors p-1"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Panel body */}
              <div className="flex flex-col gap-3 p-4 overflow-y-auto flex-1">

                {/* Instructions */}
                <p className="text-white/60 text-xs leading-relaxed">
                  Opiši posao slobodnim tekstom na hrvatskom — automatski će ispuniti formu.
                  <br />
                  <span className="text-white/40">Npr: &ldquo;Stambena zgrada, Savska cesta 10, stubište, 400€&rdquo;</span>
                </p>

                {/* Example chips */}
                <div className="flex flex-wrap gap-1.5">
                  {EXAMPLE_CHIPS.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => handleChip(chip)}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-white/8 hover:bg-white/15 border border-white/12 text-white/70 hover:text-white transition-all"
                    >
                      {chip}
                    </button>
                  ))}
                </div>

                {/* Textarea */}
                <textarea
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value);
                    setSummary(null);
                    setError(null);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Npr: Stambena zgrada Maksimirska 10, čišćenje stubišta, 400€..."
                  rows={4}
                  className="w-full bg-[#1a1a1a] border border-white/12 rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/30 resize-none focus:outline-none focus:border-[#3B82F6]/60 transition-colors"
                />

                {/* Error */}
                {error && (
                  <p className="text-red-400 text-xs px-1">{error}</p>
                )}

                {/* Success summary */}
                {summary && (
                  <div className="bg-[#1a2a1a] border border-green-500/25 rounded-xl p-3">
                    <div className="flex items-start gap-2">
                      <svg width="14" height="14" className="mt-0.5 flex-shrink-0 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <p
                        className="text-xs text-white/80 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: summary.replace(/\*\*(.+?)\*\*/g, "<strong class=\"text-white\">$1</strong>"),
                        }}
                      />
                    </div>
                    <p className="text-white/40 text-[10px] mt-2 ml-5">
                      Forma je ispunjena. Provjeri i po potrebi uredi.
                    </p>
                  </div>
                )}
              </div>

              {/* Footer with submit button */}
              <div className="px-4 pb-4 pt-2 flex-shrink-0">
                <button
                  onClick={() => void handleFill()}
                  disabled={loading}
                  className="w-full bg-[#3B82F6] hover:bg-[#2563EB] active:scale-[0.99] disabled:opacity-60 text-white font-semibold text-sm py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="h-3.5 w-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Tražim adresu…
                    </>
                  ) : "Ispuni ponudu"}
                </button>
                <p className="text-center text-white/30 text-[10px] mt-1.5">
                  Ctrl+Enter za brzo slanje
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
