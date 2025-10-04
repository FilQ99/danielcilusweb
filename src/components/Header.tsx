// src/components/Header.tsx
"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Proces", href: "#process" },
  { name: "Współpraca", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Kontakt", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 10); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header /* ...reszta kodu bez zmian... */ >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold text-text-primary">Daniel Filus</a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-text-secondary hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
        </nav>
        <a href="#pricing" className="hidden md:inline-block bg-accent text-bg-primary font-bold py-2 px-6 rounded-lg hover:bg-opacity-80 transition-all">
          Zacznijmy projekt
        </a>
      </div>
    </motion.header>
  );
}