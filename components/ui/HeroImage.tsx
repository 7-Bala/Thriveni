'use client';

import Image from 'next/image';
import React, { ReactNode, useRef, useEffect } from 'react';

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

  useEffect(() => {
    if (!videoSrc || !videoRef.current) return;

    const video = videoRef.current;
    
    video.play().catch(() => {});

    video.loop = false;

    const handleSettle = () => {
      if (!video) return;
      const timeLeft = video.duration - video.currentTime;

      if (timeLeft < 0.8 && timeLeft > 0) {
        try {
          const newRate = Math.max(0.1, timeLeft / 0.8);
          video.playbackRate = newRate;
          
          if (timeLeft < 0.1) {
            video.pause();
          }
        } catch {
          video.pause();
        }
      }
    };

    video.addEventListener('timeupdate', handleSettle);
    return () => video.removeEventListener('timeupdate', handleSettle);
  }, [videoSrc]);

  const videoStyles: React.CSSProperties = {
    objectPosition,
    filter: 'brightness(0.95) contrast(1.05) saturate(1)',
  };

  return (
    <div className={`${isAbsolute ? 'absolute inset-0' : 'relative w-full h-full min-h-[60vh]'} overflow-hidden bg-metal-950`}>

      {videoSrc && (
        <div className="absolute inset-0 w-full h-full animate-cinematic-zoom z-[5]">
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={videoStyles}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}

      {!videoSrc && src && (
        <div className="absolute inset-0 w-full h-full animate-cinematic-zoom z-[5]">
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

      <div
        className="absolute inset-0 z-10"
        style={{ background: getOverlayStyle() }}
      />

      <div className="relative z-20 w-full h-full">
        {children}
      </div>

      <style jsx global>{`
        @keyframes cinematic-zoom {
          0% { transform: scale(1.07); }
          100% { transform: scale(1); }
        }
        .animate-cinematic-zoom {
          animation: cinematic-zoom 22s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
      `}</style>
    </div>
  );
}
