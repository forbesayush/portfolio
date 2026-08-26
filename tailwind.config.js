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
        fintech: {
          bg: '#07080B',
          surface: '#0D0E15',
          elevated: '#131520',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-light': 'rgba(0, 0, 0, 0.08)',
          muted: '#8E95A5',
        },
        brand: {
          blue: '#3B82F6',
          indigo: '#6366F1',
          emerald: '#10B981',
          amber: '#F59E0B',
          cyan: '#06B6D4',
          purple: '#8B5CF6',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'fintech-glow': '0 0 40px -10px rgba(59, 130, 246, 0.25)',
        'emerald-glow': '0 0 40px -10px rgba(16, 185, 129, 0.25)',
        'card-fintech': '0 12px 30px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'card-fintech-hover': '0 20px 40px -12px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.3)',
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'titanium-card': 'linear-gradient(135deg, #1E2230 0%, #11131A 50%, #0A0C10 100%)',
        'holographic': 'linear-gradient(115deg, transparent, rgba(255,255,255,0.08), rgba(99,102,241,0.15), rgba(16,185,129,0.1), transparent)',
      }
    },
  },
  plugins: [],
};
