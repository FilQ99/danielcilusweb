// src/components/icons/TechIcons.tsx
// Ten plik gromadzi wszystkie ikony technologii jako komponenty React.
// Dzięki temu nasz główny komponent TechStack będzie czysty i czytelny.

import React from 'react';

const iconProps = {
  className: "h-10 w-10 md:h-12 md:w-12 text-text-secondary group-hover:text-white transition-colors",
};

export const NextjsIcon = () => (
  <svg {...iconProps} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 0c-2.887 0-5.41 1.073-7.393 2.82L16.2 14.413V2.819A8.003 8.003 0 0 0 12 0Zm-.002 24c2.887 0 5.41-1.074 7.393-2.82L4.8 9.587v11.6c.002.001.003.001.004.002a7.95 7.95 0 0 0 7.195 2.812ZM22.53 18.062l-4.06-6.152a.4.4 0 0 0-.68.01L14.402 18.2a.4.4 0 0 0 .34.599h3.388a.4.4 0 0 1 .34.598l-3.23 4.894a.4.4 0 0 0 .68.01l4.27-6.46a.4.4 0 0 0-.16-0.578Z" fill="currentColor"/>
  </svg>
);

export const ReactIcon = () => (
  <svg {...iconProps} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2.05" fill="currentColor"/>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="10" ry="4.5" cx="12" cy="12"/>
      <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)"/>
      <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)"/>
    </g>
  </svg>
);

export const TypescriptIcon = () => (
  <svg {...iconProps} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 0 h21 v21.532 h-21 z m2.08 2.08 v17.372 h16.84 v-17.372 z M12.33 13.25 l -2.08 2.05 v-2.05 h-2.04 V 6.5 h 2.04 v 4.67 l 4.15 -4.67 h 2.81 l-4.82 5.43 l 5.04 5.5 h-2.92 l-3.32 -3.65 Z" fill="currentColor"/>
  </svg>
);

export const TailwindIcon = () => (
  <svg {...iconProps} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-15.75C6.075 2.25 1.5 6.825 1.5 12.75s4.575 10.5 10.5 10.5 10.5-4.575 10.5-10.5S17.925 2.25 12 2.25Z" fill="currentColor"/>
  </svg>
);

export const FramerMotionIcon = () => (
  <svg {...iconProps} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12H0V0h12v12Zm0 0l12 12V12H12Z" fill="currentColor"/>
  </svg>
);

export const WordpressIcon = () => (
  <svg {...iconProps} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12.2c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4Zm7.8-4.2c0-1.2-1-2.1-2.2-2.1s-2.1.9-2.1 2.1c0 1.2 1 2.1 2.2 2.1s2.1-1 2.1-2.1Zm-13.4 0c0-1.2-1-2.1-2.2-2.1-1.2 0-2.1.9-2.1 2.1 0 1.2 1 2.1 2.2 2.1s2.1-1 2.1-2.1Zm13.4 4.5c-.3 0-.5.2-.5.5v5.8c0 2.2-3.1 4-7.2 4s-7.2-1.8-7.2-4V13c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.8c0 2.7 3.5 4.8 8.2 4.8s8.2-2.1 8.2-4.8V13c0-.3-.2-.5-.5-.5Zm-2.7-2.1c-1.2 0-2.1.9-2.1 2.1 0 1.2 1 2.1 2.2 2.1s2.1-.9 2.1-2.1c0-1.1-1-2.1-2.2-2.1Zm-8 0c-1.2 0-2.1.9-2.1 2.1 0 1.2 1 2.1 2.2 2.1s2.1-.9 2.1-2.1c0-1.1-1-2.1-2.2-2.1Z" fill="currentColor"/>
  </svg>
);

export const FigmaIcon = () => (
  <svg {...iconProps} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-3.3 0-6 2.7-6 6v6c0 3.3 2.7 6 6 6s6-2.7 6-6V6c0-3.3-2.7-6-6-6Zm0 15c-1.65 0-3-1.35-3-3V6c0-1.65 1.35-3 3-3s3 1.35 3 3v6c0 1.65-1.35 3-3 3Z" fill="currentColor"/>
    <path d="M6 12c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6Zm0 9c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3Z" fill="currentColor"/>
    <path d="M6 0C2.7 0 0 2.7 0 6s2.7 6 6 6c1.65 0 3-1.35 3-3S7.65 0 6 0Z" fill="currentColor"/>
    <path d="M18 12c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3Z" fill="currentColor"/>
    <path d="M18 0c-1.65 0-3 1.35-3 3v6c0 1.65 1.35 3 3 3s3-1.35 3-3V3c0-1.65-1.35-3-3-3Z" fill="currentColor"/>
  </svg>
);

export const GitIcon = () => (
  <svg {...iconProps} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.36 10.32L12.8.4a1.2 1.2 0 0 0-1.6 0l-3.2 3.2a1.2 1.2 0 0 0 0 1.6l4.4 4.4c.4.4.4 1.2 0 1.6l-3.6 3.6a1.2 1.2 0 0 0 0 1.6l3.2 3.2a1.2 1.2 0 0 0 1.6 0l10.56-10.56a1.2 1.2 0 0 0 0-1.76zM7.12 10.32a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm0 9.28a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zM16.4 5.52a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z" fill="currentColor"/>
  </svg>
);