/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#06070a',
          secondary: '#0c0e14',
          tertiary: '#131722',
        },
        cyber: {
          cyan: '#00f0ff',
          neon: '#00ffaa',
          amber: '#ffaa00',
          violet: '#8a2be2',
          pink: '#ff007f',
          red: '#ff3366',
        },
        surface: {
          glass: 'rgba(18, 22, 34, 0.65)',
          'glass-hover': 'rgba(28, 34, 52, 0.8)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-active': 'rgba(0, 240, 255, 0.4)',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 30px -5px rgba(0, 240, 255, 0.3)',
        'glow-amber': '0 0 30px -5px rgba(255, 170, 0, 0.3)',
        'glow-neon': '0 0 30px -5px rgba(0, 255, 170, 0.3)',
        'spatial': '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'radar': 'radar 3s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
