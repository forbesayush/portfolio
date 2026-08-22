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
          DEFAULT: '#0a0f1d',
          secondary: '#0f172a',
          card: '#111c35',
        },
        accent: {
          DEFAULT: '#e07a5f',
          hover: '#d46b50',
          light: '#f4a261',
          muted: 'rgba(224, 122, 95, 0.12)',
        },
        cyber: {
          cyan: '#38bdf8',
          neon: '#38bdf8',
          amber: '#f59e0b',
          violet: '#818cf8',
          pink: '#e07a5f',
          red: '#e07a5f',
        },
        surface: {
          glass: 'rgba(15, 23, 42, 0.8)',
          'glass-hover': 'rgba(23, 37, 68, 0.9)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-active': 'rgba(56, 189, 248, 0.4)',
        }
      },
      fontFamily: {
        serif: ['"Newsreader"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Newsreader"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'accent': '0 4px 20px -2px rgba(224, 122, 95, 0.25)',
        'subtle': '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.06)',
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
