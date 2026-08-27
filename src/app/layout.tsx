import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Only the italic is ever used — every display line in the comps is italic serif.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500", "600", "700"],
});

const SITE_URL = "https://fusionprodigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FusionPro — Turn More Interest Into Qualified Sales Conversations",
    template: "%s | FusionPro",
  },
  description:
    "Done-for-you growth systems for Canadian B2B & B2C companies. FusionPro plans, builds, and connects the systems behind your growth — positioning, website, CRM, follow-up, automation, and AI workflows.",
  keywords: [
    "growth systems",
    "B2B marketing",
    "CRM automation",
    "sales funnels",
    "Canadian marketing agency",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "FusionPro",
    title: "FusionPro — Turn More Interest Into Qualified Sales Conversations",
    description:
      "One accountable team for positioning, websites, CRM, automation, and AI workflows.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FusionPro — Turn More Interest Into Qualified Sales Conversations",
    description:
      "One accountable team for positioning, websites, CRM, automation, and AI workflows.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans">
        {/* Scroll-reveal starts hidden and is un-hidden by IntersectionObserver.
            Without JS that observer never runs, so opt out of hiding entirely. */}
        <noscript>
          <style>{`[data-reveal="pending"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
