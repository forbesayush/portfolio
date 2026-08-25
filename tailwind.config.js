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
        obsidian: {
          950: '#040508',
          900: '#08090E',
          850: '#0D0F17',
          800: '#121520',
          750: '#161B29',
          700: '#1B2134',
          600: '#262E48',
        },
        canvas: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617'
        },
        accent: {
          DEFAULT: '#2563EB', // Light mode cobalt
          dark: '#38BDF8',   // Dark mode cyan
          hover: '#1D4ED8',
          indigo: '#4F46E5',
          emerald: '#059669',
          amber: '#D97706'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace']
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        widest: '0.2em',
        ultra: '0.3em'
      },
      boxShadow: {
        'card-light': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.02)',
        'card-hover': '0 12px 30px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'glow-blue': '0 0 35px -5px rgba(37, 99, 235, 0.25)',
        'glow-cyan': '0 0 35px -5px rgba(56, 189, 248, 0.25)',
      }
    },
  },
  plugins: [],
};
