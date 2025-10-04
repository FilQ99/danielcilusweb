// src/components/Footer.tsx
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-bg-secondary py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-center">
        <p className="text-text-secondary text-sm mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Daniel Filus. Wszelkie prawa zastrzeżone.
        </p>
       
      </div>
    </footer>
  );
}