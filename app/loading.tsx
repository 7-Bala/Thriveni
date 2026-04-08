'use client';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen bg-metal-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <motion.svg
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="19 6 110 110" fill="none"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M74.3201 21.4302L20.5801 102.05L74.3201 87.7702L128.07 102.03L74.3201 21.4302Z" fill="#274185"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M74.3403 26.8501C73.9303 27.4701 50.0303 63.3601 50.0303 63.3601L74.3403 56.4401L98.7303 63.3801L74.3403 26.8501Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M74.3401 32.5498L57.0801 58.5998L74.3401 52.9298L91.8201 58.6098L74.3401 32.5498Z" fill="#274185"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M76.62 74.5502V60.2402L95.5 65.6302C96.33 65.8002 96.95 66.6402 96.95 66.6402L113.72 91.6602L74.33 81.1502L35.21 91.6102L51.77 66.8902C52.74 65.6402 54.15 65.3102 54.15 65.3102L72.05 60.2202V74.5302H76.61" fill="white"/>
        </motion.svg>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="font-display text-sm text-white tracking-[0.5em] uppercase">Thriveni Cars</span>
          <div className="w-32 h-[1px] bg-metal-700 overflow-hidden">
            <motion.div
              className="h-full bg-amber-cta origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
