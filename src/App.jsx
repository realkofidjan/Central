import Navbar from './components/Navbar/Navbar';
import WavePathSection from './components/sections/WavePathSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import { AnimatedGridPattern } from './components/ui/animated-grid-pattern';
import centralLogoFooter from './assets/central_logo_footer.png';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.05}
        duration={2}
        repeatDelay={0.3}
        className="fixed inset-0 h-full w-full z-0"
      />
      <div className="relative z-10">
        <Navbar />
        <WavePathSection />
        <TestimonialsSection />
        <footer className="w-full py-16 flex flex-col items-center gap-5" >
          <h2 className="text-2xl font-semibold" style={{ color: 'rgba(0, 0, 0, 0.85)' }}>Central</h2>
          <p className="text-center text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(0, 0, 0, 0.49)' }}>
            AI-powered resume builder for modern professionals. Create stunning resumes optimized for ATS systems.
          </p>
          <div className="flex items-center gap-5" style={{ color: 'rgba(0, 0, 0, 0.49)' }}>
            <a href="#" aria-label="X" className="hover:opacity-70 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M20 4l-6.768 6.768"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:opacity-70 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
            </a>
            <a href="#" aria-label="Email" className="hover:opacity-70 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
            </a>
          </div>
          <img
            src={centralLogoFooter}
            alt="Central"
            className="w-full h-auto mt-8 px-4"
          />
        </footer>
      </div>
    </div>
  );
}
