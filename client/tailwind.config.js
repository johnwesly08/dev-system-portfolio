/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#050505',
        surface: 'rgba(255, 255, 255, 0.05)',
        accent: {
          DEFAULT: '#6366F1', // Electric Indigo
          glow: 'rgba(99, 102, 241, 0.3)',
        },
        slate: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Instrument Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        'bento': '24px',
      },
    },
  },
  plugins: [],
}
