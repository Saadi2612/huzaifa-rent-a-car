import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

/**
 * Display face. Archivo exposes a real `wdth` axis, which is what lets us
 * squeeze headlines to 75% and stand in for SuisseIntlCond.
 */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://huzaifarentacar.pk"),
  title: {
    default: "Huzaifa — Rent A Car | With Driver & Self Drive in Pakistan",
    template: "%s | Huzaifa — Rent A Car",
  },
  description:
    "Rent a car in Lahore, Islamabad and Karachi with verified drivers or self drive. Fixed written quotes, serviced fleet, free city delivery. Booking on WhatsApp in one tap.",
  keywords: [
    "rent a car Lahore",
    "rent a car Pakistan",
    "self drive car rental Lahore",
    "car with driver Islamabad",
    "airport pickup car rental",
    "wedding car rental Pakistan",
  ],
  openGraph: {
    title: "Huzaifa — Rent A Car",
    description:
      "Verified drivers, serviced cars, written quotes. With-driver and self-drive rentals across Pakistan.",
    type: "website",
    locale: "en_PK",
    siteName: site.fullName,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-[var(--radius-pill)] focus:bg-ink focus:px-5 focus:py-3 focus:text-paper label-ui"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
