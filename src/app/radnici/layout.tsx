// Radnici portal layout — completely separate from main marketing site.
// No Header / Footer from the main site. Mobile-first.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pro Clean · Radnički portal",
  description: "Interni portal za radnike Pro Clean servisa",
  robots: { index: false, follow: false }, // Don't index the worker portal
};

export default function RadniciLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="radnici-shell min-h-screen overflow-x-hidden">
      {children}
    </div>
  );
}
