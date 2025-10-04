// src/components/BackgroundAurora.tsx
export default function BackgroundAurora() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(186,221,120,0.1)_0%,rgba(25,26,29,0)_100%)] animate-aurora"></div>
    </div>
  );
}