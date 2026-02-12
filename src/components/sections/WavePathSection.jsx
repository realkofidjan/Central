import { motion } from 'framer-motion';
import { WavePath } from '../ui/wave-path';
import { cn } from '../../lib/utils';

const heroLines = [
  'A digital holding company operating technology-driven businesses across finance, software, design, and the built environment.'
];
const heroLines2 = [
  'Each subsidiary operates independently — powered by shared systems, strategy, and vision.'
];

export default function WavePathSection() {
  return (
    <div
      className="relative w-full flex flex-col items-center justify-center"
      style={{ height: 'calc(100vh - 60px)', marginTop: '60px' }}
    >
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
          'bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_50%)]',
          'blur-[30px]',
        )}
      />
      <div className="flex w-[70vw] flex-col items-center">
        <WavePath className="mb-10" />
        <div className="flex w-full flex-col items-center text-center">
          <br />
          <div className="mt-4 max-w-4xl">
            {heroLines.map((line, i) => (
              <motion.p
                key={i}
                className="text-black/80 text-2xl md:text-3xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + i * 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {line}
              </motion.p>
            ))}

            <br />
            {heroLines2.map((line, i) => (
              // smaller muted style
              <motion.p
                key={i}
                className="text-black/50 text-xs md:text-sm"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + i * 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
