'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollProgressBar() {
  const progressRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressRef.current || !glowRef.current) return;

    // Create main progress bar animation
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
      },
    });

    // Create glowing trailing effect
    gsap.to(glowRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.8,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent pointer-events-none">
      {/* Glow trailing effect */}
      <div
        ref={glowRef}
        className="absolute inset-0 origin-left transform-gpu"
        style={{
          background: 'linear-gradient(90deg, rgba(230,180,42,0.3) 0%, rgba(230,180,42,0.1) 100%)',
          filter: 'blur(8px)',
          scaleX: 0,
        }}
      />
      
      {/* Main progress bar */}
      <div
        ref={progressRef}
        className="absolute inset-0 origin-left transform-gpu"
        style={{
          background: 'linear-gradient(90deg, #e6b42a 0%, #d4a520 50%, #e6b42a 100%)',
          boxShadow: '0 0 20px rgba(230, 180, 42, 0.8)',
          scaleX: 0,
        }}
      />
    </div>
  );
}
