'use client';

import { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * useGSAPOnMount runs GSAP animations within a context that 
 * automatically reverts all animations on unmount.
 */
export const useGSAPOnMount = (callback: (ctx: gsap.Context) => void) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(callback);
    return () => ctx.revert();
  }, [callback]);
};

/**
 * useCountUp handles numeric counter animations when an element 
 * enters the viewport.
 */
export const useCountUp = (target: number, duration: number = 2, trigger: string | Element) => {
  const countRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!countRef.current) return;
    
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.innerText = Math.floor(obj.val).toLocaleString();
        }
      }
    });
  }, [target, duration, trigger]);

  return countRef;
};

/**
 * useParallax applies a vertical transform at a speed multiplier
 */
export const useParallax = (ref: React.RefObject<HTMLElement | null>, speed: number = 0.5) => {
  useEffect(() => {
    if (!ref.current) return;
    
    gsap.to(ref.current, {
      y: (i, el) => (window.innerHeight - el.getBoundingClientRect().top) * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, [ref, speed]);
};

/**
 * useScrub creates a scrubbed ScrollTrigger between two states
 */
export const useScrub = (
  ref: React.RefObject<HTMLElement | null>,
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars,
  triggerConfig: any = {}
) => {
  useEffect(() => {
    if (!ref.current) return;
    
    gsap.fromTo(ref.current, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: ref.current,
        scrub: 1,
        ...triggerConfig,
      },
    });
  }, [ref, fromVars, toVars, triggerConfig]);
};
