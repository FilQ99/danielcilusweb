// src/components/TechStack.tsx
"use client";
import { motion } from 'framer-motion';
import { NextjsIcon, ReactIcon, TypescriptIcon, TailwindIcon, FramerMotionIcon, WordpressIcon, FigmaIcon, GitIcon } from '@/components/icons/TechIcons';

const techStack = [
    { name: 'Next.js', icon: NextjsIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'TypeScript', icon: TypescriptIcon },
    { name: 'Tailwind CSS', icon: TailwindIcon },
    { name: 'Framer Motion', icon: FramerMotionIcon },
    { name: 'WordPress', icon: WordpressIcon },
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Git', icon: GitIcon },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Mój <span className="text-accent">Arsenał Technologiczny</span>
        </h2>
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group bg-bg-secondary p-6 rounded-lg flex flex-col items-center justify-center gap-4 border-2 border-transparent hover:border-accent transition-all duration-300"
            >
              <tech.icon />
              <p className="font-mono text-sm text-text-secondary group-hover:text-white transition-colors">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}