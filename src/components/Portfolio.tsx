// src/components/Portfolio.tsx
"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const myProjects = [
  {
    title: "DJ Ready - Strona dla mobilnego DJ-a",
    description: "Stworzony od zera, customowy motyw WordPress w pełni edytowalny z panelu klienta. Projekt skupiony na UI/UX i optymalizacji mobilnej.",
    tags: ["WordPress", "Custom Theme", "PHP", "UI/UX"],
    liveUrl: "https://djready.pl",
    // KLUCZOWA ZMIANA: Dwa osobne obrazy w strukturze danych
    imageUrlDesktop: "/dj-ready-desktop.webp", 
    imageUrlMobile: "/dj-ready-mobile.webp"
  }
];

export default function Portfolio() {
  if (myProjects.length === 0) return null;

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Moje <span className="text-accent">realizacje</span></h2>
        
        {myProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="bg-bg-secondary rounded-lg p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Kolumna z tekstem (bez zmian) */}
            <div className="lg:order-last">
              <h3 className="text-3xl font-bold text-text-primary mb-4">{project.title}</h3>
              <p className="text-text-secondary mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-bg-primary text-text-secondary text-sm font-mono py-1 px-3 rounded-full">{tag}</span>
                ))}
              </div>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-accent group">
                Odwiedź stronę
                <ArrowUpRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Kolumna z obrazkiem - w pełni responsywna */}
            <div className="lg:order-first">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block relative rounded-lg overflow-hidden group shadow-lg">
                {/* Obraz dla Mobile - pionowy */}
                <div className="block lg:hidden">
                  <Image
                    src={project.imageUrlMobile}
                    alt={`Podgląd strony ${project.title} na telefonie`}
                    width={900} // Podaj prawdziwe wymiary
                    height={1800} // dla najlepszej optymalizacji
                    className="w-full h-auto"
                  />
                </div>
                {/* Obraz dla Desktop - poziomy */}
                <div className="hidden lg:block">
                  <Image
                    src={project.imageUrlDesktop}
                    alt={`Podgląd strony ${project.title} na komputerze`}
                    width={1600} // Podaj prawdziwe wymiary
                    height={900} // dla najlepszej optymalizacji
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-bold text-xl">Zobacz na żywo</p>
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}