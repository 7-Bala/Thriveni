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

/**
 * use3DParallax creates enhanced 3D depth parallax on mouse move
 */
export const use3DParallax = (
  ref: React.RefObject<HTMLElement | null>,
  intensity: number = 10
) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const shiftX = (mouseX / (rect.width / 2)) * intensity;
      const shiftY = (mouseY / (rect.height / 2)) * intensity;
      
      gsap.to(element, {
        x: shiftX,
        y: shiftY,
        duration: 0.4,
        overwrite: 'auto',
      });
    };
    
    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, intensity]);
};

/**
 * useEntranceReveal creates scroll-triggered entrance animations
 */
export const useEntranceReveal = (
  ref: React.RefObject<HTMLElement | null>,
  type: 'fade' | 'scale' | 'slide' | 'clip' = 'fade',
  duration: number = 0.8
) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    
    const fromVars: gsap.TweenVars = {
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      duration,
      ease: 'power2.out',
    };
    
    switch (type) {
      case 'fade':
        gsap.from(element, { ...fromVars, opacity: 0 });
        break;
      case 'scale':
        gsap.from(element, { ...fromVars, opacity: 0, scale: 0.88 });
        break;
      case 'slide':
        gsap.from(element, { ...fromVars, opacity: 0, y: 50 });
        break;
      case 'clip':
        gsap.from(element, { ...fromVars, clipPath: 'inset(100% 0% 0% 0%)' });
        break;
    }
  }, [ref, type, duration]);
};

/**
 * useMagneticButton creates magnetic hover effect on button
 */
export const useMagneticButton = (ref: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const button = ref.current;
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const distance = Math.sqrt(mouseX ** 2 + mouseY ** 2);
      const maxDistance = Math.max(rect.width, rect.height);
      
      if (distance < maxDistance) {
        const force = (1 - distance / maxDistance) * 20;
        gsap.to(button, {
          x: (mouseX / distance) * force || 0,
          y: (mouseY / distance) * force || 0,
          duration: 0.4,
          overwrite: 'auto',
        });
      }
    };
    
    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref]);
};

/**
 * useNumberFlip animates number flip transitions
 */
export const useNumberFlip = (
  ref: React.RefObject<HTMLElement | null>,
  targetValue: number,
  duration: number = 1
) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const obj = { value: parseInt(ref.current.textContent || '0') };
    
    gsap.to(obj, {
      value: targetValue,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = Math.floor(obj.value).toLocaleString();
        }
      },
    });
  }, [ref, targetValue, duration]);
};
