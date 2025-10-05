// src/components/BackgroundAurora.tsx
"use client";

// Ten komponent tworzy dynamiczne, animowane tło "Aurora".
// Jest w 100% oparty na CSS dla maksymalnej wydajności.
export default function BackgroundAurora() {
  return (
    <div
      // Używamy `aria-hidden` aby czytniki ekranu ignorowały ten dekoracyjny element
      aria-hidden="true"
      className="fixed left-0 top-0 -z-10 h-full w-full"
    >
      <div className="aurora-bg" />
    </div>
  );
}