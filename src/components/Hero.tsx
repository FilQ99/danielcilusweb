// src/components/Hero.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import React from "react";

// Definicje animacji
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

  return (
    <section
      id="hero"
      // Sekcja jest teraz przezroczysta, tło jest pod nią
      className="relative flex h-[100svh] flex-col items-center justify-center overflow-hidden text-center"
    >
      {/* ===== WARSTWA TREŚCI ===== */}
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-[clamp(2.4rem,10vw,4.5rem)] font-bold leading-tight text-text-primary text-balance">
              Cześć, jestem Daniel.
            </h1>
            
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
      </div>

      {/* Wskaźnik scrollowania */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown size={28} className="animate-bounce text-text-secondary" />
      </motion.div>
    </section>
  );
}