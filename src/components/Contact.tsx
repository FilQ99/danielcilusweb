// src/components/Contact.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from 'react';
import { ChevronDown } from "lucide-react";

// Komponent FormField został usunięty na rzecz bezpośredniego użycia <label> z htmlFor
// co jest czystszym i bardziej standardowym podejściem do dostępności.

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data: { [key: string]: any } = {};
    
    // Specjalna obsługa checkboxów
    data['materials'] = formData.getAll('materials');

    formData.forEach((value, key) => {
      if (key !== 'materials') {
        data[key] = value;
      }
    });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Błąd wysyłania formularza:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Wypełnij <span className="text-accent">brief</span></h2>
            <p className="max-w-2xl mx-auto text-text-secondary mt-4">
                Im więcej szczegółów podasz, tym lepiej będę mógł przygotować dla Ciebie ofertę.
            </p>
        </div>
        
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-bg-secondary p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6"
        >
          <div className="md:col-span-2">
            <label htmlFor="name-input" className="mb-2 block font-semibold text-text-secondary">Imię i Nazwisko / Nazwa firmy</label>
            <input type="text" id="name-input" name="name" className="form-input" required disabled={status === 'loading'} />
          </div>

          <div>
            <label htmlFor="email-input" className="mb-2 block font-semibold text-text-secondary">Adres e-mail</label>
            <input type="email" id="email-input" name="email" className="form-input" required disabled={status === 'loading'} />
          </div>

          <div>
            <label htmlFor="phone-input" className="mb-2 block font-semibold text-text-secondary">Numer telefonu (opcjonalnie)</label>
            <input type="tel" id="phone-input" name="phone" className="form-input" disabled={status === 'loading'} />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="project-type-select" className="mb-2 block font-semibold text-text-secondary">Rodzaj projektu, który Cię interesuje</label>
            <div className="relative">
              <select id="project-type-select" name="project_type" className="form-select" required disabled={status === 'loading'}>
                <option>Strona Wizytówka (One Page)</option>
                <option>Strona Firmowa (wielostronicowa)</option>
                <option>Sklep internetowy (e-commerce)</option>
                <option>Aplikacja Webowa / SaaS</option>
                <option>Inny</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary pointer-events-none" />
            </div>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="budget-select" className="mb-2 block font-semibold text-text-secondary">Szacowany budżet</label>
            <div className="relative">
              <select id="budget-select" name="budget" className="form-select" required disabled={status === 'loading'}>
                <option>do 1 000 zł</option>
                <option>1000 - 1500 zł</option>
                <option>1500 - 2000 zł</option>
                <option>powyżej 2 000 zł</option>
                <option>Do ustalenia</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary pointer-events-none" />
            </div>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="inspiration-url-input" className="mb-2 block font-semibold text-text-secondary">Link do strony, która Ci się podoba (opcjonalnie)</label>
            <input type="url" id="inspiration-url-input" name="inspiration_url" className="form-input" placeholder="https://przykladowastrona.pl" disabled={status === 'loading'} />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="inspiration-details-textarea" className="mb-2 block font-semibold text-text-secondary">Co konkretnie podoba Ci się w tej stronie?</label>
            <textarea id="inspiration-details-textarea" name="inspiration_details" rows={3} className="form-textarea" placeholder="Np. układ sekcji, animacje, kolorystyka..." disabled={status === 'loading'}></textarea>
          </div>

          <div className="md:col-span-2">
            <span className="mb-2 font-semibold text-text-secondary block">Posiadane materiały</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Teksty', 'Zdjęcia/Grafiki', 'Logo', 'Domena/Hosting'].map(item => (
                    <label key={item} htmlFor={`checkbox-${item}`} className={`flex items-center space-x-3 bg-bg-primary p-4 rounded-lg cursor-pointer hover:border-accent/50 border-2 border-transparent transition-all ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <input type="checkbox" id={`checkbox-${item}`} name="materials" value={item} className="form-checkbox" disabled={status === 'loading'} />
                        <span className="text-sm text-text-primary">{item}</span>
                    </label>
                ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message-textarea" className="mb-2 block font-semibold text-text-secondary">Dodatkowe informacje o projekcie</label>
            <textarea id="message-textarea" name="message" rows={5} className="form-textarea" placeholder="Czym ma się zajmować Twoja strona, kto jest Twoim klientem docelowym, jakie funkcje są kluczowe?" disabled={status === 'loading'}></textarea>
          </div>
          
          <div className="md:col-span-2 text-right min-h-[48px] flex items-center justify-end">
            {status === 'idle' && (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                className="bg-accent text-bg-primary font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all">
                Wyślij zapytanie
              </motion.button>
            )}
             {status === 'loading' && <p className="text-text-secondary">Wysyłanie...</p>}
             {status === 'success' && <p className="text-accent font-bold">Dziękuję! Wiadomość została wysłana.</p>}
             {status === 'error' && <p className="text-red-500 font-bold">Wystąpił błąd. Spróbuj ponownie lub napisz bezpośrednio.</p>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}