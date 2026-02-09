import React, { useRef, useEffect, useCallback } from 'react';
import { cn } from '../../lib/utils';

export function WavePath({ className, ...props }) {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const progressRef = useRef(0);
  const xRef = useRef(0.2);
  const timeRef = useRef(Math.PI / 2);
  const reqIdRef = useRef(null);

  const getWidth = useCallback(() => {
    if (containerRef.current) {
      return containerRef.current.getBoundingClientRect().width;
    }
    return 300;
  }, []);

  const setPath = useCallback((progress) => {
    const width = getWidth();
    if (pathRef.current) {
      pathRef.current.setAttributeNS(
        null,
        'd',
        `M0 100 Q${width * xRef.current} ${100 + progress * 0.6}, ${width} 100`,
      );
    }
  }, [getWidth]);

  useEffect(() => {
    setPath(0);

    const handleResize = () => setPath(progressRef.current);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setPath]);

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqIdRef.current) {
      cancelAnimationFrame(reqIdRef.current);
      timeRef.current = Math.PI / 2;
      progressRef.current = 0;
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    if (pathRef.current) {
      const pathBound = pathRef.current.getBoundingClientRect();
      xRef.current = (clientX - pathBound.left) / pathBound.width;
      progressRef.current += movementY;
      setPath(progressRef.current);
    }
  };

  const animateOut = () => {
    const newProgress = progressRef.current * Math.sin(timeRef.current);
    progressRef.current = lerp(progressRef.current, 0, 0.025);
    timeRef.current += 0.2;
    setPath(newProgress);
    if (Math.abs(progressRef.current) > 0.75) {
      reqIdRef.current = requestAnimationFrame(animateOut);
    } else {
      timeRef.current = Math.PI / 2;
      progressRef.current = 0;
    }
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  return (
    <div ref={containerRef} className={cn('relative h-px w-full', className)} {...props}>
      <div
        onMouseEnter={manageMouseEnter}
        onMouseMove={manageMouseMove}
        onMouseLeave={manageMouseLeave}
        className="relative -top-5 z-10 h-10 w-full hover:-top-[150px] hover:h-[300px]"
      />
      <svg className="absolute -top-[100px] h-[300px] w-full" preserveAspectRatio="none">
        <path ref={pathRef} className="fill-none stroke-current" strokeWidth={2} />
      </svg>
    </div>
  );
}
