'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { MEDIUM_BLUR } from '@/lib/blurPlaceholders';

interface CarouselItem {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  fuel?: string;
  transmission?: string;
}

interface Carousel3DProps {
  items: CarouselItem[];
  autoRotate?: boolean;
  autoRotateDelay?: number;
}

export default function Carousel3D({ items, autoRotate = true, autoRotateDelay = 4000 }: Carousel3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef(0);
  const dragThresholdRef = useRef(50);
  const autoRotateTimeoutRef = useRef<NodeJS.Timeout>();

  if (!items.length) return null;

  const totalItems = items.length;
  const cardWidth = 280;
  const gap = 20;
  const visibleCards = 3;

  const updateCarousel = (index: number) => {
    const normalizedIndex = ((index % totalItems) + totalItems) % totalItems;
    setActiveIndex(normalizedIndex);

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const position = ((i - normalizedIndex + totalItems) % totalItems);
      let scale = 0.8;
      let opacity = 0.5;
      let zIndex = 10;
      let rotateY = 20;

      if (position === 0) {
        scale = 1;
        opacity = 1;
        zIndex = 30;
        rotateY = 0;
      } else if (position === 1) {
        scale = 0.88;
        opacity = 0.7;
        zIndex = 20;
        rotateY = -15;
      } else if (position === totalItems - 1) {
        scale = 0.88;
        opacity = 0.7;
        zIndex = 20;
        rotateY = 15;
      }

      gsap.to(card, {
        scale,
        opacity,
        rotateY,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto',
      });

      card.style.zIndex = String(zIndex);
    });
  };

  useEffect(() => {
    updateCarousel(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    if (!autoRotate) return;

    const startAutoRotate = () => {
      autoRotateTimeoutRef.current = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % totalItems);
        startAutoRotate();
      }, autoRotateDelay);
    };

    startAutoRotate();

    return () => {
      if (autoRotateTimeoutRef.current) {
        clearTimeout(autoRotateTimeoutRef.current);
      }
    };
  }, [autoRotate, autoRotateDelay, totalItems]);

  const handlePrev = () => {
    if (autoRotateTimeoutRef.current) clearTimeout(autoRotateTimeoutRef.current);
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    if (autoRotateTimeoutRef.current) clearTimeout(autoRotateTimeoutRef.current);
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = e.clientX;
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const dragDelta = e.clientX - dragStartRef.current;

    if (Math.abs(dragDelta) > dragThresholdRef.current) {
      if (dragDelta > 0) {
        handlePrev();
      } else {
        handleNext();
      }
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full py-8">
      <div
        ref={containerRef}
        className="relative flex items-center justify-center h-[450px] perspective cursor-grab active:cursor-grabbing select-none"
        style={{ perspective: '1200px' }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {/* Cards Container */}
        <div className="relative w-full h-full">
          {items.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
              style={{
                width: `${cardWidth}px`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative group overflow-hidden rounded-lg border border-metal-200 bg-white shadow-lg hover:shadow-2xl transition-shadow">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-metal-100">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.brand} ${item.name}`}
                      fill
                      sizes="300px"
                      placeholder="blur"
                      blurDataURL={MEDIUM_BLUR}
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      priority={i < 3}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-metal-200 to-metal-300 flex items-center justify-center">
                      <span className="text-metal-400 text-sm">Image</span>
                    </div>
                  )}
                  
                  {/* Ken Burns Zoom Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-3">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-olive-600 mb-1">{item.brand}</div>
                    <h3 className="font-display font-semibold text-lg text-metal-900 line-clamp-1">{item.name}</h3>
                  </div>

                  <div className="flex items-end justify-between mb-4 pt-3 border-t border-metal-100">
                    <div className="font-mono font-bold text-xl text-metal-900">{item.price}</div>
                  </div>

                  {(item.fuel || item.transmission) && (
                    <div className="flex gap-3 text-[10px] font-body text-metal-500">
                      {item.fuel && <span>{item.fuel}</span>}
                      {item.fuel && item.transmission && <span className="text-metal-300">·</span>}
                      {item.transmission && <span>{item.transmission}</span>}
                    </div>
                  )}

                  <button className="mt-4 w-full py-2 px-4 bg-amber-cta text-white font-body font-semibold text-xs uppercase tracking-wider hover:bg-amber-600 transition-colors rounded">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-12">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full border border-metal-300 hover:border-amber-cta hover:bg-amber-cta hover:text-white transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="group-hover:translate-x-0.5 transition-transform"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex
                  ? 'bg-amber-cta w-3 h-3'
                  : 'bg-metal-300 w-2 h-2 hover:bg-metal-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 rounded-full border border-metal-300 hover:border-amber-cta hover:bg-amber-cta hover:text-white transition-all duration-300 group"
          aria-label="Next slide"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="group-hover:-translate-x-0.5 transition-transform"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Drag Instruction */}
      <div className="text-center mt-6 text-metal-400 text-[11px] uppercase tracking-widest font-light">
        Drag to explore · Click dots to navigate
      </div>
    </div>
  );
}
