// src/components/TopBar.tsx
"use client";
import { Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-accent text-bg-primary text-sm font-bold">
      <a 
        href="tel:+48509964733" 
        className="container mx-auto px-6 py-2 block text-center group" // `block` i `text-center`
      >
        {/* 
          KLUCZOWA ZMIANA:
          Używamy `<span>` z klasami `block` aby wymusić złamanie linii na mobile.
          Na desktopie (`md:`) wracamy do układu w jednej linii (`inline`).
        */}
        <div className="flex items-center justify-center transition-transform group-hover:scale-[1.02]">
          <Phone size={16} className="mr-2 group-hover:animate-pulse" />
          <div>
            <span className="md:inline">Dostępny do nowych projektów - </span>
            <span className="block md:inline">zadzwoń: 509 964 733</span>
          </div>
        </div>
      </a>
    </div>
  );
}