// src/components/Process.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Code, Rocket, Handshake } from "lucide-react";
import { useRef } from "react";

const processSteps = [
    { icon: MessageSquare, title: "1. Konsultacja", description: "Zaczynamy od rozmowy, aby zrozumieć Twoje cele i potrzeby." },
    { icon: Code, title: "2. Projekt i Kod", description: "Tworzę projekt graficzny i przekształcam go w szybki, działający kod." },
    { icon: Rocket, title: "3. Wdrożenie", description: "Uruchamiam Twoją stronę na serwerze i dbam o jej bezbłędne działanie." },
    { icon: Handshake, title: "4. Wsparcie", description: "Po wdrożeniu pozostaję do dyspozycji, oferując wsparcie techniczne." },
];

export default function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });

  const mobileLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const desktopLineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" ref={targetRef} className="py-24 bg-bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-24 text-center">
          Jak wygląda <span className="text-accent">proces</span>?
        </h2>
        
        {/* WIDOK DLA MOBILE */}
        <div className="md:hidden relative max-w-lg mx-auto">
          {/* Linia tła - z-0 */}
          <div className="absolute top-0 left-8 w-0.5 h-full bg-white/10 -translate-x-1/2 z-0"></div>
          {/* Linia animowana - z-0, ale nad tłem */}
          <motion.div 
            style={{ height: mobileLineHeight }}
            className="absolute top-0 left-8 w-0.5 bg-accent -translate-x-1/2 z-0" 
          />
          <div className="grid grid-cols-1 gap-y-16 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative pl-20" // Dodajemy padding dla treści
              >
                {/* Ikona - z-10 i tło, aby przykryć linię */}
                <div className="absolute top-0 left-0 z-10 bg-bg-secondary p-4 rounded-full border-2 border-white/10">
                  <step.icon className="text-accent" size={32} />
                </div>
                {/* Tekst - na tej samej płaszczyźnie co ikona */}
                <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-text-secondary mt-2">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* WIDOK DLA DESKTOP */}
        <div className="hidden md:block relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
          <motion.div
            style={{ width: desktopLineWidth }}
            className="absolute top-1/2 left-0 h-0.5 bg-accent -translate-y-1/2 z-0"
          />
          
          <div className="grid grid-cols-4 gap-x-8 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center"
              >
                {/* KLUCZOWA ZMIANA: Kolejność w DOM + z-index */}
                <div className={`w-full flex flex-col items-center ${index % 2 === 0 ? 'mt-16' : 'mb-16'}`}>
                  {/* Ikona - z-10 i tło */}
                  <div className={`z-10 bg-bg-secondary p-6 rounded-full border-2 border-white/10 ${index % 2 === 0 ? 'order-first' : 'order-last'}`}>
                    <step.icon className="text-accent" size={32} />
                  </div>
                  {/* Pusty div do stworzenia odstępu */}
                  <div className="h-8"></div>
                   {/* Tekst - z-10 i tło */}
                  <div className={`z-10 bg-bg-secondary px-4 text-center ${index % 2 === 0 ? 'order-last' : 'order-first'}`}>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-text-secondary">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}