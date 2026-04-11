'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CursorState = 'default' | 'hover' | 'image' | 'text';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [imageHovered, setImageHovered] = useState(false);
  const rotationAngleRef = useRef(0);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring settings for that "lagging" follow effect
  const springConfig = { stiffness: 100, damping: 25, mass: 0.5 };
  const quickSpring = { stiffness: 250, damping: 30 };

  const dotX = useSpring(mouseX, quickSpring);
  const dotY = useSpring(mouseY, quickSpring);
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Rotate ring on mouse move when hovering images
      if (imageHovered) {
        rotationAngleRef.current += 2;
        if (rotationAngleRef.current >= 360) rotationAngleRef.current = 0;
      }
      
      if (!isVisible) setIsVisible(true);
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for button/link hover
      const isClickable = target.closest('a, button, [role="button"]');
      if (isClickable) {
        setCursorState('hover');
        return;
      }
      
      // Check for image hover
      const isImage = target.closest('img, [data-cursor="image"]');
      if (isImage) {
        setCursorState('image');
        setImageHovered(true);
        rotationAngleRef.current = 0;
        return;
      }
      
      // Check for text hover
      const isText = target.closest('[data-cursor="text"]') || target.tagName === 'P' || target.tagName === 'SPAN' || target.tagName === 'A';
      if (isText && !isClickable) {
        setCursorState('text');
        return;
      }
      
      setCursorState('default');
      setImageHovered(false);
    };

    const onMouseLeave = () => {
      setCursorState('default');
      setImageHovered(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleElementHover);
    window.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      window.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [mouseX, mouseY, isVisible, imageHovered]);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Cursor Dot */}
      <motion.div
        className="absolute rounded-full"
        animate={{
          width: cursorState === 'hover' ? 12 : cursorState === 'image' ? 10 : 8,
          height: cursorState === 'hover' ? 12 : cursorState === 'image' ? 10 : 8,
          backgroundColor: cursorState === 'hover' ? 'rgb(230, 180, 42)' : cursorState === 'image' ? 'rgba(230, 180, 42, 0.6)' : 'rgb(230, 180, 42)',
        }}
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ duration: 0.1 }}
      />
      
      {/* Outer Ring - Hover State */}
      {cursorState === 'hover' && (
        <motion.div
          className="absolute border border-amber-cta rounded-full flex items-center justify-center text-[8px] font-bold text-amber-cta"
          animate={{
            width: 80,
            height: 80,
            opacity: 1,
          }}
          initial={{ width: 40, height: 40, opacity: 0 }}
          exit={{ opacity: 0 }}
          style={{
            x: ringX,
            y: ringY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          transition={{ duration: 0.3 }}
        >
          <svg 
            className="absolute w-full h-full"
            viewBox="0 0 100 100"
          >
            <defs>
              <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
            </defs>
            <text className="text-[10px] font-bold fill-amber-cta" letterSpacing="2">
              <textPath href="#circlePath" startOffset="0%">
                EXPLORE ✦ EXPLORE ✦
              </textPath>
            </text>
          </svg>
        </motion.div>
      )}
      
      {/* Outer Ring - Image Crosshair */}
      {cursorState === 'image' && (
        <motion.div
          className="absolute rounded-full border border-amber-cta"
          animate={{
            width: 60,
            height: 60,
            rotate: rotationAngleRef.current,
            opacity: 0.8,
          }}
          style={{
            x: ringX,
            y: ringY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          transition={{ duration: 0.05 }}
        >
          {/* Crosshair lines */}
          <div className="absolute w-full h-full">
            <div className="absolute top-1/2 left-0 w-full h-px bg-amber-cta opacity-50" style={{ transform: 'translateY(-50%)' }} />
            <div className="absolute top-0 left-1/2 w-px h-full bg-amber-cta opacity-50" style={{ transform: 'translateX(-50%)' }} />
          </div>
        </motion.div>
      )}
      
      {/* Outer Ring - Default/Text State */}
      {(cursorState === 'default' || cursorState === 'text') && (
        <motion.div
          className="absolute border border-metal-400 rounded-full"
          animate={{
            width: cursorState === 'text' ? 48 : 40,
            height: cursorState === 'text' ? 48 : 40,
            opacity: 0.6,
          }}
          style={{
            x: ringX,
            y: ringY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          transition={{ duration: 0.2 }}
        />
      )}
    </div>
  );
}
