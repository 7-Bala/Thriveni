'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { MEDIUM_BLUR } from '@/lib/blurPlaceholders';

interface CarViewer360Props {
  images: string[]; // Array of car images at different angles
  carName: string;
}

export default function CarViewer360({ images, carName }: CarViewer360Props) {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const totalFrames = images.length || 24;
  const frameIndex = Math.round((rotation / 360) * totalFrames) % totalFrames;

  // Get image based on frame index
  const displayImage = images.length > 0 ? images[frameIndex] : '/placeholder.png';

  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const dragDelta = e.clientX - dragStart;
    const sensitivity = 1; // Adjust sensitivity of rotation

    setRotation((prev) => {
      const newRotation = prev + dragDelta * sensitivity;
      return ((newRotation % 360) + 360) % 360;
    });

    setDragStart(e.clientX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setRotation((prev) => {
      const direction = e.deltaY > 0 ? 1 : -1;
      const newRotation = prev + direction * 10;
      return ((newRotation % 360) + 360) % 360;
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      handleDragMove(e as any);
    };

    const handleMouseUp = () => {
      handleDragEnd();
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-display font-semibold text-lg text-metal-900 mb-2">360° View</h3>
        <p className="font-body font-light text-metal-500 text-sm">Drag left or right to rotate • Scroll to zoom</p>
      </div>

      {/* Viewer Container */}
      <div
        ref={containerRef}
        className="relative aspect-[16/10] bg-gradient-to-br from-metal-50 to-metal-100 rounded-lg overflow-hidden border border-metal-200 group cursor-grab active:cursor-grabbing"
        onMouseDown={handleDragStart}
        onWheel={handleWheel}
      >
        {/* Car Image */}
        <motion.div
          className="w-full h-full flex items-center justify-center"
          drag="x"
          dragElastic={0.1}
          onDrag={(_, info) => {
            const dragDelta = info.delta.x;
            const sensitivity = 0.5;
            setRotation((prev) => {
              const newRotation = prev + dragDelta * sensitivity;
              return ((newRotation % 360) + 360) % 360;
            });
          }}
        >
          <div className="relative w-full h-full">
            <Image
              ref={imageRef}
              src={displayImage}
              alt={`${carName} ${Math.round(rotation)}°`}
              fill
              sizes="100%"
              className="object-contain p-8"
              placeholder="blur"
              blurDataURL={MEDIUM_BLUR}
              draggable={false}
            />
          </div>
        </motion.div>

        {/* Rotation Indicator Overlay */}
        <motion.div
          className="absolute top-6 right-6 bg-metal-900/80 backdrop-blur-md text-amber-cta px-4 py-2 rounded-lg text-sm font-mono font-bold border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isDragging ? 1 : 0.7 }}
          transition={{ duration: 0.2 }}
        >
          {Math.round(rotation)}°
        </motion.div>

        {/* Drag Instruction */}
        {!isDragging && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="text-center">
              <motion.div
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-4 justify-center text-metal-400"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 19H9M19 15v-6M5 15v-6" />
                </svg>
                <span className="font-body text-sm font-light">DRAG TO ROTATE</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5H15M5 9v6M19 9v6" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Rotation Progress Bar */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-body text-xs text-metal-500 uppercase tracking-widest font-semibold">Rotation Progress</span>
          <span className="font-mono text-sm text-amber-cta font-bold">{frameIndex + 1} / {totalFrames}</span>
        </div>
        <div className="h-2 bg-metal-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-cta to-amber-400"
            initial={{ width: '0%' }}
            animate={{ width: `${(rotation / 360) * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* Quick Navigation Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        {[0, 90, 180, 270].map((angle) => (
          <motion.button
            key={angle}
            onClick={() => setRotation(angle)}
            className={`px-6 py-2 rounded-lg font-body text-sm font-semibold transition-all duration-300 border ${
              Math.abs(rotation - angle) < 45 || Math.abs(rotation - angle) > 315
                ? 'bg-amber-cta text-white border-amber-cta'
                : 'bg-white border-metal-200 text-metal-900 hover:border-amber-cta hover:text-amber-cta'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {angle === 0 && 'Front'}
            {angle === 90 && 'Right'}
            {angle === 180 && 'Rear'}
            {angle === 270 && 'Left'}
          </motion.button>
        ))}
      </div>

      {/* Info Message */}
      <motion.div
        className="p-4 bg-blue-50 border border-blue-200 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="font-body text-sm text-blue-900 font-light">
          💡 Tip: Use your mouse wheel or trackpad to zoom in for a closer view of the {carName}.
        </p>
      </motion.div>
    </div>
  );
}
