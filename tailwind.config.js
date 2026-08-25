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
        charcoal: {
          950: '#08090A', // Ultra-clean deep dark background
          900: '#0E1015', // Primary card surface
          850: '#14171F', // Elevated card surface
          800: '#1C202B', // Hover/Border surface
          750: '#252B3A',
          700: '#323A4E',
        },
        obsidian: {
          950: '#08090A',
          900: '#0E1015',
          850: '#14171F',
          800: '#1C202B',
          750: '#252B3A',
        },
        canvas: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#09090B'
        },
        linear: {
          brand: '#5E6AD2',
          hover: '#6875E8',
          accent: '#828FFF',
          subtle: '#2E335B',
        },
        accent: {
          DEFAULT: '#FF5B37', // Marketing Coral default
          coral: '#FF5B37',
          rose: '#F43F5E',
          purple: '#8B5CF6',
          indigo: '#5E6AD2',
          cyan: '#06B6D4',
          emerald: '#10B981',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Inter"', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'monospace']
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
        tight: '-0.015em',
        widest: '0.18em',
        ultra: '0.25em'
      },
      boxShadow: {
        'card-light': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'card-dark': '0 0 0 1px rgba(255, 255, 255, 0.06), 0 12px 32px -4px rgba(0, 0, 0, 0.6)',
        'glow-coral': '0 0 30px -5px rgba(255, 91, 55, 0.35)',
        'glow-violet': '0 0 30px -5px rgba(139, 92, 246, 0.35)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.35)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.35)',
        'inner-bevel': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'inner-bevel-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.9)'
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
};
