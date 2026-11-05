import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://culinaryodissey.uprock.pro"),
  title: "Mina Al-Bahr | ميناء البحر • Culinary Odyssey by the sea",
  description:
    "Mina Al-Bahr (ميناء البحر): A gastronomic laboratory where haute cuisine serves as a language of dialogue between continents. 5 courses where Egypt, Georgia and the Mediterranean speak the language of fish and salt. Promenade du Soleil, 12 Nice, France.",
  openGraph: {
    title: "Mina Al-Bahr | ميناء البحر • Culinary Odyssey by the sea",
    description:
      "A gastronomic laboratory where haute cuisine serves as a language of dialogue between continents. 5 courses where Egypt, Georgia and the Mediterranean speak the language of fish and salt.",
    url: "https://culinaryodissey.uprock.pro/",
    siteName: "Mina Al-Bahr | ميناء البحر",
    images: [
      {
        url: "/images/hero-cover1.webp",
        width: 1200,
        height: 630,
        alt: "Mina Al-Bahr Culinary Odyssey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#1E242E] text-[#FCF2E1] antialiased selection:bg-[#C79D6B]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
