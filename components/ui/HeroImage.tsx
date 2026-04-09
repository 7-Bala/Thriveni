'use client';

import Image from 'next/image';
import React, { ReactNode, useRef, useEffect } from 'react';
import gsap from 'gsap';

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
  const mode = useRef<'forward' | 'pausing-end' | 'reverse' | 'pausing-start'>('forward');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isTransitioning = useRef(false);
  
  const PAUSE_DURATION = 1000; // 1 second

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
    
    // GSAP Context to handle clean scope-killing
    const ctx = gsap.context(() => {});

    const clearExistingTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const startReverse = () => {
      if (!videoRef.current) return;
      mode.current = 'reverse';
      isTransitioning.current = false;
      
      const playhead = { time: video.currentTime };
      
      ctx.add(() => {
        gsap.to(playhead, {
          time: 0,
          duration: video.duration || 5,
          ease: 'power1.inOut',
          onUpdate: () => {
            if (videoRef.current) videoRef.current.currentTime = playhead.time;
          },
          onComplete: () => {
            handleReverseEnd();
          }
        });
      });
    };

    const handleReverseEnd = () => {
      if (!videoRef.current) return;
      mode.current = 'pausing-start';
      isTransitioning.current = true;
      
      clearExistingTimeout();
      timeoutRef.current = setTimeout(() => {
        if (!videoRef.current) return;
        mode.current = 'forward';
        isTransitioning.current = false;
        
        ctx.add(() => {
          gsap.to(video, {
            playbackRate: 1,
            duration: 0.8,
            ease: 'power2.in',
            onStart: () => {
              video.play().catch(() => {});
            }
          });
        });
      }, PAUSE_DURATION);
    };

    const handleForwardEnd = () => {
      // Guard to prevent multiple parallel transition attempts
      if (mode.current !== 'forward' || isTransitioning.current) return;
      
      isTransitioning.current = true;
      mode.current = 'pausing-end';
      
      ctx.add(() => {
        gsap.to(video, {
          playbackRate: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => {
            if (!videoRef.current) return;
            video.pause();
            clearExistingTimeout();
            timeoutRef.current = setTimeout(() => {
              startReverse();
            }, PAUSE_DURATION);
          }
        });
      });
    };

    const checkTime = () => {
      if (mode.current === 'forward' && !isTransitioning.current && video.duration > 0) {
        const timeLeft = video.duration - video.currentTime;
        if (timeLeft < 0.9) { 
          handleForwardEnd();
        }
      }
    };

    video.addEventListener('timeupdate', checkTime);

    // Initial play with catch for autoplay policies
    video.play().catch(() => {
      console.warn("Video autoplay failed, waiting for interaction.");
    });

    return () => {
      video.removeEventListener('timeupdate', checkTime);
      clearExistingTimeout();
      ctx.revert(); // Kills all GSAP tweens tracked in ctx
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
