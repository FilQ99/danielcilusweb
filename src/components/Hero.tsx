// src/components/Hero.tsx
"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import InteractiveGrid from "./InteractiveGrid";
import React, { useRef, useState } from "react";

// Definicje animacji (bez zmian)
const typingContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const typingLetter: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  const textToAnimateDesktop = "Projektuję i koduję interaktywne doświadczenia.";
  const staticTextMobile = "Tworzę nowoczesne strony internetowe.";

  const descriptionText = "Specjalizuję się w szybkich, intuicyjnych rozwiązaniach, które realizują cele biznesowe.";

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // === ZMIANA #1: USUNIĘCIE ZMIENNEJ PARALAKSY ===
  // const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]); // TA LINIA ZOSTAŁA USUNIĘTA
  
  // Efekt zanikania tła pozostaje, bo jest elegancki i subtelny
  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
  const [touchPosition, setTouchPosition] = useState({ x: -100, y: -100 });

  const handleTouchMove = (event: React.TouchEvent<HTMLElement>) => {
    const touch = event.touches[0];
    setTouchPosition({ x: touch.clientX, y: touch.clientY });
  };
  
  const handleTouchEnd = () => {
    setTouchPosition({ x: -100, y: -100 });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex h-[100svh] flex-col items-center justify-center overflow-hidden bg-bg-primary text-center"
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Tła (bez zmian) */}
      <motion.div className="absolute inset-0 z-0 hidden lg:block" style={{ opacity: backgroundOpacity }}><div className="absolute left-1/2 top-1/2 h-[120vh] w-[120vh] -translate-x-1/2 -translate-y-1/2"><div className="h-full w-full animate-spin bg-radar-soft-gradient opacity-20 blur-3xl" style={{ animationDuration: '15s' }} /></div><InteractiveGrid /></motion.div>
      <motion.div className="absolute inset-0 z-0 block lg:hidden" style={{ opacity: backgroundOpacity, background: `radial-gradient(circle 250px at ${touchPosition.x}px ${touchPosition.y}px, rgba(186, 221, 120, 0.15), transparent)` }}><InteractiveGrid /></motion.div>

      {/* ===== WARSTWA TREŚCI ===== */}
      <motion.div
        // === ZMIANA #2: USUNIĘCIE STYLU PARALAKSY ===
        // style={{ y: textY }} // TA WŁAŚCIWOŚĆ ZOSTAŁA USUNIĘTA
        className="container relative z-10 mx-auto px-4"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-[clamp(2.4rem,10vw,4.5rem)] font-bold leading-tight text-text-primary text-balance">
              Cześć, jestem Daniel.
            </h1>
            
            {/* Wersja Desktop: długa, z animacją */}
            <motion.h2
              className="mt-2 hidden text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-accent leading-tight text-balance lg:block"
              variants={typingContainer}
            >
              {textToAnimateDesktop.split("").map((char, index) => (
                <motion.span key={index} variants={typingLetter}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>

            {/* Wersja Mobile: krótka, statyczna */}
            <h2 className="mt-2 block text-[clamp(1.4rem,6vw,1.8rem)] font-bold text-accent leading-tight text-balance lg:hidden">
              {staticTextMobile}
            </h2>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-xl text-base text-text-secondary md:text-lg"
          >
            {descriptionText}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <a href="#process" className="inline-block w-full max-w-xs rounded-lg bg-accent px-8 py-3 font-bold text-bg-primary transition-transform duration-300 hover:scale-105 sm:w-auto">
              Zobacz mój proces
            </a>
           
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Wskaźnik scrollowania (bez zmian) */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        style={{ opacity: backgroundOpacity }}
      >
        <ChevronDown size={28} className="animate-bounce text-text-secondary" />
      </motion.div>
    </section>
  );
}