import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#F2F4EE',
          100: '#DDE3D3',
          200: '#BAC5A7',
          400: '#7A8F62',
          600: '#4A5C35',
          800: '#2E3A1F',
          900: '#1A2110',
        },
        amber: {
          cta: '#D4920A',
          light: '#F2B228',
          dark: '#9E6C05',
        },
        metal: {
          50: '#F5F4F2',
          100: '#E8E6E1',
          200: '#C9C6BF',
          400: '#888580',
          600: '#4A4844',
          800: '#262420',
          900: '#0F0E0C',
        },
        bg: {
          primary: '#FAFAF8',
          dark: '#0F0E0C',
          section: '#F4F3EF',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'display-2xl': 'clamp(3.5rem, 8vw, 7rem)',
        'display-xl': 'clamp(2.5rem, 5vw, 4.5rem)',
        'display-lg': 'clamp(2rem, 4vw, 3.5rem)',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideInLeft: 'slideInLeft 0.6s ease-out forwards',
        shimmer: 'shimmer 2s infinite linear',
      },
      boxShadow: {
        automotive: '0 2px 40px rgba(15,14,12,0.12)',
      },
    },
  },
  plugins: [],
};
export default config;
