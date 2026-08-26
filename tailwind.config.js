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
        app: {
          canvas: '#08090E',
          window: '#0E1018',
          sidebar: '#0A0C13',
          card: '#121520',
          'card-hover': '#181C2B',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-active': 'rgba(99, 102, 241, 0.4)',
          muted: '#94A3B8',
          subtle: '#64748B',
        },
        studio: {
          indigo: '#6366F1',
          violet: '#8B5CF6',
          blue: '#3B82F6',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#F43F5E',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'app-window': '0 25px 80px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'app-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'app-card-hover': '0 20px 40px -12px rgba(99, 102, 241, 0.2), 0 0 0 1px rgba(99, 102, 241, 0.35)',
        'glow-indigo': '0 0 40px -10px rgba(99, 102, 241, 0.3)',
        'glow-emerald': '0 0 40px -10px rgba(16, 185, 129, 0.3)',
      },
      backgroundImage: {
        'mesh-glow': 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.08) 35%, transparent 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'apple-card': 'linear-gradient(145deg, rgba(22, 27, 42, 0.75) 0%, rgba(12, 15, 24, 0.85) 100%)',
      }
    },
  },
  plugins: [],
};
