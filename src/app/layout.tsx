// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackgroundAurora from "@/components/BackgroundAurora";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-primary",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-secondary",
});

// === PROFESJONALNA KONFIGURACJA METADANYCH ===
export const metadata: Metadata = {
  // --- Podstawowe SEO ---
  title: "Daniel Filus | Senior Web Developer & Freelancer",
  description: "Projektuję i koduję nowoczesne, interaktywne strony internetowe, które przyciągają klientów i realizują cele biznesowe. Zobacz moje portfolio i proces współpracy.",
  keywords: "web developer, freelancer, strony internetowe, Next.js, React, TypeScript, Opole, tworzenie stron",
  
  // --- Autor i Prawa Autorskie ---
  authors: [{ name: "Daniel Filus" }],
  creator: "Daniel Filus",
  publisher: "Daniel Filus",
  
  // --- Ustawienia dla Robotów Wyszukiwarek ---
  robots: {
    index: true, // Pozwól na indeksowanie strony
    follow: true, // Pozwól na śledzenie linków
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // --- Open Graph (dla mediów społecznościowych) ---
  openGraph: {
    title: "Daniel Filus | Senior Web Developer & Freelancer",
    description: "Tworzę interaktywne strony internetowe, które pomagają realizować cele biznesowe.",
    url: "danielfilus.pl", // <-- WAŻNE: Podmień na swoją prawdziwą domenę!
    siteName: "Daniel Filus - Portfolio",
    images: [
      {
        url: "/og-image.png", // <-- Plik musi być w folderze /public
        width: 1200,
        height: 630,
        alt: "Daniel Filus - Senior Web Developer Portfolio",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },

  // --- Twitter Card (dla podglądów na Twitterze) ---
  twitter: {
    card: "summary_large_image",
    title: "Daniel Filus | Senior Web Developer & Freelancer",
    description: "Tworzę interaktywne strony internetowe, które pomagają realizować cele biznesowe.",
    images: ["/og-image.png"], // <-- Używamy tego samego obrazka
  },
  
  // --- Favicon i Ikony ---
  icons: {
    icon: "/favicon.ico", // Plik w /public lub /app
    shortcut: "/favicon-16x16.png", // Plik w /public
    apple: "/apple-touch-icon.png", // Plik w /public
  },
  
  // --- Inne ważne tagi ---
  metadataBase: new URL("danielfilus.pl"), // <-- WAŻNE: Podmień na swoją prawdziwą domenę!
  alternates: {
    canonical: "/", // Link kanoniczny do strony głównej
  },
};
// === KONIEC KONFIGURACJI METADANYCH ===


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="!scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable}`}>
        <ScrollProgressBar />
        <div className="relative bg-bg-primary font-sans text-text-primary overflow-x-hidden">
          <BackgroundAurora />
          {children}
        </div>
      </body>
    </html>
  );
}