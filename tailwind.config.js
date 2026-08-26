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
        dark: {
          bg: '#050608',
          card: '#0B0D12',
          'card-hover': '#11141D',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-orange': 'rgba(249, 115, 22, 0.4)',
        },
        brand: {
          orange: '#F97316',
          'orange-glow': '#FF5500',
          amber: '#F59E0B',
          emerald: '#10B981',
          indigo: '#6366F1',
          cream: '#F4F2EB',
        }
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-orange': '0 0 50px -10px rgba(249, 115, 22, 0.35)',
        'glow-orange-sm': '0 0 20px -5px rgba(249, 115, 22, 0.4)',
        'bento-card': '0 12px 36px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'bento-card-hover': '0 24px 48px -12px rgba(249, 115, 22, 0.2), 0 0 0 1px rgba(249, 115, 22, 0.35)',
      },
      backgroundImage: {
        'grid-orange': 'linear-gradient(to right, rgba(249, 115, 22, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(249, 115, 22, 0.05) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.18) 0%, rgba(249, 115, 22, 0.05) 40%, transparent 70%)',
      }
    },
  },
  plugins: [],
};
