'use client';

import Image from 'next/image';
import React, { ReactNode, useRef, useEffect, useCallback, useState } from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
  videoSrc?: string;
  overlay?: 'dark-left' | 'dark-center' | 'dark-full' | 'dark-bottom' | 'none';
  priority?: boolean;
  children?: ReactNode;
  objectPosition?: string;
  isAbsolute?: boolean;
}

export default function HeroImage({
  src,
  alt,
  videoSrc,
  overlay = 'dark-full',
  priority = false,
  children,
  objectPosition = 'center 40%',
  isAbsolute = false
}: HeroImageProps) {

  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  
  // Internal state for crossfade
  const activeIsA = useRef(true);
  const isTransitioning = useRef(false);

  const CROSSFADE_DURATION = 1000; // ms
  const CROSSFADE_TRIGGER_OFFSET = 1.0; // seconds before end to trigger crossfade

  const getOverlayStyle = () => {
    switch (overlay) {
      case 'dark-left':
        return 'linear-gradient(105deg, rgba(15, 14, 12, 0.72) 0%, rgba(15, 14, 12, 0.65) 25%, rgba(15, 14, 12, 0.45) 50%, rgba(15, 14, 12, 0.15) 75%, rgba(15, 14, 12, 0.05) 100%)';
      case 'dark-center':
        return 'linear-gradient(180deg, rgba(15, 14, 12, 0.75) 0%, rgba(15, 14, 12, 0.60) 40%, rgba(15, 14, 12, 0.75) 100%)';
      case 'dark-full':
        return 'rgba(15, 14, 12, 0.82)';
      case 'dark-bottom':
        return 'linear-gradient(180deg, rgba(15, 14, 12, 0.20) 0%, rgba(15, 14, 12, 0.30) 40%, rgba(15, 14, 12, 0.92) 100%)';
      default:
        return 'none';
    }
  };

  const performCrossfade = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    const currentVid = activeIsA.current ? videoARef.current : videoBRef.current;
    const nextVid    = activeIsA.current ? videoBRef.current : videoARef.current;

    if (!currentVid || !nextVid) return;

    // 1. Reset and play the incoming video
    nextVid.currentTime = 0;
    nextVid.play().catch(() => {});

    // 2. Crossfade opacities
    nextVid.style.transition = `opacity ${CROSSFADE_DURATION}ms ease-in-out`;
    currentVid.style.transition = `opacity ${CROSSFADE_DURATION}ms ease-in-out`;
    
    nextVid.style.opacity = '1';
    currentVid.style.opacity = '0';

    // 3. Swap active state after transition completes
    setTimeout(() => {
      currentVid.pause();
      currentVid.currentTime = 0;
      activeIsA.current = !activeIsA.current;
      isTransitioning.current = false;
    }, CROSSFADE_DURATION);
  }, []);

  useEffect(() => {
    if (!videoSrc) return;

    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB) return;

    // Initial setup
    videoA.style.opacity = '1';
    videoB.style.opacity = '0';
    videoA.play().catch(() => {});

    const handleTimeUpdate = () => {
      const active = activeIsA.current ? videoA : videoB;
      if (!active.duration) return;

      const timeLeft = active.duration - active.currentTime;
      if (timeLeft <= CROSSFADE_TRIGGER_OFFSET) {
        performCrossfade();
      }
    };

    videoA.addEventListener('timeupdate', handleTimeUpdate);
    videoB.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      videoA.removeEventListener('timeupdate', handleTimeUpdate);
      videoB.removeEventListener('timeupdate', handleTimeUpdate);
      videoA.pause();
      videoB.pause();
    };
  }, [videoSrc, performCrossfade]);

  const videoStyles: React.CSSProperties = {
    objectPosition,
    filter: 'brightness(0.95) contrast(1.05) saturate(1)',
  };

  return (
    <div className={`${isAbsolute ? 'absolute inset-0' : 'relative w-full h-full min-h-[60vh]'} overflow-hidden bg-metal-950`}>

      {videoSrc && (
        <div className="absolute inset-0 w-full h-full animate-breath z-[5]">
          <video
            ref={videoARef}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ ...videoStyles, opacity: 1 }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <video
            ref={videoBRef}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ ...videoStyles, opacity: 0 }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Image background — fallback or single image pages */}
      {!videoSrc && src && (
        <div className="absolute inset-0 w-full h-full animate-breath z-[5]">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="100vw"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition,
              filter: 'brightness(0.95) contrast(1.05) saturate(1)'
            }}
          />
        </div>
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: getOverlayStyle() }}
      />

      {/* Content */}
      <div className="relative z-20 w-full h-full">
        {children}
      </div>

      <style jsx global>{`
        @keyframes breath {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }
        .animate-breath {
          animation: breath 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
