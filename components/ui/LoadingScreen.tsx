'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Check if loading screen has been shown this session
    const hasShown = sessionStorage.getItem('loadingScreenShown');
    
    if (!hasShown) {
      setShouldShow(true);
      sessionStorage.setItem('loadingScreenShown', 'true');
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!shouldShow) return;

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) {
          return prev + Math.random() * 30;
        }
        return prev;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [shouldShow]);

  useEffect(() => {
    if (!shouldShow) return;

    // Complete progress and show exit animation
    const timer = setTimeout(() => {
      setProgress(100);
      
      // Delay exit animation
      setTimeout(() => {
        handleExit();
      }, 600);
    }, 3000);

    return () => clearTimeout(timer);
  }, [shouldShow]);

  const handleExit = () => {
    const loadingScreen = document.querySelector('[data-loading-screen]') as HTMLElement;
    if (!loadingScreen) return;

    gsap.to(loadingScreen, {
      duration: 0.8,
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      ease: 'power3.inOut',
      onComplete: () => {
        setIsLoading(false);
      },
    });
  };

  if (!isLoading) {
    return null;
  }

  return (
    <motion.div
      data-loading-screen
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-metal-900 pointer-events-none"
      initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
    >
      {/* Logo Container */}
      <motion.div
        className="mb-16 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <svg
          className="w-32 h-32 mb-4"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Thriveni Logo SVG - simplified version */}
          <motion.text
            x="100"
            y="100"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-4xl font-bold fill-amber-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Thriveni
          </motion.text>
          <motion.circle
            cx="100"
            cy="100"
            r="90"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(230, 180, 42)" />
              <stop offset="100%" stopColor="rgb(180, 140, 20)" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          className="text-sm font-light tracking-widest text-metal-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          LOADING PREMIUM EXPERIENCE
        </motion.div>
      </motion.div>

      {/* Progress Section */}
      <motion.div
        className="w-64 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Progress Bar */}
        <div className="w-full h-1 bg-metal-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-cta to-yellow-500"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ type: 'spring', stiffness: 30, damping: 20 }}
            style={{
              boxShadow: '0 0 20px rgba(230, 180, 42, 0.6)',
            }}
          />
        </div>

        {/* Percentage Counter */}
        <motion.div
          className="text-xs font-light tracking-wider text-amber-cta"
          key={Math.floor(progress)}
        >
          {Math.floor(progress)}%
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-20 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-1 h-1 rounded-full bg-amber-cta"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
