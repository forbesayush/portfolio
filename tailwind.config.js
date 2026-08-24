/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#F8F9FA',
          secondary: '#F1F3F5',
          card: '#FFFFFF',
        },
        primary: {
          DEFAULT: '#0F172A',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          light: '#3B82F6',
          muted: 'rgba(37, 99, 235, 0.08)',
        },
        editorial: {
          charcoal: '#0F172A',
          slate: '#334155',
          muted: '#64748B',
          border: '#E2E8F0',
          card: '#FFFFFF',
          tag: '#F1F5F9',
        },
        cyber: {
          cyan: '#2563EB',
          neon: '#10B981',
          amber: '#D97706',
          violet: '#7C3AED',
          pink: '#DB2777',
          red: '#DC2626',
        },
        surface: {
          glass: 'rgba(255, 255, 255, 0.9)',
          'glass-hover': 'rgba(255, 255, 255, 0.98)',
          border: '#E2E8F0',
          'border-active': 'rgba(37, 99, 235, 0.4)',
        }
      },
      fontFamily: {
        serif: ['"Newsreader"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Newsreader"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'bento': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'bento-hover': '0 12px 28px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.03), 0 4px 16px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 8px 24px -2px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'accent': '0 4px 14px 0 rgba(37, 99, 235, 0.25)',
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
