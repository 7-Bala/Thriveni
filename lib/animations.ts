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

// Enhanced Entrance Reveals
export const letterByLetterReveal = (element: HTMLElement | string, duration = 0.8, stagger = 0.05) => {
  const target = typeof element === 'string' ? document.querySelector(element) : element;
  if (!target) return;
  
  return gsap.from(target, {
    duration,
    stagger,
    y: 20,
    opacity: 0,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: target,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};

export const paragraphReveal = (element: HTMLElement | string, duration = 0.9) => {
  const target = typeof element === 'string' ? document.querySelector(element) : element;
  if (!target) return;
  
  return gsap.from(target, {
    duration,
    opacity: 0,
    filter: 'blur(10px)',
    ease: 'power2.out',
    scrollTrigger: {
      trigger: target,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
};

export const cardScaleStagger = (selector: string, duration = 0.6) => {
  return gsap.from(selector, {
    duration,
    opacity: 0,
    scale: 0.88,
    y: 40,
    stagger: 0.1,
    ease: 'back.out(1.5)',
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};

export const imageClipReveal = (element: HTMLElement | string, duration = 0.9) => {
  const target = typeof element === 'string' ? document.querySelector(element) : element;
  if (!target) return;
  
  return gsap.from(target, {
    duration,
    clipPath: 'inset(100% 0% 0% 0%)',
    ease: 'circ.out',
    scrollTrigger: {
      trigger: target,
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
  });
};

export const countUpNumber = (element: HTMLElement | string, target: number, duration = 2.5) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  
  const obj = { val: 0 };
  return gsap.to(obj, {
    val: target,
    duration,
    ease: 'elastic.out(1, 0.5)',
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    onUpdate: () => {
      el.textContent = Math.floor(obj.val).toLocaleString();
    },
  });
};

export const decorativeLineExpand = (element: HTMLElement | string, duration = 0.8, delay = 0) => {
  const target = typeof element === 'string' ? document.querySelector(element) : element;
  if (!target) return;
  
  return gsap.from(target, {
    duration,
    delay,
    width: 0,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: target.parentElement || target,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
};

// Micro Interactions
export const buttonHoverAnimation = (selector: string) => {
  const buttons = document.querySelectorAll(selector);
  buttons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.04, duration: 0.2, overwrite: 'auto' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.2, overwrite: 'auto' });
    });
    btn.addEventListener('mousedown', () => {
      gsap.to(btn, { scale: 0.96, duration: 0.1, overwrite: 'auto' });
    });
    btn.addEventListener('mouseup', () => {
      gsap.to(btn, { scale: 1.04, duration: 0.1, overwrite: 'auto' });
    });
  });
};

export const boxShadowPulse = (selector: string) => {
  return gsap.to(selector, {
    boxShadow: '0 0 30px rgba(230, 180, 42, 0.8)',
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

export const gradientShift = (selector: string) => {
  return gsap.to(selector, {
    backgroundPosition: '200% center',
    duration: 3,
    repeat: -1,
    ease: 'none',
  });
};

// 3D Tilt with Mouse Tracking
export const apply3DTilt = (selector: string, intensity = 5) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el: Element) => {
    const htmlEl = el as HTMLElement;
    const rect = htmlEl.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const rotateY = (mouseX / (rect.width / 2)) * intensity;
      const rotateX = -(mouseY / (rect.height / 2)) * intensity;
      
      gsap.to(htmlEl, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.3,
        overwrite: 'auto',
      });
    };
    
    const handleMouseLeave = () => {
      gsap.to(htmlEl, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    };
    
    htmlEl.addEventListener('mousemove', handleMouseMove);
    htmlEl.addEventListener('mouseleave', handleMouseLeave);
  });
};

// Particle Field Animation
export const createParticleField = (container: HTMLElement, count = 50) => {
  if (!container) return;
  
  container.innerHTML = '';
  
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: rgb(230, 180, 42);
      border-radius: 50%;
      opacity: ${Math.random() * 0.5 + 0.2};
    `;
    
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    particle.style.left = x + '%';
    particle.style.top = y + '%';
    
    container.appendChild(particle);
    
    gsap.to(particle, {
      y: Math.random() * 100 - 50,
      x: Math.random() * 100 - 50,
      opacity: 0,
      duration: Math.random() * 3 + 2,
      repeat: -1,
      ease: 'sine.inOut',
      delay: Math.random() * 2,
    });
  }
};

// Input Focus Animation
export const inputFocusAnimation = (selector: string) => {
  const inputs = document.querySelectorAll(selector);
  
  inputs.forEach((input) => {
    input.addEventListener('focus', () => {
      gsap.to(input, { borderColor: 'rgb(230, 180, 42)', duration: 0.3 });
      const label = (input as HTMLElement).previousElementSibling;
      if (label) {
        gsap.to(label, { y: -10, opacity: 1, duration: 0.3 });
      }
    });
    
    input.addEventListener('blur', () => {
      if (!(input as HTMLInputElement).value) {
        gsap.to(input, { borderColor: 'rgb(120, 113, 108)', duration: 0.3 });
        const label = (input as HTMLElement).previousElementSibling;
        if (label) {
          gsap.to(label, { y: 0, opacity: 0.6, duration: 0.3 });
        }
      }
    });
  });
};

// Staggered Row Entrance
export const tableRowStagger = (selector: string, duration = 0.5) => {
  return gsap.from(selector, {
    duration,
    opacity: 0,
    y: 20,
    stagger: 0.08,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};
