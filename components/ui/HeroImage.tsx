'use client';

import Image from 'next/image';
import React, { ReactNode, useRef, useEffect, useState } from 'react';

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

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const PAUSE_DURATION = 4000; // 4 seconds

  const getOverlayStyle = () => {
    switch (overlay) {
      case 'dark-left':
        return 'linear-gradient(105deg, rgba(15, 14, 12, 0.95) 0%, rgba(15, 14, 12, 0.88) 30%, rgba(15, 14, 12, 0.55) 55%, rgba(15, 14, 12, 0.15) 80%, rgba(15, 14, 12, 0.05) 100%)';
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

  useEffect(() => {
    if (!videoSrc || !videoRef.current) return;

    const video = videoRef.current;
    let rafId: number;
    let lastTimestamp: number = 0;
    
    // States: 'forward' | 'pause-end' | 'reverse' | 'pause-start'
    let mode: 'forward' | 'pause-end' | 'reverse' | 'pause-start' = 'forward';

    const startReverse = () => {
      mode = 'reverse';
      lastTimestamp = 0;
      rafId = requestAnimationFrame(reverseStep);
    };

    const reverseStep = (timestamp: number) => {
      if (mode !== 'reverse') return;
      
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      if (video.currentTime > 0) {
        // We decrement currentTime manually. 
        // Note: This can be jumpy if the video doesn't have many keyframes.
        video.currentTime = Math.max(0, video.currentTime - deltaTime);
        rafId = requestAnimationFrame(reverseStep);
      } else {
        // Reached the start
        mode = 'pause-start';
        setTimeout(() => {
          if (videoRef.current) {
            mode = 'forward';
            video.play().catch(() => {});
          }
        }, PAUSE_DURATION);
      }
    };

    let endTimeout: NodeJS.Timeout;
    let startTimeout: NodeJS.Timeout;

    const handleForwardEnd = () => {
      if (mode !== 'forward') return;
      
      mode = 'pause-end';
      video.pause();
      
      endTimeout = setTimeout(() => {
        if (videoRef.current) {
          startReverse();
        }
      }, PAUSE_DURATION);
    };

    video.addEventListener('ended', handleForwardEnd);

    // Initial Start
    video.play().catch(() => {});

    return () => {
      video.removeEventListener('ended', handleForwardEnd);
      cancelAnimationFrame(rafId);
      clearTimeout(endTimeout);
      clearTimeout(startTimeout);
    };
  }, [videoSrc]);

  const videoStyles: React.CSSProperties = {
    objectPosition,
    filter: 'brightness(0.95) contrast(1.05) saturate(1)',
  };

  return (
    <div className={`${isAbsolute ? 'absolute inset-0' : 'relative w-full h-full min-h-[60vh]'} overflow-hidden bg-metal-950`}>

      {videoSrc && (
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-[5]"
          style={videoStyles}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Image background — fallback or single image pages */}
      {!videoSrc && src && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover z-[5]"
          style={{
            objectPosition,
            filter: 'brightness(0.95) contrast(1.05) saturate(1)'
          }}
        />
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
    </div>
  );
}
