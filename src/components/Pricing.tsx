// src/components/Pricing.tsx
"use client";
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';

const packages = [
  { name: "Pakiet Startowy", subtitle: "Solidna Wizytówka", features: ["Strona typu 'One Page'", "Indywidualny projekt", "Pełna responsywność (RWD)", "Formularz kontaktowy", "Podstawowa optymalizacja SEO"] },
  { name: "Pakiet Profesjonalny", subtitle: "Narzędzie Biznesowe", features: ["Strona do 5 podstron", "Zaawansowany projekt UI/UX", "System CMS (WordPress)", "Integracja z blogiem", "Szkolenie z obsługi"] },
  { name: "Pakiet Premium", subtitle: "Rozwiązanie Cyfrowe", features: ["Strona 'szyta na miarę'", "Warsztaty strategiczne", "Dedykowane funkcjonalności", "Optymalizacja prędkości", "Wsparcie techniczne"] },
];

export default function Pricing() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Pakiety <span className="text-accent">Współpracy</span></h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => {
            const isSelected = index === selectedIndex;
            return (
              <motion.div
                key={pkg.name}
                className={`relative rounded-lg p-8 flex flex-col text-left transition-all duration-500 ease-out h-full cursor-pointer ${
                  isSelected 
                    ? 'bg-bg-secondary border-2 border-accent shadow-2xl shadow-accent/20' 
                    : 'bg-bg-secondary border-2 border-transparent'
                }`}
                onClick={() => setSelectedIndex(index)}
                animate={{ scale: isSelected ? 1.05 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-2xl font-bold text-accent mb-2">{pkg.name}</h3>
                <p className="text-text-secondary mb-6">{pkg.subtitle}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((item) => (
                    <li key={item} className="flex items-start">
                      <Check className="text-accent mr-3 h-5 w-5 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 mt-auto rounded-lg font-bold transition-colors ${
                  isSelected 
                    ? 'bg-accent text-bg-primary' 
                    : 'border-2 border-accent text-accent hover:bg-accent hover:text-bg-primary'
                }`}>
                  Wybieram
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}