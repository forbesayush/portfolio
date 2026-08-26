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
        canvas: '#090A0F',
        surface: '#0F1118',
        'surface-elevated': '#151824',
        'border-subtle': 'rgba(255, 255, 255, 0.07)',
        'border-hover': 'rgba(249, 115, 22, 0.35)',
        accent: {
          orange: '#F97316',
          amber: '#FB923C',
          emerald: '#10B981',
        },
        slate: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
          dark: '#334155',
        }
      },
      fontFamily: {
        sans: ['Inter', '"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle-card': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'subtle-card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(249, 115, 22, 0.3)',
        'accent-glow': '0 0 30px -5px rgba(249, 115, 22, 0.15)',
      },
      maxWidth: {
        'portfolio': '1120px',
      }
    },
  },
  plugins: [],
};
