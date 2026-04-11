'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface Color {
  name: string;
  hue: number;
  hex: string;
}

const COLORS: Color[] = [
  { name: 'Pearl Black', hue: 0, hex: '#1a1a1a' },
  { name: 'Silver', hue: 200, hex: '#c0c0c0' },
  { name: 'Midnight Blue', hue: 210, hex: '#001a4d' },
  { name: 'Ruby Red', hue: 0, hex: '#8b0000' },
  { name: 'Sage Green', hue: 120, hex: '#6b8e23' },
  { name: 'Gold', hue: 40, hex: '#ffd700' },
];

interface ColorSwitcherProps {
  imageRef?: React.RefObject<HTMLImageElement>;
  onColorChange?: (color: Color) => void;
}

export default function ColorSwitcher({ imageRef, onColorChange }: ColorSwitcherProps) {
  const [activeColor, setActiveColor] = useState<Color>(COLORS[0]);
  const ringRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleColorChange = (color: Color) => {
    setActiveColor(color);

    if (imageRef?.current) {
      gsap.to(imageRef.current, {
        filter: `hue-rotate(${color.hue}deg) saturate(1.1)`,
        duration: 0.6,
        ease: 'power2.inOut',
      });
    }

    onColorChange?.(color);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-display font-semibold text-lg text-metal-900 mb-4">Available Colors</h3>
        <div className="flex gap-4 flex-wrap">
          {COLORS.map((color, i) => (
            <motion.button
              key={color.name}
              onClick={() => handleColorChange(color)}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Color Swatch */}
              <div
                className="w-14 h-14 rounded-full border-2 shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
                style={{
                  backgroundColor: color.hex,
                  borderColor: activeColor.name === color.name ? 'rgb(230, 180, 42)' : '#e0e0e0',
                }}
              >
                {/* Active Ring Animation */}
                {activeColor.name === color.name && (
                  <motion.div
                    ref={(el) => {
                      ringRefs.current[i] = el;
                    }}
                    className="absolute inset-0 rounded-full border-2 border-amber-cta"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(230, 180, 42, 0.7)',
                        '0 0 0 8px rgba(230, 180, 42, 0)',
                      ],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                )}

                {/* Checkmark for Active */}
                {activeColor.name === color.name && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      className="drop-shadow-lg"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </motion.div>
                )}
              </div>

              {/* Tooltip */}
              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-metal-900 text-white text-[10px] px-3 py-1 rounded-full whitespace-nowrap pointer-events-none font-body font-semibold"
                initial={{ opacity: 0, y: -5 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {color.name}
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Selected Color Info */}
      <motion.div
        key={activeColor.name}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-4 p-4 bg-white border border-metal-200 rounded-lg"
      >
        <div
          className="w-10 h-10 rounded-lg shadow-md"
          style={{ backgroundColor: activeColor.hex }}
        />
        <div>
          <div className="font-body font-semibold text-metal-900 text-sm">Selected Color</div>
          <div className="font-mono text-metal-500 text-[11px]">{activeColor.name}</div>
        </div>
      </motion.div>

      {/* Info Message */}
      <p className="font-body font-light text-metal-500 text-sm">
        Click on any color swatch to visualize how the car looks in that color. Available colors are subject to variant and market availability.
      </p>
    </div>
  );
}
