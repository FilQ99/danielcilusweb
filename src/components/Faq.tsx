// src/components/Faq.tsx
"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// === Kompletna, strategiczna lista pytań i odpowiedzi ===
const faqItems = [
    { 
      q: "Ile kosztuje strona internetowa?", 
      a: "Koszt strony zależy od jej złożoności i wymaganych funkcjonalności. Każdy projekt wyceniam indywidualnie po wstępnej konsultacji, aby mieć pewność, że oferta idealnie odpowiada Twoim potrzebom i celom biznesowym." 
    },
    { 
      q: "Jak długo trwa realizacja projektu?", 
      a: "Prosta strona-wizytówka to zazwyczaj 1-2 tygodnie od momentu dostarczenia wszystkich materiałów. Bardziej rozbudowane projekty mogą zająć od 3 do 6 tygodni. Zawsze ustalamy realny i transparentny harmonogram na początku współpracy." 
    },
    { 
      q: "Co jeśli nie spodoba mi się projekt graficzny?", 
      a: "Mój proces jest w pełni nastawiony na współpracę. Pracujemy etapami – po każdym z nich (np. makieta, projekt graficzny) masz czas na zgłoszenie uwag. Wprowadzamy poprawki, aż będziesz w 100% zadowolony z efektu przed przejściem do kodowania." 
    },
    { 
      q: "Dlaczego warto zainwestować w stronę 'szytą na miarę'?", 
      a: "Gotowe szablony i kreatory stron oferują ograniczone możliwości, często działają wolno i wyglądają generycznie. Strona 'szyta na miarę' to inwestycja w unikalny design, najwyższą wydajność, bezpieczeństwo i idealne dopasowanie do Twojej marki, co bezpośrednio przekłada się na lepsze wyniki biznesowe." 
    },
    { 
      q: "Czy strona będzie dostosowana do urządzeń mobilnych?", 
      a: "Absolutnie. Stosuję podejście 'Mobile First', co oznacza, że projektowanie zaczynam od wersji na telefon. Gwarantuje to, że Twoja strona będzie wyglądać i działać perfekcyjnie na każdym urządzeniu: smartfonie, tablecie i komputerze." 
    },
    { 
      q: "Czy dbasz o podstawowe SEO?", 
      a: "Tak. Każda strona, którą tworzę, jest zbudowana na solidnym fundamencie technicznym pod SEO. Obejmuje to m.in. semantyczny kod HTML, optymalizację prędkości ładowania, odpowiednią strukturę nagłówków i podstawowe meta tagi." 
    },
    { 
      q: "Czy oferujesz wsparcie po zakończeniu projektu?", 
      a: "Oczywiście. Oferuję pakiety wsparcia technicznego, które obejmują aktualizacje, kopie zapasowe i pomoc w razie problemów. Zależy mi na tym, aby Twoja strona działała bez zarzutu i była bezpieczna przez długi czas." 
    },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Często zadawane <span className="text-accent">pytania</span></h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-bg-primary rounded-lg overflow-hidden transition-colors duration-300 hover:bg-opacity-90">
              <button 
                onClick={() => toggleFaq(index)} 
                className="w-full flex justify-between items-center text-left p-6 font-bold text-lg"
              >
                <span className="pr-4">{item.q}</span>
                <ChevronDown 
                  className={`transform transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-accent' : 'text-text-secondary'}`} 
                />
              </button>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-text-secondary">
                  <p>{item.a}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}