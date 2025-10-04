// src/components/Testimonials.tsx
"use client";
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

const testimonials = [
  { quote: "Daniel to prawdziwy profesjonalista. Strona, którą dla nas stworzył, przerosła nasze najśmielsze oczekiwania. Szybka, nowoczesna i idealnie dopasowana do naszej marki. Polecam!", author: "Anna Kowalska", company: "CEO, Kreatywna Agencja" },
  { quote: "Współpraca na najwyższym poziomie! Świetny kontakt, terminowość i proaktywne podejście do projektu. Efekt końcowy jest po prostu rewelacyjny.", author: "Piotr Nowak", company: "Właściciel, Nowoczesna Kawiarnia" },
  { quote: "Niezwykła dbałość o detale i zrozumienie potrzeb klienta. Strona jest nie tylko piękna, ale przede wszystkim funkcjonalna i intuicyjna w obsłudze.", author: "Ewa Wiśniewska", company: "Fotograf Ślubny" },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateCurrent = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateCurrent);
    return () => { emblaApi.off("select", updateCurrent) };
  }, [emblaApi, updateCurrent]);

  return (
    <section id="testimonials" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Co mówią <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">klienci</span>?</h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-grow-0 flex-shrink-0 w-full min-w-0">
                <div className="max-w-3xl mx-auto">
                  <Quote className="text-accent mx-auto mb-6 h-12 w-12" />
                  <p className="text-xl md:text-2xl italic text-text-primary mb-6 h-32">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-bold text-text-primary">{testimonial.author}</p>
                  <p className="text-text-secondary">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                selectedIndex === index ? 'bg-accent scale-125' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}