// src/components/TypingText.tsx
"use client";
import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.05, // Opóźnienie dla każdej litery
    },
  }),
};

type Props = {
  text: string;
  className?: string;
};

export default function TypingText({ text, className }: Props) {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span key={index} custom={index} variants={textVariants}>
          {char}
        </motion.span>
      ))}
    </span>
  );
}