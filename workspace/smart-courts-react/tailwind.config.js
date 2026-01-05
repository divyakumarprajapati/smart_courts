export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        secondary: {
          DEFAULT: '#f97316',
          light: '#fb923c',
        },
        accent: {
          DEFAULT: '#06b6d4',
          purple: '#a855f7',
        },
        dark: {
          bg: '#0a0a0a',
          surface: '#141414',
          card: '#1f1f1f',
          border: '#2a2a2a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'float-rotate': 'float-rotate 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'pulse-glow-warm': 'pulse-glow-warm 3s ease-in-out infinite',
        'gradient': 'gradient-move 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'blob': 'blob 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-rotate': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(16, 185, 129, 0.8)' },
        },
        'pulse-glow-warm': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(249, 115, 22, 0.8)' },
        },
        'gradient-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 60% / 30% 60% 70% 40%' },
          '75%': { borderRadius: '60% 40% 60% 30% / 70% 30% 50% 60%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': `
          radial-gradient(at 40% 20%, rgba(16, 185, 129, 0.15) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(6, 182, 212, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(168, 85, 247, 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 50%, rgba(249, 115, 22, 0.08) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(16, 185, 129, 0.1) 0px, transparent 50%)
        `,
      },
    },
  },
  plugins: [],
}
