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
        luxury: {
          bg: '#FAFAF8',
          card: '#FFFFFF',
          champagne: '#F4EFE6',
          sand: '#ECE7DD',
          gold: '#B38F5B',
          'gold-light': '#C5A880',
          'gold-dark': '#8A6B3D',
          onyx: '#111318',
          charcoal: '#222630',
          muted: '#64748B',
          border: 'rgba(0, 0, 0, 0.07)',
          'border-gold': 'rgba(179, 143, 91, 0.35)',
        }
      },
      fontFamily: {
        luxury: ['"Bodoni Moda"', '"Cormorant Garamond"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        italiana: ['Italiana', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'luxury-card': '0 15px 40px -15px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        'luxury-card-hover': '0 25px 60px -18px rgba(179, 143, 91, 0.18), 0 0 0 1px rgba(179, 143, 91, 0.3)',
        'luxury-gold-glow': '0 8px 30px rgba(179, 143, 91, 0.25)',
      },
      backgroundImage: {
        'luxury-shimmer': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(244, 239, 230, 0.6) 100%)',
        'gold-metallic': 'linear-gradient(135deg, #D4AF37 0%, #B38F5B 50%, #8A6B3D 100%)',
        'gold-soft': 'linear-gradient(135deg, #C5A880 0%, #B38F5B 100%)',
      }
    },
  },
  plugins: [],
};
