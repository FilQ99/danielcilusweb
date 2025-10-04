// src/components/About.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Terminal, Target, Handshake } from "lucide-react";
import { useRef } from "react";

// Nowa, bardziej uniwersalna historia rozwoju z dopasowanymi ikonami
const careerSteps = [
    { 
      icon: Lightbulb, 
      title: "Odkrycie Pasji", 
      description: "Wszystko zaczęło się od ciekawości. Godziny spędzone na eksperymentowaniu z kodem przerodziły się w prawdziwą pasję do tworzenia." 
    },
    { 
      icon: Terminal, 
      title: "Praktyka i pierwsze wyzwania", 
      description: "Każdy kolejny projekt był okazją do nauki. Zmieniałem pomysły w działające strony, szlifując swoje umiejętności i zdobywając cenne doświadczenie." 
    },
    { 
      icon: Target, 
      title: "Skupienie na celach biznesowych", 
      description: "Zrozumiałem, że świetny kod to nie wszystko. Dziś skupiam się na tworzeniu rozwiązań, które realnie wspierają cele biznesowe moich klientów." 
    },
    { 
      icon: Handshake, 
      title: "Partnerstwo i rozwój", 
      description: "Traktuję każdy projekt jak partnerstwo. Twoje cele stają się moimi, a wspólny sukces jest najlepszą miarą dobrze wykonanej pracy." 
    },
];

export default function About() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });
  const mobileLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" ref={targetRef} className="py-24 bg-bg-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-24 text-center">
          Moja <span className="text-accent">droga</span>
        </h2>
        
        <div className="relative max-w-lg mx-auto">
          {/* Linia tła - warstwa spodnia */}
          <div className="absolute top-0 left-8 w-0.5 h-full bg-white/10 -translate-x-1/2 z-0"></div>
          {/* Linia animowana - warstwa spodnia */}
          <motion.div 
            style={{ height: mobileLineHeight }}
            className="absolute top-0 left-8 w-0.5 bg-accent -translate-x-1/2 z-0" 
          />
          <div className="grid grid-cols-1 gap-y-16 relative">
            {careerSteps.map((step) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative pl-20"
              >
                {/* Ikona - na wierzchu, z tłem przykrywającym linię */}
                <div className="absolute top-0 left-0 z-10 bg-bg-primary p-4 rounded-full border-2 border-white/10">
                  <step.icon className="text-accent" size={32} />
                </div>
                {/* Treść */}
                <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-text-secondary mt-2">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}