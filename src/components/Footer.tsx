import { site } from "@/content/site";
import { iconByName } from "./icons";
import { Logo } from "./Logo";

export function Footer() {
  const { footer, brand, contact } = site;
  return (
    <footer className="bg-[#FAFAF7] border-t border-black/5 pb-24 md:pb-0">
      <div className="container-page py-12 md:py-16">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 md:gap-8">
          <div className="max-w-sm">
            <a href="/" aria-label={brand.name}>
              <Logo className="text-2xl" />
            </a>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">{footer.description}</p>
            <div className="mt-6 flex items-center gap-3">
              {footer.social.map((s) => {
                const Icon = iconByName[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#0266f0] hover:text-white transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-extrabold text-[#0d1f3c] tracking-wide">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-gray-400 hover:text-[#0266f0] transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-gray-400">{footer.legal}</p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-gray-400">
              {contact.address} · {contact.serviceArea}
            </p>
            <a
              href="/radnici"
              className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 px-3 py-1.5 text-[11px] font-semibold text-gray-500 hover:text-gray-700 transition-colors"
              title="Interni portal za radnike"
            >
              🔒 Radnički portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
