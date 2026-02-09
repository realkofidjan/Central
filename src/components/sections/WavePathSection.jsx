import { WavePath } from '../ui/wave-path';
import { cn } from '../../lib/utils';

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
          <p className="text-black/80 mt-4 max-w-2xl text-2xl md:text-4xl">
            Connecting businesses across continents. Building the future of unified enterprise management.
          </p>
        </div>
      </div>
    </div>
  );
}
