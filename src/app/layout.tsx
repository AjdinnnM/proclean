import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const inter = Inter({
  variable: "--font-v3-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const display = Bricolage_Grotesque({
  variable: "--font-v3-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${site.brand.name} — Premium čišćenje u Zagrebu`,
  description: site.hero.subheading,
  manifest: "/site.webmanifest",
  openGraph: {
    title: `${site.brand.name} — Premium čišćenje u Zagrebu`,
    description: site.hero.subheading,
    locale: "hr_HR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="hr"
      className={`${inter.variable} ${display.variable} antialiased`}
    >
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-85VEGE6K4X" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-85VEGE6K4X');`,
          }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col"
        style={{
          fontFamily: "var(--font-v3-body), system-ui, sans-serif",
          background: "#FAFAF7",
          color: "#0A0A0A",
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
