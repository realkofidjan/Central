import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const subsidiaries = [
  { name: 'Finance', color: '#6C5CE7' },
  { name: 'Software', color: '#7BFF00' },
  { name: 'Design', color: '#FF6B6B' },
  { name: 'Built Env', color: '#4ECDC4' },
];

function UmbrellaIcon({ style, className }) {
  return (
    <motion.svg
      style={style}
      className={className}
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Umbrella canopy — 3D-ish gradient */}
      <defs>
        <linearGradient id="canopy-grad" x1="90" y1="20" x2="90" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2d2d2d" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="canopy-highlight" x1="50" y1="30" x2="130" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      {/* Canopy shape */}
      <path
        d="M20 95 C20 50 50 20 90 20 C130 20 160 50 160 95 L140 95 C140 80 130 65 120 65 C110 65 105 75 105 85 L95 85 L95 95 L85 95 L85 85 C85 75 80 65 70 65 C60 65 50 75 40 95 Z"
        fill="url(#canopy-grad)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="0.5"
      />
      {/* Highlight overlay */}
      <path
        d="M20 95 C20 50 50 20 90 20 C130 20 160 50 160 95 L140 95 C140 80 130 65 120 65 C110 65 105 75 105 85 L95 85 L95 95 L85 95 L85 85 C85 75 80 65 70 65 C60 65 50 75 40 95 Z"
        fill="url(#canopy-highlight)"
      />
      {/* Handle stem */}
      <line x1="90" y1="85" x2="90" y2="150" stroke="#2d2d2d" strokeWidth="3" strokeLinecap="round" />
      {/* Handle hook */}
      <path
        d="M90 150 C90 162 82 168 74 168"
        stroke="#2d2d2d"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </motion.svg>
  );
}

function LogoPlaceholder({ color, style, className }) {
  return (
    <motion.div
      style={style}
      className={className}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center"
        style={{
          background: color,
          boxShadow: `0 4px 20px ${color}33`,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="white" strokeWidth="1.5" opacity="0.9" />
          <circle cx="12" cy="12" r="3" fill="white" opacity="0.9" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function EcosystemSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Umbrella: rises into view and settles
  const umbrellaY = useTransform(scrollYProgress, [0, 0.3], [120, 0]);
  const umbrellaOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const umbrellaScale = useTransform(scrollYProgress, [0.15, 0.35], [0.85, 1]);

  // Logos: fall into place after umbrella settles (staggered)
  const logosY = subsidiaries.map((_, i) =>
    useTransform(scrollYProgress, [0.25 + i * 0.04, 0.45 + i * 0.04], [-60, 0])
  );
  const logosOpacity = subsidiaries.map((_, i) =>
    useTransform(scrollYProgress, [0.25 + i * 0.04, 0.4 + i * 0.04], [0, 1])
  );

  // Names: fade in after logos
  const namesOpacity = subsidiaries.map((_, i) =>
    useTransform(scrollYProgress, [0.4 + i * 0.04, 0.55 + i * 0.04], [0, 1])
  );
  const namesY = subsidiaries.map((_, i) =>
    useTransform(scrollYProgress, [0.4 + i * 0.04, 0.55 + i * 0.04], [10, 0])
  );

  // Section title
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.1, 0.25], [20, 0]);

  return (
    <section
      ref={sectionRef}
      id="ecosystem-section"
      className="relative w-full py-40 md:py-56 flex flex-col items-center"
      style={{ minHeight: '100vh' }}
    >
      {/* Section label */}
      <motion.p
        className="text-xs tracking-[0.2em] uppercase font-mono text-black/40 mb-20"
        style={{ opacity: titleOpacity, y: titleY }}
      >
        Ecosystem
      </motion.p>

      {/* Umbrella */}
      <motion.div
        className="flex justify-center mb-16"
        style={{
          y: umbrellaY,
          opacity: umbrellaOpacity,
          scale: umbrellaScale,
        }}
      >
        <UmbrellaIcon />
      </motion.div>

      {/* Connecting lines from umbrella to logos */}
      <div className="relative w-full max-w-2xl mx-auto">
        {/* Logo grid */}
        <div className="flex justify-center gap-12 md:gap-20">
          {subsidiaries.map((sub, i) => (
            <div key={sub.name} className="flex flex-col items-center gap-4">
              <LogoPlaceholder
                color={sub.color}
                style={{
                  y: logosY[i],
                  opacity: logosOpacity[i],
                }}
              />
              <motion.span
                className="text-xs font-mono tracking-wider text-black/50 uppercase"
                style={{
                  opacity: namesOpacity[i],
                  y: namesY[i],
                }}
              >
                {sub.name}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
