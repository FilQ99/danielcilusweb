// src/app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import TechStack from "@/components/TechStack"; // <-- NOWY IMPORT
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import TopBar from "@/components/TopBar";
import About from "@/components/About";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Process />
        <Portfolio />
        <Pricing />
        <TechStack /> {/* <-- NOWA SEKCJA */}
        <Faq />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
// Trigger new deployment
// Forcing a fresh Vercel build - final attempt