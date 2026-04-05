import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });
}

// Premium Easing Curves (Casted to any with lint disable to avoid strict Framer Motion union type issues)
export const EASING = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expoOut: [0.22, 1, 0.36, 1] as any, 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  circOut: [0.76, 0, 0.24, 1] as any, 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spring: [0.34, 1.56, 0.64, 1] as any, 
};

// Framer Motion Variants
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASING.expoOut },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASING.expoOut },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASING.expoOut },
  },
};

export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASING.spring },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export const clipReveal = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.9, ease: EASING.circOut },
  },
};

// GSAP Helpers
export const wordRollUp = (element: HTMLElement | string) => {
  const target = typeof element === 'string' ? document.querySelectorAll(element) : element;
  return gsap.from(target, {
    y: '100%',
    duration: 0.8,
    stagger: 0.08,
    ease: 'power4.out',
  });
};
