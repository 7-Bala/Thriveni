'use client';

import Image from 'next/image';
import React, { ReactNode, useRef, useEffect, useState } from 'react';
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
  
  const PAUSE_DURATION = 1000; // 1 second as requested

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
    
    // States: 'forward' | 'pausing-end' | 'reverse' | 'pausing-start'
    let mode: 'forward' | 'pausing-end' | 'reverse' | 'pausing-start' = 'forward';
    let reverseTween: gsap.core.Tween | null = null;

    const startReverse = () => {
      mode = 'reverse';
      const playhead = { time: video.currentTime };
      
      // Use GSAP to 'scrub' the video backwards. 
      // Power1.inOut creates a smooth magnetic feel as requested.
      reverseTween = gsap.to(playhead, {
        time: 0,
        duration: video.duration,
        ease: 'power1.inOut',
        onUpdate: () => {
          video.currentTime = playhead.time;
        },
        onComplete: () => {
          handleReverseEnd();
        }
      });
    };

    const handleReverseEnd = () => {
      mode = 'pausing-start';
      setTimeout(() => {
        if (!videoRef.current) return;
        mode = 'forward';
        
        // Smoothly accelerate back to normal speed
        gsap.to(video, {
          playbackRate: 1,
          duration: 0.8,
          ease: 'power2.in',
          onStart: () => video.play()
        });
      }, PAUSE_DURATION);
    };

    const handleForwardEnd = () => {
      if (mode !== 'forward') return;
      
      mode = 'pausing-end';
      
      // Smoothly decelerate to a stop
      gsap.to(video, {
        playbackRate: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => {
          video.pause();
          setTimeout(() => {
            if (videoRef.current) startReverse();
          }, PAUSE_DURATION);
        }
      });
    };

    // We check for 'near-end' rather than 'ended' for the smooth deceleration
    const checkTime = () => {
      if (mode === 'forward' && video.duration > 0) {
        const timeLeft = video.duration - video.currentTime;
        if (timeLeft < 0.9) { // Trigger deceleration slightly before literal end
          handleForwardEnd();
        }
      }
    };

    video.addEventListener('timeupdate', checkTime);

    // Initial Start
    video.play().catch(() => {});

    return () => {
      video.removeEventListener('timeupdate', checkTime);
      reverseTween?.kill();
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
