'use client';

import React from 'react';

export default function CarImagePlaceholder() {
  return (
    <div className="w-full h-full bg-metal-900 flex flex-col items-center justify-center p-6 relative overflow-hidden backdrop-blur-md">
      {/* Premium Wireframe Mesh */}
      <div className="absolute inset-0 opacity-[0.03] transition-opacity group-hover:opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      {/* Subtle car outline SVG silhouette */}
      <svg 
        width="64" 
        height="64" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1" 
        className="text-amber-cta opacity-30 mb-4 transition-all group-hover:opacity-60 group-hover:scale-110"
      >
        <path strokeLinecap="square" strokeLinejoin="miter" d="M3 11l2-4h8l2 4h6v6H3v-6zm0 0v-2h4M19 11v-2h-4M5 13h2M17 13h2" />
      </svg>
      
      <span className="text-metal-400 text-[9px] uppercase tracking-[0.3em] font-bold z-10 transition-colors group-hover:text-amber-cta">
        Stock Arriving Soon
      </span>
      
      {/* Decorative metal corner */}
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/5" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/5" />
    </div>
  );
}
