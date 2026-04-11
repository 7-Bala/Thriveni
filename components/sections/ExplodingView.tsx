'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface ExplodingViewPart {
  label: string;
  description: string;
  position: { top: string; left: string };
  offset: { x: number; y: number };
}

interface ExplodingViewProps {
  carImage: string;
  carName: string;
}

const PARTS: ExplodingViewPart[] = [
  {
    label: 'Performance Engine',
    description: 'Advanced turbocharged engine with enhanced power delivery',
    position: { top: '30%', left: '45%' },
    offset: { x: 80, y: -100 },
  },
  {
    label: 'Safety Frame',
    description: 'Reinforced structural design with 7 airbags',
    position: { top: '50%', left: '25%' },
    offset: { x: -120, y: 60 },
  },
  {
    label: 'Smart Interior',
    description: '8-inch touchscreen with voice command & navigation',
    position: { top: '50%', left: '70%' },
    offset: { x: 120, y: 60 },
  },
  {
    label: 'Precision Wheels',
    description: '18-inch alloy wheels with performance grip tyres',
    position: { top: '75%', left: '30%' },
    offset: { x: -100, y: 100 },
  },
  {
    label: 'Advanced Suspension',
    description: 'Independent suspension with dynamic damping control',
    position: { top: '75%', left: '70%' },
    offset: { x: 100, y: 100 },
  },
];

export default function ExplodingView({ carImage, carName }: ExplodingViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const carImageRef = useRef<HTMLDivElement>(null);
  const partsRef = useRef<(HTMLDivElement | null)[]>([]);
  const linesRef = useRef<(SVGLineElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Animate parts floating
    partsRef.current.forEach((part, i) => {
      if (!part) return;

      gsap.to(part, {
        y: Math.sin(Date.now() / 1000 + i) * 4,
        duration: 3 + i * 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    // Scroll-triggered exploding animation
    const handleScroll = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));

      partsRef.current.forEach((part, i) => {
        if (!part) return;

        const offset = PARTS[i].offset;
        gsap.to(part, {
          x: offset.x * scrollProgress,
          y: offset.y * scrollProgress,
          duration: 0.1,
          overwrite: 'auto',
        });
      });

      // Update lines
      linesRef.current.forEach((line, i) => {
        if (!line || !partsRef.current[i]) return;

        const part = partsRef.current[i];
        if (!part) return;

        const partRect = part.getBoundingClientRect();
        const carRect = carImageRef.current?.getBoundingClientRect();

        if (!carRect) return;

        const x1 = carRect.left + carRect.width / 2;
        const y1 = carRect.top + carRect.height / 2;
        const x2 = partRect.left + partRect.width / 2;
        const y2 = partRect.top + partRect.height / 2;

        gsap.set(line, {
          attr: {
            x1: x1 - containerRef.current!.getBoundingClientRect().left,
            y1: y1 - containerRef.current!.getBoundingClientRect().top,
            x2: x2 - containerRef.current!.getBoundingClientRect().left,
            y2: y2 - containerRef.current!.getBoundingClientRect().top,
          },
        });
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="space-y-12">
      <div>
        <h3 className="font-display font-semibold text-lg text-metal-900 mb-2">Exploded View</h3>
        <p className="font-body font-light text-metal-500 text-sm">Scroll down to see all components</p>
      </div>

      {/* Main Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[700px] bg-gradient-to-br from-metal-50 to-metal-100 rounded-lg overflow-hidden border border-metal-200 shadow-lg"
      >
        {/* Car Image at Center */}
        <div
          ref={carImageRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3"
        >
          <Image
            src={carImage}
            alt={carName}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* SVG Lines connecting parts */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <defs>
            <style>{`
              line {
                stroke: rgb(230, 180, 42);
                stroke-width: 1;
                opacity: 0.3;
                stroke-dasharray: 5, 5;
              }
            `}</style>
          </defs>
          {PARTS.map((_, i) => (
            <line
              key={i}
              ref={(el) => {
                linesRef.current[i] = el;
              }}
              x1="0"
              y1="0"
              x2="0"
              y2="0"
            />
          ))}
        </svg>

        {/* Parts with Labels */}
        {PARTS.map((part, i) => (
          <motion.div
            key={i}
            ref={(el) => {
              partsRef.current[i] = el;
            }}
            className="absolute group"
            style={{ top: part.position.top, left: part.position.left }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {/* Part Indicator Circle */}
            <div className="relative w-12 h-12 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-amber-cta"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(230, 180, 42, 0.5)',
                    '0 0 0 8px rgba(230, 180, 42, 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
              <div className="absolute inset-0 rounded-full bg-amber-cta flex items-center justify-center">
                <span className="text-white font-bold text-xs">{i + 1}</span>
              </div>
            </div>

            {/* Tooltip on Hover */}
            <motion.div
              className="absolute left-16 top-1/2 -translate-y-1/2 bg-metal-900 text-white rounded-lg p-4 min-w-[220px] shadow-xl border border-amber-cta/50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
              initial={{ x: -10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
            >
              <h4 className="font-display font-semibold text-sm text-amber-cta mb-2">{part.label}</h4>
              <p className="font-body text-xs text-metal-300 leading-relaxed">{part.description}</p>
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-metal-900 border border-amber-cta/50 rounded-full" />
            </motion.div>
          </motion.div>
        ))}

        {/* Center Label */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-y-32 z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="text-center">
            <div className="font-display text-lg font-bold text-metal-400 opacity-50">{carName}</div>
            <div className="font-body text-xs text-metal-400 opacity-40 mt-1">Premium Features</div>
          </div>
        </motion.div>
      </div>

      {/* Parts Legend */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PARTS.map((part, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex gap-4 p-4 bg-white border border-metal-200 rounded-lg hover:border-amber-cta hover:shadow-lg transition-all duration-300"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-cta flex items-center justify-center font-bold text-white text-sm">
              {i + 1}
            </div>
            <div className="flex-1">
              <h4 className="font-display font-semibold text-sm text-metal-900">{part.label}</h4>
              <p className="font-body text-xs text-metal-500 mt-1">{part.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
