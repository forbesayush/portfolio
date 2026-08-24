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
          DEFAULT: '#FAFAF7',
          secondary: '#F0EFEB',
          card: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#6366F1',
          hover: '#4F46E5',
          light: '#818CF8',
          muted: 'rgba(99, 102, 241, 0.08)',
        },
        cyber: {
          cyan: '#EC4899',
          neon: '#10B981',
          amber: '#F59E0B',
          violet: '#8B5CF6',
          pink: '#EC4899',
          red: '#EF4444',
        },
        surface: {
          glass: 'rgba(255, 255, 255, 0.85)',
          'glass-hover': 'rgba(255, 255, 255, 0.95)',
          border: 'rgba(0, 0, 0, 0.06)',
          'border-active': 'rgba(99, 102, 241, 0.4)',
        }
      },
      fontFamily: {
        serif: ['"Newsreader"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Newsreader"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'accent': '0 4px 20px -2px rgba(99, 102, 241, 0.25)',
        'subtle': '0 10px 40px rgba(0, 0, 0, 0.06), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 24px rgba(99, 102, 241, 0.12), 0 8px 32px rgba(0, 0, 0, 0.08)',
        'gradient': '0 4px 20px -2px rgba(99, 102, 241, 0.3), 0 4px 20px -2px rgba(236, 72, 153, 0.15)',
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
