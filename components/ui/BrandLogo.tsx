'use client';

import React from 'react';

interface BrandLogoProps {
  brand: 'arena' | 'nexa' | 'honda' | 're' | 'commercial';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark' | 'olive';
  className?: string;
}

export default function BrandLogo({ 
  brand, 
  size = 'md', 
  variant = 'dark',
  className = ''
}: BrandLogoProps) {
  
  const getDimensions = () => {
    switch (size) {
      case 'sm': return { width: 80, height: 32 };
      case 'lg': return { width: 160, height: 64 };
      default: return { width: 120, height: 48 };
    }
  };

  const { width, height } = getDimensions();
  
  // Custom font rendering workaround for SVG text
  const textStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: '700'
  } as React.CSSProperties;

  const renderLogo = () => {
    switch (brand) {
      case 'arena':
        return (
          <svg viewBox="0 0 120 48" width={width} height={height} className={className}>
            <rect width="120" height="48" rx="2" fill={variant === 'light' ? '#F2F4EE' : '#2E3A1F'}/>
            <text x="60" y="22" textAnchor="middle" fontSize="9" letterSpacing="4" fill={variant === 'light' ? '#4A5C35' : '#BAC5A7'} style={{...textStyle, fontWeight: '600'}}>MARUTI</text>
            <text x="60" y="38" textAnchor="middle" fontSize="13" letterSpacing="3" fill={variant === 'light' ? '#2E3A1F' : '#F2F4EE'} style={textStyle}>ARENA</text>
          </svg>
        );
      case 'nexa':
        // NEXA is premium/dark, so it always uses the dark variant Regardless of prop
        return (
          <svg viewBox="0 0 120 48" width={width} height={height} className={className}>
            <rect width="120" height="48" rx="2" fill="#0F0E0C"/>
            <text x="60" y="32" textAnchor="middle" fontSize="20" letterSpacing="8" fill="#F5F4F2" style={{...textStyle, fontWeight: '500'}}>NEXA</text>
            <line x1="20" y1="40" x2="100" y2="40" stroke="#D4920A" strokeWidth="1.5"/>
          </svg>
        );
      case 'honda':
        return (
          <svg viewBox="0 0 120 48" width={width} height={height} className={className}>
            <rect width="120" height="48" rx="2" fill={variant === 'light' ? '#F5F4F2' : '#262420'}/>
            <text x="60" y="32" textAnchor="middle" fontSize="16" letterSpacing="5" fill={variant === 'light' ? '#262420' : '#E8E6E1'} style={{...textStyle, fontWeight: '600'}}>HONDA</text>
          </svg>
        );
      case 're':
        return (
          <svg viewBox="0 0 120 48" width={width} height={height} className={className}>
            <rect width="120" height="48" rx="2" fill={variant === 'light' ? '#2E3A1F' : '#1A2110'}/>
            <text x="60" y="20" textAnchor="middle" fontSize="7" letterSpacing="3" fill="#BAC5A7" style={{...textStyle, fontWeight: '500'}}>ROYAL</text>
            <text x="60" y="36" textAnchor="middle" fontSize="11" letterSpacing="2" fill="#F2F4EE" style={textStyle}>ENFIELD</text>
            <line x1="30" y1="26" x2="90" y2="26" stroke="#4A5C35" strokeWidth="0.75"/>
          </svg>
        );
      case 'commercial':
        return (
          <svg viewBox="0 0 120 48" width={width} height={height} className={className}>
            <rect width="120" height="48" rx="2" fill={variant === 'light' ? '#E8E6E1' : '#262420'}/>
            <text x="60" y="20" textAnchor="middle" fontSize="8" letterSpacing="2" fill={variant === 'light' ? '#4A4844' : '#888580'} style={{...textStyle, fontWeight: '500'}}>THRIVENI</text>
            <text x="60" y="37" textAnchor="middle" fontSize="11" letterSpacing="2" fill={variant === 'light' ? '#0F0E0C' : '#F5F4F2'} style={textStyle}>COMMERCIAL</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return <>{renderLogo()}</>;
}
