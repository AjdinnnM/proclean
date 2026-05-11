const REVIEWS = [
  {
    quote:
      "Stanari su prvi put nakon dvije godine prestali komentirati nered u stubištu. Pro Clean ekipa dolazi točno, radi temeljito i vidi se razlika već nakon prvog čišćenja.",
    author: "Predsjednica stambene zajednice",
    location: "Maksimir, Zagreb",
  },
  {
    quote:
      "Garaža od 1.200 m² očišćena u jednom danu. Nije bilo prekida za stanare, oznake za parking ostale netaknute. Definitivno preporuka za upravitelje zgrada.",
    author: "Upravitelj zgrade",
    location: "Trešnjevka, Zagreb",
  },
  {
    quote:
      "Nakon renovacije stana smo dobili više od onoga što smo platili. Svaka soba je bila spremna za useljenje — zaista čista, ne samo površno.",
    author: "Privatni klijent",
    location: "Centar, Zagreb",
  },
];

export function TestimonialsV2() {
  return (
    <section id="iskustva" className="bg-[#FAFAF7] py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="max-w-[680px] mb-14 lg:mb-20">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#3F3F3F] font-medium mb-4">
            Što kažu klijenti
          </p>
          <h2
            className="text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.025em] text-[#0A0A0A] font-semibold"
            style={{ fontFamily: "var(--font-v2-display)" }}
          >
            Tihi recenzenti.<br />
            <span className="text-[#3F3F3F] italic font-normal">Glasni rezultati.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((r, i) => (
            <figure
              key={i}
              className="relative bg-white border border-black/5 rounded-[20px] p-7 lg:p-8 flex flex-col"
            >
              <span
                aria-hidden
                className="absolute top-7 right-7 text-[64px] leading-none text-[#0A0A0A]/8 select-none"
                style={{ fontFamily: "var(--font-v2-display)" }}
              >
                “
              </span>
              <blockquote
                className="text-[16px] lg:text-[17px] leading-[1.55] text-[#0A0A0A] flex-1"
                style={{ fontFamily: "var(--font-v2-display)", fontWeight: 500 }}
              >
                {r.quote}
              </blockquote>
              <figcaption className="mt-7 pt-6 border-t border-black/5">
                <p className="text-[14px] font-medium text-[#0A0A0A]">{r.author}</p>
                <p className="text-[12px] text-[#6B7280] mt-0.5">{r.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-[12px] text-[#6B7280] max-w-[640px]">
          Imena klijenata uklonjena radi privatnosti. Originalne recenzije i Google ocjene
          dostupne su na upit.
        </p>
      </div>
    </section>
  );
}
