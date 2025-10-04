// src/components/InteractiveGrid.tsx

/*
  =============================================================================
  == KLUCZOWA ZMIANA ==
  =============================================================================
  Zmieniono `className="fixed inset-0 w-full h-full -z-10"` na `className="absolute inset-0 z-0"`.
  
  DLACZEGO?
  - `absolute` zamiast `fixed`: Sprawia, że siatka pozycjonuje się względem najbliższego
    rodzica z `position: relative` (czyli naszej sekcji Hero), a nie względem
    całego okna przeglądarki. Dzięki temu siatka staje się tłem *tylko dla Hero*.
  - `z-0` zamiast `-z-10`: Ustawia siatkę jako bazową warstwę *wewnątrz* sekcji Hero.
    Unikamy w ten sposób problemu chowania się siatki za tłem całej strony (`<body>`).
*/

"use client";

import { motion } from 'framer-motion';
import { useMemo, useState, useEffect } from 'react';

const characters = ['{', '}', '[', ']', '(', ')', '/', '<', '>', '*', '=', '+', '-', ';', ':'];

export default function InteractiveGrid() {
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const updateGridSize = () => {
      const newCols = Math.floor(window.innerWidth / 24);
      const newRows = Math.floor(window.innerHeight / 24);
      setGridSize({ rows: newRows, cols: newCols });
    };
    updateGridSize();
    window.addEventListener('resize', updateGridSize);
    return () => window.removeEventListener('resize', updateGridSize);
  }, []);

  const grid = useMemo(() => {
    if (gridSize.rows === 0 || gridSize.cols === 0) return [];
    return Array.from({ length: gridSize.rows * gridSize.cols }, (_, i) => ({
      id: i,
      char: characters[Math.floor(Math.random() * characters.length)],
    }));
  }, [gridSize]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: -200, y: -200 });
  };

  if (grid.length === 0) return null;

  return (
    <div
      className="absolute inset-0 z-0" // ZMIENIONA LINIA
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="grid w-full h-full"
        style={{ gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)` }}
      >
        {grid.map((item, i) => {
          const row = Math.floor(i / gridSize.cols);
          const col = i % gridSize.cols;
          const distance = Math.sqrt(
            Math.pow(col * 24 + 12 - mousePosition.x, 2) +
            Math.pow(row * 24 + 12 - mousePosition.y, 2)
          );
          const opacity = Math.max(0.02, 0.5 - distance / 400);
          const scale = Math.max(1, 1.2 - distance / 500);

          return (
            <motion.span
              key={item.id}
              className="font-mono text-sm text-center text-text-secondary"
              animate={{ opacity, scale }}
              transition={{ type: 'tween', ease: 'circOut', duration: 0.4 }}
            >
              {item.char}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}