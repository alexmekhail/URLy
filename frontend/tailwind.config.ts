import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'media',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dot-grid':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
      },
      boxShadow: {
        glow: '0 0 40px -12px rgba(255, 255, 255, 0.12)',
        'glow-sm': '0 0 20px -8px rgba(255, 255, 255, 0.15)',
        'amber-glow': '0 1px 3px rgba(0,0,0,0.3), 0 0 32px -8px rgba(245,158,11,0.18)',
        'violet-glow': '0 1px 3px rgba(0,0,0,0.3), 0 0 32px -8px rgba(139,92,246,0.20)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'translateY(10px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.35s ease-out forwards',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.34, 1.20, 0.64, 1) forwards',
      },
    },
  },
  plugins: [],
}

export default config
