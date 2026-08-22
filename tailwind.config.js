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
          DEFAULT: '#0e1014',
          secondary: '#15181f',
          card: '#12151b',
        },
        accent: {
          DEFAULT: '#e07a5f',
          hover: '#d46b50',
          light: '#f4a261',
          muted: 'rgba(224, 122, 95, 0.12)',
        },
        cyber: {
          cyan: '#e07a5f',
          neon: '#e07a5f',
          amber: '#f4a261',
          violet: '#9ca3af',
          pink: '#e07a5f',
          red: '#e07a5f',
        },
        surface: {
          glass: 'rgba(18, 21, 27, 0.75)',
          'glass-hover': 'rgba(26, 30, 39, 0.85)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-active': 'rgba(224, 122, 95, 0.4)',
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
