/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          '900': '#0f172a',
          '800': '#1e293b',
          '700': '#334155',
          '600': '#475569',
          '400': '#94a3b8',
          '300': '#cbd5e1',
        },
        blue: {
          '900': '#1e3a8a',
          '500': '#3b82f6',
          '400': '#60a5fa',
        },
        purple: {
          '900': '#581c87',
          '500': '#a855f7',
          '400': '#c084fc',
        },
        pink: {
          '900': '#831843',
          '400': '#ec4899',
        },
        green: {
          '600': '#16a34a',
          '700': '#15803d',
          '400': '#4ade80',
        },
        yellow: {
          '400': '#facc15',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  safelist: [
    'from-slate-900',
    'via-blue-900',
    'to-slate-900',
    'bg-slate-800',
    'bg-slate-800/30',
    'bg-slate-900/50',
    'bg-gradient-to-br',
    'from-blue-900/50',
    'to-purple-900/50',
    'border-blue-700/50',
    'border-purple-700/50',
    'border-pink-700/50',
    'border-slate-700',
    'border-slate-700/30',
    'border-slate-800',
    'text-blue-400',
    'text-purple-400',
    'text-pink-400',
    'text-white',
    'hover:text-blue-400',
  ],
  plugins: [],
}
