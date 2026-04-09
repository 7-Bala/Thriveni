'use client';

import Image from 'next/image';
import React, { ReactNode, useRef, useEffect, useCallback } from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
  videoSrc?: string;
  overlay?: 'dark-left' | 'dark-center' | 'dark-full' | 'dark-bottom';
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
  // true = A is active/visible, false = B is active/visible
  const activeIsA = useRef(true);
  const isTransitioning = useRef(false);

  const CROSSFADE_DURATION = 600; // ms
  const CROSSFADE_TRIGGER_BEFORE_END = 0.5; // seconds before video end to start crossfade

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

  const doTransition = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    const activeVid  = activeIsA.current ? videoARef.current : videoBRef.current;
    const inactiveVid = activeIsA.current ? videoBRef.current : videoARef.current;

    if (!activeVid || !inactiveVid) return;

    // Reset and prepare the incoming video
    inactiveVid.currentTime = 0;
    inactiveVid.play().catch(() => {});

    // Fade in incoming, fade out outgoing
    inactiveVid.style.transition = `opacity ${CROSSFADE_DURATION}ms ease-in-out`;
    activeVid.style.transition   = `opacity ${CROSSFADE_DURATION}ms ease-in-out`;
    inactiveVid.style.opacity = '1';
    activeVid.style.opacity   = '0';

    // After crossfade completes, pause and reset the now-hidden video
    setTimeout(() => {
      activeVid.pause();
      activeVid.currentTime = 0;
      activeIsA.current = !activeIsA.current;
      isTransitioning.current = false;
    }, CROSSFADE_DURATION);
  }, []);

  useEffect(() => {
    if (!videoSrc) return;

    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB) return;

    // Set initial opacity states
    videoA.style.opacity = '1';
    videoB.style.opacity = '0';

    // Start playback on A
    videoA.play().catch(() => {});

    const handleTimeUpdate = () => {
      const active = activeIsA.current ? videoA : videoB;
      if (!active.duration || isNaN(active.duration)) return;
      const timeLeft = active.duration - active.currentTime;
      if (timeLeft <= CROSSFADE_TRIGGER_BEFORE_END) {
        doTransition();
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
  }, [videoSrc, doTransition]);

  const videoStyles: React.CSSProperties = {
    objectPosition,
    filter: 'brightness(0.95) contrast(1.05) saturate(1)',
    transition: `opacity ${CROSSFADE_DURATION}ms ease-in-out`,
  };

  return (
    <div className={`${isAbsolute ? 'absolute inset-0' : 'relative w-full h-full min-h-[60vh]'} overflow-hidden bg-metal-950`}>

      {videoSrc && (
        <>
          <video
            ref={videoARef}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-[5]"
            style={videoStyles}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <video
            ref={videoBRef}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-[5]"
            style={{ ...videoStyles, opacity: 0 }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </>
      )}

      {/* Image background — all other pages */}
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
