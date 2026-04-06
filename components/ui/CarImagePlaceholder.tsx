'use client';

import React from 'react';

export default function CarImagePlaceholder() {
  return (
    <div className="w-full h-full bg-metal-800 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Subtle car outline SVG silhouette */}
      <svg 
        width="64" 
        height="64" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1" 
        className="text-metal-600 opacity-20 mb-3"
      >
        <path d="M7 11v-1c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v1m-10 0h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zM5 16h14m-12 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm10 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
      
      <span className="text-metal-500 text-[10px] uppercase tracking-[0.2em] font-bold">
        Image Coming Soon
      </span>
      
      {/* Decorative metal corner */}
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/5" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/5" />
    </div>
  );
}
