// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ScrollProgressBar from "@/components/ScrollProgressBar";
// Nie potrzebujemy już komponentu BackgroundAurora
// import BackgroundAurora from "@/components/BackgroundAurora"; 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-primary",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  // ... Twoje metadane pozostają bez zmian ...
  title: "Daniel Filus | Senior Web Developer & Freelancer",
  description: "Projektuję i koduję nowoczesne, interaktywne strony internetowe, które przyciągają klientów i realizują cele biznesowe. Zobacz moje portfolio i proces współpracy.",
  // ... reszta metadanych ...
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="!scroll-smooth">
      {/*
        === OSTATECZNA POPRAWKA ===
        Dodajemy klasę `aurora-bg` BEZPOŚREDNIO do elementu <body>.
        To jest najczystsze i najbardziej niezawodne rozwiązanie.
      */}
      <body 
        className={`${poppins.variable} ${inter.variable} bg-bg-primary font-sans text-text-primary relative overflow-x-hidden aurora-bg`}
      >
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}